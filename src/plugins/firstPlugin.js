import { Icon } from '@iconify/vue';
import Loading from '../components/Loading.vue';

const firstplugin = {
  install(app, options) {
    console.log('app', app);


    app.component(Icon)
    app.component('Loading', Loading)

    app.config.globalProperties.$test = 'test'

    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    });

    app.directive('color', {
      mounted(el, binding) {
        el.style.color = binding.value
        console.log('element', el);
        console.log('binding', binding);
      }
    })


    app.directive('tooltip', {
      mounted(el, binding) {
        const div = document.createElement('div')
        div.innerText = binding.value
        div.style.position = 'absolute'
        el.style.position = 'relative'
        div.style.top = '-20px'
        div.style.backgroundColor = 'black'
        div.style.color = 'white'
        div.style.display = 'none'
        el.appendChild(div)
        el.onmouseenter = function () {
          div.style.display = 'block'
        }
        el.onmouseleave = function () {
          div.style.display = 'none'
        }

      }
    })
  }
}

export default firstplugin
