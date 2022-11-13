"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},34716:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},c="Websocket Server",s={unversionedId:"v1.x/examples/zio-http-basic-examples/web-socket",id:"v1.x/examples/zio-http-basic-examples/web-socket",title:"Websocket Server",description:"",source:"@site/node_modules/@zio.dev/zio-http/v1.x/examples/zio-http-basic-examples/web-socket.md",sourceDirName:"v1.x/examples/zio-http-basic-examples",slug:"/v1.x/examples/zio-http-basic-examples/web-socket",permalink:"/zio-http/v1.x/examples/zio-http-basic-examples/web-socket",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTPS Server",permalink:"/zio-http/v1.x/examples/zio-http-basic-examples/https_server"},next:{title:"Advanced Server",permalink:"/zio-http/v1.x/examples/advanced-examples/advanced_server"}},i={},p=[],l={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websocket-server"},"Websocket Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.http.service._\nimport zio.socket._\nimport zio._\nimport zio.duration._\nimport zio.stream.ZStream\n\nobject WebSocketEcho extends App {\n  private val socket =\n    Socket.collect[WebSocketFrame] {\n      case WebSocketFrame.Text("FOO")  => ZStream.succeed(WebSocketFrame.text("BAR"))\n      case WebSocketFrame.Text("BAR")  => ZStream.succeed(WebSocketFrame.text("FOO"))\n      case WebSocketFrame.Ping         => ZStream.succeed(WebSocketFrame.pong)\n      case WebSocketFrame.Pong         => ZStream.succeed(WebSocketFrame.ping)\n      case fr @ WebSocketFrame.Text(_) => ZStream.repeat(fr).schedule(Schedule.spaced(1 second)).take(10)\n    }\n\n  private val app =\n    Http.collectZIO[Request] {\n      case Method.GET -> !! / "greet" / name  => UIO(Response.text(s"Greetings {$name}!"))\n      case Method.GET -> !! / "subscriptions" => socket.toResponse\n    }\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app).exitCode\n}\n\n')))}m.isMDXComponent=!0}}]);