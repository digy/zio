"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[40516],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=g(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var g=2;g<l;g++)i[g]=n[g];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>g});var o=n(87462),a=(n(67294),n(3905));const l={id:"tofu-zio2-logging",title:"Tofu ZIO 2 Logging"},i=void 0,r={unversionedId:"ecosystem/community/tofu-zio2-logging",id:"ecosystem/community/tofu-zio2-logging",title:"Tofu ZIO 2 Logging",description:"Tofu is a functional toolkit modules providing  a comprehensive set of tools adressing real-world problems through the prism of the tagless-final approach and functional programming in general.",source:"@site/docs/ecosystem/community/tofu-zio2-logging.md",sourceDirName:"ecosystem/community",slug:"/ecosystem/community/tofu-zio2-logging",permalink:"/ecosystem/community/tofu-zio2-logging",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/community/tofu-zio2-logging.md",tags:[],version:"current",frontMatter:{id:"tofu-zio2-logging",title:"Tofu ZIO 2 Logging"},sidebar:"ecosystem-sidebar",previous:{title:"tamer",permalink:"/ecosystem/community/tamer"},next:{title:"TranzactIO",permalink:"/ecosystem/community/tranzactio"}},s={},g=[{value:"Installation",id:"installation",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"ZLogAnnotation and TofuDefaultContext",id:"zlogannotation-and-tofudefaultcontext",level:3},{value:"Loggable",id:"loggable",level:3}],u={toc:g},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.tofu.tf/"},"Tofu")," is a functional toolkit modules providing  a comprehensive set of tools adressing real-world problems through the prism of the tagless-final approach and functional programming in general.\nTofu consists of several independent modules, one of them is ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.home"},"Tofu Logging"),", which provides first-class ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.recipes.zio2"},"ZIO support"),". "),(0,a.kt)("p",null,"Key features of Tofu Logging:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"100% structured logging"),": you can easily log json-s with nested objects, arrays, numeric and boolean fields. "),(0,a.kt)("li",{parentName:"ul"},"logging context: implemented on top of ",(0,a.kt)("inlineCode",{parentName:"li"},"FiberRef"),"."),(0,a.kt)("li",{parentName:"ul"},"built upon ",(0,a.kt)("a",{parentName:"li",href:"https://logback.qos.ch/"},"Logback"),", supports ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logfellow/logstash-logback-encoder"},"logstash-logback-encoder"),".")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Add the following lines in your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "tf.tofu" %% "tofu-zio2-logging" % "version"\n')),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable")," derivation (see below):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "tf.tofu" %% "tofu-logging-derivation" % "version"\n')),(0,a.kt)("p",null,"And choose a logback layout: Tofu's own implementation or logstash-encoder. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.layouts"},"Read more")," about layouts configuration. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "tf.tofu" %% "tofu-logging-logstash-logback" % "version" \n// OR:\nlibraryDependencies += "tf.tofu" %% "tofu-logging-layout" % "version"\n')),(0,a.kt)("h2",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"To use Tofu with ZIO logging facade just add ",(0,a.kt)("inlineCode",{parentName:"p"},"TofuZLogger")," to your app runtime:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import tofu.logging.zlogs._\nimport zio._\n\nobject Main extends ZIOAppDefault {\n  val program: UIO[Unit] = ZIO.log("Hello, ZIO logging!")\n\n  override def run = {\n    program.logSpan("full_app") @@ ZIOAspect.annotated("foo", "bar")\n  }.provide(\n    Runtime.removeDefaultLoggers,\n    TofuZLogger.addToRuntime\n  )\n}\n')),(0,a.kt)("p",null,"The log message will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "level":"INFO",\n  "logger_name":"my.package.Main",\n  "message":"Hello, ZIO logging!",\n  "zSpans":{\n    "full_app":534\n  },\n  "zAnnotations":{\n    "foo":"bar"\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"logger_name")," is parsed from ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.Trace")," which contains the location where log method is called"),(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.LogSpan")," are collected in the json object named ",(0,a.kt)("strong",{parentName:"li"},"zSpans")),(0,a.kt)("li",{parentName:"ul"},"all ",(0,a.kt)("inlineCode",{parentName:"li"},"zio.LogAnnotation")," are collected in the json object named ",(0,a.kt)("strong",{parentName:"li"},"zAnnotations")," (to avoid conflicts with Tofu\nannotations)")),(0,a.kt)("h3",{id:"zlogannotation-and-tofudefaultcontext"},"ZLogAnnotation and TofuDefaultContext"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZLogAnnotation")," allows you to store typed, structured data on the default logging context (implemented on ",(0,a.kt)("inlineCode",{parentName:"p"},"FiberRef"),"). It also solves another problem:\nhaving a list of annotations in front of your eyes, you can easily make sure that the same names are not assigned to different values (which can lead to an invalid json and corrupt your structured logs).\nThat's why we recommend to group all your log annotations in one place."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TofuDefaultContext")," is a service which allows to look up an element from the context added via ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLogAnnotation"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait TofuDefaultContext {\n  def getValue[A](key: LogAnnotation[A]): UIO[Option[A]]\n}\n")),(0,a.kt)("p",null,"It has two implementations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TofuDefaultContext.layerZioContextOff: ULayer[TofuDefaultContext]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TofuDefaultContext.layerZioContextOn: ULayer[TofuDefaultContext]"))),(0,a.kt)("p",null,"It doesn't matter which one to use with ZIO Logging facade. The difference will be only when working\nwith Tofu's own loggers and using ",(0,a.kt)("inlineCode",{parentName:"p"},"TofuDefaultContext")," as a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.recipes.zio2#contextprovider"},"ContextProvider"),"\n(this feature is Tofu-specific, and we won't cover it here). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val httpCode: ZLogAnnotation[Int] = ZLogAnnotation.make("httpCode")\n\nval program: UIO[Unit] = {\n  for {\n    _ <- ZIO.log("Hello, ZIO logging!")\n    maybeCode <- ZIO.serviceWithZIO[TofuDefaultContext](_.getValue(httpCode)) // Some(204)\n  } yield ()\n}.provide(TofuDefaultContext.layerZioContextOn) @@ httpCode(204) @@ ZLogAnnotation.loggerName("MyLogger")\n')),(0,a.kt)("p",null,"will produce:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "level": "INFO",\n  "logger_name": "MyLogger",\n  "message": "Hello, ZIO logging!",\n  "httpCode": 204\n}\n')),(0,a.kt)("p",null,"You can change the logger name via ",(0,a.kt)("inlineCode",{parentName:"p"},"ZLogAnnotation.loggerName"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZLogAnnotation.make[A](name: String)")," implicitly requires a ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable[A]")," instance."),(0,a.kt)("h3",{id:"loggable"},"Loggable"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Loggable[A]")," is a typeclass that describes how a value of some type can be logged.\nGiven an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable")," for a type, a value of the type can be converted into the final internal representation called ",(0,a.kt)("inlineCode",{parentName:"p"},"LoggedValue")," and thus logged in a way that you provided.\nThere are multiple predefined ways to create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable"),", many of them can be found in ",(0,a.kt)("inlineCode",{parentName:"p"},"tofu.logging.Loggable")," object:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"provided instances for all primitive types, as well as stdlib's collections and collections from Cats"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Loggable.empty")," for no-op logging of value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Loggable.either")," for logging either of A and B"),(0,a.kt)("li",{parentName:"ul"},"provided ",(0,a.kt)("inlineCode",{parentName:"li"},"java.time.*")," instances")),(0,a.kt)("p",null,"Of course, you can describe your ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable")," instance yourself:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"by extending trait ",(0,a.kt)("inlineCode",{parentName:"li"},"DictLoggable")," for multi-field objects"),(0,a.kt)("li",{parentName:"ul"},"using ",(0,a.kt)("inlineCode",{parentName:"li"},"Loggable[A]#contramap[B](f: B => A)")," method"),(0,a.kt)("li",{parentName:"ul"},"using configurable auto derivation")),(0,a.kt)("p",null,"Tofu has a macros that allows you to easily derive instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable[YourClass]")," for case classes or ADTs.\nIn additional, there are several annotations to configure generation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Loggable"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@hidden"),': when applied to the field means "do not log\\write this field"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@masked"),': when applied to the field means "mask field value with given mode"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@unembed"),': when applied to the field means "log subfields along with fields of owner"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import tofu.logging.derivation._\nimport tofu.logging.derivation.loggable.generate\nimport tofu.logging.zlogs._\nimport zio._\n\ncase class User(\n  id: Int,\n  @hidden\n  password: String,\n  @masked(MaskMode.ForLength(3))\n  login: String,\n  godMode: Boolean = false\n)\n\nval user = User(100, "secret", "username")\nval userAnnotation: ZLogAnnotation[User] = ZLogAnnotation.make("user")\n\nval program: UIO[Unit] =\n  ZIO.log("Hello, ZIO logging!") @@ userAnnotation(user)\n')),(0,a.kt)("p",null,"The output of this program will be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "level":"INFO",\n  "logger_name":"my.package.Main",\n  "message":"Hello, ZIO logging!",\n  "user":{\n    "id":100,\n    "login":"use*****",\n    "godMode":false\n  }\n}\n')),(0,a.kt)("p",null,"Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tofu.tf/docs/tofu.logging.loggable"},"the website"),"."))}c.isMDXComponent=!0}}]);