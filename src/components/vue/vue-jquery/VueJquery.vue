<template>
  <div class="hello">
    <div class="columns">
      <div class="column is-8 is-offset-2 notification is-info">
        <section class="hero">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                {{ msg | toUpper }}
                <p id="jqrvue">Hi ,Boss ..Are you JQuery and Vue Lover</p>
              </h1>
              <button class="button is-danger" id="hide">Hide</button>
              <button class="button is-success" id="show">Show</button>

              <h2 class="subtitle">
                <br>
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
import JQuery from 'jquery'
var $ = JQuery
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue + Jquery',
      author: '@code4mk'
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      $(document).ready(function () {
        $('#hide').click(function () {
          $('#jqrvue').hide()
        })
        $('#show').click(function () {
          $('#jqrvue').show()
        })
      })
    })
  },
  filters: {
    toUpper: function (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.hello{
  margin-top: 120px;
}
#jqrvue {
  color: black;
}
</style>
