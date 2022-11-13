"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[52438],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),u=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=u(a),N=l,g=k["".concat(o,".").concat(N)]||k[N]||d[N]||r;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},98896:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={id:"http",title:"HTTP"},i="HTTP implementations",p={unversionedId:"http",id:"http",title:"HTTP",description:"By default the AWS Java SDK uses netty under the hood to make the HTTP client calls. zio-aws defines the http client",source:"@site/node_modules/@zio.dev/zio-aws/http.md",sourceDirName:".",slug:"/http",permalink:"/zio-aws/http",draft:!1,tags:[],version:"current",frontMatter:{id:"http",title:"HTTP"},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/zio-aws/configuration"},next:{title:"Aspects",permalink:"/zio-aws/aspects"}},o={},u=[{value:"Netty",id:"netty",level:2},{value:"Configuration Details",id:"configuration-details",level:2},{value:"Field Descriptions",id:"field-descriptions",level:3},{value:"channelOptions",id:"channeloptions",level:3},{value:"proxy",id:"proxy",level:3},{value:"http2",id:"http2",level:3},{value:"Akka HTTP",id:"akka-http",level:2},{value:"http4s",id:"http4s",level:2},{value:"Configuration Details",id:"configuration-details-1",level:2},{value:"Field Descriptions",id:"field-descriptions-1",level:3},{value:"channelOptions",id:"channeloptions-1",level:3}],m={toc:u};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"http-implementations"},"HTTP implementations"),(0,l.kt)("p",null,"By default the AWS Java SDK uses ",(0,l.kt)("em",{parentName:"p"},"netty")," under the hood to make the HTTP client calls. ",(0,l.kt)("inlineCode",{parentName:"p"},"zio-aws")," defines the http client\nas a ",(0,l.kt)("em",{parentName:"p"},"layer")," (",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient"),") that has to be provided to the ",(0,l.kt)("em",{parentName:"p"},"AWS configuration layer"),". "),(0,l.kt)("p",null,"Currently the following implementations can be used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zio-aws-netty")," contains the default netty implementation packed as a layer "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zio-aws-akka-http")," is based on Matthias L\xfcneberg's ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/matsluni/aws-spi-akka-http"},"aws-spi-akka-http library")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"zio-aws-http4s")," is an implementation on top of ",(0,l.kt)("em",{parentName:"li"},"http4s"))),(0,l.kt)("h2",{id:"netty"},"Netty"),(0,l.kt)("p",null,"The default HTTP implementation in the AWS Java SDK is ",(0,l.kt)("em",{parentName:"p"},"Netty"),". To use it with the default settings, use the ",(0,l.kt)("inlineCode",{parentName:"p"},"netty.default"),"\nlayer to provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient")," for the ",(0,l.kt)("inlineCode",{parentName:"p"},"AwsConfig")," layer. It is also possible to customize the ",(0,l.kt)("inlineCode",{parentName:"p"},"NettyNioAsyncHttpClient"),"\ndirectly by manipulation it's ",(0,l.kt)("inlineCode",{parentName:"p"},"Builder"),", by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"netty.customized(customization)")," layer. "),(0,l.kt)("p",null,"The recommended way for configuration is to use the zio-config support:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"def configured(\n      tlsKeyManagersProvider: Option[TlsKeyManagersProvider] = None,\n      tlsTrustManagersProvider: Option[TlsTrustManagersProvider] = None\n  ): ZLayer[ZConfig[NettyClientConfig], Throwable, HttpClient]\n")),(0,l.kt)("p",null,"Everything except the TLS key and trust managers are described by the zio-config provided ",(0,l.kt)("inlineCode",{parentName:"p"},"NettyClientConfig")," data structure.\nSee the following table for all the options:"),(0,l.kt)("h2",{id:"configuration-details"},"Configuration Details"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"fielddescriptions"},"all-of")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"field-descriptions"},"Field Descriptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxConcurrency"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 50, Maximum number of allowed concurrent requests"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxPendingConnectionAcquires"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 10000, The maximum number of pending acquires allowed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"readTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT30S, The amount of time to wait for a read on a socket"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"writeTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT30S, The amount of time to wait for a write on a socket"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connectionTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT2S, The amount of time to wait when initially establishing a connection before giving up"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connectionAcquisitionTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT10S, The amount of time to wait when acquiring a connection from the pool before giving up"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connectionTimeToLive"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT0S, The maximum amount of time that a connection should be allowed to remain open, regardless of usage frequency"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connectionMaxIdleTime"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT5S, Maximum amount of time that a connection should be allowed to remain open while idle"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useIdleConnectionReaper"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, default value: true, If true, the idle connections in the pool should be closed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, default value: Dual, HTTP/1.1 or HTTP/2 or Dual"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"channeloptions"},"channelOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"channeloptions"},"all-of")),(0,l.kt)("td",{parentName:"tr",align:null},"default value: NettyChannelOptions(Vector()), Custom Netty channel options"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sslProvider"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, optional value, The SSL provider to be used"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"proxy"},"proxy")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"proxy"},"all-of")),(0,l.kt)("td",{parentName:"tr",align:null},"optional value, Proxy configuration"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http2"},"http2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http2"},"all-of")),(0,l.kt)("td",{parentName:"tr",align:null},"optional value, HTTP/2 specific options"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"channeloptions"},"channelOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_BROADCAST"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Allow transmission of broadcast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_KEEPALIVE"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Keep connection alive"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_SNDBUF"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The size of the socket send buffer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_RCVBUF"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The size of the socket receive buffer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_REUSEADDR"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Re-use address"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_LINGER"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, Linger on close if data is present"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_TOS"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The ToS octet in the IP header"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_MULTICAST_IF"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, optional value, The network interface's name for IP multicast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_MULTICAST_TTL"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The time-to-live for IP multicast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_MULTICAST_LOOP"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Loopback for IP multicast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP_NODELAY"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Disable the Nagle algorithm"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CONNECT_TIMEOUT_MILLIS"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, optional value, Connect timeout"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WRITE_SPIN_COUNT"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, Write spin count"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ALLOW_HALF_CLOSURE"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Allow half closure"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AUTO_READ"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Auto read"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AUTO_CLOSE"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Auto close"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SINGLE_EVENTEXECUTOR_PER_GROUP"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Single event executor per group"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"proxy"},"proxy"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scheme"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, default value: Http, The proxy scheme"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, Hostname of the proxy"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"port"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, Port of the proxy"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nonProxyHosts"),(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, default value: Set(), Hosts that should not be proxied"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"http2"},"http2"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxStreams"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type long, Max number of concurrent streams per connection"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialWindowSize"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, Initial window size of a stream"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"healthCheckPingPeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: PT5S, The period that the Netty client will send PING frames to the remote endpoint"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"akka-http"},"Akka HTTP"),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"Akka HTTP implementation")," can be chosen by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"akkahttp.client()")," layer for providing ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpClient")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"AwsConfig"),".\nThis implementation uses the ",(0,l.kt)("a",{parentName:"p",href:"https://doc.akka.io/docs/akka-http/current/configuration.html"},"standard akka-http settings")," from the application's ",(0,l.kt)("em",{parentName:"p"},"Lightbend config"),",\nit is not described with zio-config descriptors. "),(0,l.kt)("h2",{id:"http4s"},"http4s"),(0,l.kt)("p",null,"Another alternative is the ",(0,l.kt)("em",{parentName:"p"},"http4s client"),". To use the default settings, provide the ",(0,l.kt)("inlineCode",{parentName:"p"},"http4s.default")," layer to ",(0,l.kt)("inlineCode",{parentName:"p"},"AwsConfig"),". Customization by manipulating the builder\nis also possible by ",(0,l.kt)("inlineCode",{parentName:"p"},"http4s.customized(customization)"),". And similarly to the ",(0,l.kt)("em",{parentName:"p"},"Netty")," client, configuration is also possible via zio-config:"),(0,l.kt)("h2",{id:"configuration-details-1"},"Configuration Details"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"fielddescriptions"},"all-of")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"field-descriptions-1"},"Field Descriptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"responseHeaderTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: Duration.Inf, Timeout for receiving the header part of the response"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"idleTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: 1 minute, Timeout for client connection staying idle"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"requestTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: 45 seconds, Timeout for the whole request"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connectTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type duration, default value: 10 seconds, Timeout for connecting to the server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userAgent"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, default value: User-Agent(http4s-blaze/3.0.2,List()), User-Agent header sent by the client"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxTotalConnections"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 10, Maximum number of parallel connections"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxWaitQueueLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 256, Maximum number of requests in queue"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkEndpointIdentification"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, default value: true, Check https identity"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxResponseLineSize"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 4096, Maximum line length of headers in response"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxHeaderLength"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 40960, Maximum total length of the response headers"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxChunkSize"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 2147483647, Maximum chunk size"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunkBufferMaxSize"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 1048576, Maximum size of the chunk buffer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parserMode"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, default value: Strict, Parser mode, strict or lenient"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bufferSize"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, default value: 8192, Buffer size"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"channeloptions"},"channelOptions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"channeloptions"},"all-of")),(0,l.kt)("td",{parentName:"tr",align:null},"default value: ChannelOptions(Vector(OptionValue(TCP_NODELAY,true))), Collection of socket options"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"channeloptions-1"},"channelOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"FieldName"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Sources"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_BROADCAST"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Allow transmission of broadcast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_KEEPALIVE"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Keep connection alive"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_SNDBUF"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The size of the socket send buffer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_RCVBUF"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The size of the socket receive buffer"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_REUSEADDR"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Re-use address"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SO_LINGER"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, Linger on close if data is present"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_TOS"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The ToS octet in the IP header"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_MULTICAST_IF"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type string, optional value, The network interface's name for IP multicast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_MULTICAST_TTL"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type int, optional value, The time-to-live for IP multicast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IP_MULTICAST_LOOP"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Loopback for IP multicast datagrams"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TCP_NODELAY"),(0,l.kt)("td",{parentName:"tr",align:null},"primitive"),(0,l.kt)("td",{parentName:"tr",align:null},"value of type boolean, optional value, Disable the Nagle algorithm"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);