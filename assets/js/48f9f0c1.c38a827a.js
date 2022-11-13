"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[94469],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var o=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),g=t,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return a?o.createElement(m,r(r({ref:n},p),{},{components:a})):o.createElement(m,r({ref:n},p))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48138:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(87462),t=(a(67294),a(3905));const i={id:"index",title:"Getting Started with ZIO Config",sidebar_label:"Getting Started"},r=void 0,s={unversionedId:"index",id:"index",title:"Getting Started with ZIO Config",description:"The library aims to have a powerful & purely functional, yet a thin interface to access configuration information inside an application.",source:"@site/node_modules/@zio.dev/zio-config/index.md",sourceDirName:".",slug:"/",permalink:"/zio-config/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started with ZIO Config",sidebar_label:"Getting Started"},sidebar:"sidebar",next:{title:"Manual creation of ConfigDescriptor",permalink:"/zio-config/manual-creation-of-config-descriptor"}},l={},c=[{value:"Adding dependency",id:"adding-dependency",level:2},{value:"Optional Dependency with magnolia module (Auto derivation)",id:"optional-dependency-with-magnolia-module-auto-derivation",level:5},{value:"Optional Dependency with refined module (Integration with refined library)",id:"optional-dependency-with-refined-module-integration-with-refined-library",level:5},{value:"Optional Dependency with typesafe module (HOCON/Json source)",id:"optional-dependency-with-typesafe-module-hoconjson-source",level:5},{value:"Optional Dependency with yaml module (Yaml source)",id:"optional-dependency-with-yaml-module-yaml-source",level:5},{value:"Optional Dependency for a random generation of a config",id:"optional-dependency-for-a-random-generation-of-a-config",level:5},{value:"Describe the config by hand",id:"describe-the-config-by-hand",level:2},{value:"Fully automated Config Description",id:"fully-automated-config-description",level:2},{value:"Read config from various sources",id:"read-config-from-various-sources",level:2},{value:"How to use config descriptor",id:"how-to-use-config-descriptor",level:2},{value:"Readers from configdescriptor",id:"readers-from-configdescriptor",level:3},{value:"Documentations using ConfigDescriptor",id:"documentations-using-configdescriptor",level:3},{value:"Writers from ConfigDescriptor",id:"writers-from-configdescriptor",level:3},{value:"Report generation from ConfigDescriptor",id:"report-generation-from-configdescriptor",level:3},{value:"Generate a random config",id:"generate-a-random-config",level:4},{value:"Accumulating all errors",id:"accumulating-all-errors",level:3},{value:"Config is your ZIO environment",id:"config-is-your-zio-environment",level:2},{value:"Separation of concerns with <code>narrow</code>",id:"separation-of-concerns-with-narrow",level:3},{value:"What&#39;s new in zio-config-3.x ?",id:"whats-new-in-zio-config-3x-",level:3},{value:"Removed <code>DeriveConfigDescriptor</code> and <code>SealedTraitStrategy</code>",id:"removed-deriveconfigdescriptor-and-sealedtraitstrategy",level:2},{value:"Custom keys is just about changing <code>ConfigDescriptor</code>",id:"custom-keys-is-just-about-changing-configdescriptor",level:2},{value:"Example:",id:"example",level:3},{value:"Inbuilt support for pure-config",id:"inbuilt-support-for-pure-config",level:2},{value:"Allow concise config source strings",id:"allow-concise-config-source-strings",level:2},{value:"Your ConfigSource is exactly your product and coproduct",id:"your-configsource-is-exactly-your-product-and-coproduct",level:2},{value:"Example:",id:"example-1",level:3},{value:"More composable <code>Descriptor</code>",id:"more-composable-descriptor",level:2}],p={toc:c};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,o.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"The library aims to have a powerful & purely functional, yet a thin interface to access configuration information inside an application.\nThere are many examples in ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-config/tree/master/examples/shared/src/main/scala/zio/config/examples"},"here")," straight away as well."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Note that this documentation is for 1.x series. For newer versions, please refer to ",(0,t.kt)("a",{parentName:"strong",href:"https://github.com/zio/zio-config/tree/master/docs"},"docs")," section in GitHub.")),(0,t.kt)("h2",{id:"adding-dependency"},"Adding dependency"),(0,t.kt)("p",null,"If you are using sbt:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config" % 3.0.4\n')),(0,t.kt)("h5",{id:"optional-dependency-with-magnolia-module-auto-derivation"},"Optional Dependency with magnolia module (Auto derivation)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config-magnolia" % 3.0.4\n')),(0,t.kt)("h5",{id:"optional-dependency-with-refined-module-integration-with-refined-library"},"Optional Dependency with refined module (Integration with refined library)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config-refined" % 3.0.4\n')),(0,t.kt)("h5",{id:"optional-dependency-with-typesafe-module-hoconjson-source"},"Optional Dependency with typesafe module (HOCON/Json source)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config-typesafe" % 3.0.4\n')),(0,t.kt)("h5",{id:"optional-dependency-with-yaml-module-yaml-source"},"Optional Dependency with yaml module (Yaml source)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config-yaml" % 3.0.4\n')),(0,t.kt)("h5",{id:"optional-dependency-for-a-random-generation-of-a-config"},"Optional Dependency for a random generation of a config"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-config-gen" % 3.0.4\n')),(0,t.kt)("h2",{id:"describe-the-config-by-hand"},"Describe the config by hand"),(0,t.kt)("p",null,"We must fetch the configuration from the environment to a case class (product) in scala. Let it be ",(0,t.kt)("inlineCode",{parentName:"p"},"MyConfig")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.IO\n\nimport zio.config._, ConfigDescriptor._, ConfigSource._\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"case class MyConfig(ldap: String, port: Int, dburl: String)\n")),(0,t.kt)("p",null,"To perform any action using zio-config, we need a configuration description.\nLet's define a simple one."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'val myConfig: ConfigDescriptor[MyConfig] =\n  (string("LDAP") zip int("PORT") zip string("DB_URL")).to[MyConfig]\n\n // ConfigDescriptor[ MyConfig]\n')),(0,t.kt)("p",null,"To get a tuple,"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'val myConfigTupled: ConfigDescriptor[(String, Int, String)] =\n  (string("LDAP") zip int("PORT") zip string("DB_URL"))\n')),(0,t.kt)("h2",{id:"fully-automated-config-description"},"Fully automated Config Description"),(0,t.kt)("p",null,"If you don't like describing your configuration manually, and rely on the names of the parameter in the case class (or sealed trait),\nthere is a separate module called ",(0,t.kt)("inlineCode",{parentName:"p"},"zio-config-magnolia"),". "),(0,t.kt)("p",null,"Note:  ",(0,t.kt)("inlineCode",{parentName:"p"},"zio-config-shapeless")," is an alternative to ",(0,t.kt)("inlineCode",{parentName:"p"},"zio-config-magnolia")," to support scala 2.11 projects.\nIt will be deprecated once we find users have moved on from scala 2.11. "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.config._\nimport zio.config.magnolia.{Descriptor, descriptor}\n\nval myConfigAutomatic = descriptor[MyConfig]\n")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"myConfig")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"myConfigAutomatic")," are same description, and is of the same type. "),(0,t.kt)("p",null,"Refer to API docs for more explanations on ",(0,t.kt)("a",{parentName:"p",href:"https://javadoc.io/static/dev.zio/zio-config-magnolia_2.13/1.0.0-RC31-1/zio/config/magnolia/index.html#descriptor%5BA%5D(implicitconfig:zio.config.magnolia.package.Descriptor%5BA%5D):zio.config.ConfigDescriptor%5BA%5D"},"descriptor"),"\nMore examples on automatic derivation is in examples module of ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-config"},"zio-config")),(0,t.kt)("h2",{id:"read-config-from-various-sources"},"Read config from various sources"),(0,t.kt)("p",null,"There are more information on various sources in ",(0,t.kt)("a",{parentName:"p",href:"/zio-config/read-from-various-sources"},"here"),"."),(0,t.kt)("p",null,"Below given is a simple example."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'val map =\n  Map(\n    "LDAP" -> "xyz",\n    "PORT" -> "8888",\n    "DB_URL" -> "postgres"\n  )\n\nval source = ConfigSource.fromMap(map)\n\nread(myConfig from source)\n\n// Alternatively, you can rely on `Config.from..` pattern to get ZLayers.\nval result =\n  ZConfig.fromMap(map, myConfig)\n\n// Layer[ReadError[String], Config[A]]  \n\n')),(0,t.kt)("p",null,"You can run this to ",(0,t.kt)("a",{parentName:"p",href:"https://zio.dev/docs/getting_started.html#main"},"completion")," as in any zio application."),(0,t.kt)("h2",{id:"how-to-use-config-descriptor"},"How to use config descriptor"),(0,t.kt)("h3",{id:"readers-from-configdescriptor"},"Readers from configdescriptor"),(0,t.kt)("p",null,"As mentioned before, you can use config descriptor to read from various sources."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"val anotherResult =\n  read(myConfig from source)\n")),(0,t.kt)("p",null,"Note that, this is almost similar to ",(0,t.kt)("inlineCode",{parentName:"p"},"Config.fromMap(map, myConfig)")," in the previous section."),(0,t.kt)("p",null,"More details in ",(0,t.kt)("a",{parentName:"p",href:"/zio-config/manual-creation-of-config-descriptor"},"here"),"."),(0,t.kt)("h3",{id:"documentations-using-configdescriptor"},"Documentations using ConfigDescriptor"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'generateDocs(myConfig)\n//Creates documentation (automatic)\n\nval betterConfig =\n  (string("LDAP") ?? "Related to auth" zip int("PORT") ?? "Database port" zip\n    string("DB_URL") ?? "url of database"\n   ).to[MyConfig]\n\ngenerateDocs(betterConfig).toTable.toGithubFlavouredMarkdown\n// Custom documentation along with auto generated docs\n')),(0,t.kt)("p",null,"More details in ",(0,t.kt)("a",{parentName:"p",href:"/zio-config/manual-creation-of-config-descriptor"},"here"),"."),(0,t.kt)("h3",{id:"writers-from-configdescriptor"},"Writers from ConfigDescriptor"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'write(myConfig, MyConfig("xyz", 8888, "postgres")).map(_.flattenString())\n//  Map("LDAP" -> "xyz", "PORT" -> "8888", "DB_URL" -> "postgres")\n')),(0,t.kt)("p",null,"More details in ",(0,t.kt)("a",{parentName:"p",href:"/zio-config/manual-creation-of-config-descriptor"},"here"),"."),(0,t.kt)("h3",{id:"report-generation-from-configdescriptor"},"Report generation from ConfigDescriptor"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'generateReport(myConfig, MyConfig("xyz", 8888, "postgres"))\n// Generates documentation showing value of each parameter\n\n')),(0,t.kt)("h4",{id:"generate-a-random-config"},"Generate a random config"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.config.derivation.name\nimport zio.config.magnolia._, zio.config.gen._\n\nobject RandomConfigGenerationSimpleExample extends App {\n  sealed trait Region\n\n  @name("ap-southeast-2")\n  case object ApSouthEast2 extends Region\n\n  @name("us-east")\n  case object UsEast extends Region\n\n  case class DetailsConfig(username: String, region: Region)\n\n  println(generateConfigJson(descriptor[DetailsConfig]).unsafeRunChunk)\n\n  // yields for example\n\n  // Chunk(\n  //   {\n  //    "region" : "ap-southeast-2",\n  //     "username" : "eU2KlfATwYZ5s0Y"\n  //   }\n  // )\n}\n\n\n')),(0,t.kt)("h3",{id:"accumulating-all-errors"},"Accumulating all errors"),(0,t.kt)("p",null,"For any misconfiguration, the ReadError collects all of them with proper semantics: ",(0,t.kt)("inlineCode",{parentName:"p"},"AndErrors")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"OrErrors"),".\nInstead of directly printing misconfigurations, the ",(0,t.kt)("inlineCode",{parentName:"p"},"ReadError.prettyPrint")," shows the path, detail of collected misconfigurations."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"All misconfigurations of ",(0,t.kt)("inlineCode",{parentName:"li"},"AndErrors")," are put in parallel lines.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\u2565\n\u2560\u2550\u2550\u2557 \n\u2551  \u2551 FormatError\n\u2551 MissingValue\n")),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("inlineCode",{parentName:"li"},"OrErrors")," are in the same line which indicates a sequential misconfiguration    ")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\u2565\n\u2560MissingValue\n\u2551\n\u2560FormatError\n")),(0,t.kt)("p",null,"Here is a complete example:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"   ReadError:\n   \u2565\n   \u2560\u2550\u2550\u2566\u2550\u2550\u2557\n   \u2551  \u2551  \u2551\n   \u2551  \u2551  \u2560\u2500MissingValue\n   \u2551  \u2551  \u2551 path: var2\n   \u2551  \u2551  \u2551 Details: value of type string\n   \u2551  \u2551  \u2551 \n   \u2551  \u2551  \u2560\u2500MissingValue path: envvar3\n   \u2551  \u2551  \u2551 path: var3\n   \u2551  \u2551  \u2551 Details: value of type string\n   \u2551  \u2551  \u2551 \n   \u2551  \u2551  \u25bc\n   \u2551  \u2551\n   \u2551  \u2560\u2500FormatError\n   \u2551  \u2551 cause: Provided value is wrong, expecting the type int\n   \u2551  \u2551 path: var1\n   \u2551  \u25bc\n   \u25bc\n")),(0,t.kt)("p",null,"It says, fix ",(0,t.kt)("inlineCode",{parentName:"p"},"FormatError"),' related to path "var1" in the source. For the next error, either provide var2 or var3\nto fix ',(0,t.kt)("inlineCode",{parentName:"p"},"MissingValue")," error."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Note"),": Use prettyPrint method to avoid having to avoid seeing highly nested ReadErrors, that can be difficult to read."),(0,t.kt)("h2",{id:"config-is-your-zio-environment"},"Config is your ZIO environment"),(0,t.kt)("p",null,"Take a look at the below example that shows an entire mini app.\nThis will tell you how to consider configuration as just a part of ",(0,t.kt)("inlineCode",{parentName:"p"},"Environment")," of your ZIO functions across your application."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class ApplicationConfig(bridgeIp: String, userName: String)\n\nval configuration =\n  (string("bridgeIp") zip string("username")).to[ApplicationConfig]\n\nval finalExecution =\n  for {\n    appConfig <- getConfig[ApplicationConfig]\n    _         <- Console.printLine(appConfig.bridgeIp)\n    _         <- Console.printLine(appConfig.userName)\n  } yield ()\n\nval configLayer = ZConfig.fromPropertiesFile("file-location", configuration)\n\n// Main App\nval pgm = finalExecution.provideLayer(configLayer)\n')),(0,t.kt)("h3",{id:"separation-of-concerns-with-narrow"},"Separation of concerns with ",(0,t.kt)("inlineCode",{parentName:"h3"},"narrow")),(0,t.kt)("p",null,"In bigger apps you can have a lot of components and, consequently - a lot of configuration fields. It's not ideal to pass around the whole configuration object as a dependency for all of those components: this way you break the separation of concerns principle. Component should be aware only about dependencies it cares about and uses somehow."),(0,t.kt)("p",null,"So to avoid that and do it in an ergonomic way, there's a ",(0,t.kt)("inlineCode",{parentName:"p"},"narrow")," syntax extension for ",(0,t.kt)("inlineCode",{parentName:"p"},"ZLayer"),", available under ",(0,t.kt)("inlineCode",{parentName:"p"},"import zio.config.syntax._")," import:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.config.typesafe._\nimport zio.config.syntax._\nimport zio.config.magnolia._\n\ntrait Endpoint\ntrait Repository\n\ncase class AppConfig(api: ApiConfig, db: DbConfig)\ncase class DbConfig (url: String,    driver: String)\ncase class ApiConfig(host: String,   port: Int)\n\nval configDescription = descriptor[AppConfig]\n\n// components have only required dependencies\nval endpoint: ZLayer[ApiConfig, Nothing, Endpoint]    = ZLayer.succeed(new Endpoint {})\nval repository: ZLayer[DbConfig, Nothing, Repository] = ZLayer.succeed(new Repository {}) \n\nval cfg = TypesafeConfig.fromResourcePath(configDescription)\n\ncfg.narrow(_.api) >>> endpoint // narrowing down to a proper config subtree\ncfg.narrow(_.db) >>> repository\n")),(0,t.kt)("h3",{id:"whats-new-in-zio-config-3x-"},"What's new in zio-config-3.x ?"),(0,t.kt)("p",null,"Some of these details are repeated in certain parts of the documentations.\nWe thought we will repeat here, which is much better than readers missing it out."),(0,t.kt)("h2",{id:"removed-deriveconfigdescriptor-and-sealedtraitstrategy"},"Removed ",(0,t.kt)("inlineCode",{parentName:"h2"},"DeriveConfigDescriptor")," and ",(0,t.kt)("inlineCode",{parentName:"h2"},"SealedTraitStrategy")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"DeriveConfigDescriptor")," used to be the interface where users can override certain default behaviours of automatic derivation, mainly to change the way zio-config handles custom key names, and coproducts (sealed traits). Now this is deleted forever."),(0,t.kt)("p",null,"Take a look at the API docs of ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptor"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorForPureConfig"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorWithClassNames")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorWithoutClassNames")," for more information."),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-config/blob/master/magnolia/shared/src/main/scala-2.12-2.13/zio/config/magnolia/package.scala"},"https://github.com/zio/zio-config/blob/master/magnolia/shared/src/main/scala-2.12-2.13/zio/config/magnolia/package.scala")),(0,t.kt)("h2",{id:"custom-keys-is-just-about-changing-configdescriptor"},"Custom keys is just about changing ",(0,t.kt)("inlineCode",{parentName:"h2"},"ConfigDescriptor")),(0,t.kt)("p",null,"We recommend users to make use of ",(0,t.kt)("inlineCode",{parentName:"p"},"mapKey")," in ",(0,t.kt)("inlineCode",{parentName:"p"},"ConfigDescriptor")," to change any behaviour of the field-names (or class names, or sealed-trait names). The release ensures we no longer need to extend an interface called ",(0,t.kt)("inlineCode",{parentName:"p"},"DeriveConfigDescriptor")," to change this behaviour."),(0,t.kt)("h3",{id:"example"},"Example:"),(0,t.kt)("p",null,"Now on, the only way to change keys is as follows:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"  // mapKey is just a function in `ConfigDescriptor` that pre-existed\n\n  val config = descriptor[Config].mapKey(_.toUpperCase)\n")),(0,t.kt)("p",null,"instead of "),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"// No longer supported\nval customDerivation = new DeriveConfigDescriptor {\n  override def mapFieldName(key: String) = key.toUpperCase\n }\n\nimport customDerivation._\n\nval config = descriptor[Config]\n")),(0,t.kt)("h2",{id:"inbuilt-support-for-pure-config"},"Inbuilt support for pure-config"),(0,t.kt)("p",null,"Many users make use of the label ",(0,t.kt)("inlineCode",{parentName:"p"},"type")," in HOCON files to annotate the type of the coproduct.\nNow on, zio-config has inbuilt support for reading such a file/string using ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorForPureConfig"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.config._, typesafe._, magnolia._\n\nsealed trait X\ncase class A(name: String) extends X\ncase class B(age: Int) extends X\n\ncase class AppConfig(x: X)\n\nval str =\n  s"""\n   x : {\n     type = A\n     name = jon\n   }\n  """\n\nread(descriptorForPureConfig[AppConfig] from ConfigSource.fromHoconString(str))\n')),(0,t.kt)("h2",{id:"allow-concise-config-source-strings"},"Allow concise config source strings"),(0,t.kt)("p",null,"With this release we have ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorWithoutClassNames")," along with ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptor")," that just completely discards the name of the sealed-trait and sub-class (case-class) names, allowing your source less verbose. Note that unlike ",(0,t.kt)("inlineCode",{parentName:"p"},"pure-config")," example above, we don't need to have an extra label ",(0,t.kt)("inlineCode",{parentName:"p"},"type : A"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'sealed trait Y\n\nobject Y {\n  case class A(age: Int)     extends Y\n  case class B(name: String) extends Y\n}\n\ncase class AppConfig(x: Y)\n\nval str =\n       s"""\n           x : {\n             age : 10\n           }\n          """\n\n  read(descriptorWithoutClassNames[AppConfig] from ConfigSource.fromHoconString(str))\n')),(0,t.kt)("p",null,"PS: If you are using ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptor")," instead of ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorWithoutClassNames"),", then the source has to be:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"x : {\n  A : { \n      age : 10\n  }\n}\n")),(0,t.kt)("h2",{id:"your-configsource-is-exactly-your-product-and-coproduct"},"Your ConfigSource is exactly your product and coproduct"),(0,t.kt)("p",null,"Some users prefer to encode the config-source exactly the same as that of Scala class files. The implication is, the source will know the name of the ",(0,t.kt)("inlineCode",{parentName:"p"},"sealed trait")," and the name of all of its ",(0,t.kt)("inlineCode",{parentName:"p"},"subclasses"),". There are several advantages to such an approach, while it can be questionable in certain situations. Regardless, zio-config now has inbuilt support to have this pattern."),(0,t.kt)("h3",{id:"example-1"},"Example:"),(0,t.kt)("p",null,"Say, the config ADT is as below:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait Y\n\nobject Y {\n  case class A(age: Int)     extends Y\n  case class B(name: String) extends Y\n}\n\ncase class AppConfig(x: X)\n")),(0,t.kt)("p",null,"Then the corresponding config-source should be as follows. Keep a note that under ",(0,t.kt)("inlineCode",{parentName:"p"},"x"),", the name of sealed trait ",(0,t.kt)("inlineCode",{parentName:"p"},"Y")," also exist."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'val str =\n  s"""\n     x : {\n           Y : {\n              A : {\n                age : 10\n              }\n         }\n     }\n    """\n')),(0,t.kt)("p",null,"To read such a string (or any config-source encoded in such a hierarchy), use ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorWithClassNames")," instead of ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptor"),". In short, ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptorWithClassNames")," considers the name of sealed-trait."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"read(descriptorWithClassNames[AppConfig] from ConfigSource.fromHoconString(str))\n")),(0,t.kt)("h2",{id:"more-composable-descriptor"},"More composable ",(0,t.kt)("inlineCode",{parentName:"h2"},"Descriptor")),(0,t.kt)("p",null,"The whole bunch of methods such as ",(0,t.kt)("inlineCode",{parentName:"p"},"descriptor")," works with the type class ",(0,t.kt)("inlineCode",{parentName:"p"},"Descriptor"),". You can summon a ",(0,t.kt)("inlineCode",{parentName:"p"},"Descriptor")," for type ",(0,t.kt)("inlineCode",{parentName:"p"},"A")," using ",(0,t.kt)("inlineCode",{parentName:"p"},"Descriptor[A].apply"),", which will give you access to lower level methods such as ",(0,t.kt)("inlineCode",{parentName:"p"},"removeSubClassNameKey"),". These methods directly exist in ",(0,t.kt)("inlineCode",{parentName:"p"},"ConfigDescriptor"),", however inaccessible, since there is no guarantee that a manually created ",(0,t.kt)("inlineCode",{parentName:"p"},"ConfigDescriptor")," correctly tags keys to its types (i.e, a particular key is the name of a sub-class of a sealed-trait)"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},"case class A (...)\n\nval config1: Descriptor[A] =  Descriptor[A].removeSealedTraitNameKey\nval config2: Descriptor[A] = Descriptor[A].removeSubClassNameKey\n\n// similar to descriptorWithoutClassNames \nval config3: Descriptor[A] =  Descriptor[A].removeSealedTraitNameKey. removeSubClassNameKey.mapFieldName(_.toUpperCase) \n")))}d.isMDXComponent=!0}}]);