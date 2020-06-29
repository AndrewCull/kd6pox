<template>
  <Layout>
      <h1>Hello!</h1>

      <p>
        My name is Andrew Cull. I work
        <a href="https://www.agema.io" _target="new" class="link">Agema</a> leading an incredible team, start companies, make some things with wood, metal, and code. I spend my free time flying, fishing, reading, runnning our little farm, and pursuing adventure. Currently living in Idaho.
      </p>

      <h3 class="black ttu mt4">Latest Writing</h3>
        <div v-for="post in $page.posts.edges" :key="post.node.id" class="pv3 f6 pt0 ba mb2 ph2 b--black-10 br2 hover-bg-light-gray">
          <g-link :to="post.node.path" class="grow link"> 
            <div v-if="post.node.MainImage">
          <img :src="post.node.mainImage"/>
          </div>
          <h3 class="mb0">{{ post.node.title }}</h3>
          <span class="lh-solid mt0"><small>Updated {{ post.node.date | moment("DD MMM YYYY")}}</small></span>
          <p class="">{{ post.node.excerpt}}</p>
          </g-link>
        </div>

<!--
      <h2 class="black-30">Current Projects</h2>
        <div class="flex flex-wrap">
        <div v-for="project in $page.projects.edges" :key="project.node.id" class="w-100 w-50-ns pr2 pv3 f6">
          <g-link :to="project.node.path" class="grow link">
          <div v-if="project.node.logo">
          <img :src="project.node.logo"/>
          </div>
          <h3 class="mb0">{{ project.node.title }}</h3>
           </g-link>
        </div>
      </div>
-->
      <InstagramFeed />
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
        timeToRead
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
import InstagramFeed from "~/components/InstagramFeed";
export default {
  metaInfo: {
    title: "Personal Blog | Andrew Cull"
  },
  components: {
    InstagramFeed
  }
};
</script>