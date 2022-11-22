"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"index",title:"Core Data Types"},o=void 0,l={unversionedId:"reference/core/index",id:"reference/core/index",title:"Core Data Types",description:"In this section we are going to talk about the basic data types that are required to build a ZIO application:",source:"@site/docs/reference/core/index.md",sourceDirName:"reference/core",slug:"/reference/core/",permalink:"/reference/core/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Core Data Types"}},p={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we are going to talk about the basic data types that are required to build a ZIO application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zio/"},"ZIO"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO")," is a value that models an effectful program, which might fail or succeed.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zio/uio"},"UIO"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"UIO[A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Nothing, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zio/urio"},"URIO"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"URIO[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[R, Nothing, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zio/task"},"Task"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"Task[A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Any, Throwable, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zio/rio"},"RIO"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"RIO[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[R, Throwable, A]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zio/io"},"IO"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"IO[E, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO[Any, E, A]"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/zioapp"},"ZIOApp"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIOApp")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIOAppDefault")," are entry points for ZIO applications."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/runtime"},"Runtime"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"Runtime[R]")," is capable of executing tasks within an environment ",(0,a.kt)("inlineCode",{parentName:"li"},"R"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/exit"},"Exit"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"Exit[E, A]")," describes the result of executing an ",(0,a.kt)("inlineCode",{parentName:"li"},"IO")," value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/core/cause"},"Cause"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"li"},"Cause[E]")," is a description of a full story of a fiber failure.")))}u.isMDXComponent=!0}}]);