// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import shareIt from 'vue-share-it';
import 'tachyons/css/tachyons.css'
import '~/assets/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faTwitter, faGithub, faInstagram, faLinkedin)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('font-awesome', FontAwesomeIcon),
  Vue.component('Layout', DefaultLayout),
  Vue.use(shareIt),
  Vue.use(require('vue-moment')),
  head.meta.push({
    name:'viewport',
    content: 'width=device-width, initial-scale=1'
  }),
  head.meta.push({

  })
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    })
    next()
  })
}

