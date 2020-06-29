<template>
  <Layout>
    <article>
    <h1 class="mb0 pb0 lh-title f3 f1-ns lh-title">{{ $page.post.title }}</h1>
    <span class="mt0 black-40"><small>Last Updated {{$page.post.date | moment("DD MMMM YYYY") }}</small></span>

  <div v-if="$page.post.tags">
  <div v-for="tag in $page.post.tags" :key="tag.id">
    <g-link :to="tag.path">{{tag.id}}</g-link>
  </div>
  </div>
  
    
    <div v-html="$page.post.content"/>
    <div class="center tc mt4 ba b--black-10 pv3 br2">
      <span class="black-30">Share on Social:</span>
    <share-it icons :url="$page.post.path"/>
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
          key: 'og:description',
          name: 'og:description',
          content: this.$page.post.excerpt,
        },

        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.excerpt,
        },
      ],
    }
  },
};
</script>
