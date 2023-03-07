"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[47061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={id:"index",title:"Getting Started with ZIO Config",sidebar_label:"Getting Started"},r=void 0,s={unversionedId:"zio-config/index",id:"zio-config/index",title:"Getting Started with ZIO Config",description:"ZIO Config is a ZIO-based library for loading and parsing configuration sources.",source:"@site/docs/zio-config/index.md",sourceDirName:"zio-config",slug:"/zio-config/",permalink:"/zio-config/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-config/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started with ZIO Config",sidebar_label:"Getting Started"},sidebar:"ecosystem-sidebar",previous:{title:"Entry Statistics",permalink:"/zio-cache/entry-statistics"},next:{title:"Getting Started",permalink:"/zio-config/"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zio.github.io/zio-config/"},"ZIO Config")," is a ZIO-based library for loading and parsing configuration sources."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ZIO Config")," acts an extension to ZIO's ",(0,a.kt)("inlineCode",{parentName:"p"},"Config")," with documentation support, with more complex data-sources, backed by an ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedFlat"),"\nMost of the configuration sources are relying on ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedFlat"),"."),(0,a.kt)("p",null,"More documentation around ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexedFlat")," (an extension of  ZIO's  ",(0,a.kt)("inlineCode",{parentName:"p"},"ConfigProvider.Flat"),")\nto handle more complex sources will be provided soon."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,a.kt)("img",{parentName:"p",src:"https://github.com/zio/zio-config/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,a.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-config_2.13/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-config_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-config_2.13/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-config_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-config-docs_2.13"},(0,a.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-config-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-config"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/zio-config?style=social",alt:"ZIO Config"}))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The library aims to have a powerful & purely functional, yet a thin interface to access configuration information inside an application.\nNote that some of the DSL's have been moved to core ZIO now."),(0,a.kt)("p",null,"The ZIO Config has a lot of features, and it is more than just a config parsing library. Let's enumerate some key features of this library:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support for Various Sources")," \u2014 It can read/write flat or nested configurations from/to various formats and sources."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatic Document Generation")," \u2014 It can auto-generate documentation of configurations. So developers or DevOps engineers know how to configure the application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatic Derivation")," \u2014 It has built-in support for automatic derivation of readers and writers for case classes and sealed traits."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type-level Constraints and Automatic Validation")," \u2014 because it supports ",(0,a.kt)("em",{parentName:"li"},"Refined")," types, we can write type-level predicates which constrain the set of values described for data types."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Descriptive Errors")," \u2014 It accumulates all errors and reports all of them to the user rather than failing fast.")),(0,a.kt)("p",null,"Using a single definition of configuration requirements, which can be derived automatically from your data types, ",(0,a.kt)("em",{parentName:"p"},"ZIO Config")," offers a bundle of features for free:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read flat or nested config data from any format"),(0,a.kt)("li",{parentName:"ul"},"Automatically generate documentation so devs / devops know how to configure the application")),(0,a.kt)("p",null,"If you are only interested in automatic derivation of configuration, find the details ",(0,a.kt)("a",{parentName:"p",href:"http://zio.dev/zio-config/automatic-derivation-of-config-descriptor"},"here"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config" % "4.0.0-RC11" \n')),(0,a.kt)("p",null,"There are also some optional dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Optional Dependency with magnolia module (Auto derivation)\nlibraryDependencies += "dev.zio" %% "zio-config-magnolia" % "4.0.0-RC11"\n\n// Optional Dependency with refined module (Integration with refined library)\nlibraryDependencies += "dev.zio" %% "zio-config-refined" % "4.0.0-RC11"\n\n// Optional Dependency with typesafe module (HOCON/Json source)\nlibraryDependencies += "dev.zio" %% "zio-config-typesafe" % "4.0.0-RC11"\n\n// Optional Dependency with yaml module (Yaml source)\nlibraryDependencies += "dev.zio" %% "zio-config-yaml" % "4.0.0-RC11"\n\n// Optional Dependency for a random generation of a config\nlibraryDependencies += "dev.zio" %% "zio-config-gen" % "4.0.0-RC11"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's add these four lines to our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file as we are using these modules in our example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config"          % "4.0.0-RC11"\nlibraryDependencies += "dev.zio" %% "zio-config-magnolia" % "4.0.0-RC11"\nlibraryDependencies += "dev.zio" %% "zio-config-typesafe" % "4.0.0-RC11"\nlibraryDependencies += "dev.zio" %% "zio-config-refined"  % "4.0.0-RC11"\n')),(0,a.kt)("p",null,"There are many examples in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-config/tree/master/examples/shared/src/main/scala/zio/config/examples"},"here")," straight away as well."),(0,a.kt)("p",null,"Try out ",(0,a.kt)("em",{parentName:"p"},"ZIO Config")," quickly in ",(0,a.kt)("a",{parentName:"p",href:"https://scastie.scala-lang.org/WMlkdQeZQvm4yDyZ0pigJA"},"Scastie"),", which comes pre-loaded with an example in scala-3. We try to make sure the scastie-buildsettings are updated with latest version of ",(0,a.kt)("em",{parentName:"p"},"ZIO Config"),"."))}u.isMDXComponent=!0}}]);