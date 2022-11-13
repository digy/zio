"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[79280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},g),{},{components:n})):r.createElement(f,i({ref:t},g))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"testing",title:"Testing"},i=void 0,l={unversionedId:"testing",id:"testing",title:"Testing",description:"ZIO 2 test library has test logger implementation for testing:",source:"@site/node_modules/@zio.dev/zio-logging/testing.md",sourceDirName:".",slug:"/testing",permalink:"/zio-logging/testing",draft:!1,tags:[],version:"current",frontMatter:{id:"testing",title:"Testing"},sidebar:"sidebar",previous:{title:"SLF4J bridge",permalink:"/zio-logging/slf4j_bridge"}},s={},p=[],g={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ZIO 2 test library has test logger implementation for testing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-test" % ZioVersion % Test\n')),(0,o.kt)("p",null,"Test logger layer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"zio.test.ZTestLogger.default\n")),(0,o.kt)("p",null,"You can find the source code of examples ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples/src/test/scala/zio/logging/example"},"here")),(0,o.kt)("p",null,"Test example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.{ LogAnnotation, logContext }\nimport zio.test.Assertion._\nimport zio.test._\nimport zio.{ Chunk, LogLevel, Runtime, ZIO, ZIOAspect, _ }\n\nimport java.util.UUID\n\nobject LoggingSpec extends ZIOSpecDefault {\n\n  override def spec: Spec[TestEnvironment, Any] = suite("LoggingSpec")(\n    test("start stop log output") {\n      val users = Chunk.fill(2)(UUID.randomUUID())\n      for {\n        traceId      <- ZIO.succeed(UUID.randomUUID())\n        _            <- ZIO.foreach(users) { uId =>\n                          {\n                            ZIO.logInfo("Starting operation") *> ZIO.sleep(500.millis) *> ZIO.logInfo("Stopping operation")\n                          } @@ ZIOAspect.annotated("user", uId.toString)\n                        } @@ LogAnnotation.TraceId(traceId)\n        _            <- ZIO.logInfo("Done")\n        loggerOutput <- ZTestLogger.logOutput\n      } yield assertTrue(loggerOutput.size == 5) && assertTrue(\n        loggerOutput.forall(_.logLevel == LogLevel.Info)\n      ) && assert(loggerOutput.map(_.message()))(\n        equalTo(\n          Chunk(\n            "Starting operation",\n            "Stopping operation",\n            "Starting operation",\n            "Stopping operation",\n            "Done"\n          )\n        )\n      ) && assert(loggerOutput.map(_.context.get(logContext).flatMap(_.asMap.get(LogAnnotation.TraceId.name))))(\n        equalTo(\n          Chunk.fill(4)(Some(traceId.toString)) :+ None\n        )\n      ) && assert(loggerOutput.map(_.annotations.get("user")))(\n        equalTo(users.flatMap(u => Chunk.fill(2)(Some(u.toString))) :+ None)\n      )\n    }\n  ).provideLayer(\n    Runtime.removeDefaultLoggers >>> ZTestLogger.default\n  ) @@ TestAspect.withLiveClock\n}\n')))}u.isMDXComponent=!0}}]);