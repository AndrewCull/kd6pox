<template>
<Layout>
  <TagList/>
  <PostList/>
</Layout>
</template>
<script>
import PostList from '~/components/PostList'
import TagList from '~/components/TagList'
export default {  
  metaInfo: {
    title: "Blog"
  },
  components: {
    PostList, TagList
  }
};
</script>
