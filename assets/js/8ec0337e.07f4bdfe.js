"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"zio-saga",title:"ZIO Saga"},i=void 0,s={unversionedId:"ecosystem/community/zio-saga",id:"ecosystem/community/zio-saga",title:"ZIO Saga",description:"ZIO Saga is a distributed transaction manager using Saga Pattern.",source:"@site/docs/ecosystem/community/zio-saga.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/zio-saga",permalink:"/ecosystem/community/zio-saga",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/zio-saga.md",tags:[],version:"current",frontMatter:{id:"zio-saga",title:"ZIO Saga"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Pulsar",permalink:"/ecosystem/community/zio-pulsar"},next:{title:"ZIO Slick Interop",permalink:"/ecosystem/community/zio-slick-interop"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/VladKopanev/zio-saga"},"ZIO Saga")," is a distributed transaction manager using Saga Pattern."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Sometimes when we are architecting the business logic using microservice architecture we need distributed transactions that are across services."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Saga Pattern")," lets us manage distributed transactions by sequencing local transactions with their corresponding compensating actions. A ",(0,o.kt)("em",{parentName:"p"},"Saga Pattern")," runs all operations. In the case of failure, it guarantees us to undo all previous works by running the compensating actions."),(0,o.kt)("p",null,"ZIO Saga allows us to compose our requests and compensating actions from the Saga pattern in one transaction with no boilerplate."),(0,o.kt)("p",null,"ZIO Saga adds a simple abstraction called ",(0,o.kt)("inlineCode",{parentName:"p"},"Saga")," that takes the responsibility of proper composition of effects and associated compensating actions."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "com.vladkopanev" %% "zio-saga-core" % "0.4.0"\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"In the following example, all API requests have a compensating action. We compose all them together and then run the whole as one transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.{IO, UIO, URIO, ZIO}\ndef bookHotel: UIO[Unit] = IO.unit\ndef cancelHotel: UIO[Unit] = IO.unit\n\ndef bookTaxi: IO[String, Unit] = IO.unit\ndef cancelTaxi: IO[String, Unit] = IO.unit\n\ndef bookFlight: IO[String, Unit] = IO.unit\ndef cancelFlight: IO[String, Unit] = IO.unit\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import com.vladkopanev.zio.saga.Saga\nimport zio.{IO, UIO, URIO, ZIO}\n\nimport com.vladkopanev.zio.saga.Saga._\n\nval transaction: Saga[Any, String, Unit] =\n  for {\n    _ <- bookHotel compensate cancelHotel\n    _ <- bookTaxi compensate cancelTaxi\n    _ <- bookFlight compensate cancelFlight\n  } yield ()\n\nval myApp: ZIO[Any, String, Unit] = transaction.transact\n")))}u.isMDXComponent=!0}}]);