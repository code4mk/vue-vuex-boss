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
      <prop-component  :emitProps="meEmit"  @emitTest="applyEmit($event)"></prop-component>
      </div>
    </div>
  </div>
</template>

<script>
import VPropHere from '@/components/vue/prop/emit/PropChild'
export default {
  name: 'VText',
  data () {
    return {
      vModel: 'Write something boss!',
      meEmit: 'children to parent props',
      isSuccess: 'is-danger',
      close: ''
    }
  },
  components: {
    'prop-component': VPropHere
  },
  methods: {
    closeMessage: function () {
      this.close = 'close-message'
    },
    applyEmit (applyEmit) {
      this.meEmit = applyEmit
    }
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
