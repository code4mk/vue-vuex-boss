<template lang="html">
  <div class="columns vvb-margin">
    <div class="column is-4 is-offset-4">
      <nav class="panel">
  <p class="panel-heading">
    {{ title }}
  </p>
  <a class="panel-block is-active" v-for="diretiveList in diretiveLists" :key="diretiveList.id" >
    <a :href="diretiveList.url" target="_blank">
      <span class="panel-icon">
        <i class="fa fa-book"></i>
      </span>
      {{ diretiveList.name }}
    </a>
  </a>

</nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheDirective',
  data () {
    return {
      title: 'Directive Lists',
      diretiveLists: [
        {name: 'v-text', url: '/v-text'},
        {name: 'v-html', url: '/v-html'},
        {name: 'v-show', url: '/v-show'},
        {name: 'v-pre', url: '/v-pre'},
        {name: 'v-once', url: '/v-once'},
        {name: 'v-cloak', url: '/v-cloak'},
        {name: 'v-if', url: '/v-conditions'},
        {name: 'v-else-if', url: '/v-conditions'},
        {name: 'v-else', url: '/v-conditions'},
        {name: 'v-model', url: '/v-model'},
        {name: 'v-bind', url: '/v-bind'},
        {name: 'v-on', url: '/v-on'},
        {name: 'v-for', url: '/v-mefor'}
      ]
    }
  }
}
</script>

<style lang="css" scoped >

.vvb-margin{
  margin-top: 30px;
}
</style>
