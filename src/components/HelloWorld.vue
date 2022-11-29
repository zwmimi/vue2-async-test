<template>
  <div>
    <div class="hello">{{ msg }}</div>
    <button @click="fetchPosts">取得</button>
    <ul v-for="post in $store.state.posts" :key="post.id">
      <li v-if="post">{{ `${post.id}：${post.title}` }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
