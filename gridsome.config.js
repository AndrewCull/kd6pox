// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Andrew Cull',
  siteUrl: "https://www.kd6pox.com",
  siteDescription: "Personal Blog",
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/cms`
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-75475803-2'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options:
      {
        path: 'writing/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: []
        },
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Project',
        remark: {}
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/exclude-me'],
        config: {
          '/articles/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        host: 'https://www.kd6pox.com',
        sitemap: 'https://www.kd6pox.com/sitemap.xml',
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            crawlDelay: 2
          },
          {
            userAgent: "*",
            allow: "/",
            crawlDelay: 10,
            cleanParam: "ref /articles/"
          }
        ]
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'body'],
        collections: [
          {
            typeName: 'Post',
            indexName: 'Posts',
            fields: ['title', 'path']
          }
        ]
      }
    }
  ],
transformers: {
  remark: { }
},
templates: {
  Post: '/writing/:path',
    Project: '/projects/:title'
}
}