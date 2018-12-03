const cheerio = require('cheerio')
const fs = require('fs')
const { promisify } = require('util')
const config = require('./config').default
const fetch = require('node-fetch')
const querystring = require('querystring');
const cookie = require('cookie');
const { URLSearchParams } = require('url');

// const readFile = promisify(fs.readFile)

const urlRoot = 'https://pa.manchester.gov.uk'

async function scrapeManchester() {

  // 1. Get latest week
  const searchForm = await fetch(`${urlRoot}/online-applications/search.do?action=weeklyList&searchType=Application`, {
    headers: {
      'User-Agent': config.userAgent,
    }
  })

  const searchFormText = await searchForm.text()
  const $searchForm = cheerio.load(searchFormText)
  const latestDate = $searchForm('select#week option').first().attr('value')
  const cookies = cookie.parse(searchForm.headers.get('set-cookie'))
  console.log(latestDate, cookies)

  // 2. Get page 1
  const params = new URLSearchParams();

  params.append('searchCriteria.ward', '');
  params.append('week', latestDate);
  params.append('dateType', 'DC_Validated');
  params.append('searchType', 'Application');

  const firstPage = await fetch(`${urlRoot}${$searchForm('form#weeklyListForm').attr('action')}`, {
    method: 'POST',
    headers: {
      'User-Agent': config.userAgent,
      'Cookie': cookie.serialize('JSESSIONID', cookies.JSESSIONID),
    },
    body: params,
  })
  const firstPageText = await firstPage.text()

  // 3. Scrape data from results into object

  let results = []
  const $ = cheerio.load(firstPageText)
  $('#searchresults .searchresult').each((i, r) => {
    const item = {
      title: $(r).find('a').first().text().trim(),
      link: $(r).find('a').first().attr('href'),
      address: $(r).find('.address').text().trim(),
      openForComment: !!$(r).find('.canCommentIndicator').length,
      ref:            $(r).find('.metaInfo').html().match(/Ref. No:([\s\S]*?)<span/)[1].trim(),
      validatedDate:  $(r).find('.metaInfo').html().match(/Validated:([\s\S]*?)<span/)[1].trim(),
      status:         $(r).find('.metaInfo').html().match(/Status:(.*)/s)[1].trim(),
    }
    results.push(item)
  })

  // 4. Geocode all addresses

  for(let i = 0; i < results.length; i++) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${querystring.stringify({
      address: results[i].address,
      key: config.geocodingAPIKey,
    })}`)
    const location = await response.json()
    results[i].geocodeStatus = location.status

    if(location.status === 'OK') {
      console.log('geocoded: ', location.results[0].formatted_address)
      results[i].lat = location.results[0].geometry.location.lat;
      results[i].lng = location.results[0].geometry.location.lng;
    } else {
      console.error('Geocode failure:', location)
    }
  }

  return results
}

// scrapeManchester()
scrapeManchester().then(r => console.log(r))

