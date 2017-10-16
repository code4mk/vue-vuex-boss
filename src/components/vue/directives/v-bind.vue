<template lang="html">
  <div class="columns">
    <div class="column is-6 is-offset-2">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" :class="isSuccess" type="text" placeholder="Text input" v-model="vModel">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" :class="isSuccess" placeholder="Textarea" v-model="isSuccess"></textarea>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VText',
  data () {
    return {
      vModel: 'Write something boss!',
      isSuccess: 'is-danger'
    }
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
