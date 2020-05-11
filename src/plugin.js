import Toast from './Toast'
function createToast({Vue,msg, propsData}){
    var Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [msg]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default{
    install(Vue,options){
        Vue.prototype.$toast = function(msg,toastOptions){
            if(currentToast) currentToast.close()
            currentToast=createToast({Vue,msg,propsData:toastOptions})
        }
    }
}