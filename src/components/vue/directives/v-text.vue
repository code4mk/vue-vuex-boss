<template lang="html">
  <div class="columns vvb-margin">
    <div class="column is-4 is-offset-4">
      <nav class="panel">
  <p class="panel-heading" v-text="vText">

  </p>
</nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VText',
  data () {
    return {
      vText: 'This is a v-text'
    }
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
