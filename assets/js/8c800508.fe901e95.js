"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={id:"service-pattern",title:"The Five Elements of Service Pattern",sidebar_label:"Service Pattern"},o=void 0,l={unversionedId:"reference/service-pattern/service-pattern",id:"reference/service-pattern/service-pattern",title:"The Five Elements of Service Pattern",description:"Writing services in ZIO using the Service Pattern is very similar to the object-oriented way of defining services. We use scala traits to define services, classes to implement services, and constructors to define service dependencies. Finally, we lift the class constructor into the ZLayer.",source:"@site/docs/reference/service-pattern/service-pattern.md",sourceDirName:"reference/service-pattern",slug:"/reference/service-pattern/",permalink:"/reference/service-pattern/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/service-pattern/service-pattern.md",tags:[],version:"current",frontMatter:{id:"service-pattern",title:"The Five Elements of Service Pattern",sidebar_label:"Service Pattern"},sidebar:"reference-sidebar",previous:{title:"Introduction to Writing ZIO Services",permalink:"/reference/service-pattern/introduction"},next:{title:"Polymorphic Services",permalink:"/reference/service-pattern/defining-polymorphic-services-in-zio"}},c={},d=[{value:"1. Service Definition",id:"1-service-definition",level:2},{value:"2. Service Implementation",id:"2-service-implementation",level:2},{value:"3. Service Dependencies",id:"3-service-dependencies",level:2},{value:"4. ZLayer (Constructor)",id:"4-zlayer-constructor",level:2},{value:"5. Accessor Methods",id:"5-accessor-methods",level:2}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Writing services in ZIO using the ",(0,i.kt)("em",{parentName:"p"},"Service Pattern")," is very similar to the object-oriented way of defining services. We use scala traits to define services, classes to implement services, and constructors to define service dependencies. Finally, we lift the class constructor into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZLayer"),"."),(0,i.kt)("p",null,"Let's start learning this service pattern by writing a ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo")," service:"),(0,i.kt)("h2",{id:"1-service-definition"},"1. Service Definition"),(0,i.kt)("p",null,"Traits are how we define services. A service could be all the stuff that is related to one concept with singular responsibility. We define the service definition with a trait named ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ncase class Doc(\n    title: String,\n    description: String,\n    language: String,\n    format: String,\n    content: Array[Byte]\n)\n\ntrait DocRepo {\n  def get(id: String): ZIO[Any, Throwable, Doc]\n\n  def save(document: Doc): ZIO[Any, Throwable, String]\n\n  def delete(id: String): ZIO[Any, Throwable, Unit]\n\n  def findByTitle(title: String): ZIO[Any, Throwable, List[Doc]]\n}\n")),(0,i.kt)("h2",{id:"2-service-implementation"},"2. Service Implementation"),(0,i.kt)("p",null,"It is the same as what we did in an object-oriented fashion. We implement the service with the Scala class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class DocRepoImpl() extends DocRepo {\n  override def get(id: String): ZIO[Any, Throwable, Doc] = ???\n\n  override def save(document: Doc): ZIO[Any, Throwable, String] = ???\n\n  override def delete(id: String): ZIO[Any, Throwable, Unit] = ???\n\n  override def findByTitle(title: String): ZIO[Any, Throwable, List[Doc]] = ???\n}\n")),(0,i.kt)("h2",{id:"3-service-dependencies"},"3. Service Dependencies"),(0,i.kt)("p",null,"We might need ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataRepo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BlobStorage")," services to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo")," service. Here, we put its dependencies into its constructor. All the dependencies are just interfaces, not implementation. Just like what we did in object-oriented style."),(0,i.kt)("p",null,"First, we need to define the interfaces for ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataRepo")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BlobStorage")," services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class Metadata(\n    title: String,\n    description: String,\n    language: String,\n    format: String\n)\n\ntrait MetadataRepo {\n  def get(id: String): ZIO[Any, Throwable, Metadata]\n\n  def put(id: String, metadata: Metadata): ZIO[Any, Throwable, Unit]\n\n  def delete(id: String): ZIO[Any, Throwable, Unit]\n\n  def findByTitle(title: String): ZIO[Any, Throwable, Map[String, Metadata]]\n}\n\ntrait BlobStorage {\n  def get(id: String): ZIO[Any, Throwable, Array[Byte]]\n\n  def put(content: Array[Byte]): ZIO[Any, Throwable, String]\n\n  def delete(id: String): ZIO[Any, Throwable, Unit]\n}\n")),(0,i.kt)("p",null,"Now, we can implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo")," service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"case class DocRepoImpl(\n    metadataRepo: MetadataRepo,\n    blobStorage: BlobStorage\n) extends DocRepo {\n  override def get(id: String): ZIO[Any, Throwable, Doc] =\n    for {\n      metadata <- metadataRepo.get(id)\n      content <- blobStorage.get(id)\n    } yield Doc(\n      metadata.title,\n      metadata.description,\n      metadata.language,\n      metadata.format,\n      content\n    )\n\n  override def save(document: Doc): ZIO[Any, Throwable, String] =\n    for {\n      id <- blobStorage.put(document.content)\n      _ <- metadataRepo.put(\n        id,\n        Metadata(\n          document.title,\n          document.description,\n          document.language,\n          document.format\n        )\n      )\n    } yield id\n\n  override def delete(id: String): ZIO[Any, Throwable, Unit] =\n    for {\n      _ <- blobStorage.delete(id)\n      _ <- metadataRepo.delete(id)\n    } yield ()\n\n  override def findByTitle(title: String): ZIO[Any, Throwable, List[Doc]] =\n    for {\n      map <- metadataRepo.findByTitle(title)\n      content <- ZIO.foreach(map)((id, metadata) =>\n        for {\n          content <- blobStorage.get(id)\n        } yield id -> Doc(\n          metadata.title,\n          metadata.description,\n          metadata.language,\n          metadata.format,\n          content\n        )\n      )\n    } yield content.values.toList\n}\n")),(0,i.kt)("h2",{id:"4-zlayer-constructor"},"4. ZLayer (Constructor)"),(0,i.kt)("p",null,"Now, we create a companion object for ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepoImpl")," data type and lift the service implementation into the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZLayer"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object DocRepoImpl {\n  val layer: ZLayer[BlobStorage with MetadataRepo, Nothing, DocRepo] =\n    ZLayer {\n      for {\n        metadataRepo <- ZIO.service[MetadataRepo]\n        blobStorage  <- ZIO.service[BlobStorage]\n      } yield DocRepoImpl(metadataRepo, blobStorage)\n    }\n}\n")),(0,i.kt)("h2",{id:"5-accessor-methods"},"5. Accessor Methods"),(0,i.kt)("p",null,"Finally, to create the API more ergonomic, it's better to write accessor methods for all of our service methods using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.serviceWithZIO")," constructor inside the companion object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object DocRepo {\n  def get(id: String): ZIO[DocRepo, Throwable, Doc] =\n    ZIO.serviceWithZIO[DocRepo](_.get(id))\n\n  def save(document: Doc): ZIO[DocRepo, Throwable, String] =\n    ZIO.serviceWithZIO[DocRepo](_.save(document))\n\n  def delete(id: String): ZIO[DocRepo, Throwable, Unit] =\n    ZIO.serviceWithZIO[DocRepo](_.delete(id))\n\n  def findByTitle(title: String): ZIO[DocRepo, Throwable, List[Doc]] =\n    ZIO.serviceWithZIO[DocRepo](_.findByTitle(title))\n}\n")),(0,i.kt)("p",null,"Accessor methods allow us to utilize all the features inside the service through the ZIO Environment. That means, if we call ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo.get"),", we don't need to pull out the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," function from the ZIO Environment. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO.serviceWithZIO")," constructor helps us to access the environment and reduce the redundant operations, every time."),(0,i.kt)("p",null,"Similarly, we need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"BlobStorage")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataRepo")," services:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"object InmemoryBlobStorage {\n  val layer = \n    ZLayer {\n      ???\n    } \n}\n\nobject InmemoryMetadataRepo {\n  val layer = \n    ZLayer {\n      ???\n    }\n}\n")),(0,i.kt)("p",null,"This is how ZIO services are created. Let's use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo")," service in our application. We should provide ",(0,i.kt)("inlineCode",{parentName:"p"},"DocRepo")," layer to be able to run the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport java.io.IOException\n\nobject MainApp extends ZIOAppDefault {\n  val app =\n    for {\n      id <-\n        DocRepo.save(\n          Doc(\n            "title",\n            "description",\n            "en",\n            "text/plain",\n            "content".getBytes()\n          )\n        )\n      doc <- DocRepo.get(id)\n      _ <- Console.printLine(\n        s"""\n          |Downloaded the document with $id id:\n          |  title: ${doc.title}\n          |  description: ${doc.description}\n          |  language: ${doc.language}\n          |  format: ${doc.format}\n          |""".stripMargin\n      )\n      _ <- DocRepo.delete(id)\n      _ <- Console.printLine(s"Deleted the document with $id id")\n    } yield ()\n\n  def run =\n    app.provide(\n      DocRepoImpl.layer,\n      InmemoryBlobStorage.layer,\n      InmemoryMetadataRepo.layer\n    )\n}\n')),(0,i.kt)("p",null,"During writing the application, we don't care which implementation version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"BlobStorage")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataRepo")," services will be injected into our ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),". Later at the end of the day, it will be provided by one of ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#provide*")," methods."),(0,i.kt)("p",null,"That's it! Very simple! ZIO encourages us to follow some of the best practices in object-oriented programming. So it doesn't require us to throw away all our object-oriented knowledge."))}p.isMDXComponent=!0}}]);