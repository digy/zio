"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[29116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,u=h["".concat(c,".").concat(d)]||h[d]||p[d]||l;return n?a.createElement(u,i(i({ref:t},k),{},{components:n})):a.createElement(u,i({ref:t},k))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},30353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={id:"reentrantlock",title:"ReentrantLock"},i=void 0,o={unversionedId:"reference/sync/reentrantlock",id:"reference/sync/reentrantlock",title:"ReentrantLock",description:"A ReentrantLock is a lock which can be acquired multiple times by the same fiber. When a fiber acquires (lock) a reentrant lock, it will become the owner of that lock. Other fibers cannot obtain the lock unless the lock owner releases (unlock) the lock. As the lock is reentrant, the lock owner can call the lock again, multiple times.",source:"@site/docs/reference/sync/reentrantlock.md",sourceDirName:"reference/sync",slug:"/reference/sync/reentrantlock",permalink:"/reference/sync/reentrantlock",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/sync/reentrantlock.md",tags:[],version:"current",frontMatter:{id:"reentrantlock",title:"ReentrantLock"},sidebar:"reference-sidebar",previous:{title:"Introduction to ZIO's Synchronization Primitives",permalink:"/reference/sync/"},next:{title:"CountdownLatch",permalink:"/reference/sync/countdownlatch"}},c={},s=[{value:"Reentrancy",id:"reentrancy",level:2},{value:"Creating ReentrantLocks",id:"creating-reentrantlocks",level:2},{value:"Locking and Unlocking",id:"locking-and-unlocking",level:2},{value:"Fairness Policy",id:"fairness-policy",level:2},{value:"Convenience Operations",id:"convenience-operations",level:2},{value:"Querying ReentrantLocks",id:"querying-reentrantlocks",level:2},{value:"Examples",id:"examples",level:2},{value:"Example of Simple Locking Mechanism",id:"example-of-simple-locking-mechanism",level:3},{value:"Example of Reentrancy",id:"example-of-reentrancy",level:3},{value:"Example of Producing Deadlock",id:"example-of-producing-deadlock",level:3}],k={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ReentrantLock")," is a lock which can be acquired multiple times by the same fiber. When a fiber acquires (",(0,r.kt)("inlineCode",{parentName:"p"},"lock"),") a reentrant lock, it will become the owner of that lock. Other fibers cannot obtain the lock unless the lock owner releases (",(0,r.kt)("inlineCode",{parentName:"p"},"unlock"),") the lock. As the lock is reentrant, the lock owner can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," again, multiple times."),(0,r.kt)("h2",{id:"reentrancy"},"Reentrancy"),(0,r.kt)("p",null,"In reentrancy, only the current working fiber can access a shared resource, preventing any other fibers from doing so. Reentrant locks allow their owner (the fiber that owns the lock) to re-enter them multiple times."),(0,r.kt)("p",null,"Therefore, in reentrancy locks are acquired per-fiber instead of per-invocation. In other words, if a fiber is not reentrant, and tries to acquire a lock that it already holds, the request won\u2019t succeed."),(0,r.kt)("h2",{id:"creating-reentrantlocks"},"Creating ReentrantLocks"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"ReentrantLocks.make")," we can create a reentrant lock in the ",(0,r.kt)("em",{parentName:"p"},"unlocked state"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ReentrantLock {\n  def make(fairness: Boolean = false): UIO[ReentrantLock] = ???\n}\n")),(0,r.kt)("p",null,"By default, it creates a reentrant lock with an unfair policy, so waiters will be picked randomly. If we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"fairness")," parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the reentrant lock will pick the longest waiting fiber."),(0,r.kt)("h2",{id:"locking-and-unlocking"},"Locking and Unlocking"),(0,r.kt)("p",null,"The two basic operations on reentrant locks are ",(0,r.kt)("inlineCode",{parentName:"p"},"lock")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unlock"),". They acquire and release the lock, respectively:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ReentrantLock {\n  lazy val lock:   UIO[Unit]\n  lazy val unlock: UIO[Unit]\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReentrantLock#lock")),"\u2014 When a fiber attempt to acquire the lock one of the following cases will happen:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the state is ",(0,r.kt)("em",{parentName:"p"},"unlocked")," and in another word if the lock is not held by another fiber, it will acquire the lock and returns immediately and the ",(0,r.kt)("em",{parentName:"p"},"hold count")," increased by one.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the state is ",(0,r.kt)("em",{parentName:"p"},"locked")," and the current fiber already holds the lock, then the ",(0,r.kt)("em",{parentName:"p"},"hold count")," is incremented by one, and the method returns immediately. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When the state is ",(0,r.kt)("em",{parentName:"p"},"locked")," and the lock is held by another fiber, then the current fiber will be put to sleep until the lock has been acquired, at which point the lock hold count will be reset to one.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReentrantLock#unlock")),"\u2014 When a fiber attempt to release the lock, one of the following cases will happen:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the current fiber is the holder of this lock then the hold count is decremented. If the hold count is now zero then the lock is released. So if there are any fibers blocked on acquire, one fiber will be picked using (fairness or unfairness policy) and woken up."),(0,r.kt)("li",{parentName:"ul"},"If the current fiber is not the holder of this lock then nothing happens.")))),(0,r.kt)("h2",{id:"fairness-policy"},"Fairness Policy"),(0,r.kt)("p",null,"The ReentrantLock constructor offers two fairness policies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"unfair policy (the default)"),(0,r.kt)("li",{parentName:"ul"},"fair policy")),(0,r.kt)("p",null,"When a fiber fails to acquire the lock, it is placed in the waiting queue. So when the owning fiber releases the lock, the next waiting fiber chosen by the fairness policy is allowed to try acquiring the lock:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the case of a fairness policy, fibers always acquire a lock in the order in which they requested it. So the reentrant lock will pick the longest waiting fiber from the waiting queue."),(0,r.kt)("li",{parentName:"ul"},"In case of unfair policy, the reentrant lock will pick a random fiber from the waiting queue.")),(0,r.kt)("h2",{id:"convenience-operations"},"Convenience Operations"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReentrantLock#tryLock")),"\u2014 Acquires the lock only if it is not held by another fiber at the time of invocation otherwise it will return immediately, so it is a non-blocking operation.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the state is ",(0,r.kt)("em",{parentName:"li"},"unlocked")," ",(0,r.kt)("inlineCode",{parentName:"li"},"tryLock")," changes the state to ",(0,r.kt)("em",{parentName:"li"},"locked")," (with the current fiber as owner and a hold count of 1) and returns ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"When the state is ",(0,r.kt)("em",{parentName:"li"},"locked")," ",(0,r.kt)("inlineCode",{parentName:"li"},"tryLock")," leaves the state ",(0,r.kt)("em",{parentName:"li"},"unchanged")," and returns ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ReentrantLock {\n  lazy val tryLock: UIO[Boolean]\n}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"ReentrantLock#withLock")),"\u2014 Acquires and releases the lock as a scoped effect. By using this method, the unlock method will be called automatically at the end of the scope.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ReentrantLock {\n  lazy val withLock: URIO[Scope, Int]\n}\n")),(0,r.kt)("h2",{id:"querying-reentrantlocks"},"Querying ReentrantLocks"),(0,r.kt)("p",null,"A reentrant lock has two states: ",(0,r.kt)("em",{parentName:"p"},"locked")," or ",(0,r.kt)("em",{parentName:"p"},"unlocked"),". When the reentrant lock is in ",(0,r.kt)("em",{parentName:"p"},"locked")," state it has these properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Owner")," indicates which fiber has acquired the lock. This can be queried by calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReentrantLock#owner")," method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hold Count")," indicates how many times its owner acquired the lock. This can be queried using by calling the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReentrantLock#holdCount")," method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Waiters")," is a collection of fibers that are waiting to acquire this lock. We can query all of them using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ReentrantLock#queuedFibers")," method.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-of-simple-locking-mechanism"},"Example of Simple Locking Mechanism"),(0,r.kt)("p",null,"In the following example, the main fiber acquires the lock, and then we try to acquire the lock from its child fiber. We will see that the child fiber will be blocked when it attempts to acquire the lock until the parent fiber releases it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent._\n\nobject MainApp extends ZIOAppDefault {\n\n  def run =\n    for {\n      l  <- ReentrantLock.make()\n      fn <- ZIO.fiberId.map(_.threadName)\n      _  <- l.lock\n      _  <- ZIO.debug(s"$fn acquired the lock.")\n      task =\n        for {\n          fn <- ZIO.fiberId.map(_.threadName)\n          _  <- ZIO.debug(s"$fn attempted to acquire the lock.")\n          _  <- l.lock\n          _  <- ZIO.debug(s"$fn acquired the lock.")\n          _  <- ZIO.debug(s"$fn will release the lock after 5 second.")\n          _  <- ZIO.sleep(5.second)\n          _  <- l.unlock\n          _  <- ZIO.debug(s"$fn released the lock.")\n        } yield ()\n      f <- task.fork\n      _ <- ZIO.debug(s"$fn will release the lock after 10 second.")\n      _ <- ZIO.sleep(10.second)\n      _ <- (l.unlock *> ZIO.debug(s"$fn released the lock.")).uninterruptible\n      _ <- f.join\n    } yield ()\n    \n}\n')),(0,r.kt)("p",null,"Parent fiber (",(0,r.kt)("inlineCode",{parentName:"p"},"zio-fiber-2"),") acquires the lock and then releases it after 10 seconds. Meanwhile, the child fiber (",(0,r.kt)("inlineCode",{parentName:"p"},"zio-fiber-7"),") tries to acquire the lock, but it cannot. The attempt to acquire the lock in the child fiber causes the fiber to go into sleep mode. Following the release of the lock by the parent fiber, the child fiber will awaken and acquire the lock."),(0,r.kt)("h3",{id:"example-of-reentrancy"},"Example of Reentrancy"),(0,r.kt)("p",null,"In the previous example, we used the simplest use-case of a locking mechanism that doesn't involve reentrancy. To illustrate how reentrancy works, let's look at another example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent._\n\nobject MainApp extends ZIOAppDefault {\n\n  def task(l: ReentrantLock, i: Int): ZIO[Any, Nothing, Unit] = for {\n    fn <- ZIO.fiberId.map(_.threadName)\n    _  <- l.lock\n    hc <- l.holdCount\n    _  <- ZIO.debug(s"$fn (re)entered the critical section and now the hold count is $hc")\n    _  <- ZIO.when(i > 0)(task(l, i - 1))\n    _  <- l.unlock\n    hc <- l.holdCount\n    _  <- ZIO.debug(s"$fn exited the critical section and now the hold count is $hc")\n  } yield ()\n\n  def run =\n    for {\n      l <- ReentrantLock.make()\n      _ <- task(l, 2) zipPar task(l, 3)\n    } yield ()\n}\n')),(0,r.kt)("p",null,"In this example, inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"task")," function, we have a critical section. Also, the ",(0,r.kt)("inlineCode",{parentName:"p"},"task")," itself is recursive and inside the critical section, it will call itself. When a fiber tries to enter the critical section and that fiber is the owner of that critical section, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReentrantLock")," allows that fiber to reenter, and it will increment the ",(0,r.kt)("inlineCode",{parentName:"p"},"holdCount")," by one."),(0,r.kt)("h3",{id:"example-of-producing-deadlock"},"Example of Producing Deadlock"),(0,r.kt)("p",null,"When two or more fibers wait forever for a lock held by another fiber, they have reached a deadlock. So when we are working with locks, we should be careful of avoiding deadlocks."),(0,r.kt)("p",null,"In this example, we are just trying to show a simple possible deadlock example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent._\n\nobject MainApp extends ZIOAppDefault {\n  def workflow1(l1: ReentrantLock, l2: ReentrantLock) =\n    for {\n      f <- ZIO.fiberId.map(_.threadName)\n      _ <- l1.lock *> ZIO.debug(s"$f locked the l1")\n      o <- l2.owner.map(_.map(_.threadName))\n      _ <- ZIO.debug(s"$f trying to lock the l2 while the $o is its owner") *>\n        l2.lock *>\n        ZIO.debug(s"$f locked the l2")\n      _ <- l2.unlock\n      _ <- l1.unlock\n    } yield ()\n\n  def workflow2(l1: ReentrantLock, l2: ReentrantLock) =\n    for {\n      f <- ZIO.fiberId.map(_.threadName)\n      _ <- l2.lock *> ZIO.debug(s"$f locked the l2")\n      o <- l1.owner.map(_.map(_.threadName))\n      _ <- ZIO.debug(s"$f trying to lock the l1 while the $o is its owner") *>\n        l1.lock *>\n        ZIO.debug(s"$f locked the l1")\n      _ <- l1.unlock\n      _ <- l2.unlock\n    } yield ()\n\n  def run =\n    for {\n      l1 <- ReentrantLock.make()\n      l2 <- ReentrantLock.make()\n      _ <- workflow1(l1, l2) <&> workflow2(l1, l2)\n    } yield ()\n}\n')),(0,r.kt)("p",null,"In we run this program, we have a possible deadlock situation, and it might print the following messages and lock forever:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"zio-fiber-7 locked the l1\nzio-fiber-8 locked the l2\nzio-fiber-7 trying to lock the l2 while the Some(zio-fiber-8) is its owner\nzio-fiber-8 trying to lock the l1 while the Some(zio-fiber-7) is its owner\n")),(0,r.kt)("p",null,"When we run two workflows concurrently, it can cause a deadlock when the first workflow obtains ",(0,r.kt)("inlineCode",{parentName:"p"},"l1")," and in the meantime, the second workflow obtains ",(0,r.kt)("inlineCode",{parentName:"p"},"l2"),", now:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the first workflow tries to obtain ",(0,r.kt)("inlineCode",{parentName:"li"},"l2")," while ",(0,r.kt)("inlineCode",{parentName:"li"},"l2")," is being obtained by ",(0,r.kt)("inlineCode",{parentName:"li"},"l1"),"."),(0,r.kt)("li",{parentName:"ul"},"When the second workflow tries to obtain the ",(0,r.kt)("inlineCode",{parentName:"li"},"l1")," while the ",(0,r.kt)("inlineCode",{parentName:"li"},"l2")," is being obtained by ",(0,r.kt)("inlineCode",{parentName:"li"},"l1"),".\nEventually, both fibers will enter a waiting state, and there will be a deadlock.")))}p.isMDXComponent=!0}}]);