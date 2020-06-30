<!--
<template>
  <div class="cf w-100">
    <h2 class="black">Latest Instagram Posts</h2>
    <div v-for="edge in $static.allInstagramPhoto.edges" :key="edge.node.id">
      <div class="fl w-50 w-third-m w-25-ns pa1">
        <div class="aspect-ratio aspect-ratio--1x1">
          <a :href="`https://www.instagram.com/p/`+edge.node.shortcode" target="_blank">
          <img
            :style="{backgroundImage:`url(${edge.node.display_url})`}"
            class="db bg-center cover aspect-ratio--object"
          />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  allInstagramPhoto (sortBy: "date" order:ASC) {
    edges {
      node {
        display_url
        shortcode 
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</static-query>
-->