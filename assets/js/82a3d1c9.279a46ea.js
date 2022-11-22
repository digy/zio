"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81437:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s={id:"index",title:"Introduction"},o=void 0,i={unversionedId:"datatypes/stream/index",id:"version-1.x/datatypes/stream/index",title:"Introduction",description:"Introduction",source:"@site/versioned_docs/version-1.x/datatypes/stream/index.md",sourceDirName:"datatypes/stream",slug:"/datatypes/stream/",permalink:"/version-1.x/datatypes/stream/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stream/index.md",tags:[],version:"1.x",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"URManaged",permalink:"/version-1.x/datatypes/resource/urmanaged"},next:{title:"ZStream",permalink:"/version-1.x/datatypes/stream/zstream"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Why Streams?",id:"why-streams",level:2},{value:"1. High-level and Declarative",id:"1-high-level-and-declarative",level:3},{value:"2. Asynchronous and Non-blocking",id:"2-asynchronous-and-non-blocking",level:3},{value:"3. Concurrency and Parallelism",id:"3-concurrency-and-parallelism",level:3},{value:"4. Resource Safety",id:"4-resource-safety",level:3},{value:"5. High Performance and Efficiency",id:"5-high-performance-and-efficiency",level:3},{value:"6. Seamless Integration with ZIO",id:"6-seamless-integration-with-zio",level:3},{value:"7. Back-Pressure",id:"7-back-pressure",level:3},{value:"8. Infinite Data using Finite Memory",id:"8-infinite-data-using-finite-memory",level:3},{value:"Core Abstractions",id:"core-abstractions",level:2},{value:"Stream",id:"stream",level:3},{value:"Sink",id:"sink",level:3},{value:"Transducer",id:"transducer",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The primary goal of a streaming library is to introduce ",(0,r.kt)("strong",{parentName:"p"},"a high-level API that abstracts the mechanism of reading and writing operations using data sources and destinations"),"."),(0,r.kt)("p",null,"A streaming library helps us to concentrate on the business logic and separates us from low-level implementation details."),(0,r.kt)("p",null,"There are lots of examples of streaming that people might not recognize, this is a common problem especially for beginners. A beginner might say \"I don't need a streaming library. Why should I use that?\". It's because they don't see streams. Once we use a streaming library, we start to see streams everywhere but until then we don't understand where they are. "),(0,r.kt)("p",null,"Before diving into ZIO Streams, let's list some use cases of a streaming solution and see why we would want to program in a streaming fashion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Files"),' \u2014 Every time an old school API interacting with a file has very low-level operators like "Open a file, get me an InputStream, and a method to read the next chunk from that InputStream, and also another method to close the file". Although that is a very low-level imperative API, there is a way to see files as streams of bytes. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sockets")," \u2014 Instead of working with low-level APIs, we can use streams to provide a stream-based implementation of server socket that hides the low-level implementation details of sockets. We could model socket communication as a function from a stream of bytes to a stream of bytes. We can view the input of that socket as being a stream, and its output as being another stream.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Event-Sourcing")," \u2014 In these days and age, it is common to want to build event-sourced applications which work on events or messages in a queuing system like Kafka or AMQP systems and so forth. The foundation of this architecture is streaming. Also, they are useful when we want to do a lot of data analytics and so forth.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UI Applications")," \u2014 Streams are the foundation of almost every single modern UI application. Every time we click on something, under the hood that is an event. We can use low-level APIs like subscribing callbacks to the user events but also we can view those as streams of events. So we can model subscriptions as streams of events in UI applications. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HTTP Server")," \u2014  An HTTP Server can be viewed as a stream. We have a stream of requests that are being transformed to a stream of responses; a function from a stream of bytes that go to a stream of bytes."))),(0,r.kt)("p",null,"So streams are everywhere. We can see all of these different things as being streams. Everywhere we look we can find streams. Basically, all data-driven applications, almost all data-driven applications can benefit from streams. "),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Assume, we would like to take a list of numbers and grab all the prime numbers and then do some more hard work on each of these prime numbers. We can do it using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.foreachParN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.filterPar")," operators like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def isPrime(number: Int): Task[Boolean] = Task.succeed(???)\ndef moreHardWork(i: Int): Task[Boolean] = Task.succeed(???)\n\nval numbers = 1 to 1000\n\nfor {\n  primes <- ZIO.filterPar(numbers)(isPrime)\n  _      <- ZIO.foreachParN(20)(primes)(moreHardWork)\n} yield ()\n")),(0,r.kt)("p",null,"This processes the list in parallel and filters all the prime numbers, then takes all the prime numbers and does some more hard work on them."),(0,r.kt)("p",null,"There are two problems with this example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"High Latency")," \u2014 We are not getting any pipelining, we are doing batch processing. We need to wait for the entire list to be processed in the first step before we can continue to the next step. This can lead to a pretty severe loss of performance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Limited Memory")," \u2014 We need to keep the entire list in memory as we process it and this doesn't work if we are working with an infinite data stream."))),(0,r.kt)("p",null,"With ZIO stream we can change this program to the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def prime(number: Int): Task[(Boolean, Int)] = Task.succeed(???)\n\nZStream.fromIterable(numbers)\n  .mapMParUnordered(20)(prime(_))\n  .filter(_._1).map(_._2)\n  .mapMParUnordered(20)(moreHardWork(_))\n")),(0,r.kt)("p",null,"We converted the list of numbers using ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream.fromIterable")," into a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream"),", then we mapped it in parallel, twenty items at a time, and then we performed the hard work problem, twenty items of a time. This is a pipeline, and this easily works for an infinite list."),(0,r.kt)("p",null,'One might ask, "Okay, I can get the pipelining by using fibers and queues. So why should I use ZIO streams?". It is extremely tempting to write up the pipeline look like this. We can create a bunch of queues and fibers, then we have fibers that copy information between the queues and perform the processing concurrently. It ends up something like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def writeToInput(q: Queue[Int]): Task[Unit]                            = Task.succeed(???)\ndef processBetweenQueues(from: Queue[Int], to: Queue[Int]): Task[Unit] = Task.succeed(???)\ndef printElements(q: Queue[Int]): Task[Unit]                           = Task.succeed(???)\n\nfor {\n  input  <- Queue.bounded[Int](16)\n  middle <- Queue.bounded[Int](16)\n  output <- Queue.bounded[Int](16)\n  _      <- writeToInput(input).fork\n  _      <- processBetweenQueues(input, middle).fork\n  _      <- processBetweenQueues(middle, output).fork\n  _      <- printElements(output).fork\n} yield ()\n")),(0,r.kt)("p",null,"We created a bunch of queues for buffering source, destination elements, and intermediate results."),(0,r.kt)("p",null,"There are some problems with this solution. As fibers are low-level concurrency tools, using them to create a data pipeline is not straightforward. We need to handle interruptions properly. We should care about resources and prevent them to leak. We need to shutdown the pipeline in a right way by waiting for queues to be drained."),(0,r.kt)("p",null,"Although fibers are very efficient and more performant than threads. They are advanced concurrency tools. So it is better to avoid using them to do manual pipelining. Instead, we can use ZIO streams:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def generateElement: Task[Int]    = Task.succeed(???)\ndef process(i: Int): Task[Int]    = Task.succeed(???)\ndef printElem(i: Int): Task[Unit] = Task.succeed(???)\n\nZStream\n  .repeatEffect(generateElement)\n  .buffer(16)\n  .mapM(process(_))\n  .buffer(16)\n  .mapM(process(_))\n  .buffer(16)\n  .tap(printElem(_))\n")),(0,r.kt)("p",null,"We have a buffer in between each step. We performed our computations in between. This is everything we need to get that pipelining in the same fashion that it looked before."),(0,r.kt)("h2",{id:"why-streams"},"Why Streams?"),(0,r.kt)("p",null,"ZIO stream has super compelling advantages of using high-level streams. ZIO solution to streaming solves a lot of common streaming pain points. It shines in the following topics:"),(0,r.kt)("h3",{id:"1-high-level-and-declarative"},"1. High-level and Declarative"),(0,r.kt)("p",null,"This means in a very short snippet of a fluent code we can solve very outrageously complicated problems with just a few simple lines."),(0,r.kt)("h3",{id:"2-asynchronous-and-non-blocking"},"2. Asynchronous and Non-blocking"),(0,r.kt)("p",null,"They're reactive streams, they don't block threads. They're super-efficient and very scalable. We can minimize our application latency and increase its performance. We can avoid wasting precious thread resources by using non-blocking and asynchronous ZIO streams. "),(0,r.kt)("h3",{id:"3-concurrency-and-parallelism"},"3. Concurrency and Parallelism"),(0,r.kt)("p",null,"Streams are concurrent. They have a lot of concurrent operators. All the operations on them are safe to use in presence of concurrency. And also just like ZIO gives us parallel operators with everything, there are lots of parallel operators. We can use the parallel version of operators, like ",(0,r.kt)("inlineCode",{parentName:"p"},"mapMPar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"flatMapPar"),"."),(0,r.kt)("p",null,"Parallel operators allow us to fully saturate and utilize all CPU cores of our machine. If we need to do bulk processing on a lot of data and use all the cores on our machine, so we can speed up the process by using these parallel operators. "),(0,r.kt)("h3",{id:"4-resource-safety"},"4. Resource Safety"),(0,r.kt)("p",null,"Resource safety is not a simple thing to guarantee. Assume when we have several streams, some of them are sockets and files, some of them are API calls and database queries. When we have all these streams, and we are transforming and combining them, and we are timing some out, and also some of them are doing concurrent merges; what happens when things go wrong in one part of that stream graph? ZIO streams provides the guarantee that it will never leak resources. "),(0,r.kt)("p",null,"So when streams have to be terminated for error or timeout or interruption reasons or whatever, ZIO will always safely shutdown and release the resources associated with that stream usage. "),(0,r.kt)("p",null,"We don't have to worry about resource management anymore. We can work at high-level and just declaratively describe our stream graph and then ZIO will handle the tricky job of executing that and taking care to make sure that no resources are leaked in an event of something bad happens or even just a timeout, or interruption, or just we are done with a result. So resources are always safely released without any leaks. "),(0,r.kt)("h3",{id:"5-high-performance-and-efficiency"},"5. High Performance and Efficiency"),(0,r.kt)("p",null,"When we are doing an I/O job, the granularity of data is not at the level of a single byte. For example, we never read or write a single element from/to a file descriptor. We always use multiple elements. So when we are doing an I/O operation it is a poor practice to read/write element by element and this decreases the performance of our program. "),(0,r.kt)("p",null,"In order to achieve high efficiency, ZIO stream implicitly chunks everything, but it still presents us with a nice API that is at the level of every single element. So we can always deal with streams of individual elements even though behind-the-scenes ZIO is doing some chunking to make that performant. This is one of the tricks that enables ZIO streams to have such great performance. "),(0,r.kt)("p",null,"ZIO Streams are working at the level of chunks. Every time we are working with ZIO streams, we are also working with chunks implicitly. So there are no streams with individual elements. Streams always use chunks. Every time we pull an element out of a ZIO stream, we end up pulling a chunk of elements under the hood. "),(0,r.kt)("h3",{id:"6-seamless-integration-with-zio"},"6. Seamless Integration with ZIO"),(0,r.kt)("p",null,"ZIO stream has a powerful seamless integrated support for ZIO. It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ZManaged"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule"),", and any other powerful data types in ZIO. So we can stay within the same ecosystem and get all its significant benefits."),(0,r.kt)("h3",{id:"7-back-pressure"},"7. Back-Pressure"),(0,r.kt)("p",null,"We get back-pressuring for free. With ZIO streams it is actually not a back-pressuring, but it is equivalent. In push-based streams like Akka Streams, streams are push-based; when an element comes in, it is pushed downward in the pipeline. That is what leads to the need for back-pressuring. Back-pressuring makes the push-based stream much more complicated than it needs to be. "),(0,r.kt)("p",null,"Push-based streams are good at splitting streams because we have one element, and we can push it to two different places. That is nice and elegant, but they're terrible at merging streams and that is because you end up needing to use queues, and then we run into a problem. In the case of using queues, we need back-pressuring, which leads to a complicated architecture. "),(0,r.kt)("p",null,"In ZIO when we merge streams, ZIO uses pull-based streams. They need minimal computation because we pull elements at the end of our data pipeline when needed. When the sink asks for one element, then that ripples all the way back through the very edges of the system. "),(0,r.kt)("p",null,"So when we pull one element at the end, no additional computation takes place until we pull the next element or decide that we are done pulling, and we close the stream. It causes the minimum amount of computation necessary to produce the result. "),(0,r.kt)("p",null,"Using the pull-based mechanism we have no producers, and it prevents producing more events than necessary. So ZIO streams does not need back-pressure even though it provides a form of that because it is lazy and on-demand and uses pull-based streams. "),(0,r.kt)("p",null,"So ZIO stream gives us the benefits of back-pressuring, but in a cleaner conceptual model that is very efficient and does not require all these levels of buffering."),(0,r.kt)("h3",{id:"8-infinite-data-using-finite-memory"},"8. Infinite Data using Finite Memory"),(0,r.kt)("p",null,"Streams let us work on infinite data in a finite amount of memory. When we are writing streaming logic, we don't have to worry about how much data we are ultimately going to be processed."),(0,r.kt)("p",null,"That is because we are just building a workflow, a description of the processing. We are not manually loading up everything into memory, into a list, and then doing our processing on a list. That doesn't work very well because we can only fit a finite amount of memory into our computer at one time. "),(0,r.kt)("p",null,"ZIO streams enable us just concentrate on our business problem, and not on how much memory this program is going to consume. So we can write these computations that work over streams that are totally infinite but in a finite amount of memory and ZIO handles that for us."),(0,r.kt)("p",null,"Assume we have the following code. This is a snippet of a code that reads a file into a string and splits the string into new lines, then iterates over lines and prints them out. It is pretty simple and easy to read and also it is simple to understand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"for (line <- FileUtils.readFileToString(new File(\"file.txt\")).split('\\n'))\n  println(line)\n")),(0,r.kt)("p",null,"The only problem here is that if we run this code with a file that is very large which is bigger than our memory, that is not going to work. Instead, we can reach the same functionality, by using the stream API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZStream.fromFile(Paths.get("file.txt"))\n  .transduce(ZTransducer.utf8Decode >>> ZTransducer.splitLines)\n  .foreach(putStrLn(_))\n')),(0,r.kt)("p",null,"By using ZIO streams, we do not care how big is a file, we just concentrate on the logic of our application."),(0,r.kt)("h2",{id:"core-abstractions"},"Core Abstractions"),(0,r.kt)("p",null,"To define a stream workflow there are three core abstraction in ZIO stream; ",(0,r.kt)("em",{parentName:"p"},"Streams"),", ",(0,r.kt)("em",{parentName:"p"},"Sinks"),", and ",(0,r.kt)("em",{parentName:"p"},"Transducers"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stream/zstream"},"ZStream"))," \u2014 Streams act as ",(0,r.kt)("em",{parentName:"p"},"sources")," of values. We get elements from them. They produce values.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stream/zsink"},"ZSink"))," \u2014 Sinks act as ",(0,r.kt)("em",{parentName:"p"},"receptacles")," or ",(0,r.kt)("em",{parentName:"p"},"sinks")," for values. They consume values.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/stream/ztransducer"},"Transducer"))," \u2014 Transducers act as ",(0,r.kt)("em",{parentName:"p"},"transformers")," of values. They take individual values, and they transform or decode them. "))),(0,r.kt)("h3",{id:"stream"},"Stream"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," data type similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect has ",(0,r.kt)("inlineCode",{parentName:"p"},"R"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),". It has environment, error, and element type. "),(0,r.kt)("p",null,"The difference between the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," is that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect will always succeed or fail. If it succeeds, it will succeed with a single element.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream")," can succeed with zero or more elements. So we can have an ",(0,r.kt)("em",{parentName:"p"},"empty stream"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream[R, E, A]")," doesn't necessarily produce any ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"s, it produces zero or more ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"s. "))),(0,r.kt)("p",null,"So, that is a big difference. There is no such thing as a non-empty ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStream"),". All ",(0,r.kt)("inlineCode",{parentName:"p"},"ZStreams")," are empty, they can produce any number of ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"s, which could be an infinite number of ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"s. "),(0,r.kt)("p",null,"There is no way to check to see if a stream is empty or not, because that computation hasn't started. Streams are super lazy, so there is no way to say \"Oh! does this stream contain anything?\" No! We can't figure that out. We have to use it and try to do something with it, and then we are going to figure out whether it had something."),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("p",null,"The basic idea behind the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sink")," is that ",(0,r.kt)("strong",{parentName:"p"},"it consumes values of some type, and then it ends up when it is done. When the sink is done, it produces the value of a different type"),". "),(0,r.kt)("p",null,"Sinks are a bit like ",(0,r.kt)("strong",{parentName:"p"},"parsers"),"; they consume some input, when they're done, they produce a value. Also, they are like ",(0,r.kt)("strong",{parentName:"p"},"databases"),"; they read enough from input when they don't want anymore, they can produce some value or return unit."),(0,r.kt)("p",null,"Some sinks will produce nothing as their return type parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),", which means that the sink is always going to accept more and more input; it is never ever going to be done. "),(0,r.kt)("p",null,"Just like Streams, sinks are super compositional. Sink's operators allow us to combine two sinks together or transform them. That allows us to generate a vast variety of sinks."),(0,r.kt)("p",null,"Streams and Sinks are duals in category theory. One produces value, and the other one consumes them. They are mere images of each other. They both have to exist. A streaming library cannot be complete unless it has streams and sinks. That is why ZIO has a sort of better design than FS2 because FS2 has a stream, but it doesn't have a sink. Its Sink is just faked. It doesn't actually have a real sink. ZIO has a real sink, and we can compose them to generate new sinks."),(0,r.kt)("h3",{id:"transducer"},"Transducer"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"Transducer"),"s, we can transform streams from one type to another, in a ",(0,r.kt)("strong",{parentName:"p"},"stateful fashion"),", which is sometimes necessary when we are doing encoding and decoding. "),(0,r.kt)("p",null,"Transducer is a transformer of element types. Transducer accepts some element of type ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and produces some element of type ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", and it may fail along the way or use the environment. It just transforms elements from one type to another type in a stateful way. "),(0,r.kt)("p",null,"For example, we can write counter with transducers. We take strings and then split them into lines, and then we take the lines, and we split them into words, and then we count them. "),(0,r.kt)("p",null,"Another common use case of transducers is ",(0,r.kt)("strong",{parentName:"p"},"writing codecs"),". We can use them to decode the bytes into strings. We have a bunch of bytes, and we want to end up with a JSON and then once we are in JSON land we want to go from JSON to our user-defined data type. So, by writing a transducer we can convert that JSON to our user-defined data type."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transducers are very efficient"),". They only exist for efficiency reasons because we can do everything we need actually with Sinks. Transducers exist only to make transformations faster. Sinks are not super fast to change from one sink to another. So transducers were invented to make it possible to transform element types in a compositional way without any of the performance overhead associated with changing over a Sink. "),(0,r.kt)("p",null,"Transducers can be thought of as ",(0,r.kt)("strong",{parentName:"p"},"element transformers"),". They transform elements of a stream:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We can take a transducer, and we can stack it onto a stream to change the element type. For example, we have a Stream of ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"s, and a transducer that goes from ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", so we can take that transducer from ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," and stack it on the stream to get back a stream of ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"s. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Also, we can stack a transducer onto the front of a sink to change the input element type. If some sink consumes ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"s, and we have a transducer from ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," we can take that transducer stack it onto the front of the sink and get back a new sink that consumes ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),"s. "))),(0,r.kt)("p",null,"Assume we are building the data pipeline, the elements come from the far left, and they end up on the far right. Events come from the stream, they end up on the sink, along the way they're transformed by transducers. ",(0,r.kt)("strong",{parentName:"p"},"Transducers are the middle section of the pipe that keep on transforming those elements in a stateful way"),"."))}u.isMDXComponent=!0}}]);