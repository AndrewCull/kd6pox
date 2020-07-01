<template>
<footer class="bt b--black-10 black-70 mt5">
    <div class="ph3 pv3">
        <div class="flex flex-wrap pt3 pb4 pb0-ns ">

            <div class="w-100 w-30-ns f6 tc tl-ns ">
                About this blog with keywords.
            </div>
             
             <div class="w-100 tc w-30-ns tr-ns">
               <g-link  v-for="tag in $static.tags.edges" :key="tag.node.id" class="f6 b link grow dark-blue no-underline current ttc tc mr3" :to="tag.node.path">
      #{{ tag.node.id }}
    </g-link>
    </div>
    <div class="w-100 w-40-ns tc tr-ns pb3 pt4 pv0-ns">
                  <g-link :to="$static.metadata.linkedIn" class="link grow black-70 f3 dib mr4 v-mid">
    <font-awesome :icon="['fab', 'linkedin']"/>
  </g-link>
  <g-link :to="$static.metadata.instagram" class="link grow black-70 f3 dib mr4 v-mid">
    <font-awesome :icon="['fab', 'instagram']"/>
  </g-link>
  <g-link :to="$static.metadata.twitter" class="link grow black-70 f3 dib mr4 v-mid">
    <font-awesome :icon="['fab', 'twitter']"/>
  </g-link>
  <g-link :to="$static.metadata.github" class="link grow black-70 f3 dib v-mid">
    <font-awesome :icon="['fab', 'github']"/>
  </g-link>
            </div>
    </div>
    </div>
</footer>
</template>
<static-query>
query {
  tags: allTag {
    edges {
      node {
        id
        path
        
      }
    }
  },
 metadata {
    linkedIn
    instagram
    twitter
    github
  }
}


</static-query>