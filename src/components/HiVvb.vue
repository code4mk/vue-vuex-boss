<template>
  <div class="hello">
    <div class="columns">
      <div class="column is-8 is-offset-2 notification is-info">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{ msg }}
              </h1>
              <h2 class="subtitle">
                {{ author }}
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HiVvb',
  data () {
    return {
      msg: 'Welcome to Vue-VueX-Boss',
      author: '@code4mk'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.hello{
  margin-top: 120px;
}

</style>
