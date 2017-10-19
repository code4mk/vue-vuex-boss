export default {
  adultIncrease (state) {
    // state.users[1].age += 2
    state.users.forEach(user => {
      user.age += 2
    })
  },
  adultDecrease (state) {
    // state.users[1].age += 2
    state.users.forEach(user => {
      user.age -= 2
    })
  }
}
