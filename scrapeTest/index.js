const cheerio = require('cheerio')
const fs = require('fs')
// const promisify = require('utils').promisify

// const readFile = promisify(fs.readFile)
// async function scrapeManchester() {
//   const { err, data } = await readFile('./weeklyListResults.do.html', 'utf8')
//
//   const $ = cheerio.load(weekly)
//   const results = $('#searchresults .searchresult').each((i, r) => {
//     console.log($(r).find('a').first().text())
//   })
//
// }
//
// scrapeManchester()

fs.readFile('./weeklyListResults.do.html', 'utf8', (err, data) => {
  const weekly = data

  const $ = cheerio.load(weekly)
  const results = $('#searchresults .searchresult').each((i, r) => {
    console.log($(r).find('a').first().text())
  })

  // results.map(r => {
  //   console.log(r.find('a').first().text())
  // })
})