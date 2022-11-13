"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[83219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"urio",title:"URIO"},i=void 0,p={unversionedId:"reference/core/zio/urio",id:"reference/core/zio/urio",title:"URIO",description:"URIO[R, A] is a type alias for ZIO[R, Nothing, A], which represents an effect that requires an R, and cannot fail, but can succeed with an A.",source:"@site/docs/reference/core/zio/urio.md",sourceDirName:"reference/core/zio",slug:"/reference/core/zio/urio",permalink:"/reference/core/zio/urio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/core/zio/urio.md",tags:[],version:"current",frontMatter:{id:"urio",title:"URIO"},sidebar:"reference-sidebar",previous:{title:"UIO",permalink:"/reference/core/zio/uio"},next:{title:"Task",permalink:"/reference/core/zio/task"}},c={},s=[],l={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URIO[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, Nothing, A]"),", which represents an effect that requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),", and cannot fail, but can succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In Scala, the ",(0,a.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,a.kt)("p",null,"Let's see how the ",(0,a.kt)("inlineCode",{parentName:"p"},"URIO")," type alias is defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type URIO[-R, +A] = ZIO[R, Nothing, A]\n")),(0,a.kt)("p",null,"So ",(0,a.kt)("inlineCode",{parentName:"p"},"URIO")," is equal to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," that requires ",(0,a.kt)("inlineCode",{parentName:"p"},"R")," and cannot fail (because in Scala the ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," type has no inhabitant, so we can't create an instance of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),"). It succeeds with ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("admonition",{title:"Principle of The Least Power",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,a.kt)("p",{parentName:"admonition"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,a.kt)("p",{parentName:"admonition"},"So there is no need to convert type aliases to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, and whenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);