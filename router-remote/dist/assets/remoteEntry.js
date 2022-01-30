import { __vitePreload } from './preload-helper.7a6b01f3.js';

let moduleMap = {
"./ElementPlus":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_ElementPlus.js').then(module=>()=>module)
    },
"./ElSubMenuDashboard":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_ElSubMenuDashboard.js').then(module=>()=>module)
    },
"./Login":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_Login.js').then(module=>()=>module)
    },
"./Footer":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_Footer.js').then(module=>()=>module)
    },
"./Header":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_Header.js').then(module=>()=>module)
    },
"./ProductList":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_ProductList.js').then(module=>()=>module)
    },
"./ShoppingCart":()=>{
      dynamicLoadingCss('./style.5f4a3b9c.css');
      return __federation_import('./__federation_expose_ShoppingCart.js').then(module=>()=>module)
    },};
    const dynamicLoadingCss = (cssFilePath) => {
      const metaUrl = import.meta.url;
      if (typeof metaUrl == 'undefined') {
        console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');
        return
      }
      const curUrl = metaUrl.substring(0, metaUrl.lastIndexOf('remoteEntry.js'));
      const element = document.head.appendChild(document.createElement('link'));
      element.href = curUrl + cssFilePath;
      element.rel = 'stylesheet';
    };
    async function __federation_import(name) {
        return __vitePreload(() => import(name),true?[]:void 0);
    }    const get =(module) => {
        return moduleMap[module]();
    };
    const init =(shareScope) => {
      globalThis.__federation_shared__= globalThis.__federation_shared__|| {};
      Object.entries(shareScope).forEach(([key, value]) => {
        const versionKey = Object.keys(value)[0];
        const versionValue = Object.values(value)[0];
        const scope = versionValue.scope || 'default';
        globalThis.__federation_shared__[scope] = globalThis.__federation_shared__[scope] || {};
        const shared= globalThis.__federation_shared__[scope];
        (shared[key] = shared[key]||{})[versionKey] = versionValue;
      });
    };

export { dynamicLoadingCss, get, init };
