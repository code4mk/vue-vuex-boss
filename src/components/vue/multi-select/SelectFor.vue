<template lang="html">
  <div class="columns vvb-margin">
    <div class="column is-8 is-offset-2">
      <button class="button is-success btn-gap" @click="vKamal(type.id)" v-for="type in types"   :key="type.id">{{type.id}} - {{ type.name }}</button>
      <table class="table is-bordered is-striped is-narrow is-fullwidth">
  <thead>
    <tr>
      <th>ID</th>
      <th v-if="vText === 'posts'">Post Title</th>
      <th v-else-if="vText === 'users'">User Email</th>
      <th v-else-if="vText === 'todos'"> Todos</th>
      <th v-else>Post Title/user email/todos</th>
      <th>Activity</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="info in infos">
      <th>
        {{ info.id }}
      </th>
      <th >
        {{ info.title }}
        {{ info.email}}
      </th>
      </th>
      <th>
        <button class="button is-success">Edit</button>
        <button class="button is-danger">Delete</button>
      </th>
    </tr>

  </tbody>
</table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mkTest: 'users',
  data () {
    return {
      vText: '',
      // vPOSTS: 'posts',
      types: [
        {name: 'posts', id: 1},
        {name: 'users', id: 2},
        {name: 'todos', id: 3}
      ],
      infos: []
    }
  },
  methods: {
    vKamal: function (id) {
      let url = (this.types[id - 1].name)
      this.vText = (this.types[id - 1].name)
      axios.get(`https://jsonplaceholder.typicode.com/${url}`)
        .then(function (response) {
          this.infos = response.data
        }.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    // axios.get(`https://jsonplaceholder.typicode.com/${url}`)
    //   .then(function (response) {
    //     this.posts = response.data
    //   }.bind(this))
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
.btn-gap{
  margin-bottom: 20px;
  margin-left: 5px;
}
</style>
