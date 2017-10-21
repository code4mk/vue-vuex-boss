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
          <a class="navbar-link  is-active" href="/documentation/overview/start/">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="/documentation/overview/start/">
              Overview
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
              Form
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
              Elements
            </a>

              <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>

            <hr class="navbar-divider">
            <div class="navbar-item">
              <div>
                <p class="is-size-6-desktop">
                  <strong>0.6.0</strong>
                </p>

                  <small>
                    <a class="bd-view-all-versions" href="http://versions.bulma.io/">View all versions</a>
                  </small>

              </div>
            </div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link " href="/vx-state">
            Vuex
          </a>
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
          <a class="navbar-link">
            More
          </a>
          <div id="moreDropdown" class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="http://bulma.io/made-with-bulma/">
              <p>
                <strong>Made with Bulma</strong>
                <br>
                <small>The official community badge</small>
              </p>
            </a>
            <a class="navbar-item " href="http://bulma.io/extensions/">
              <p>
                <strong>Extensions</strong>
                <br>
                <small>Side projects to enhance Bulma</small>
              </p>
            </a>
          </div>
        </div>
        <a class="navbar-item " href="/directives">
          <span class="bd-emoji">⭐️</span>
          Directives
        </a>
        <a class="navbar-item " href="/mixins">
          <span class="bd-emoji">❤️</span>
          Mixins
        </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-github"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
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
    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
    <span class="icon">
      <i class="fa fa-twitter"></i>
    </span>
    <span>
      Tweet
    </span>
  </a>

            </p>
            <p class="control">
              <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.6.0/bulma-0.6.0.zip">
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
