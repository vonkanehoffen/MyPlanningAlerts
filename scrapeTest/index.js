const cheerio = require('cheerio')
const fs = require('fs')
const { promisify } = require('util')
const config = require('./config').default
const fetch = require('node-fetch')
const querystring = require('querystring');

const readFile = promisify(fs.readFile)

async function scrapeManchester() {


  const data = await readFile('./weeklyListResults.do.html', 'utf8')

  let results = []
  const $ = cheerio.load(data)
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

  for(let i = 0; i < results.length; i++) {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?${querystring.stringify({
      address: results[i].address,
      key: 'no' //config.geocodingAPIKey,
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

