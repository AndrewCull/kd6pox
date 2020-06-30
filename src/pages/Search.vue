<template>
  <Layout>
    <input
      id="search"
      v-model="searchTerm"
      class="input-reset ba b--black-20 pa2 mb4 db w5 mt4"
      type="text"
      placeholder="Search">
      <div>
    <g-link
      v-for="result in searchResults"
      :key="result.id"
      :to="result.path"
      class="link b pv3">
      {{ result.title }}
    </g-link>
    </div>
  </Layout>
</template>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin'
export default {
  mixins: [Search]
}
</script>