"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[85943],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},23048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const l={id:"rezilience",title:"Rezilience"},a=void 0,o={unversionedId:"ecosystem/community/rezilience",id:"ecosystem/community/rezilience",title:"Rezilience",description:"Rezilience is a ZIO-native library for making resilient distributed systems.",source:"@site/docs/ecosystem/community/rezilience.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/rezilience",permalink:"/ecosystem/community/rezilience",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/rezilience.md",tags:[],version:"current",frontMatter:{id:"rezilience",title:"Rezilience"},sidebar:"ecosystem-sidebar",previous:{title:"Quill",permalink:"/ecosystem/community/quill"},next:{title:"tamer",permalink:"/ecosystem/community/tamer"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/svroonland/rezilience"},"Rezilience")," is a ZIO-native library for making resilient distributed systems."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Rezilience is a ZIO-native fault tolerance library with a collection of policies for making asynchronous systems more resilient to failures inspired by Polly, Resilience4J, and Akka. It does not have external library dependencies other than ZIO."),(0,i.kt)("p",null,"It comprises these policies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CircuitBreaker")," \u2014 Temporarily prevent trying calls after too many failures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RateLimiter")," \u2014 Limit the rate of calls to a system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bulkhead")," \u2014 Limit the number of in-flight calls to a system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retry")," \u2014 Try again after transient failures"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Timeout")," \u2014 Interrupt execution if a call does not complete in time")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "nl.vroste" %% "rezilience" % "<version>"\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's try an example of writing ",(0,i.kt)("em",{parentName:"p"},"Circuit Breaker")," policy for calling an external API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import nl.vroste.rezilience.CircuitBreaker.{CircuitBreakerCallError, State}\nimport nl.vroste.rezilience._\nimport zio._\nimport zio.clock.Clock\nimport zio.console.{Console, putStrLn}\nimport zio.duration._\n\nobject CircuitBreakerExample extends zio.App {\n\n  def callExternalSystem: ZIO[Console, String, Nothing] =\n    putStrLn("External service called, but failed!").orDie *>\n      ZIO.fail("External service failed!")\n\n  val myApp: ZIO[Console with Clock, Nothing, Unit] =\n    CircuitBreaker.withMaxFailures(\n      maxFailures = 10,\n      resetPolicy = Schedule.exponential(1.second),\n      onStateChange = (state: State) =>\n        ZIO(println(s"State changed to $state")).orDie\n    ).use { cb =>\n      for {\n        _ <- ZIO.foreach_(1 to 10)(_ => cb(callExternalSystem).either)\n        _ <- cb(callExternalSystem).catchAll(errorHandler)\n        _ <- ZIO.sleep(2.seconds)\n        _ <- cb(callExternalSystem).catchAll(errorHandler)\n      } yield ()\n    }\n\n  def errorHandler: CircuitBreakerCallError[String] => URIO[Console, Unit] = {\n    case CircuitBreaker.CircuitBreakerOpen =>\n      putStrLn("Circuit breaker blocked the call to our external system").orDie\n    case CircuitBreaker.WrappedError(error) =>\n      putStrLn(s"External system threw an exception: $error").orDie\n  }\n  \n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp.exitCode\n}\n')))}u.isMDXComponent=!0}}]);