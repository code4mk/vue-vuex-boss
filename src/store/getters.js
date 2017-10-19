export default {
  adultUser: state => {
    return state.users.filter(user => user.age > 21)
  }
}
