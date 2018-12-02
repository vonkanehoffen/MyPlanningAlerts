const cheerio = require('cheerio')
const fs = require('fs')
const { promisify } = require('util')

const readFile = promisify(fs.readFile)

async function scrapeManchester() {
  const data = await readFile('./weeklyListResults.do.html', 'utf8')

  const $ = cheerio.load(data)
  const results = $('#searchresults .searchresult').each((i, r) => {
    console.log($(r).find('a').first().text().trim())
  })

}

scrapeManchester()

