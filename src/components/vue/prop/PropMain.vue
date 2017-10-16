<template lang="html">
  <div class="columns">
    <div class="column is-6 is-offset-2">
        <article class="message prop-message is-danger" :class="close">
          <div class="message-header" >
            <p>Props Vue</p>
            <button class="delete"  aria-label="delete" @click="closeMessage"></button>
          </div>
          <div class="message-body">
            <h1>props help for accessing data from parent to child</h1>
          </div>
        </article>
      <prop-component :propPosts="posts"></prop-component>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VPropHere from '@/components/vue/prop/PropChild'
export default {
  name: 'VText',
  data () {
    return {
      vModel: 'Write something boss!',
      isSuccess: 'is-danger',
      close: '',
      posts: []
    }
  },
  components: {
    'prop-component': VPropHere
  },
  methods: {
    closeMessage: function () {
      this.close = 'close-message'
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        this.posts = response.data
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
},
.prop-message{
  margin-top: 10px;
}
.close-message{
  display:none;
}
</style>
