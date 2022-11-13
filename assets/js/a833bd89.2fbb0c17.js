"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[65648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(n),c=r,s=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},10988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={id:"concurrentmap",title:"ConcurrentMap"},i=void 0,p={unversionedId:"reference/sync/concurrentmap",id:"reference/sync/concurrentmap",title:"ConcurrentMap",description:"A ConcurrentMap is a wrapper over java.util.concurrent.ConcurrentHashMap.",source:"@site/docs/reference/sync/concurrentmap.md",sourceDirName:"reference/sync",slug:"/reference/sync/concurrentmap",permalink:"/reference/sync/concurrentmap",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/sync/concurrentmap.md",tags:[],version:"current",frontMatter:{id:"concurrentmap",title:"ConcurrentMap"},sidebar:"reference-sidebar",previous:{title:"CyclicBarrier",permalink:"/reference/sync/cyclicbarrier"},next:{title:"ConcurrentSet",permalink:"/reference/sync/concurrentset"}},o={},m=[{value:"Motivation",id:"motivation",level:2},{value:"Creation",id:"creation",level:2},{value:"Update Operations",id:"update-operations",level:2},{value:"Putting values",id:"putting-values",level:3},{value:"Removing values",id:"removing-values",level:3},{value:"Replacing values",id:"replacing-values",level:3},{value:"Remapping Values",id:"remapping-values",level:3},{value:"Retrieval Operations",id:"retrieval-operations",level:2},{value:"Example Usage",id:"example-usage",level:2}],d={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap")," is a wrapper over ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.concurrent.ConcurrentHashMap"),"."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," in the Scala standard library is not thread-safe. This means that if multiple fibers are accessing the same key, and trying to modify the value, this can lead to inconsistent results."),(0,r.kt)("p",null,"For example, assume we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," with a key ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," and a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". Let's see what happens if we perform the ",(0,r.kt)("inlineCode",{parentName:"p"},"inc")," workflow 100 times concurrently:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport scala.collection.mutable\n\nobject MainApp extends ZIOAppDefault {\n\n  def inc(ref: Ref[mutable.HashMap[String, Int]], key: String) =\n    for {\n      _ <- ref.get\n      _ <- ref.update { map =>\n        map.updateWith(key)(_.map(_ + 1))\n        map\n      }\n    } yield ()\n\n  def run =\n    for {\n      ref <- Ref.make(mutable.HashMap(("foo", 0)))\n      _ <- ZIO.foreachParDiscard(1 to 100)(_ => inc(ref, "foo"))\n      _ <- ref.get.map(_.get("foo")).debug("The final value of foo is")\n    } yield ()\n\n}\n')),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," is not thread-safe, every time we run this program, we might get different results, which is not desirable."),(0,r.kt)("p",null,"So we need a concurrent data structure that can be used safely in concurrent environments, which the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap")," does for us:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.concurrent.ConcurrentMap\n\nobject MainApp extends ZIOAppDefault {\n  def run =\n    for {\n      map <- ConcurrentMap.make(("foo", 0), ("bar", 1), ("baz", 2))\n      _ <- ZIO.foreachParDiscard(1 to 100)(_ =>\n        map.computeIfPresent("foo", (_, v) => v + 1)\n      )\n      _ <- map.get("foo").debug("The final value of foo is")\n    } yield ()\n}\n')),(0,r.kt)("h2",{id:"creation"},"Creation"),(0,r.kt)("p",null,"To make an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap")," we use ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap.empty"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.concurrent.ConcurrentMap\n\nval empty = ConcurrentMap.empty[String, Int]\n")),(0,r.kt)("p",null,"And to make a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap")," with some initial values we use ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap.make")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap.fromIterable"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.concurrent.ConcurrentMap\n\nval map1 = ConcurrentMap.make(("foo", 0), ("bar", 1), ("baz", 2))\nval map2 = ConcurrentMap.fromIterable(List(("foo", 0), ("bar", 1), ("baz", 2)))\n')),(0,r.kt)("h2",{id:"update-operations"},"Update Operations"),(0,r.kt)("p",null,"Basic operations are provided to manipulate the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),":"),(0,r.kt)("h3",{id:"putting-values"},"Putting values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"put(key: K, value: V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a new key-value pair and optionally returns previously bound value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"putAll(keyValues: (K, V)*): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds all new key-value pairs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"putIfAbsent(key: K, value: V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Adds a new key-value pair, unless the key is already bound to some other value.")))),(0,r.kt)("h3",{id:"removing-values"},"Removing values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remove(key: K): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the entry for the given key, optionally returning value associated with it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remove(key: K, value: V): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes the entry for the given key if it is mapped to a given value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"removeIf(p: (K, V) => Boolean): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements which do not satisfy the given predicate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retainIf(p: (K, V) => Boolean): UIO[Unit]")),(0,r.kt)("td",{parentName:"tr",align:null},"Removes all elements which do not satisfy the given predicate.")))),(0,r.kt)("h3",{id:"replacing-values"},"Replacing values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace(key: K, value: V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the entry for the given key only if it is mapped to some value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"replace(key: K, oldValue: V, newValue: V): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the entry for the given key only if it was previously mapped to a given value.")))),(0,r.kt)("h3",{id:"remapping-values"},"Remapping Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"compute(key: K, remap: (K, V) => V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Attempts to compute a mapping for the given key and its current mapped value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"def computeIfAbsent(key: K, map: K => V): UIO[V]")),(0,r.kt)("td",{parentName:"tr",align:null},"Computes a value of a non-existing key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"computeIfPresent(key: K, remap: (K, V) => V): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Attempts to compute a new mapping of an existing key.")))),(0,r.kt)("h2",{id:"retrieval-operations"},"Retrieval Operations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get(key: K): UIO[Option[V]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves the value associated with the given key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"exists(p: (K, V) => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether a given predicate holds true for at least one element in a map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"collectFirst[B](pf: PartialFunction[(K, V), B]): UIO[Option[B]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Finds the first element of a map for which the partial function is defined and applies the function to it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fold[S](zero: S)(f: (S, (K, V)) => S): UIO[S]")),(0,r.kt)("td",{parentName:"tr",align:null},"Folds the elements of a map using the given binary operator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"forall(p: (K, V) => Boolean): UIO[Boolean]")),(0,r.kt)("td",{parentName:"tr",align:null},"Tests whether a predicate is satisfied by all elements of a map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toChunk: UIO[Chunk[(K, V)]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Collects all entries into a chunk.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"toList: UIO[List[(K, V)]]")),(0,r.kt)("td",{parentName:"tr",align:null},"Collects all entries into a list.")))),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("p",null,"Given:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.concurrent.ConcurrentMap\nimport zio.{Chunk, ZIO}\n\nfor {\n  emptyMap <- ConcurrentMap.empty[Int, String]\n  data     <- ZIO.succeed(Chunk(1 -> "A", 2 -> "B", 3 -> "C"))\n  mapA     <- ConcurrentMap.fromIterable(data)\n  map100   <- ConcurrentMap.make(1 -> 100)\n  mapB     <- ConcurrentMap.make(("A", 1), ("B", 2), ("C", 3))\n} yield ()\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.collectFirst { case (3, _) => "Three" }')),(0,r.kt)("td",{parentName:"tr",align:null},'"Three"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.collectFirst { case (4, _) => "Four" }')),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map100.compute(1, _+_).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'emptyMap.computeIfAbsent("abc", _.length).get("abc")')),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map100.computeIfPresent(1, _+_).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.exists((k, _) => k % 2 == 0)")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.exists((k, _) => k == 4)")),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapB.fold(0) { case (acc, (_, value)) => acc + value }")),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapB.forall((_, v) => v < 4)")),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"emptyMap.get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'emptyMap.put(1, "b").get(1)')),(0,r.kt)("td",{parentName:"tr",align:null},'"b"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.putIfAbsent(2, "b").get(2)')),(0,r.kt)("td",{parentName:"tr",align:null},'"B"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'emptyMap.putAll((1, "A"), (2, "B"), (3, "C")).get(1)')),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.remove(1).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'mapA.remove(1,"b").get(1)')),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.removeIf((k, _) => k != 1).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.removeIf((k, _) => k != 1).get(2)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.retainIf((k, _) => k == 1).get(1)")),(0,r.kt)("td",{parentName:"tr",align:null},'"A"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mapA.retainIf((k, _) => k == 1).get(2)")),(0,r.kt)("td",{parentName:"tr",align:null},"None")))))}u.isMDXComponent=!0}}]);