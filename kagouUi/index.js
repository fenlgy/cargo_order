// es6 polyfill
import Panel from './components/panel'
import GoAlert from './components/alert'

const kagou = {
  Panel,
  GoAlert
}

const install = (Vue, opts = {}) => {
  Object.keys(kagou).forEach(key => {
    Vue.component(key, kagou[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(kagou, {install})
