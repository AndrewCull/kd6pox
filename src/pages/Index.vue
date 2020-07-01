<template>
  <Layout>
      <h1>Hello!</h1>

      <p class="lh-copy">
        My name is Andrew Cull. I work
        <a href="https://www.agema.io" _target="new" class="link">Agema</a> leading an incredible team, start companies, make some things with wood, metal, and code. I spend my free time flying, fishing, reading, runnning our little farm, and pursuing adventure. Currently living in Idaho.
      </p>

      <h3 class="black ttu mt4">Latest Writing</h3>
       <PostList/>
  </Layout>
</template>

<page-query>
query {
  posts: allPost (limit: 7){
    edges {
      node {
        id
        title
        mainImage
        excerpt
        date
        path
        
      }
    }
  },
  projects: allProject {
    edges {
      node {
        id
        title
        path
      }
    }
  }
}

</page-query>

<script>
import PostList from '~/components/PostList'
export default {
  metaInfo: {
    title: "Personal Blog | Andrew Cull"
  },
  components: {
    PostList
  }
};
</script>