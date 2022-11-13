"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[66473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(r),f=s,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return r?n.createElement(y,o(o({ref:t},l),{},{components:r})):n.createElement(y,o({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,o=new Array(i);o[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const i={id:"system",title:"TestSystem"},o=void 0,a={unversionedId:"reference/test/services/system",id:"reference/test/services/system",title:"TestSystem",description:"TestSystem supports deterministic testing of effects involving system properties.",source:"@site/docs/reference/test/services/system.md",sourceDirName:"reference/test/services",slug:"/reference/test/services/system",permalink:"/reference/test/services/system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/services/system.md",tags:[],version:"current",frontMatter:{id:"system",title:"TestSystem"},sidebar:"reference-sidebar",previous:{title:"TestRandom",permalink:"/reference/test/services/random"},next:{title:"Live",permalink:"/reference/test/services/live"}},c={},p=[],l={toc:p};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TestSystem")," supports deterministic testing of effects involving system properties. "),(0,s.kt)("p",null,"With the increased usage of containers and runtimes like Kubernetes, more and more applications are being configured by means of environment variables. It is important to test this logic just like other parts of an application."),(0,s.kt)("p",null,"For this purpose ZIO Test exposes ",(0,s.kt)("inlineCode",{parentName:"p"},"TestSystem")," module. Additionally, to setting the ",(0,s.kt)("em",{parentName:"p"},"environment variables"),". It also allows for setting ",(0,s.kt)("em",{parentName:"p"},"JVM system properties")," like in the code below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\nimport zio.test.Assertion._\n\nfor {\n  _      <- TestSystem.putProperty("java.vm.name", "VM")\n  result <- System.property("java.vm.name")\n} yield assertTrue(result == Some("VM"))\n')),(0,s.kt)("p",null,"Internally, ",(0,s.kt)("inlineCode",{parentName:"p"},"TestSystem")," maintains mappings of environment variables and system properties that can be set and accessed. It is worth noticing that no actual environment variables or system properties will be accessed or set as a result of these actions. So there will be no impact on other parts of the system."))}m.isMDXComponent=!0}}]);