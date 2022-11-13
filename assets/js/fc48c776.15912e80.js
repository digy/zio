"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[54520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={id:"run-our-first-zio-project-with-vscode",title:"Tutorial: How to Run Our First ZIO Project With VSCode?",sidebar_label:"Running Our First ZIO Project With VSCode"},a=void 0,l={unversionedId:"guides/tutorials/run-our-first-zio-project-with-vscode",id:"guides/tutorials/run-our-first-zio-project-with-vscode",title:"Tutorial: How to Run Our First ZIO Project With VSCode?",description:"ZIO is a type-safe library for building asynchronous and concurrent applications. The Scala compiler can catch a lot of errors at compile time since it is type-safe. This ensures that our code is mostly correct, and it prevents lots of bugs from creeping into the runtime. So having a type-safe editor that highlights errors will improve our development experience. VSCode with the power of the Metals extension provides us with a type-safe editor for writing Scala programs.",source:"@site/docs/guides/tutorials/run-our-first-zio-project-with-vscode.md",sourceDirName:"guides/tutorials",slug:"/guides/tutorials/run-our-first-zio-project-with-vscode",permalink:"/guides/tutorials/run-our-first-zio-project-with-vscode",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/guides/tutorials/run-our-first-zio-project-with-vscode.md",tags:[],version:"current",frontMatter:{id:"run-our-first-zio-project-with-vscode",title:"Tutorial: How to Run Our First ZIO Project With VSCode?",sidebar_label:"Running Our First ZIO Project With VSCode"},sidebar:"guides-sidebar",previous:{title:"Create Custom Logger for a ZIO Application",permalink:"/guides/tutorials/create-custom-logger-for-a-zio-application"},next:{title:"Running Our First ZIO Project With IntelliJ IDEA",permalink:"/guides/tutorials/run-our-first-zio-project-with-intellij-idea"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Creating a new ZIO project",id:"creating-a-new-zio-project",level:2},{value:"Diagnosing the Build",id:"diagnosing-the-build",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"ZIO is a ",(0,n.kt)("em",{parentName:"p"},"type-safe")," library for building asynchronous and concurrent applications. The Scala compiler can catch a lot of errors at compile time since it is type-safe. This ensures that our code is mostly correct, and it prevents lots of bugs from creeping into the runtime. So having a type-safe editor that highlights errors will improve our development experience. VSCode with the power of the ",(0,n.kt)("em",{parentName:"p"},"Metals")," extension provides us with a type-safe editor for writing Scala programs."),(0,n.kt)("p",null,"In this tutorial, we will walk through how to run our first ZIO project with VSCode. We will start by creating a new project and then importing that into the VSCode workspace."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"In this article, we assume that we have already downloaded and installed the following tools:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.scala-sbt.org/download.html"},"SBT build tool")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode"))),(0,n.kt)("h2",{id:"creating-a-new-zio-project"},"Creating a new ZIO project"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, we need to create a new directory where we should put our project files:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-zio-project\ncd my-zio-project\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Next, we need to create a new ",(0,n.kt)("inlineCode",{parentName:"li"},"build.sbt")," file:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"touch build.sbt\n")),(0,n.kt)("p",null,"Inside this file, let's add the following lines which include the version of Scala language, the name of our project, and the dependencies we want to use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'scalaVersion := "2.13.10"\nname := "my-zio-project"\nversion := "0.0.1"\n\nlibraryDependencies ++= Seq(\n  "zio" %% "zio" % "2.0.0-RC6"\n)\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Also, we need to specify the SBT version we want to use in the ",(0,n.kt)("inlineCode",{parentName:"li"},"project/build.properties")," file:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir project\ntouch project/build.properties\n")),(0,n.kt)("p",null,"Now, let's add the following lines to the ",(0,n.kt)("inlineCode",{parentName:"p"},"project/build.properties")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sbt.version = 1.6.2\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"We are ready to open our project in VsCode. We can do this by opening the ",(0,n.kt)("inlineCode",{parentName:"p"},"my-zio-project")," directory from the ",(0,n.kt)("inlineCode",{parentName:"p"},"File > Open Folder")," menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When we open a project that has a ",(0,n.kt)("inlineCode",{parentName:"p"},"build.sbt")," file, the ",(0,n.kt)("em",{parentName:"p"},"Metals")," extension will automatically detect the project and prompt us with the following message:"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"VSCode",src:r(95636).Z,width:"1096",height:"724"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"By clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Import Build")," button, the ",(0,n.kt)("em",{parentName:"p"},"Metals")," will try to download the dependencies from the ",(0,n.kt)("inlineCode",{parentName:"p"},"build.sbt")," file and then import the whole project into the workspace.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After that, we are ready to write our first ZIO program by creating a new file called ",(0,n.kt)("inlineCode",{parentName:"p"},"MainApp.scala")," inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"src/main/scala")," directory:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir src/main/scala\n$ touch src/main/scala/MainApp.scala\n")),(0,n.kt)("p",null,"Let's add the following lines to our ",(0,n.kt)("inlineCode",{parentName:"p"},"MainApp.scala")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = \n    for {\n      name <- Console.readLine("What is your name? ")\n      _    <- Console.printLine(s"Hello, $name!")\n    } yield ()\n}\n')),(0,n.kt)("p",null,"Now, we can run our program by clicking on the ",(0,n.kt)("em",{parentName:"p"},"run")," button above the ",(0,n.kt)("inlineCode",{parentName:"p"},"MainApp")," object."),(0,n.kt)("p",null,"After we have imported our project using ",(0,n.kt)("em",{parentName:"p"},"Metals"),", the editor can highlight syntax errors, type-check our code, and run the program. Additionally, it provides code completion that helps us choose the right method. Another handy feature is the ability to jump to the definition of methods and classes just by _Ctrl + Click_ing on them."),(0,n.kt)("h2",{id:"diagnosing-the-build"},"Diagnosing the Build"),(0,n.kt)("p",null,"Sometime, the build may fail. To diagnose the build, the first place to look is the ",(0,n.kt)("em",{parentName:"p"},"Metals")," output, which can be found in the ",(0,n.kt)("em",{parentName:"p"},"Output Window")," in the VSCode. The output window can be opened by typing ",(0,n.kt)("em",{parentName:"p"},"Toggle Output")," in the command palette (",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + Shift + P"),")."),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"Metals")," also provide a build diagnostics panel called ",(0,n.kt)("em",{parentName:"p"},"Metals Doctor")," which can be opened by typing ",(0,n.kt)("em",{parentName:"p"},"Metals: Run doctor")," in the command palette. This command will show us the status of the build and if there are any errors, it will guide us on how to fix them."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this tutorial, we have learned how to run a ZIO project with VSCode using the Metals extension. VSCode along with the Metals extension provide lots of handy features that improve the productivity of developers. To learn more about this, we recommend reading the ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/editors/vscode/"},"Metals documentation for VSCode editor"),"."))}u.isMDXComponent=!0},95636:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/vscode-a1a1ffa90a17ac344d4fbfe34d1167d9.jpg"}}]);