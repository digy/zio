"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7662],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"operations",title:"Sink Operations"},o=void 0,p={unversionedId:"reference/stream/zsink/operations",id:"reference/stream/zsink/operations",title:"Sink Operations",description:"Having created the sink, we can transform it with provided operations.",source:"@site/docs/reference/stream/zsink/operations.md",sourceDirName:"reference/stream/zsink",slug:"/reference/stream/zsink/operations",permalink:"/reference/stream/zsink/operations",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/stream/zsink/operations.md",tags:[],version:"current",frontMatter:{id:"operations",title:"Sink Operations"},sidebar:"reference-sidebar",previous:{title:"Creating Sinks",permalink:"/reference/stream/zsink/creating-sinks"},next:{title:"Parallel Operators",permalink:"/reference/stream/zsink/parallel-operators"}},s={},c=[{value:"contramap",id:"contramap",level:2},{value:"dimap",id:"dimap",level:2},{value:"Filtering",id:"filtering",level:2}],l={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Having created the sink, we can transform it with provided operations."),(0,a.kt)("h2",{id:"contramap"},"contramap"),(0,a.kt)("p",null,"Contramap is a simple combinator to change the domain of an existing function. While ",(0,a.kt)("em",{parentName:"p"},"map")," changes the co-domain of a function, the ",(0,a.kt)("em",{parentName:"p"},"contramap")," changes the domain of a function. So the ",(0,a.kt)("em",{parentName:"p"},"contramap")," takes a function and maps over its input."),(0,a.kt)("p",null,"This is useful when we have a fixed output, and our existing function cannot consume those outputs. So we can use ",(0,a.kt)("em",{parentName:"p"},"contramap")," to create a new function that can consume that fixed output. Assume we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink.sum")," that sums incoming numeric values, but we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," values. We can convert the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink.sum")," to a sink that can consume ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," values;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\nval numericSum: ZSink[Any, Nothing, Int, Nothing, Int]    = \n  ZSink.sum[Int]\nval stringSum : ZSink[Any, Nothing, String, Nothing, Int] = \n  numericSum.contramap((x: String) => x.toInt)\n\nval sum: ZIO[Any, Nothing, Int] =\n  ZStream("1", "2", "3", "4", "5").run(stringSum)\n// Output: 15\n')),(0,a.kt)("h2",{id:"dimap"},"dimap"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"dimap")," is an extended ",(0,a.kt)("inlineCode",{parentName:"p"},"contramap")," that additionally transforms sink's output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.stream._\n\n// Convert its input to integers, do the computation and then convert them back to a string\nval sumSink: ZSink[Any, Nothing, String, Nothing, String] =\n  numericSum.dimap[String, String](_.toInt, _.toString)\n  \nval sum: ZIO[Any, Nothing, String] =\n  ZStream("1", "2", "3", "4", "5").run(sumSink)\n// Output: 15\n')),(0,a.kt)("h2",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"Sinks have ",(0,a.kt)("inlineCode",{parentName:"p"},"ZSink#filterInput")," for filtering incoming elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stream._\n\nZStream(1, -2, 0, 1, 3, -3, 4, 2, 0, 1, -3, 1, 1, 6)\n  .transduce(\n    ZSink\n      .collectAllN[Int](3)\n      .filterInput[Int](_ > 0)\n  )\n// Output: Chunk(Chunk(1,1,3),Chunk(4,2,1),Chunk(1,1,6),Chunk())\n")))}m.isMDXComponent=!0}}]);