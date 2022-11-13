"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[66820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"overview_running_effects",title:"Running Effects"},a=void 0,l={unversionedId:"overview/overview_running_effects",id:"version-1.x/overview/overview_running_effects",title:"Running Effects",description:"ZIO provides several different ways of running effects in your application.",source:"@site/versioned_docs/version-1.x/overview/running_effects.md",sourceDirName:"overview",slug:"/overview/overview_running_effects",permalink:"/version-1.x/overview/overview_running_effects",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/overview/running_effects.md",tags:[],version:"1.x",frontMatter:{id:"overview_running_effects",title:"Running Effects"},sidebar:"overview-sidebar",previous:{title:"Testing Effects",permalink:"/version-1.x/overview/overview_testing_effects"},next:{title:"Background",permalink:"/version-1.x/overview/overview_background"}},u={},p=[{value:"App",id:"app",level:2},{value:"Default Runtime",id:"default-runtime",level:2},{value:"Custom Runtime",id:"custom-runtime",level:2},{value:"Error Reporting",id:"error-reporting",level:2},{value:"Next Steps",id:"next-steps",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO provides several different ways of running effects in your application."),(0,o.kt)("h2",{id:"app"},"App"),(0,o.kt)("p",null,"If you construct a single effect for your whole program, then the most natural way to run the effect is to extend ",(0,o.kt)("inlineCode",{parentName:"p"},"zio.App"),". "),(0,o.kt)("p",null,"This class provides Scala with a main function, so it can be called from IDEs and launched from the command-line. All you have to do is implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method, which will be passed all command-line arguments in a ",(0,o.kt)("inlineCode",{parentName:"p"},"List"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.console._\n\nobject MyApp extends zio.App {\n\n  def run(args: List[String]) =\n    myAppLogic.exitCode\n\n  val myAppLogic =\n    for {\n      _    <- putStrLn("Hello! What is your name?")\n      name <- getStrLn\n      _    <- putStrLn(s"Hello, ${name}, welcome to ZIO!")\n    } yield ()\n}\n')),(0,o.kt)("p",null,"If you are using a custom environment for your application, you will have to supply your environment to the effect (using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide"),") before you return it from ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),", because ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," does not know how to supply custom environments."),(0,o.kt)("h2",{id:"default-runtime"},"Default Runtime"),(0,o.kt)("p",null,"Most applications are not greenfield, and must integrate with legacy code, and procedural libraries and frameworks."),(0,o.kt)("p",null,"In these cases, a better solution for running effects is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime"),", which can be passed around and used to run effects wherever required."),(0,o.kt)("p",null,"ZIO contains a default runtime called ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime.default"),". This ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," bundles together production implementations of all ZIO modules (including ",(0,o.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Random"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Scheduler"),", and on the JVM, ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocking"),"), and it can run effects that require any combination of these modules."),(0,o.kt)("p",null,"To access it, merely use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val runtime = Runtime.default\n")),(0,o.kt)("p",null,"Once you have a runtime, you can use it to execute effects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'runtime.unsafeRun(ZIO(println("Hello World!")))\n')),(0,o.kt)("p",null,"In addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafeRun")," method, there are other methods that allow executing effects asynchronously or into ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," values."),(0,o.kt)("h2",{id:"custom-runtime"},"Custom Runtime"),(0,o.kt)("p",null,"If you are using a custom environment for your application, then you may find it useful to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," specifically tailored for that environment."),(0,o.kt)("p",null,"A custom ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime[R]")," can be created with two values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"R")," Environment"),". This is the environment that will be provided to effects when they are executed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Platform")),". This is a platform that is required by ZIO in order to bootstrap the runtime system.")),(0,o.kt)("p",null,"For example, the following creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," that can provide an ",(0,o.kt)("inlineCode",{parentName:"p"},"Int")," to effects, using the default ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform")," provided by ZIO:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.internal.Platform\n\nval myRuntime: Runtime[Int] = Runtime(42, Platform.default)\n")),(0,o.kt)("h2",{id:"error-reporting"},"Error Reporting"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform")," that is a part of every runtime, there is an error reporter that will be called by ZIO to report every unhandled error. It is a good idea to supply your own error reporter, which can log unhandled errors to a file."),(0,o.kt)("p",null,"The default unhandled error reporter merely logs the error to standard error."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"If you are comfortable with running effects, then congratulations!"),(0,o.kt)("p",null,"You are now ready to dive into other sections on the ZIO website, covering data types, use cases, and interop with other systems. "),(0,o.kt)("p",null,"Refer to the Scaladoc for detailed documentation on all the core ZIO types and methods."))}c.isMDXComponent=!0}}]);