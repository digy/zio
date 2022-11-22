"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2094],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=p(t),f=n,u=y["".concat(s,".").concat(f)]||y[f]||c[f]||o;return t?a.createElement(u,l(l({ref:r},m),{},{components:t})):a.createElement(u,l({ref:r},m))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},40396:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={id:"tarray",title:"TArray"},l=void 0,i={unversionedId:"datatypes/stm/tarray",id:"version-1.x/datatypes/stm/tarray",title:"TArray",description:"TArray is an array of mutable references that can participate in transactions in STM.",source:"@site/versioned_docs/version-1.x/datatypes/stm/tarray.md",sourceDirName:"datatypes/stm",slug:"/datatypes/stm/tarray",permalink:"/version-1.x/datatypes/stm/tarray",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/stm/tarray.md",tags:[],version:"1.x",frontMatter:{id:"tarray",title:"TArray"},sidebar:"datatypes-sidebar",previous:{title:"STM",permalink:"/version-1.x/datatypes/stm/"},next:{title:"TSet",permalink:"/version-1.x/datatypes/stm/tset"}},s={},p=[{value:"Create a TArray",id:"create-a-tarray",level:2},{value:"Retrieve the value from a TArray",id:"retrieve-the-value-from-a-tarray",level:2},{value:"Update the value of a TArray",id:"update-the-value-of-a-tarray",level:2},{value:"Transform elements of a TArray",id:"transform-elements-of-a-tarray",level:2},{value:"Perform side-effect for TArray elements",id:"perform-side-effect-for-tarray-elements",level:2}],m={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TArray")," is an array of mutable references that can participate in transactions in STM."),(0,n.kt)("h2",{id:"create-a-tarray"},"Create a TArray"),(0,n.kt)("p",null,"Creating an empty ",(0,n.kt)("inlineCode",{parentName:"p"},"TArray"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval emptyTArray: STM[Nothing, TArray[Int]] = TArray.empty[Int]\n")),(0,n.kt)("p",null,"Or creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"TArray")," with specified values:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval specifiedValuesTArray: STM[Nothing, TArray[Int]] = TArray.make(1, 2, 3)\n")),(0,n.kt)("p",null,"Alternatively, you can create a ",(0,n.kt)("inlineCode",{parentName:"p"},"TArray")," by providing a collection of values:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval iterableTArray: STM[Nothing, TArray[Int]] = TArray.fromIterable(List(1, 2, 3))\n")),(0,n.kt)("h2",{id:"retrieve-the-value-from-a-tarray"},"Retrieve the value from a TArray"),(0,n.kt)("p",null,"The n-th element of the array can be obtained as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tArrayGetElem: UIO[Int] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  elem   <- tArray(2)\n} yield elem).commit\n")),(0,n.kt)("p",null,"Accessing the non-existing indexes aborts the transaction with ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayIndexOutOfBoundsException"),"."),(0,n.kt)("h2",{id:"update-the-value-of-a-tarray"},"Update the value of a TArray"),(0,n.kt)("p",null,"Updating the n-th element of an array can be done as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tArrayUpdateElem: UIO[TArray[Int]] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  _      <- tArray.update(2, el => el + 10)\n} yield tArray).commit\n")),(0,n.kt)("p",null,"Updating the n-th element of an array can be done effectfully via ",(0,n.kt)("inlineCode",{parentName:"p"},"updateM"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval tArrayUpdateMElem: UIO[TArray[Int]] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  _      <- tArray.updateM(2, el => STM.succeed(el + 10))\n} yield tArray).commit\n")),(0,n.kt)("p",null,"Updating the non-existing indexes aborts the transaction with ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrayIndexOutOfBoundsException"),"."),(0,n.kt)("h2",{id:"transform-elements-of-a-tarray"},"Transform elements of a TArray"),(0,n.kt)("p",null,"The transform function ",(0,n.kt)("inlineCode",{parentName:"p"},"A => A")," allows computing a new value for every element in the array: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval transformTArray: UIO[TArray[Int]] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  _      <- tArray.transform(a => a * a)\n} yield tArray).commit\n")),(0,n.kt)("p",null,"The elements can be mapped effectfully via ",(0,n.kt)("inlineCode",{parentName:"p"},"transformM"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval transformMTArray: UIO[TArray[Int]] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  _      <- tArray.transformM(a => STM.succeed(a * a))\n} yield tArray).commit\n")),(0,n.kt)("p",null,"Folds the elements of a ",(0,n.kt)("inlineCode",{parentName:"p"},"TArray")," using the specified associative binary operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval foldTArray: UIO[Int] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  sum    <- tArray.fold(0)(_ + _)\n} yield sum).commit\n")),(0,n.kt)("p",null,"The elements can be folded effectfully via ",(0,n.kt)("inlineCode",{parentName:"p"},"foldM"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval foldMTArray: UIO[Int] = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  sum    <- tArray.foldM(0)((acc, el) => STM.succeed(acc + el))\n} yield sum).commit\n")),(0,n.kt)("h2",{id:"perform-side-effect-for-tarray-elements"},"Perform side-effect for TArray elements"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"foreach")," is used for performing side-effect for each element in the array:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval foreachTArray = (for {\n  tArray <- TArray.make(1, 2, 3, 4)\n  _      <- tArray.foreach(a => STM.succeed(println(a)))\n} yield tArray).commit\n")))}c.isMDXComponent=!0}}]);