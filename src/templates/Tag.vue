

<template>
  <Layout :title="this.$route.params.id">
    <article class="mw8 center">
        <h1 class="ttc">{{ $route.params.id }} Posts</h1>
        <div v-for="post in posts" :key="post.id" class="mb4">
          <g-link :to="post.path" class="link black">
          <h2 class="mb0 lh-solid">{{post.title}}</h2>
          <p class="mt0">{{ post.excerpt }}</p>
          </g-link>
        </div>
        </article>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title
            excerpt
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$route.params.id
    };
  },
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.map(e => e.node);
    }
  }
};
</script>