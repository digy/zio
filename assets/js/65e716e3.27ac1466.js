"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[38679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(f,c(c({ref:n},p),{},{components:t})):o.createElement(f,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={id:"index",title:"Introduction to ZIO Connectors",sidebar_label:"Introduction"},c=void 0,i={unversionedId:"index",id:"index",title:"Introduction to ZIO Connectors",description:"ZIO connectors are Sources, Sinks and Pipelines for channeling data. They are easy to use, and they are designed to be",source:"@site/node_modules/@zio.dev/zio-connect/index.md",sourceDirName:".",slug:"/",permalink:"/zio-connect/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Connectors",sidebar_label:"Introduction"},sidebar:"sidebar",next:{title:"couchbase-connector",permalink:"/zio-connect/couchbase-connector"}},s={},l=[{value:"Connectors",id:"connectors",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ZIO connectors are Sources, Sinks and Pipelines for channeling data. They are easy to use, and they are designed to be\ncomposable. You can use them to build pipelines that can be used to process data."),(0,r.kt)("p",null,"Each connector is defined as a separate module and can be used independently or in combination with other connectors."),(0,r.kt)("h2",{id:"connectors"},"Connectors"),(0,r.kt)("p",null,"The following connectors are available. These are submodules and are imported individually:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zio-connect-couchbase")," - Couchbase connector. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-connect/tree/master/examples/couchbase-connector-examples/src/main/scala"},"couchbase-connector-examples")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zio-connect-file")," - Filesystem connector. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-connect/tree/master/examples/file-connector-examples/src/main/scala"},"file-connector-examples")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zio-connect-s3")," - Amazon S3 connector uses ",(0,r.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-aws"},"zio-aws-s3")," under the hood.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-connect/tree/master/examples/s3-connector-examples/src/main/scala"},"s3-connector-examples")))}u.isMDXComponent=!0}}]);