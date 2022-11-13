"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[14338],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),l=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||s;return t?n.createElement(h,o(o({ref:a},p),{},{components:t})):n.createElement(h,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26539:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const s={sidebar_position:"6"},o="Headers",i={unversionedId:"v1.x/dsl/headers",id:"v1.x/dsl/headers",title:"Headers",description:"ZIO HTTP provides support for all HTTP headers (as defined in RFC2616 ) along with  custom headers.",source:"@site/node_modules/@zio.dev/zio-http/v1.x/dsl/headers.md",sourceDirName:"v1.x/dsl",slug:"/v1.x/dsl/headers",permalink:"/zio-http/v1.x/dsl/headers",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Body",permalink:"/zio-http/v1.x/dsl/body"},next:{title:"Cookie",permalink:"/zio-http/v1.x/dsl/cookies"}},d={},l=[{value:"Server-side",id:"server-side",level:2},{value:"Attaching Headers to <code>Response</code>",id:"attaching-headers-to-response",level:3},{value:"Reading Headers from <code>Request</code>",id:"reading-headers-from-request",level:3},{value:"Client-side",id:"client-side",level:2},{value:"Adding headers to <code>Request</code>",id:"adding-headers-to-request",level:3},{value:"Reading headers from <code>Response</code>",id:"reading-headers-from-response",level:3},{value:"Headers DSL",id:"headers-dsl",level:2}],p={toc:l};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"headers"},"Headers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ZIO HTTP")," provides support for all HTTP headers (as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2616"},"RFC2616")," ) along with  custom headers."),(0,r.kt)("h2",{id:"server-side"},"Server-side"),(0,r.kt)("h3",{id:"attaching-headers-to-response"},"Attaching Headers to ",(0,r.kt)("inlineCode",{parentName:"h3"},"Response")),(0,r.kt)("p",null,"On the server-side, ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO-HTTP")," is adding a collection of pre-defined headers to the response, according to the HTTP specification, additionally, users may add other headers, including custom headers."),(0,r.kt)("p",null,"There are multiple ways to attach headers to a response:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"addHeaders")," helper on response."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val res = Response.ok.addHeader("content-length", "0")\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Through ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," constructors."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val res = Response(\n       status = Status.OK,\n       // Setting response header \n       headers = Headers.contentLength(0L),\n       body = Body.empty\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Middlewares"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.ok @@ Middleware.addHeader("content-length", "0")\n')))),(0,r.kt)("h3",{id:"reading-headers-from-request"},"Reading Headers from ",(0,r.kt)("inlineCode",{parentName:"h3"},"Request")),(0,r.kt)("p",null,"On the Server-side you can read Request headers as given below"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},' case req @ Method.GET -> !! / "streamOrNot" =>\n      req.getHeaders\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Detailed examples ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Example below shows how the Headers could be added to a response by using ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," constructors and how a custom header is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," through ",(0,r.kt)("inlineCode",{parentName:"p"},"addHeader"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.http.Server\nimport zio.{App, Chunk, ExitCode, URIO}\nimport zio.stream.ZStream\n\nobject SimpleResponseDispatcher extends App {\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {\n\n    // Starting the server (for more advanced startup configuration checkout `HelloWorldAdvanced`)\n    Server.start(8090, app.silent).exitCode\n  }\n\n  // Create a message as a Chunk[Byte]\n  val message                    = Chunk.fromArray("Hello world !\\r\\n".getBytes(HTTP_CHARSET))\n  // Use `Http.collect` to match on route\n  val app: HttpApp[Any, Nothing] = Http.collect[Request] {\n\n    // Simple (non-stream) based route\n    case Method.GET -> !! / "health" => Response.ok\n\n    // From Request(req), the headers are accessible.\n    case req @ Method.GET -> !! / "streamOrNot" =>\n      // Checking if client is able to handle streaming response\n      val acceptsStreaming: Boolean = req.hasHeader(HeaderNames.accept, HeaderValues.applicationOctetStream)\n      if (acceptsStreaming)\n        Response(\n          status = Status.OK,\n          // Setting response header \n          headers = Headers.contentLength(message.length.toLong), // adding CONTENT-LENGTH header\n          body = Body.fromStream(ZStream.fromChunk(message)), // Encoding content using a ZStream\n        )\n      else { \n        // Adding a custom header to Response\n        Response(status = Status.ACCEPTED, body = Body.fromChunk(message)).addHeader("X-MY-HEADER", "test")\n      }\n  }\n}\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The following example shows how Headers could be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"Response")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Middleware")," implementation:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"\n  /**\n   * Creates an authentication middleware that only allows authenticated requests to be passed on to the app.\n   */\n  final def customAuth(\n    verify: Headers => Boolean,\n    responseHeaders: Headers = Headers.empty,\n  ): HttpMiddleware[Any, Nothing] =\n    Middleware.ifThenElse[Request](req => verify(req.getHeaders))(\n      _ => Middleware.identity,\n      _ => Middleware.fromHttp(Http.status(Status.FORBIDDEN).addHeaders(responseHeaders)),\n    )\n\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More examples:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zio/zio-http/blob/main/example/src/main/scala/BasicAuth.scala"},"BasicAuth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zio/zio-http/blob/main/example/src/main/scala/Authentication.scala"},"Authentication")))))),(0,r.kt)("h2",{id:"client-side"},"Client-side"),(0,r.kt)("h3",{id:"adding-headers-to-request"},"Adding headers to ",(0,r.kt)("inlineCode",{parentName:"h3"},"Request")),(0,r.kt)("p",null,"ZIO-HTTP provides a simple way to add headers to a client ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val headers = Headers.host("sports.api.decathlon.com").withAccept(HeaderValues.applicationJson)\nval response = Client.request(url, headers)\n')),(0,r.kt)("h3",{id:"reading-headers-from-response"},"Reading headers from ",(0,r.kt)("inlineCode",{parentName:"h3"},"Response")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val responseHeaders: Task[Headers] =  Client.request(url).map(_.headers)\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Detailed examples")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The sample below shows how a header could be added to a client request:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\nimport zio.http.service._\nimport zio._\n\nobject SimpleClientJson extends App {\n  val env     = ChannelFactory.auto ++ EventLoopGroup.auto()\n  val url     = "http://sports.api.decathlon.com/groups/water-aerobics"\n  // Construct headers\n  val headers = Headers.host("sports.api.decathlon.com").withAccept(HeaderValues.applicationJson) \n\n  val program = for {\n    // Pass headers to request\n    res  <- Client.request(url, headers)\n    // List all response headers\n    _    <- console.putStrLn(res.headers.toList.mkString("\\n"))\n    data <-\n      // Check if response contains a specified header with a specified value.\n      if (res.hasHeader(HeaderNames.contentType, HeaderValues.applicationJson))\n        res.bodyAsString\n      else\n        res.bodyAsString\n    _    <- console.putStrLn { data }\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = program.exitCode.provideCustomLayer(env)\n\n}\n'))))),(0,r.kt)("h2",{id:"headers-dsl"},"Headers DSL"),(0,r.kt)("p",null,"Headers DSL provides plenty of powerful operators that can be used to add, remove, modify and verify headers. Headers APIs could be used on client, server, and middleware."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zio.http.model.headers.Headers")," - represents an immutable collection of headers i.e. essentially a ",(0,r.kt)("inlineCode",{parentName:"p"},"Chunk[(String, String)]"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zio.http.HeaderNames"),"           - commonly used header names."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zio.http.HeaderValues"),"          - commonly used header values"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Headers")," have following type of helpers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Constructors -  Provides a list of helpful methods that can create ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\n// create a simple Accept header:\nval acceptHeader: Headers = Headers.accept(HeaderValues.applicationJson)\n\n// create a basic authentication header:\nval basicAuthHeader: Headers = Headers.basicAuthorizationHeader("username", "password")\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Getters - Provides a list of operators that parse and extract data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\n// retrieving the value of Accept header value:\nval acceptHeader: Headers = Headers.accept(HeaderValues.applicationJson)\nval acceptHeaderValue: Option[CharSequence] = acceptHeader.getAccept\n\n\n// retrieving a bearer token from Authorization header:\nval authorizationHeader: Headers                   = Headers.authorization("Bearer test")\nval authorizationHeaderValue: Option[String]       = authorizationHeader.getBearerToken\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modifiers - Provides a list of operators that modify the current ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers"),". Once modified, a new instance of the same type is returned."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.http._\n\n// add Accept header:\nval headers = Headers.empty\nval updatedHeadersList: Headers = headers.addHeaders(Headers.accept(HeaderValues.applicationJson))\n\n// or if you prefer the builder pattern:\n\n// add Host header:\nval moreHeaders: Headers        = headers.withHost("zio-http.dream11.com")\n\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checks - Provides a list of operators that checks if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Headers")," meet the give constraints."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"val contentTypeHeader: Headers = Headers.contentType(HeaderValues.applicationJson)\nval isHeaderPresent: Boolean   = contentTypeHeader.hasHeader(HeaderNames.contentType) \nval isJsonContentType: Boolean = contentTypeHeader.hasJsonContentType\n\n\n")))))}c.isMDXComponent=!0}}]);