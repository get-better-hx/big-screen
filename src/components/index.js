import modal from "./common/modal.vue"
import bgAnimation from "./common/bgAnimation.vue"
import sinan from "./abilityFn/sinan.vue"
const components = {
    modal,
    bgAnimation,
    sinan
}
const install = (Vue = {}) => {
    if (install.installed) return
    Object.keys(components).forEach(component => {
        Vue.component(components[component].name, components[component])
    })
    install.installed = true
}

install.installed = false

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue)
    install.installed = true
}

const Vcomp = {
    ...components,
    install
}

export default Vcomp