"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=i,b=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},87829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={id:"hub",title:"Hub"},o=void 0,s={unversionedId:"datatypes/concurrency/hub",id:"version-1.x/datatypes/concurrency/hub",title:"Hub",description:"A Hub[A] is an asynchronous message hub. Publishers can publish messages of type A to the hub and subscribers can subscribe to receive messages of type A from the hub.",source:"@site/versioned_docs/version-1.x/datatypes/concurrency/hub.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/hub",permalink:"/version-1.x/datatypes/concurrency/hub",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/concurrency/hub.md",tags:[],version:"1.x",frontMatter:{id:"hub",title:"Hub"},sidebar:"datatypes-sidebar",previous:{title:"Queue",permalink:"/version-1.x/datatypes/concurrency/queue"},next:{title:"Semaphore",permalink:"/version-1.x/datatypes/concurrency/semaphore"}},l={},u=[{value:"Constructing Hubs",id:"constructing-hubs",level:2},{value:"Operators On Hubs",id:"operators-on-hubs",level:2},{value:"Polymorphic Hubs",id:"polymorphic-hubs",level:2},{value:"Hubs And Streams",id:"hubs-and-streams",level:2}],p={toc:u};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub[A]")," is an asynchronous message hub. Publishers can publish messages of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to the hub and subscribers can subscribe to receive messages of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," from the hub."),(0,i.kt)("p",null,"Unlike a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue"),", where each value offered to the queue can be taken by ",(0,i.kt)("em",{parentName:"p"},"one")," taker, each value published to a hub can be received by ",(0,i.kt)("em",{parentName:"p"},"all")," subscribers. Whereas a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," represents the optimal solution to the problem of how to ",(0,i.kt)("em",{parentName:"p"},"distribute")," values, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," represents the optimal solution to the problem of how to ",(0,i.kt)("em",{parentName:"p"},"broadcast")," them."),(0,i.kt)("p",null,"The fundamental operators on a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait Hub[A] {\n  def publish(a: A): UIO[Boolean]\n  def subscribe: ZManaged[Any, Nothing, Dequeue[A]]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," operator returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that publishes a message of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to the hub and succeeds with a value describing whether the message was successfully published to the hub."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," operator returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," effect where the ",(0,i.kt)("inlineCode",{parentName:"p"},"acquire")," action of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," subscribes to the hub and the ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," action unsubscribes from the hub. Within the context of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," we have access to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dequeue"),", which is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," that can only be dequeued from, that allows us to take messages published to the hub."),(0,i.kt)("p",null,"For example, we can use a hub to broadcast a message to multiple subscribers like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'Hub.bounded[String](2).flatMap { hub =>\n  hub.subscribe.zip(hub.subscribe).use { case (left, right) =>\n    for {\n      _ <- hub.publish("Hello from a hub!")\n      _ <- left.take.flatMap(console.putStrLn(_))\n      _ <- right.take.flatMap(console.putStrLn(_))\n    } yield ()\n  }\n}\n')),(0,i.kt)("p",null,"A subscriber will only receive messages that are published to the hub while it is subscribed. So if we want to make sure that a particular message is received by a subscriber we must take care that the subscription has completed before publishing the message to the hub."),(0,i.kt)("p",null,"We can do this by publishing a message to the hub within the scope of the subscription as in the example above or by using other coordination mechanisms such as completing a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"  when the ",(0,i.kt)("inlineCode",{parentName:"p"},"acquire")," action of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," has completed."),(0,i.kt)("p",null,"Of course, in many cases such as subscribing to receive real time data we may not care about this because we are happy to just pick up with the most recent messages after we have subscribed. But for testing and simple applications this can be an important point to keep in mind."),(0,i.kt)("h2",{id:"constructing-hubs"},"Constructing Hubs"),(0,i.kt)("p",null,"The most common way to create a hub is with the ",(0,i.kt)("inlineCode",{parentName:"p"},"bounded")," constructor, which returns an effect that creates a new hub with the specified requested capacity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def bounded[A](requestedCapacity: Int): UIO[Hub[A]] =\n  ???\n")),(0,i.kt)("p",null,"For maximum efficiency you should create hubs with capacities that are powers of two."),(0,i.kt)("p",null,"Just like a bounded queue, a bounded hub applies back pressure to publishers when it is at capacity, so publishers will semantically block on calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," if the hub is full."),(0,i.kt)("p",null,"The advantage of the back pressure strategy is that it guarantees that all subscribers will receive all messages published to the hub while they are subscribed. However, it does create the risk that a slow subscriber will slow down the rate at which messages are published and received by other subscribers."),(0,i.kt)("p",null,"If you do not want this you can create a hub with the ",(0,i.kt)("inlineCode",{parentName:"p"},"dropping")," constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def dropping[A](requestedCapacity: Int): UIO[Hub[A]] =\n  ???\n")),(0,i.kt)("p",null,"A dropping hub will simply drop values published to it if the hub is at capacity, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," on calls to ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," if the hub is full to signal that the value was not successfully published."),(0,i.kt)("p",null,"The advantage of the dropping strategy is that publishers can continue to publish new values so when there is space in the hub the newest values can be published to the hub. However, subscribers are no longer guaranteed to receive all values published to the hub and a slow subscriber can still prevent messages from being published to the hub and received by other subscribers."),(0,i.kt)("p",null,"You can also create a hub with the ",(0,i.kt)("inlineCode",{parentName:"p"},"sliding")," constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def sliding[A](requestedCapacity: Int): UIO[Hub[A]] =\n  ???\n")),(0,i.kt)("p",null,"A sliding hub will drop the oldest value if a new value is published to it and the hub is at capacity, so publishing will always succeed immediately."),(0,i.kt)("p",null,"The advantage of the sliding strategy is that a slow subscriber cannot slow down that rate at which messages are published to the hub or received by other subscribers. However, it creates the risk that slow subscribers may not receive all messages published to the hub."),(0,i.kt)("p",null,"Finally, you can create a hub with the ",(0,i.kt)("inlineCode",{parentName:"p"},"unbounded")," constructor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"def unbounded[A]: UIO[Hub[A]] =\n  ???\n")),(0,i.kt)("p",null,"An unbounded hub is never at capacity so publishing to an unbounded hub always immediately succeeds."),(0,i.kt)("p",null,"The advantage of an unbounded hub is that it combines the guarantees that all subscribers will receive all messages published to the hub and that a slow subscriber will not slow down the rate at which messages are published and received by other subscribers. However, it does this at the cost of potentially growing without bound if messages are published to the hub more quickly than they are taken by the slowest subscriber."),(0,i.kt)("p",null,"In general you should prefer bounded, dropping, or sliding hubs for this reason. However, unbounded hubs can be useful in certain situations where you do not know exactly how many values will be published to the hub but are confident that it will not exceed a reasonable size or want to handle that concern at a higher level of your application."),(0,i.kt)("h2",{id:"operators-on-hubs"},"Operators On Hubs"),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe"),", many of the same operators that are available on queues are available on hubs."),(0,i.kt)("p",null,"We can publish multiple values to the hub using the ",(0,i.kt)("inlineCode",{parentName:"p"},"publishAll")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def publishAll(as: Iterable[A]): UIO[Boolean]\n}\n")),(0,i.kt)("p",null,"We can check the capacity of the hub as well as the number of messages currently in the hub using the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"capacity")," operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def capacity: Int\n  def size: UIO[Int]\n}\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"capacity")," returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," because the capacity is set at hub creation and never changes. In contrast, ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that determines the current size of the hub since the number of messages in the hub can change over time."),(0,i.kt)("p",null,"We can also shut down the hub, check whether it has been shut down, or await its shut down. Shutting down a hub will shut down all the queues associated with subscriptions to the hub, properly propagating the shut down signal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def awaitShutdown: UIO[Unit]\n  def isShutdown: UIO[Boolean]\n  def shutdown: UIO[Unit]\n}\n")),(0,i.kt)("p",null,"As you can see, the operators on ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," are identical to the ones on ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," with the exception of ",(0,i.kt)("inlineCode",{parentName:"p"},"publish")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"subscribe")," replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"offer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"take"),". So if you know how to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," you already know how to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,i.kt)("p",null,"In fact, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," can be viewed as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," that can only be written to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait Hub[A] {\n  def toQueue[A]: Enqueue[A]\n}\n")),(0,i.kt)("p",null,"Here the ",(0,i.kt)("inlineCode",{parentName:"p"},"Enqueue")," type represents a queue that can only be enqueued. Enqueing to the queue publishes a value to the hub, shutting down the queue shuts down the hub, and so on."),(0,i.kt)("p",null,"This can be extremely useful because it allows us to use a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," anywhere we are currently using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," that we only write to."),(0,i.kt)("p",null,"For example, say we are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"into")," operator on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," to send all elements of a stream of financial transactions to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," for processing by a downstream consumer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\ntrait ZStream[-R, +E, +O] {\n  def into[R1 <: R, E1 >: E](\n    queue: ZEnqueue[R1, Nothing, Take[E1, O]]\n  ): ZIO[R1, E1, Unit]\n}\n")),(0,i.kt)("p",null,"We would now like to have multiple downstream consumers process each of these transactions, for example to persist them and log them in addition to applying our business logic to them. With ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," this is easy because we can just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"toQueue")," operator to view any ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Queue")," that can only be written to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"type Transaction = ???\n\nval transactionStream: ZStream[Any, Nothing, Transaction] =\n  ???\n\nval hub: Hub[Transaction] =\n  ???\n\ntransactionStream.into(hub.toQueue)\n")),(0,i.kt)("p",null,"All of the elements from the transaction stream will now be published to the hub. We can now have multiple downstream consumers process elements from the financial transactions stream with the guarantee that all downstream consumers will see all transactions in the stream, changing the topology of our data flow from one-to-one to one-to-many with a single line change."),(0,i.kt)("h2",{id:"polymorphic-hubs"},"Polymorphic Hubs"),(0,i.kt)("p",null,"Like many of the other data structures in ZIO, a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hub")," is actually a type alias for a more polymorphic data structure called a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZHub[-RA, -RB, +EA, +EB, -A, B] {\n  def publish(a: A): ZIO[RA, EA, Boolean]\n  def subscribe: ZManaged[Any, Nothing, ZDequeue[RB, EB, B]]\n}\n\ntype Hub[A] = ZHub[Any, Any, Nothing, Nothing, A, A]\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub")," allows publishers to publish messages of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," to the hub and subscribers to subscribe to receive messages of type ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," from the hub. Publishing messages to the hub can require an environment of type ",(0,i.kt)("inlineCode",{parentName:"p"},"RA")," and fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"p"},"EA")," and taking messages from the hub can require an environment of type ",(0,i.kt)("inlineCode",{parentName:"p"},"RB")," and fail with an error of type ",(0,i.kt)("inlineCode",{parentName:"p"},"EB"),"."),(0,i.kt)("p",null,"Defining hubs polymorphically like this allows us to describe hubs that potentially transform their inputs or outputs in some way."),(0,i.kt)("p",null,"To create a polymorphic hub we begin with a normal hub as described above and then add logic to it for transforming its inputs or outputs."),(0,i.kt)("p",null,"We can transform the type of messages received from the hub using the ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mapM")," operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZHub[-RA, -RB, +EA, +EB, -A, +B] {\n  def map[C](f: B => C): ZHub[RA, RB, EA, EB, A, C]\n  def mapM[RC <: RB, EC >: EB, C](f: B => ZIO[RC, EC, C]): ZHub[RA, RC, EA, EC, A, C]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," operator allows us to transform the type of messages received from the hub with the specified function. Conceptually, every time a message is taken from the hub by a subscriber it will first be transformed with the function ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," before being received by the subscriber."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mapM")," operator works the same way except it allows us to perform an effect each time a value is taken from the hub. We could use this for example to log each time a message is taken from the hub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.clock._\n\nval hub: Hub[Int] = ???\n\nval hubWithLogging: ZHub[Any, Clock with Console, Nothing, Nothing, Int, Int] =\n  hub.mapM { n =>\n    clock.currentDateTime.orDie.flatMap { currentDateTime =>\n      console.putStrLn(s"Took message $n from the hub at $currentDateTime").orDie\n    }.as(n)\n  }\n')),(0,i.kt)("p",null,"Note that the specified function in ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mapM")," will be applied each time a message is taken from the hub by a subscriber. Thus, if there are ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," subscribers to the hub the function will be evaluated ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," times for each message published to the hub."),(0,i.kt)("p",null,"This can be useful if we want to, for example, observe the different times that different subscribers are taking messages from the hub as in the example above. However, it is less efficient if we want to apply a transformation once for each value published to the hub."),(0,i.kt)("p",null,"For this we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"contramapM")," operators defined on ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZHub[-RA, -RB, +EA, +EB, -A, +B] {\n  def contramap[C](\n    f: C => A\n  ): ZHub[RA, RB, EA, EB, C, B]\n  def contramapM[RC <: RA, EC >: EA, C](\n    f: C => ZIO[RC, EC, A]\n  ): ZHub[RC, RB, EC, EB, C, B]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," operator allows us to transform each value published to the hub by applying the specified function. Conceptually it returns a new hub where every time we publish a value we first transform it with the specified function before publishing it to the original hub."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"contramapM")," operator works the same way except it allows us to perform an effect each time a message is published to the hub."),(0,i.kt)("p",null,"Using these operators, we could describe a hub that validates its inputs, allowing publishers to publish raw data and subscribers to receive validated data while signaling to publishers when data they attempt to publish is not valid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.clock._\n\nval hub: Hub[Int] = ???\n\nval hubWithLogging: ZHub[Any, Any, String, Nothing, String, Int] =\n  hub.contramapM { (s: String) =>\n    ZIO.effect(s.toInt).orElseFail(s"$s is not a valid message")\n  }\n')),(0,i.kt)("p",null,"We can also transform inputs and outputs at the same time using the ",(0,i.kt)("inlineCode",{parentName:"p"},"dimap")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"dimapM")," operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZHub[-RA, -RB, +EA, +EB, -A, +B] {\n  def dimap[C, D](\n    f: C => A,\n    g: B => D\n  ): ZHub[RA, RB, EA, EB, C, D]\n  def dimapM[RC <: RA, RD <: RB, EC >: EA, ED >: EB, C, D](\n    f: C => ZIO[RC, EC, A],\n    g: B => ZIO[RD, ED, D]\n  ): ZHub[RC, RD, EC, ED, C, D]\n}\n")),(0,i.kt)("p",null,"These correspond to transforming the inputs and outputs of a hub at the same time using the specified functions. This is the same as transforming the outputs with ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mapM")," and the inputs with ",(0,i.kt)("inlineCode",{parentName:"p"},"contramap")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"contramapM"),"."),(0,i.kt)("p",null,"In addition to just transforming the inputs and outputs of a hub we can also filter the inputs or outputs of a hub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZHub[-RA, -RB, +EA, +EB, -A, +B] {\n  def filterInput[A1 <: A](\n    f: A1 => Boolean\n  ): ZHub[RA, RB, EA, EB, A1, B]\n  def filterInputM[RA1 <: RA, EA1 >: EA, A1 <: A](\n    f: A1 => ZIO[RA1, EA1, Boolean]\n  ): ZHub[RA1, RB, EA1, EB, A1, B]\n  def filterOutput(\n    f: B => Boolean\n  ): ZHub[RA, RB, EA, EB, A, B]\n  def filterOutputM[RB1 <: RB, EB1 >: EB](\n    f: B => ZIO[RB1, EB1, Boolean]\n  ): ZHub[RA, RB1, EA, EB1, A, B]\n}\n")),(0,i.kt)("p",null,'Filtering the inputs to a hub conceptually "throws away" messages that do not meet the filter predicate before they are published to the hub. The ',(0,i.kt)("inlineCode",{parentName:"p"},"publish")," operator will return ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to signal that such a message was not successfully published to the hub."),(0,i.kt)("p",null,"Similarly, filtering the outputs from a hub causes subscribers to ignore messages that do not meet the filter predicate, continuing to take messages from the hub until they find one that does meet the filter predicate."),(0,i.kt)("p",null,"We could, for example, create a hub that only handles tweets containing a particular term."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'final case class Tweet(text: String)\n\nval hub: Hub[Tweet] = ???\n\nval zioHub: Hub[Tweet] =\n  hub.filterInput(_.text.contains("zio"))\n')),(0,i.kt)("p",null,"In most cases the hubs we work with in practice will be monomorphic hubs and we will use the hub purely to broadcast values, performing any necessary effects before publishing values to the hub or after taking values from the hub. But it is nice to know that we have this kind of power if we need it."),(0,i.kt)("h2",{id:"hubs-and-streams"},"Hubs And Streams"),(0,i.kt)("p",null,"Hubs play extremely well with streams."),(0,i.kt)("p",null,"We can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," from a subscription to a hub using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fromHub")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\nobject ZStream {\n  def fromHub[R, E, O](hub: ZHub[Nothing, R, Any, E, Nothing, O]): ZStream[R, E, O] =\n    ???\n}\n")),(0,i.kt)("p",null,"This will return a stream that subscribes to receive values from a hub and then emits every value published to the hub while the subscription is active. When the stream ends the subscriber will automatically be unsubscribed from the hub."),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"fromHubManaged")," operator that returns the stream in the context of a managed effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object ZStream {\n  def fromHubManaged[R, E, O](\n    hub: ZHub[Nothing, R, Any, E, Nothing, O]\n  ): ZManaged[Any, Nothing, ZStream[R, E, O]] =\n    ???\n}\n")),(0,i.kt)("p",null,"The managed effect here describes subscribing to receive messages from the hub while the stream describes taking messages from the hub. This can be useful when we need to ensure that a consumer has subscribed before a producer begins publishing values."),(0,i.kt)("p",null,"Here is an example of using it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'for {\n  promise <- Promise.make[Nothing, Unit]\n  hub     <- Hub.bounded[String](2)\n  managed  = ZStream.fromHubManaged(hub).tapM(_ => promise.succeed(()))\n  stream   = ZStream.unwrapManaged(managed)\n  fiber   <- stream.take(2).runCollect.fork\n  _       <- promise.await\n  _       <- hub.publish("Hello")\n  _       <- hub.publish("World")\n  _       <- fiber.join\n} yield ()\n')),(0,i.kt)("p",null,"Notice that in this case we used a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," to ensure that the subscription had completed before publishing to the hub. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," in the return type of ",(0,i.kt)("inlineCode",{parentName:"p"},"fromHubManaged")," made it easy for us to signal when the subscription had occurred by using ",(0,i.kt)("inlineCode",{parentName:"p"},"tapM")," and completing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"."),(0,i.kt)("p",null,"Of course in many real applications we don't need this kind of sequencing and just want to subscribe to receive new messages. In this case we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fromHub")," operator to return a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," that will automatically handle subscribing and unsubscribing for us."),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"fromHubWithShutdown")," variant that shuts down the hub itself when the stream ends. This is useful when the stream represents your main application logic and you want to shut down other subscriptions to the hub when the stream ends."),(0,i.kt)("p",null,"Each of these constructors also has ",(0,i.kt)("inlineCode",{parentName:"p"},"Chunk")," variants, ",(0,i.kt)("inlineCode",{parentName:"p"},"fromChunkHub")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fromChunkHubWithShutdown"),", that allow you to preserve the chunked structure of data when working with hubs and streams."),(0,i.kt)("p",null,"In addition to being able to create streams from subscriptions to hubs, there are a variety of ways to send values emitted by streams to hubs to build more complex data flow graphs."),(0,i.kt)("p",null,"The simplest of these is the ",(0,i.kt)("inlineCode",{parentName:"p"},"toHub")," operator, which constructs a new hub and publishes each element emitted by the stream to that hub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZStream[-R, +E, +O] {\n  def toHub(\n    capacity: Int\n  ): ZManaged[R, Nothing, ZHub[Nothing, Any, Any, Nothing, Nothing, Take[E, O]]]\n}\n")),(0,i.kt)("p",null,"The hub will be constructed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"bounded")," constructor using the specified capacity."),(0,i.kt)("p",null,"If you want to send values emitted by a stream to an existing hub or a hub created using one of the other hub constructors you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"intoHub")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZStream[-R, +E, +O] {\n  def intoHub[R1 <: R, E1 >: E](\n    hub: ZHub[R1, Nothing, Nothing, Any, Take[E1, O], Any]\n  ): ZIO[R1, E1, Unit]\n}\n")),(0,i.kt)("p",null,"There is an ",(0,i.kt)("inlineCode",{parentName:"p"},"intoHubManaged")," variant of this if you want to send values to the hub in the context of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," effect."),(0,i.kt)("p",null,"You can also create a sink that sends values to a hub."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object ZSink {\n  def fromHub[R, E, I](\n    hub: ZHub[R, Nothing, E, Any, I, Any]\n  ): ZSink[R, E, I, Nothing, Unit] =\n    ???\n}\n")),(0,i.kt)("p",null,"The sink will publish each value sent to the sink to the specified hub. Again there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"fromHubWithShutdown")," variant that will shut down the hub when the stream ends."),(0,i.kt)("p",null,"Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub")," is used internally to provide a highly efficient implementation of the ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcast")," family of operators, including ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcast")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastDynamic"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZStream[-R, +E, +O] {\n  def broadcast(\n    n: Int,\n    maximumLag: Int\n  ): ZManaged[R, Nothing, List[ZStream[Any, E, O]]]\n  def broadcastDynamic(\n    maximumLag: Int\n  ): ZManaged[R, Nothing, ZManaged[Any, Nothing, ZStream[Any, E, O]]]\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcast")," operator generates the specified number of new streams and broadcasts each value from the original stream to each of the new streams. The ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcastDynamic")," operator returns a new ",(0,i.kt)("inlineCode",{parentName:"p"},"ZManaged")," value that you can use to dynamically subscribe and unsubscribe to receive values broadcast from the original stream."),(0,i.kt)("p",null,"You don't have to do anything with ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub")," to take advantage of these operators other than enjoy their optimized implementation in terms of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZHub"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"broadcast")," and other ",(0,i.kt)("inlineCode",{parentName:"p"},"ZStream")," operators that model distributing values to different streams and combining values from different streams it is straightforward to build complex data flow graphs, all while being as performant as possible."))}h.isMDXComponent=!0}}]);