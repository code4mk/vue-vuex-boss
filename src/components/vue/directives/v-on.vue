
<template lang="html">
  <div class="columns">
    <div class="column is-6 is-offset-2">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" :class="isSuccess" type="text" placeholder="Text input">
        </div>
      </div>

        <div class="field">
          <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" :class="isSuccess" placeholder="Textarea" v-model="isSuccess"></textarea>
          </div>
        </div>
        <div class="control">
          <button class="button is-danger" :class="isLoadingDanger" @click="changeMe">danger mode</button>
          <button class="button is-dark" :class="isLoadingDark" @click="changeMeDark">dark mode</button>
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
      isSuccess: '',
      isLoadingDanger: '',
      isLoadingDark: ''
    }
  },
  methods: {
    changeMe () {
      this.isSuccess = 'is-danger'
      this.isLoadingDanger = 'is-loading'
      this.isLoadingDark = ''
    },
    changeMeDark () {
      this.isSuccess = 'is-dark is-loading'
      this.isLoadingDark = 'is-loading'
      this.isLoadingDanger = ''
    }
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
