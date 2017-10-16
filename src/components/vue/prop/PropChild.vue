<template lang="html">
  <div class="columns vvb-margin">
    <div class="column is-8 is-offset-2">
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>



    </tr>
  </thead>
  <tbody>
    <tr v-for="post in propPosts">
      <th>
        {{ post.id }}
      </th>
      <th>
        {{ post.title }}
      </th>
    </tr>

  </tbody>
</table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VText',
  props: {
    propPosts: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      vText: 'This is a v-text',
      posts: []
    }
  }
  // created () {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(function (response) {
  //       this.posts = response.data
  //     }.bind(this))
  //     .catch(function (error) {
  //       console.log(error)
  //     })
  // }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
