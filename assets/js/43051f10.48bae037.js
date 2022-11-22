"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9355],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47132:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={id:"logging-errors",title:"Don't Reflexively Log Errors"},i=void 0,s={unversionedId:"reference/error-management/best-practices/logging-errors",id:"reference/error-management/best-practices/logging-errors",title:"Don't Reflexively Log Errors",description:"In modern async concurrent applications with a lot of subsystems, if we do not type errors, we are not able to see what section of our code fails with what error. Therefore, this can be very tempting to log errors when they happen. So when we lose type-safety in the whole application it makes us be more sensitive and program defensively. Therefore, whenever we are calling an API we tend to catch its errors, log them as below:",source:"@site/docs/reference/error-management/best-practices/logging-errors.md",sourceDirName:"reference/error-management/best-practices",slug:"/reference/error-management/best-practices/logging-errors",permalink:"/reference/error-management/best-practices/logging-errors",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/best-practices/logging-errors.md",tags:[],version:"current",frontMatter:{id:"logging-errors",title:"Don't Reflexively Log Errors"},sidebar:"reference-sidebar",previous:{title:"Don't Type Unexpected Errors",permalink:"/reference/error-management/best-practices/unexpected-errors"},next:{title:"Examples",permalink:"/reference/error-management/examples"}},l={},c=[],p={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In modern async concurrent applications with a lot of subsystems, if we do not type errors, we are not able to see what section of our code fails with what error. Therefore, this can be very tempting to log errors when they happen. So when we lose type-safety in the whole application it makes us be more sensitive and program defensively. Therefore, whenever we are calling an API we tend to catch its errors, log them as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nsealed trait UploadError extends Exception\ncase class FileExist(name: String)          extends UploadError\ncase class FileNotExist(name: String)       extends UploadError\ncase class StorageLimitExceeded(limit: Int) extends UploadError\n\n/**\n * This API fail with `FileExist` failure when the provided file name exist.\n */\ndef upload(name: String): Task[Unit] = {\n    if (...)\n      ZIO.fail(FileExist(name))\n    else if (...)\n      ZIO.fail(StorageLimitExceeded(limit)) // This error is undocumented unintentionally\n    else\n      ZIO.attempt(...)\n}\n\nupload("contacts.csv").catchAll {\n  case FileExist(name) => delete("contacts.csv") *> upload("contacts.csv")\n  case _ =>\n    for {\n      _ <- ZIO.log(error.toString) // logging the error\n      _ <- ZIO.fail(error) // failing again (just like rethrowing exceptions in OOP)\n    } yield ()\n}\n')),(0,o.kt)("p",null,"In the above code when we see the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload"),"'s return type we can't find out what types of error it may fail with. So as a programmer we need to read the API documentation, and see in what cases it may fail. Due to the fact that the documents may be outdated, and they may not provide all error cases, we tend to add another case to cover all the other errors. Expert developers may prefer to read the implementation to find out all expected errors, but it is a tedious task to do."),(0,o.kt)("p",null,"We don't want to lose any errors. So if we do not use typed errors, it makes us defensive to log every error, regardless of whether they will occur or not."),(0,o.kt)("p",null,"When we are programming with typed errors, that allows us to never lose any errors. Even if we don't handle all, the error channel of our effect type demonstrate the type of remaining errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val myApp: ZIO[Any, UploadError, Unit] =\n  upload("contacts.csv")\n    .catchSome {\n      case FileExist(name) => delete(name) *> upload(name)\n    }\n')),(0,o.kt)("p",null,"It is still going to be sent an unhandled error type as a result. Therefore, there is no way to lose any errors, and they propagate automatically through all the different subsystems in our application, which means we don't have to be fearful anymore. It will be handled by higher-level code, or if it doesn't it will be passed off to something that can."),(0,o.kt)("p",null,"If we handle all errors using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#catchAll")," the type of error channel become ",(0,o.kt)("inlineCode",{parentName:"p"},"Nothing")," which means there is no expected error remaining to handle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val myApp: ZIO[Any, Nothing, Unit] =\n  upload("contacts.csv")\n    .catchAll {\n      case FileExist(name) =>\n        ZIO.unit // handling FileExist error case\n      case StorageLimitExceeded(limit) =>\n        ZIO.unit // handling StorageLimitExceeded error case\n    }\n')),(0,o.kt)("p",null,"When we type errors, we know that they can't be lost. So typed errors give us the ability to log less."))}d.isMDXComponent=!0}}]);