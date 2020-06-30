<template>
  <section class="mw8 center tc mb3">
    <div>
    <g-link v-for="tag in $static.tags.edges" :key="tag.node.id" class="f6 link dark-blue b no-underline black dib pr2 pv1 current ttc" :to="tag.node.path">
      #{{ tag.node.id }}
    </g-link>
    </div>
  </section>
</template>

<static-query>
query tags {
  tags: allTag {
    edges {
      node {
        id
        path
        
      }
    }
  }
}


</static-query>
<script>
</script>