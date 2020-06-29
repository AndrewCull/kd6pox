<template>
  <Layout>
    <article class="mw8 center">
    <h1 class="mb0 pb0 lh-solid">{{ $page.project.title }}</h1>
    <span class="mt0 black-40"><small>Last Updated {{$page.project.startDate | moment("DD MMMM YYYY") }}</small></span>
    <div v-html="$page.project.content"/>
    </article>
  </Layout>
</template>

<page-query>
query project ($path: String!) {
  project: project (path: $path) {
     title
     logo
     startDate
     content
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
          content: this.$page.post.description,
        },

        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.post.description,
        },
      ],
    }
  },
};
</script>