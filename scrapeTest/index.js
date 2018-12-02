const cheerio = require('cheerio')
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

async function scrapeManchester() {
  const data = await readFile('./weeklyListResults.do.html', 'utf8')

  let results = []
  const $ = cheerio.load(data)
  $('#searchresults .searchresult').each((i, r) => {
    // console.log('RESULT:::::')
    // console.log($(r).html())
    results.push({
      title: $(r).find('a').first().text().trim(),
      link: $(r).find('a').first().attr('href'),
      address: $(r).find('.address').text().trim(),
      openForComment: !!$(r).find('.canCommentIndicator').length,
      ref:            $(r).find('.metaInfo').html().match(/Ref. No:([\s\S]*?)<span/)[1].trim(),
      validatedDate:  $(r).find('.metaInfo').html().match(/Validated:([\s\S]*?)<span/)[1].trim(),
      status:         $(r).find('.metaInfo').html().match(/Status:(.*)/s)[1].trim(),
    })
  })
  return results
}

scrapeManchester().then(r => console.log(r))

