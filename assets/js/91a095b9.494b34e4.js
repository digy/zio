"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[65529],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={id:"with-scalaz-7x",title:"How to Interop with Scalaz 7.x?"},o=void 0,l={unversionedId:"guides/interop/with-scalaz-7x",id:"version-1.x/guides/interop/with-scalaz-7x",title:"How to Interop with Scalaz 7.x?",description:"ZIO Instances",source:"@site/versioned_docs/version-1.x/guides/interop/with-scalaz-7x.md",sourceDirName:"guides/interop",slug:"/guides/interop/with-scalaz-7x",permalink:"/version-1.x/guides/interop/with-scalaz-7x",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/guides/interop/with-scalaz-7x.md",tags:[],version:"1.x",frontMatter:{id:"with-scalaz-7x",title:"How to Interop with Scalaz 7.x?"}},s={},p=[{value:"<code>ZIO</code> Instances",id:"zio-instances",level:2},{value:"Example",id:"example",level:3},{value:"<code>ZIO</code> parallel <code>Applicative</code> instance",id:"zio-parallel-applicative-instance",level:2},{value:"Example",id:"example-1",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"zio-instances"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO")," Instances"),(0,r.kt)("p",null,"If you are a happy Scalaz 7.2 user ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-scalaz"},(0,r.kt)("inlineCode",{parentName:"a"},"interop-scala7x"))," module offers ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," instances for several typeclasses."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import scalaz._, Scalaz._\nimport zio.interop.scalaz72._\n\ntype Database = IList[User]\n\ndef findUser(id: UserId): ZIO[Database, UserError, User] = ...\ndef findUsers(ids: IList[UserId]): ZIO[Database, UserError, IList[User]] = ids.traverse(findUser(_))\n")),(0,r.kt)("h2",{id:"zio-parallel-applicative-instance"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO")," parallel ",(0,r.kt)("inlineCode",{parentName:"h2"},"Applicative")," instance"),(0,r.kt)("p",null,"Due to ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad")," coherence law ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," instance has to be implemented in terms of ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," hence when composing multiple effects using ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," they will be sequenced. To cope with that limitation ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," tagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"Parallel")," has an ",(0,r.kt)("inlineCode",{parentName:"p"},"Applicative")," instance which is not ",(0,r.kt)("inlineCode",{parentName:"p"},"Monad")," and operates in parallel."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import scalaz._, Scalaz._\nimport zio.interop.scalaz72._\n\ncase class Dashboard(details: UserDetails, history: TransactionHistory)\n\ndef getDetails(id: UserId): ZIO[Database, UserError, UserDetails] = ...\ndef getHistory(id: UserId): ZIO[Database, UserError, TransactionHistory] = ...\n\ndef buildDashboard(id: UserId): ZIO[Database, UserError, Dashboard] =\n  Tag.unwrap(^(par(getDetails(id)), par(getHistory(id)))(Dashboard.apply))\n\ndef par[R, E, A](io: ZIO[R, E, A]): scalaz72.ParIO[R, E, A] = Tag(io)\n")))}d.isMDXComponent=!0}}]);