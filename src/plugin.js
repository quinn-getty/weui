import Toast from './Toast'
export default{
    install(Vue,options){
        Vue.prototype.$toast = function(msg){
            var Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [msg]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}