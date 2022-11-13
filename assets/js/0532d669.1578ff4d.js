"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[97820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={id:"http4s",title:"HTTP4s Interop"},p=void 0,a={unversionedId:"interop/http4s",id:"interop/http4s",title:"HTTP4s Interop",description:"An interop module is provided for HTTP4s v0.21",source:"@site/node_modules/@zio.dev/zio-json/interop/http4s.md",sourceDirName:"interop",slug:"/interop/http4s",permalink:"/zio-json/interop/http4s",draft:!1,tags:[],version:"current",frontMatter:{id:"http4s",title:"HTTP4s Interop"},sidebar:"sidebar",previous:{title:"Akka Http Interop",permalink:"/zio-json/interop/akka-http"},next:{title:"Refined Interop",permalink:"/zio-json/interop/refined"}},l={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Example project",id:"example-project",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An interop module is provided for ",(0,o.kt)("a",{parentName:"p",href:"https://http4s.org/v0.21"},"HTTP4s v0.21")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  "dev.zio" % "zio-json-interop-http4s" % "0.3.0"\n)\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.json._\nimport zio.json.interop.http4s._\n\nfinal case class Greeting(greeting: String)\n\nobject Greeting {\n  // This JsonCodec[A] will be picked up by the `jsonEncoderOf` method provided by zio-json-interop-http4s\n  implicit val encoder: JsonCodec[Greeting] =\n    DeriveJsonCodec.gen\n\n  implicit def entityEncoder[F[_]: Applicative]: EntityEncoder[F, Greeting] =\n    jsonEncoderOf[F, Greeting]\n}\n")),(0,o.kt)("h2",{id:"example-project"},"Example project"),(0,o.kt)("p",null,"A fully working example project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-json/tree/develop/examples/interop-http4s"},"can be found here")))}u.isMDXComponent=!0}}]);