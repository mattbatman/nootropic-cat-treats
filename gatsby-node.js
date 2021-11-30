const path = require('path')
const sheetConfig = require('./sheets/config');
const quotes = require(path.resolve(sheetConfig.outputPath));

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  
  quotes.forEach(({ id, quote, quotee, platform, link, length }) => {
    createPage({
      path: `/quotes/${id}`,
      component: require.resolve('./src/templates/basic.js'),
      context: {
        id: parseInt(id),
        quote,
        quotee,
        platform,
        link,
        length,
        allQuotesLength: quotes.length
      },
    })
  })
}