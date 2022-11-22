"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2871],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(i),m=a,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return i?r.createElement(g,n(n({ref:t},p),{},{components:i})):r.createElement(g,n({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,n=new Array(o);n[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var s=2;s<o;s++)n[s]=i[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},40652:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=i(87462),a=(i(67294),i(3905));const o={id:"index",title:"ZIO Guides",sidebar_label:"Overview"},n=void 0,l={unversionedId:"guides/index",id:"guides/index",title:"ZIO Guides",description:"Quickstart Guides",source:"@site/docs/guides/index.md",sourceDirName:"guides",slug:"/guides/",permalink:"/guides/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"ZIO Guides",sidebar_label:"Overview"},sidebar:"guides-sidebar",next:{title:"Hello World",permalink:"/guides/quickstarts/hello-world"}},u={},s=[{value:"Quickstart Guides",id:"quickstart-guides",level:2},{value:"Tutorial Guides",id:"tutorial-guides",level:2},{value:"Integration Guides",id:"integration-guides",level:2},{value:"Migration Guides",id:"migration-guides",level:2}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"quickstart-guides"},"Quickstart Guides"),(0,a.kt)("p",null,"The following guides have been written to help you get started with ZIO with minimal effort and without the need to fully understand the underlying technology:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/quickstarts/hello-world"},"ZIO Quickstart: Hello World")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/quickstarts/restful-webservice"},"ZIO Quickstart: Building a RESTful Web Service")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/quickstarts/graphql-webservice"},"ZIO Quickstart: Building a GraphQL Web Service")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://scalapb.github.io/zio-grpc/docs/quickstart/"},"ZIO Quickstart: Building a gRPC Server and Client"))),(0,a.kt)("h2",{id:"tutorial-guides"},"Tutorial Guides"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/configurable-zio-application"},"How to Make a ZIO Application Configurable?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/encode-and-decode-json-data"},"How to Encode and Decode JSON Data")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/enable-logging-in-a-zio-application"},"How to Enable Logging in a ZIO Application?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/create-custom-logger-for-a-zio-application"},"How to Create a Custom Logger for a ZIO Application?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/run-our-first-zio-project-with-vscode"},"How to Run Our First ZIO Project With VSCode?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/run-our-first-zio-project-with-intellij-idea"},"How to Run Our First ZIO Project With IntelliJ IDEA?")," "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/build-a-restful-webservice"},"How to Build a RESTful Web Service")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/deploy-a-zio-application-using-docker"},"How to Deploy a ZIO Application Using Docker?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/monitor-a-zio-application-using-zio-built-in-metric-system"},"How to Monitor a ZIO Application Using ZIO's Built-in Metric System?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/producing-consuming-data-from-kafka-topics"},"How to Produce/Consume Data To/From Kafka Topics?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/tutorials/debug-a-zio-application"},"How to Debug a ZIO Application?"))),(0,a.kt)("h2",{id:"integration-guides"},"Integration Guides"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-cats-effect"},"How to Interop with Cats Effect?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-future"},"How to Interop with Future?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-guava"},"How to Interop with Guava?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-java"},"How to Interop with Java?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-javascript"},"How to Interop with JavaScript?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-monix"},"How to Interop with Monix?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-reactive-streams"},"How to Interop with Reactive Streams?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-scalaz-7x"},"How to Interop with Scalaz 7.x?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/interop/with-twitter"},"How to Interop with Twitter?"))),(0,a.kt)("h2",{id:"migration-guides"},"Migration Guides"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/migrate/zio-2.x-migration-guide"},"ZIO 2.x Migration Guide")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/migrate/from-cats-effect"},"How to Migrate from Cats Effect to ZIO?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guides/migrate/from-monix"},"How to Migrate from Monix to ZIO?"))))}d.isMDXComponent=!0}}]);