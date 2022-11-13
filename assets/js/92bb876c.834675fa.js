"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[16347],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={id:"getting_started",title:"Getting Started"},i=void 0,l={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Include ZIO in your project by adding the following to your build.sbt file:",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/getting_started",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/getting_started.md",tags:[],version:"current",frontMatter:{id:"getting_started",title:"Getting Started"}},p={},u=[{value:"Main",id:"main",level:2},{value:"Console",id:"console",level:2},{value:"Learning More",id:"learning-more",level:2}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Include ZIO in your project by adding the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'libraryDependencies += "dev.zio" %% "zio" % "2.0.3"\n')),(0,o.kt)("p",null,"If you want to use ZIO streams, you should also include the following dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'libraryDependencies += "dev.zio" %% "zio-streams" % "2.0.3"\n')),(0,o.kt)("h2",{id:"main"},"Main"),(0,o.kt)("p",null,"Your application can extend ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault"),", which provides a complete runtime system and allows you to write your whole program using ZIO:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console._\n\nobject MyApp extends ZIOAppDefault {\n\n  def run = myAppLogic\n\n  val myAppLogic =\n    for {\n      _    <- printLine("Hello! What is your name?")\n      name <- readLine\n      _    <- printLine(s"Hello, ${name}, welcome to ZIO!")\n    } yield ()\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method should return a ZIO value which has all its errors handled,",(0,o.kt)("br",{parentName:"p"}),"\n","which, in ZIO parlance, is an unexceptional ZIO value.  "),(0,o.kt)("p",null,"One way to do this is to invoke ",(0,o.kt)("inlineCode",{parentName:"p"},"fold")," over a ZIO value, to get an unexceptional ZIO value.\nThat requires two handler functions: ",(0,o.kt)("inlineCode",{parentName:"p"},"eh: E => B")," (the error handler) and ",(0,o.kt)("inlineCode",{parentName:"p"},"ah: A => B")," (the success handler)."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"myAppLogic")," fails, ",(0,o.kt)("inlineCode",{parentName:"p"},"eh")," will be used to get from ",(0,o.kt)("inlineCode",{parentName:"p"},"e: E")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"b: B"),";\nif it succeeds, ",(0,o.kt)("inlineCode",{parentName:"p"},"ah")," will be used to get from ",(0,o.kt)("inlineCode",{parentName:"p"},"a: A")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"b: B"),". "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"myAppLogic"),", as folded above, produces an unexceptional ZIO value, with ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," being ",(0,o.kt)("inlineCode",{parentName:"p"},"Int"),".",(0,o.kt)("br",{parentName:"p"}),"\n","If ",(0,o.kt)("inlineCode",{parentName:"p"},"myAppLogic")," fails, there will be a 1; if it succeeds, there will be a 0."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you are integrating ZIO into an existing application, using dependency injection, or do not control your main function, then you can create a runtime system in order to execute your ZIO programs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject IntegrationExample {\n  val runtime = Runtime.default\n\n  Unsafe.unsafe { implicit unsafe =>\n    runtime.unsafe.run(ZIO.attempt(println("Hello World!"))).getOrThrowFiberFailure()\n  }\n}\n')),(0,o.kt)("p",null,"Ideally, your application should have a ",(0,o.kt)("em",{parentName:"p"},"single")," runtime, because each runtime has its own resources (including thread pool and unhandled error reporter)."),(0,o.kt)("h2",{id:"console"},"Console"),(0,o.kt)("p",null,"ZIO provides a module for interacting with the console. You can import the functions in this module with the following code snippet:"),(0,o.kt)("p",null,"If you need to print text to the console, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"print")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"printLine"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\n// Print without trailing line break\nConsole.print("Hello World")\n\n// Print string and include trailing line break\nConsole.printLine("Hello World")\n')),(0,o.kt)("p",null,"If you need to read input from the console, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"readLine"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval echo = Console.readLine.flatMap(line => Console.printLine(line))\n")),(0,o.kt)("h2",{id:"learning-more"},"Learning More"),(0,o.kt)("p",null,"To learn more about ZIO, see the ",(0,o.kt)("a",{parentName:"p",href:"/overview/"},"Overview"),"."))}s.isMDXComponent=!0}}]);