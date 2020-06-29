// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.loadSource(async store => {
    store.addMetadata('linkedIn', 'https://www.linkedin.com/in/andrewdcull/')
    store.addMetadata('instagram', 'https://www.instagram.com/kd6pox')
    store.addMetadata('twitter', 'https://www.twitter.com/andrewcullio')
    store.addMetadata('github', 'https://www.github.com/AndrewCull')
  })



}