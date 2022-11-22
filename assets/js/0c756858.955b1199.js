"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3751],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),f=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=f(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=f(t),b=i,s=p["".concat(l,".").concat(b)]||p[b]||d[b]||o;return t?n.createElement(s,a(a({ref:r},u),{},{components:t})):n.createElement(s,a({ref:r},u))}));function b(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var f=2;f<o;f++)a[f]=t[f];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34351:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>f});var n=t(87462),i=(t(67294),t(3905));const o={id:"fiberid",title:"FiberId"},a=void 0,c={unversionedId:"reference/fiber/fiberid",id:"reference/fiber/fiberid",title:"FiberId",description:"FiberId is the identity of a Fiber, described by a globally unique sequence number and the time when it began life:",source:"@site/docs/reference/fiber/fiberid.md",sourceDirName:"reference/fiber",slug:"/reference/fiber/fiberid",permalink:"/reference/fiber/fiberid",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/fiber/fiberid.md",tags:[],version:"current",frontMatter:{id:"fiberid",title:"FiberId"},sidebar:"reference-sidebar",previous:{title:"Fiber",permalink:"/reference/fiber/fiber.md"},next:{title:"Fiber.Status",permalink:"/reference/fiber/fiberstatus"}},l={},f=[],u={toc:f};function d(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FiberId")," is the identity of a ",(0,i.kt)("a",{parentName:"p",href:"/reference/fiber/fiber.md"},"Fiber"),", described by a globally unique sequence number and the time when it began life:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," \u2014 unique monotonically increasing sequence number ",(0,i.kt)("inlineCode",{parentName:"li"},"0,1,2,..."),", derived from an atomic counter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startTimeSeconds")," \u2014 UTC time seconds, derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"java.lang.System.currentTimeMillis / 1000"))))}d.isMDXComponent=!0}}]);