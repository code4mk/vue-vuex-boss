<template lang="html">
  <div class="columns vvb-margin">
    <div class="column is-8 is-offset-2">
      <div class="">
        <h1>{{emitProps}}</h1>
        <button class="button is-dark" @click="emitTest">$emit</button>
        <br>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VText',
  props: {
    emitProps: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      vText: 'this is $emit type props'
    }
  },
  methods: {
    emitTest: function () {
      this.$emit('emitTest', this.vText)
    }
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
