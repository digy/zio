"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9446],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,m=u["".concat(p,".").concat(g)]||u[g]||s[g]||i;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12748:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"building-dependency-graph",title:"Building Dependency Graph"},o=void 0,l={unversionedId:"reference/di/building-dependency-graph",id:"reference/di/building-dependency-graph",title:"Building Dependency Graph",description:"We have two options to build a dependency graph:",source:"@site/docs/reference/di/building-dependency-graph.md",sourceDirName:"reference/di",slug:"/reference/di/building-dependency-graph",permalink:"/reference/di/building-dependency-graph",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/di/building-dependency-graph.md",tags:[],version:"current",frontMatter:{id:"building-dependency-graph",title:"Building Dependency Graph"},sidebar:"reference-sidebar",previous:{title:"Getting Started",permalink:"/reference/di/dependency-injection-in-zio"},next:{title:"Manual Layer Construction",permalink:"/reference/di/manual-layer-construction"}},p={},c=[],d={toc:c};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have two options to build a dependency graph:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/reference/di/manual-layer-construction"},"Manual layer construction"),"\u2014 This method uses ZIO's composition operators such as horizontal (",(0,a.kt)("inlineCode",{parentName:"li"},"++"),") and vertical (",(0,a.kt)("inlineCode",{parentName:"li"},">>>"),") compositions."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/reference/di/automatic-layer-construction"},"Automatic layer construction"),"\u2014 It uses metaprogramming to automatically create the dependency graph at compile time.")),(0,a.kt)("p",null,"Assume we have the following dependency graph with two top-level dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"           DocRepo                ++          UserRepo\n      ____/   |   \\____                       /     \\\n     /        |        \\                     /       \\\n Logging  Database  BlobStorage          Logging   Database\n                         |                  \n                      Logging            \n")),(0,a.kt)("p",null,"Now, assume that we have written an application that finally needs two services: ",(0,a.kt)("inlineCode",{parentName:"p"},"DocRepo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UserRepo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp: ZIO[DocRepo with UserRepo, Throwable, Unit] = ZIO.attempt(???)\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To create the dependency graph for this ZIO application manually, we can use the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val appLayer: URLayer[Any, DocRepo with UserRepo] =\n  ((Logging.live ++ Database.live ++ (Logging.live >>> BlobStorage.live)) >>> DocRepo.live) ++\n    ((Logging.live ++ Database.live) >>> UserRepo.live)\n    \nval res: ZIO[Any, Throwable, Unit] = myApp.provideLayer(appLayer)\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"As the development of our application progress, the number of layers will grow, and maintaining the dependency graph manually could be tedious and hard to debug. So, we can automatically construct dependencies with friendly compile-time hints, using ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#provide")," operator:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val res: ZIO[Any, Throwable, Unit] =\n  myApp.provide(\n    Logging.live,\n    Database.live,\n    BlobStorage.live,\n    DocRepo.live,\n    UserRepo.live\n  )\n")),(0,a.kt)("p",null,"The order of dependencies doesn't matter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val res: ZIO[Any, Throwable, Unit] =\n  myApp.provide(\n    DocRepo.live,\n    BlobStorage.live,\n    Logging.live,\n    Database.live,\n    UserRepo.live\n  )\n")),(0,a.kt)("p",null,"If we miss some dependencies, it doesn't compile, and the compiler gives us the clue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val app: ZIO[Any, Throwable, Unit] =\n  myApp.provide(\n    DocRepo.live,\n    BlobStorage.live,\n//    Logging.live,\n    Database.live,\n    UserRepo.live\n  )\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  ZLayer Wiring Error  \n\n\u276f missing Logging\n\u276f     for DocRepo.live\n\n\u276f missing Logging\n\u276f     for UserRepo.live\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provide")," method, together with its variant ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provideSome"),", is default and easier way of injecting dependencies to the environmental effect. We do not require creating the dependency graph manually, it will be automatically generated."),(0,a.kt)("p",{parentName:"admonition"},"In contrast, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provideLayer"),", and its variant ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#provideSomeLayer"),", is useful for low-level and custom cases.")))}s.isMDXComponent=!0}}]);