<template>
  <Layout>
    <article>
      <h1 class="mb0 pb0 f3 f1-ns" style="line-height: .75;">{{ $page.post.title }}</h1>
      <small
        class="black-40"
        
      >Last Updated {{$page.post.date | moment("DD MMMM YYYY") }}</small>
      <div v-if="$page.post.tags" class="mb5">
        <div v-for="tag in $page.post.tags" :key="tag.id" class="mt2">
          <g-link :to="tag.path" class="link ttc b f7">{{tag.id}}</g-link>
        </div>
      </div>

      <div v-html="$page.post.content" class="lh-copy" />
      <div class="center tc mt4 ba b--black-10 pv3 br2">
        <span class="black-30">Share on Social:</span>
        <share-it icons :url="$page.post.path" />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    excerpt
    content
    timeToRead
    date
    tags {
      id
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          key: "og:description",
          name: "og:description",
          content: this.$page.post.excerpt
        },

        {
          key: "twitter:description",
          name: "twitter:description",
          content: this.$page.post.excerpt
        }
      ]
    };
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map(e => e.node);
    }
  }
};
</script>
<style scoped>

</style>