import Vue from 'vue'
import Router from 'vue-router'
import TheDirective from '@/components/vue/directives/TheDirective'
import HiVvb from '@/components/HiVvb'
import VText from '@/components/vue/directives/v-text'
import VHtml from '@/components/vue/directives/v-html'
import VShow from '@/components/vue/directives/v-show'
import VConditions from '@/components/vue/directives/v-conditions'
import VModel from '@/components/vue/directives/v-model'
import VBind from '@/components/vue/directives/v-bind'
import VOn from '@/components/vue/directives/v-on'
import VFor from '@/components/vue/directives/v-for'
import VMixin from '@/components/vue/mixins/vMixins'
import VComponent from '@/components/vue/component/ComponentMain'
import VProp from '@/components/vue/prop/PropMain'
import VEmit from '@/components/vue/prop/emit/PropMain'
import VFilter from '@/components/vue/filter/VueFilters'
import VxState from '@/components/vuex/VuexState'
import VxGetter from '@/components/vuex/VuexGetters'
import VxMutation from '@/components/vuex/VuexMutations'
import VxJquery from '@/components/vue/vue-jquery/VueJquery'
import VSelectMultiFor from '@/components/vue/multi-select/SelectFor'
Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'HiVvb',
      component: HiVvb
    },
    {
      path: '/directives',
      name: 'TheDirective',
      component: TheDirective
    },
    {
      path: '/v-text',
      name: 'VText',
      component: VText,
      alias: '/text-alias'
    },
    {
      path: '/v-html',
      name: 'VHtml',
      component: VHtml
    },
    {
      path: '/v-show',
      name: 'VShow',
      component: VShow
    },
    {
      path: '/v-conditions',
      name: 'VConditions',
      component: VConditions
    },
    {
      path: '/v-model',
      name: 'VModel',
      component: VModel
    },
    {
      path: '/v-bind',
      name: 'VBind',
      component: VBind
    },
    {
      path: '/v-on',
      name: 'VOn',
      component: VOn
    },
    {
      path: '/v-mefor',
      name: 'VFor',
      component: VFor
    },
    {
      path: '/mixins',
      name: 'VMixin',
      component: VMixin
    },
    {
      path: '/components',
      name: 'VComponent',
      component: VComponent
    },
    {
      path: '/props',
      name: 'VProp',
      component: VProp
    },
    {
      path: '/emit',
      name: 'VEmit',
      component: VEmit
    },
    {
      path: '/filters',
      name: 'VFilter',
      component: VFilter
    },
    {
      path: '/vx-state',
      name: 'VxState',
      component: VxState
    },
    {
      path: '/vx-getters',
      name: 'VxGetter',
      component: VxGetter
    },
    {
      path: '/vx-mutations',
      name: 'VxMutation',
      component: VxMutation
    },
    {
      path: '/vx-jquery',
      name: 'VxJquery',
      component: VxJquery
    },
    {
      path: '/v-multi-select',
      name: 'VSelectMultiFor',
      component: VSelectMultiFor
    }
  ]
})
