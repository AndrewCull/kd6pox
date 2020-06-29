<template>
<Layout>
    <h1 class="">Projects</h1>
    <div v-for="project in $page.projects.edges" :key="project.node.id">
      <article class="mb4">
        <g-image :src="project.node.logo"/>
        <g-link :to="project.node.path" class="link dim"><h2 class="mb0 lh-solid">{{ project.node.title }}</h2></g-link>
        <span class="mt0 black-40"><small>{{ project.node.role }} {{ project.node.startDate }} - {{ project.node.endDate }} </small></span>
        <p class="lh-copy mt0 black-70">{{ project.node.excerpt }}</p>
      </article>
    </div>
  </Layout>
</template>
<page-query>
query projects {
  projects: allProject {
    edges {
      node {
        id
        title
        role
        excerpt
        logo
        startDate
        endDate
        path
        
      }
    }
  }
}
</page-query>