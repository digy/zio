"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[99842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"zio-ftp",title:"ZIO FTP"},a=void 0,l={unversionedId:"ecosystem/officials/zio-ftp",id:"ecosystem/officials/zio-ftp",title:"ZIO FTP",description:"ZIO FTP is a simple, idiomatic (S)FTP client for ZIO.",source:"@site/docs/ecosystem/officials/zio-ftp.md",sourceDirName:"ecosystem/officials",slug:"/ecosystem/officials/zio-ftp",permalink:"/ecosystem/officials/zio-ftp",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/ecosystem/officials/zio-ftp.md",tags:[],version:"current",frontMatter:{id:"zio-ftp",title:"ZIO FTP"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Config",permalink:"/ecosystem/officials/zio-config"},next:{title:"ZIO JSON",permalink:"/ecosystem/officials/zio-json"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-ftp"},"ZIO FTP")," is a simple, idiomatic (S)FTP client for ZIO."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-ftp" % "0.3.0" \n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"First we need an FTP server if we don't have:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n    -p 21:21 \\\n    -p 21000-21010:21000-21010 \\\n    -e USERS="one|1234" \\\n    -e ADDRESS=localhost \\\n    delfer/alpine-ftp-server\n')),(0,o.kt)("p",null,"Now we can run the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.blocking.Blocking\nimport zio.console.putStrLn\nimport zio.ftp.Ftp._\nimport zio.ftp._\nimport zio.stream.{Transducer, ZStream}\nimport zio.{Chunk, ExitCode, URIO, ZIO}\n\nobject ZIOFTPExample extends zio.App {\n  private val settings =\n    UnsecureFtpSettings("127.0.0.1", 21, FtpCredentials("one", "1234"))\n\n  private val myApp = for {\n    _        <- putStrLn("List of files at root directory:")\n    resource <- ls("/").runCollect\n    _        <- ZIO.foreach(resource)(e => putStrLn(e.path))\n    path = "~/file.txt"\n    _ <- upload(\n      path,\n      ZStream.fromChunk(\n        Chunk.fromArray("Hello, ZIO FTP!\\nHello, World!".getBytes)\n      )\n    )\n    file <- readFile(path)\n      .transduce(Transducer.utf8Decode)\n      .runCollect\n    _ <- putStrLn(s"Content of $path file:")\n    _ <- putStrLn(file.fold("")(_ + _))\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = myApp\n    .provideCustom(\n      unsecure(settings) ++ Blocking.live\n    )\n    .exitCode\n}\n')))}f.isMDXComponent=!0}}]);