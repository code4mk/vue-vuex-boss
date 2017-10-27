<template>
  <div id="app">
    <nav class="navbar is-info">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
        <strong>Vue-VueX-Boss</strong>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-lg fa-github"></i>
        </span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'VxState', params: {} }" class="navbar-link ">Vuex</router-link>
          <div id="blogDropdown" class="navbar-dropdown is-boxed" data-style="width: 18rem;">

              <a class="navbar-item" href="vx-state">
                state
              </a>

              <a class="navbar-item" href="/vx-getters">
                getters
              </a>

              <a class="navbar-item" href="/vx-mutations">
                mutations
              </a>

            <a class="navbar-item" href="/actions">
              actions
            </a>
            <hr class="navbar-divider">
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'VxJquery', params: {} }" class="navbar-link ">More</router-link>
          <div id="moreDropdown" class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="/vx-jquery">
              <p>
                <strong>vue+jquery</strong>
              </p>
            </a>
            <a class="navbar-item " href="/v-multi-select">
              <p>
                <strong>Multi Select For</strong>
              </p>
            </a>
            <a class="navbar-item " href="/props">
              <p>
                <strong>props</strong>
              </p>
            </a>
            <a class="navbar-item " href="/emit">
              <p>
                <strong>$emit</strong>
              </p>
            </a>
            <a class="navbar-item " href="#">
              <p>
                <strong>Code4mk</strong>
              </p>
            </a>
          </div>
        </div>
        <router-link :to="{ name: 'TheDirective', params: {} }" class="navbar-link ">
          <span class="bd-emoji">⭐️</span>
          Directives
        </router-link>
        <router-link :to="{ name: 'VMixin', params: {} }" class="navbar-link ">
          <span class="bd-emoji">⭐️</span>
          Mixins
        </router-link>
      </div>

      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop-only" href="https://github.com/code4mk/vue-vuex-boss" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-github"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/code4mk" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button"
    data-social-network="Twitter"
    data-social-action="tweet"
    data-social-target="http://bulma.io"
    target="_blank"
    href="https://twitter.com/intent/tweet?text=Vue-VueX-Boss: Vue-VueX-Boss=http://github.com/code4mk/vue-vuex-boss">
    <span class="icon">
      <i class="fa fa-twitter"></i>
    </span>
    <span>
      Tweet
    </span>
  </a>

            </p>
            <p class="control">
              <a class="button is-primary" href="#">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
@import "../node_modules/bulma/css/bulma.css";
@import "../node_modules/font-awesome/css/font-awesome.css";
.navbar{
  border-top: 4px solid black;
}
</style>
