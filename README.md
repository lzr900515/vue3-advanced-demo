download demo from your repo. and i am not familiar lerna so usded npm to start. not use your local build vite-plugin-federation, npm intall an online verion.

step 1: cd router-remote; npm run build;
step 2: cd router-host; 
to solve the cors problem. i change the remoteEntry.js to relative url. 
npm run dev;

step3: use nginx to do a server for router-remote and do some redirect works for both of the two project to make the same orgin to solve the cors. (nginx config upload also)

step4: open the url 'local.vite.com'. and will see login page do not render any element-plus component.


--------


chrome conole warning info, nothing error or warning else:


Array(4)
vue-router.esm-bundler.js:72 [Vue Router warn]: Component "default" in record with path "/login" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".
warn @ vue-router.esm-bundler.js:72
5runtime-core.esm-bundler.js:38 [Vue warn]: resolveComponent can only be used in render() or setup().
warn2 @ runtime-core.esm-bundler.js:38
3runtime-core.esm-bundler.js:38 [Vue warn]: Invalid VNode type: Symbol(Text) (symbol) 
  at <Login onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > 
  at <AsyncComponentWrapper onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > 
  at <RouterView> 
  at <ElContainer key=1 class="container" > 
  at <App>
warn2 @ runtime-core.esm-bundler.js:38
runtime-core.esm-bundler.js:38 [Vue warn]: Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function. 
  at <Login onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > 
  at <AsyncComponentWrapper onVnodeUnmounted=fn<onVnodeUnmounted> ref=Ref< undefined > > 
  at <RouterView> 
  at <ElContainer key=1 class="container" > 
  at <App>