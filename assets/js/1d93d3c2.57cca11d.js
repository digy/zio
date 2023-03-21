"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28576],{3905:(e,n,o)=>{o.d(n,{Zo:()=>p,kt:()=>m});var r=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function g(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var a=r.createContext({}),f=function(e){var n=r.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},p=function(e){var n=f(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=f(o),s=t,m=u["".concat(a,".").concat(s)]||u[s]||c[s]||i;return o?r.createElement(m,l(l({ref:n},p),{},{components:o})):r.createElement(m,l({ref:n},p))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=o.length,l=new Array(i);l[0]=s;var g={};for(var a in n)hasOwnProperty.call(n,a)&&(g[a]=n[a]);g.originalType=e,g[u]="string"==typeof e?e:t,l[1]=g;for(var f=2;f<i;f++)l[f]=o[f];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},71124:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>g,toc:()=>f});var r=o(87462),t=(o(67294),o(3905));const i={id:"file-logger",title:"File Logger"},l=void 0,g={unversionedId:"zio-logging/file-logger",id:"zio-logging/file-logger",title:"File Logger",description:"logger layer with configuration from config provider:",source:"@site/docs/zio-logging/file-logger.md",sourceDirName:"zio-logging",slug:"/zio-logging/file-logger",permalink:"/zio-logging/file-logger",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/file-logger.md",tags:[],version:"current",frontMatter:{id:"file-logger",title:"File Logger"},sidebar:"ecosystem-sidebar",previous:{title:"Console Logger",permalink:"/zio-logging/console-logger"},next:{title:"Java Platform/System Logger",permalink:"/zio-logging/jpl"}},a={},f=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"File Logger",id:"file-logger",level:3}],p={toc:f},u="wrapper";function c(e){let{components:n,...o}=e;return(0,t.kt)(u,(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"logger layer with configuration from config provider:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.logging.fileLogger\nimport zio.{ ConfigProvider, Runtime }\n\nval configProvider: ConfigProvider = ???\n\nval logger = Runtime.removeDefaultLoggers >>> Runtime.setConfigProvider(configProvider) >>> fileLogger(configPath = "logger")\n')),(0,t.kt)("p",null,"logger layer with given configuration:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.{ fileLogger, FileLoggerConfig }\nimport zio.Runtime\n\nval config: FileLoggerConfig = ???\n\nval logger = Runtime.removeDefaultLoggers >>> fileLogger(config)\n")),(0,t.kt)("p",null,"there are other versions of file loggers:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"zio.logging.fileJsonLogger")," - output in json format"),(0,t.kt)("li",{parentName:"ul"},"file async:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"zio.logging.fileAsynLogger")," - output in string format"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"zio.logging.fileAsyncJsonLogger")," - output in json format")))),(0,t.kt)("h2",{id:"configuration"},"Configuration"),(0,t.kt)("p",null,"the configuration for file logger (",(0,t.kt)("inlineCode",{parentName:"p"},"zio.logging.FileLoggerConfig"),") has the following configuration structure:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'logger {\n  # log format, default value: LogFormat.default\n  format = "%label{timestamp}{%fixed{32}{%timestamp}} %label{level}{%level} %label{thread}{%fiberId} %label{message}{%message} %label{cause}{%cause}"\n  \n  # URI to file\n  path = "file:///tmp/console_app.log"\n    \n  # charset configuration, default value: UTF-8\n  charset = "UTF-8"\n\n  # auto flush batch size, default value: 1\n  autoFlushBatchSize = 1\n\n  # if defined, buffered writer is used, with given buffer size\n  # bufferedIOSize = 8192\n  \n  filter {\n    # see filter configuration\n    rootLevel = INFO\n  }\n}\n')),(0,t.kt)("p",null,"see also ",(0,t.kt)("a",{parentName:"p",href:"/zio-logging/formatting-log-records#log-format-configuration"},"log format configuration")," and ",(0,t.kt)("a",{parentName:"p",href:"/zio-logging/log-filter#configuration"},"filter configuration")),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("p",null,"You can find the source code ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples"},"here")),(0,t.kt)("h3",{id:"file-logger"},"File Logger"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.config.typesafe.TypesafeConfigProvider\nimport zio.logging.fileLogger\nimport zio.{ Config, ConfigProvider, ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, ZLayer }\n\nobject FileApp extends ZIOAppDefault {\n\n  val configString: String =\n    s"""\n       |logger {\n       |  format = "%timestamp{yyyy-MM-dd\'T\'HH:mm:ssZ} %fixed{7}{%level} [%fiberId] %name:%line %message %cause"\n       |  path = "file:///tmp/file_app.log"\n       |}\n       |""".stripMargin\n\n  val configProvider: ConfigProvider = TypesafeConfigProvider.fromHoconString(configString)\n\n  override val bootstrap: ZLayer[Any, Config.Error, Unit] =\n    Runtime.removeDefaultLoggers >>> Runtime.setConfigProvider(configProvider) >>> fileLogger()\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _ <- ZIO.logInfo("Start")\n      _ <- ZIO.fail("FAILURE")\n      _ <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n}\n')),(0,t.kt)("p",null,"Expected file content:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'2023-03-05T12:37:31+0100 INFO    [zio-fiber-4] zio.logging.example.FileApp:40 Start\n2023-03-05T12:37:31+0100 ERROR   [zio-fiber-0] zio-logger:  Exception in thread "zio-fiber-4" java.lang.String: FAILURE\n        at zio.logging.example.FileApp.run(FileApp.scala:41)\n')))}c.isMDXComponent=!0}}]);