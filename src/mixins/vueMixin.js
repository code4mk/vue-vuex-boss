export default {
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
