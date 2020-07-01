<template>
<section class="mw8 center">
<div class="flex flex-wrap flex-center">

   
   
   
   
   
   
    <div v-for="post in $static.posts.edges" :key="post.node.id" class="w-100 w-50-ns pr2 pr3-ns pb2" >
     
     
     
     
     

      <article class="bg-white center w-100 mr2 ba b--black-10 mb4 mb0-ns">
        <g-link :to="post.node.path" class="link dim">
        <template v-if="post.node.featured_image !== null">
          <g-image :src="'/'+ post.node.featured_image.src" :alt="post.node.featured_image.alt" class="w-100"/>
          </template>
          <div class="pv2 ph3">
        <h2 class="f5 tracked mb0 black">{{ post.node.title }}</h2>
          </div>
        <small class="gray db ph3" style="line-height: 0;">{{ post.node.date | moment("DD MMMM YYYY")}}</small>
        <p class="ph3 f6 mt3 black lh-copy">{{ post.node.excerpt }}</p>
        </g-link>
      </article>
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
        featured_image {
          src
          alt
        }
        title
        excerpt
        date
        path
        
      }
    }
  }
}
</static-query>