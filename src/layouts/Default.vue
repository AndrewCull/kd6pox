<template>
  <div class="wrapper sans-serif lh-copy">
    <SiteNavigation/>
    <main class="mt4 ph3-ns mw7-ns center">
    <slot/>
    </main>
    <SiteFooter/>
  </div>
</template>



<script>
import SiteFooter from '~/components/SiteFooter'
import SiteNavigation from '~/components/SiteNavigation'
export default {
  components: {
    SiteFooter, SiteNavigation
  }
}
</script>