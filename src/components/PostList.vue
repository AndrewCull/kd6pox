<template>
<section class="mw8 center">
    <div v-for="post in $static.posts.edges" :key="post.node.id">
      <div class="mb4">
        <g-link :to="post.node.path" class="link dim"><h2 class="mb0 lh-solid">{{ post.node.title }}</h2></g-link>
        <span class="mt0 black-40"><small>{{ post.node.date | moment("dddd, MMMM Do YYYY")}}</small></span>
        <p>{{ post.node.excerpt }}</p>
      </div>
    </div>
  </section>
</template>
<static-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        excerpt
        date
        timeToRead
        path
        
      }
    }
  }
}
</static-query>