<template lang="html">
  <div class="columns vvb-margin">
    <div class="column is-4 is-offset-4">
      <nav class="panel">
  <p class="panel-heading" v-if="ifStatus">
    {{ vIfText }}
  </p>
  <p class="panel-heading" v-else-if="elseIfStatus">
    {{ vElseIfText }}
  </p>
  <p class="panel-heading" v-else>
    {{ vElseText }}
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
      vIfText: 'This is a v-if-text',
      vElseIfText: 'This is a v-else-if-text',
      vElseText: 'This is a v-else-text',
      ifStatus: false,
      elseIfStatus: true
    }
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
