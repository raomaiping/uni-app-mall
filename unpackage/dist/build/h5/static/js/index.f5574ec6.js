(function(A){function e(e){for(var o,i,r=e[0],g=e[1],c=e[2],s=0,E=[];s<r.length;s++)i=r[s],t[i]&&E.push(t[i][0]),t[i]=0;for(o in g)Object.prototype.hasOwnProperty.call(g,o)&&(A[o]=g[o]);B&&B(e);while(E.length)E.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var A,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var g=n[i];0!==t[g]&&(o=!1)}o&&(a.splice(e--,1),A=r(r.s=n[0]))}return A}var o={},t={index:0},a=[];function i(A){return r.p+"static/js/"+({"pages-goods-goods":"pages-goods-goods","pages-goods-goodsList":"pages-goods-goodsList","pages-goods-ratings":"pages-goods-ratings","pages-order-confirm":"pages-order-confirm","pages-tabBar-cart-cart":"pages-tabBar-cart-cart","pages-tabBar-category-category":"pages-tabBar-category-category","pages-tabBar-home-home":"pages-tabBar-home-home","pages-tabBar-user-qrcode":"pages-tabBar-user-qrcode","pages-tabBar-user-user":"pages-tabBar-user-user"}[A]||A)+"."+{"pages-goods-goods":"06e71174","pages-goods-goodsList":"040861da","pages-goods-ratings":"94504570","pages-order-confirm":"6640a103","pages-tabBar-cart-cart":"506b99e6","pages-tabBar-category-category":"b1218964","pages-tabBar-home-home":"ee20745b","pages-tabBar-user-qrcode":"f4a3e444","pages-tabBar-user-user":"903f3fef"}[A]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return A[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(A){var e=[],n=t[A];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=t[A]=[e,o]});e.push(n[2]=o);var a,g=document.createElement("script");g.charset="utf-8",g.timeout=120,r.nc&&g.setAttribute("nonce",r.nc),g.src=i(A),a=function(e){g.onerror=g.onload=null,clearTimeout(c);var n=t[A];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+A+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}t[A]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:g})},12e4);g.onerror=g.onload=a,document.head.appendChild(g)}return Promise.all(e)},r.m=A,r.c=o,r.d=function(A,e,n){r.o(A,e)||Object.defineProperty(A,e,{enumerable:!0,get:n})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,e){if(1&e&&(A=r(A)),8&e)return A;if(4&e&&"object"===typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&e&&"string"!=typeof A)for(var o in A)r.d(n,o,function(e){return A[e]}.bind(null,o));return n},r.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(e,"a",e),e},r.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)},r.p="/",r.oe=function(A){throw console.error(A),A};var g=window["webpackJsonp"]=window["webpackJsonp"]||[],c=g.push.bind(g);g.push=e,g=g.slice();for(var s=0;s<g.length;s++)e(g[s]);var B=c;a.push([0,"chunk-vendors"]),n()})({0:function(A,e,n){A.exports=n("d6bb")},"0220":function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={pages:{"pages/tabBar/home/home":{navigationBarTitleText:"首页",titleNView:!1},"pages/tabBar/category/category":{navigationBarTitleText:"分类",titleNView:!1},"pages/tabBar/cart/cart":{navigationBarTitleText:"购物车"},"pages/tabBar/user/user":{navigationBarTitleText:"我的",backgroundTextStyle:"light",navigationBarBackgroundColor:"#f06c7a",backgroundColorTop:"#f06c7a",navigationBarTextStyle:"white"},"pages/goods/goodsList":{navigationBarTitleText:"",enablePullDownRefresh:!0,onReachBottomDistance:10},"pages/goods/goods":{navigationBarTitleText:"商品详情",titleNView:!1},"pages/goods/ratings":{navigationBarTitleText:"商品评论"},"pages/order/confirm":{navigationBarTitleText:"确认订单"},"pages/tabBar/user/qrcode":{navigationBarTitleText:"我的二维码"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"前端小菜鸟吖",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"}};e.default=o},"04fb":function(A,e,n){},"12b9":function(A,e,n){"use strict";n.r(e);var o=n("1e85"),t=n.n(o);for(var a in o)"default"!==a&&function(A){n.d(e,A,function(){return o[A]})}(a);e["default"]=t.a},"145a":function(A,e,n){"use strict";n.r(e);var o=n("04fb"),t=n.n(o);for(var a in o)"default"!==a&&function(A){n.d(e,A,function(){return o[A]})}(a);e["default"]=t.a},"1e85":function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{city:"北京"}}};e.default=o},2378:function(A,e,n){"use strict";var o,t=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("App",{attrs:{keepAliveInclude:A.keepAliveInclude}})},a=[];n.d(e,"b",function(){return t}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},"3c2a":function(A,e){A.exports="data:font/ttf;base64,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b25mb250aWNvbmZvbnRWZXJzaW9uIDEuMGljb25mb250R2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20ACgBDAHIAZQBhAHQAZQBkACAAYgB5ACAAaQBjAG8AbgBmAG8AbgB0AAoAaQBjAG8AbgBmAG8AbgB0AFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgAKYXBwcmVjaWF0ZQVlbW9qaQlmYXZvcmZpbGwFZmF2b3IHbG9hZGluZwxsb2NhdGlvbmZpbGwIbG9jYXRpb24Ocm91bmRjaGVja2ZpbGwKcm91bmRjaGVjawZzZWFyY2gIbGlrZWZpbGwEbGlrZQRiYWNrCGNhc2NhZGVzCHNldHRpbmdzA3BpYwVyaWdodApkZWxldGVmaWxsBGNhcnQGZGVsZXRlBGxvY2sGdW5sb2NrBXNoYXJlBm5vdGljZQhtYXJrZmlsbARtYXJrCHJhZGlvYm94DHJhZGlvYm94ZmlsbANhZGQEbW92ZQhteV9saWdodAtzaGFyZV9saWdodBJtb3JlX2FuZHJvaWRfbGlnaHQLdmlkZW9fbGlnaHQNcXJfY29kZV9saWdodANyZW4AAAAAAA=="},"5c1f":function(A,e,n){"use strict";n.r(e);var o=n("2378"),t=n("f7729");for(var a in t)"default"!==a&&function(A){n.d(e,A,function(){return t[A]})}(a);n("6a8c");var i,r=n("f0c5"),g=Object(r["a"])(t["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);e["default"]=g.exports},"5e5d":function(A,e,n){var o=n("d3d6");"string"===typeof o&&(o=[[A.i,o,""]]),o.locals&&(A.exports=o.locals);var t=n("4f06").default;t("843d77ac",o,!0,{sourceMap:!1,shadowMode:!1})},"60b1":function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={appid:"__UNI__7FF4A06"};e.default=o},"6a8c":function(A,e,n){"use strict";var o=n("5e5d"),t=n.n(o);t.a},"82d6":function(A,e,n){"use strict";n.r(e);var o=n("d349"),t=n("145a");for(var a in t)"default"!==a&&function(A){n.d(e,A,function(){return t[A]})}(a);n("b399");var i,r=n("f0c5"),g=Object(r["a"])(t["default"],o["b"],o["c"],!1,null,"94c14afe",null,!1,o["a"],i);e["default"]=g.exports},"832e":function(A,e,n){"use strict";(function(A){var e=n("288e"),o=e(n("5176")),t=e(n("e143"));A["____7FF4A06____"]=!0,delete A["____7FF4A06____"],A.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"前端小菜鸟吖",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"},condition:{current:0,list:[{name:"",path:"",query:""}]},tabBar:{color:"#333333",selectedColor:"#f06c7a",borderStyle:"black",backgroundColor:"#FFFFFF",list:[{pagePath:"pages/tabBar/home/home",iconPath:"static/img/tabBar/home.png",selectedIconPath:"./static/img/tabBar/home-on.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/tabBar/category/category",iconPath:"static/img/tabBar/category.png",selectedIconPath:"./static/img/tabBar/category-on.png",text:"分类",redDot:!1,badge:""},{pagePath:"pages/tabBar/cart/cart",iconPath:"./static/img/tabBar/cart.png",selectedIconPath:"./static/img/tabBar/cart-on.png",text:"购物车",redDot:!1,badge:""},{pagePath:"pages/tabBar/user/user",iconPath:"static/img/tabBar/user.png",selectedIconPath:"./static/img/tabBar/user-on.png",text:"我的",redDot:!1,badge:""}]}},A.__uniConfig.router={mode:"hash",base:"/"},A.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},A.__uniConfig.debug=!1,A.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},A.__uniConfig.sdkConfigs={},A.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",A.__uniConfig.nvue={"flex-direction":"column"},t.default.component("pages-tabBar-home-home",function(A){var e={component:n.e("pages-tabBar-home-home").then(function(){return A(n("a78f"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-tabBar-category-category",function(A){var e={component:n.e("pages-tabBar-category-category").then(function(){return A(n("b8a8"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-tabBar-cart-cart",function(A){var e={component:n.e("pages-tabBar-cart-cart").then(function(){return A(n("99c5"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-tabBar-user-user",function(A){var e={component:n.e("pages-tabBar-user-user").then(function(){return A(n("1081"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-goods-goodsList",function(A){var e={component:n.e("pages-goods-goodsList").then(function(){return A(n("0b33"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-goods-goods",function(A){var e={component:n.e("pages-goods-goods").then(function(){return A(n("cc4b"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-goods-ratings",function(A){var e={component:n.e("pages-goods-ratings").then(function(){return A(n("4d5c"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-order-confirm",function(A){var e={component:n.e("pages-order-confirm").then(function(){return A(n("ab1c"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),t.default.component("pages-tabBar-user-qrcode",function(A){var e={component:n.e("pages-tabBar-user-qrcode").then(function(){return A(n("487c"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(A){return A(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(A){return A(__uniConfig["async"]["error"])}}),e}),A.__uniRoutes=[{path:"/",alias:"/pages/tabBar/home/home",component:{render:function(A){return A("Page",{props:(0,o.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"首页",titleNView:!1})},[A("pages-tabBar-home-home",{slot:"page"})])}},meta:{id:1,name:"pages-tabBar-home-home",isNVue:!1,pagePath:"pages/tabBar/home/home",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/tabBar/category/category",component:{render:function(A){return A("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"分类",titleNView:!1})},[A("pages-tabBar-category-category",{slot:"page"})])}},meta:{id:2,name:"pages-tabBar-category-category",isNVue:!1,pagePath:"pages/tabBar/category/category",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:0}},{path:"/pages/tabBar/cart/cart",component:{render:function(A){return A("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车"})},[A("pages-tabBar-cart-cart",{slot:"page"})])}},meta:{id:3,name:"pages-tabBar-cart-cart",isNVue:!1,pagePath:"pages/tabBar/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/tabBar/user/user",component:{render:function(A){return A("Page",{props:(0,o.default)({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"我的",backgroundTextStyle:"light",navigationBarBackgroundColor:"#f06c7a",backgroundColorTop:"#f06c7a",navigationBarTextStyle:"white"})},[A("pages-tabBar-user-user",{slot:"page"})])}},meta:{id:4,name:"pages-tabBar-user-user",isNVue:!1,pagePath:"pages/tabBar/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/goods/goodsList",component:{render:function(A){return A("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!0,onReachBottomDistance:10})},[A("pages-goods-goodsList",{slot:"page"})])}},meta:{name:"pages-goods-goodsList",isNVue:!1,pagePath:"pages/goods/goodsList",windowTop:44}},{path:"/pages/goods/goods",component:{render:function(A){return A("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"商品详情",titleNView:!1})},[A("pages-goods-goods",{slot:"page"})])}},meta:{name:"pages-goods-goods",isNVue:!1,pagePath:"pages/goods/goods",windowTop:0}},{path:"/pages/goods/ratings",component:{render:function(A){return A("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"商品评论"})},[A("pages-goods-ratings",{slot:"page"})])}},meta:{name:"pages-goods-ratings",isNVue:!1,pagePath:"pages/goods/ratings",windowTop:44}},{path:"/pages/order/confirm",component:{render:function(A){return A("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"确认订单"})},[A("pages-order-confirm",{slot:"page"})])}},meta:{name:"pages-order-confirm",isNVue:!1,pagePath:"pages/order/confirm",windowTop:44}},{path:"/pages/tabBar/user/qrcode",component:{render:function(A){return A("Page",{props:(0,o.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"我的二维码"})},[A("pages-tabBar-user-qrcode",{slot:"page"})])}},meta:{name:"pages-tabBar-user-qrcode",isNVue:!1,pagePath:"pages/tabBar/user/qrcode",windowTop:44}},{path:"/preview-image",component:{render:function(A){return A("Page",{props:{navigationStyle:"custom"}},[A("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(A){return A("Page",{props:{navigationStyle:"custom"}},[A("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(A){return A("Page",{props:{navigationStyle:"custom"}},[A("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,n("c8ba"))},9311:function(A,e,n){e=A.exports=n("2350")(!1),e.push([A.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.status[data-v-94c14afe]{width:100%;position:fixed;z-index:10;background-color:#fff;top:0;height:0}',""])},"9d6e":function(A,e,n){var o=n("b041");e=A.exports=n("2350")(!1),e.push([A.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url('+o(n("3c2a"))+')}.iconfont[data-v-6b7179dd]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-appreciate[data-v-6b7179dd]:before{content:"\\E644"}.icon-emoji[data-v-6b7179dd]:before{content:"\\E64A"}.icon-favorfill[data-v-6b7179dd]:before{content:"\\E64B"}.icon-favor[data-v-6b7179dd]:before{content:"\\E64C"}.icon-loading[data-v-6b7179dd]:before{content:"\\E64F"}.icon-locationfill[data-v-6b7179dd]:before{content:"\\E650"}.icon-location[data-v-6b7179dd]:before{content:"\\E651"}.icon-roundcheckfill[data-v-6b7179dd]:before{content:"\\E656"}.icon-roundcheck[data-v-6b7179dd]:before{content:"\\E657"}.icon-search[data-v-6b7179dd]:before{content:"\\E65C"}.icon-likefill[data-v-6b7179dd]:before{content:"\\E668"}.icon-like[data-v-6b7179dd]:before{content:"\\E669"}.icon-back[data-v-6b7179dd]:before{content:"\\E679"}.icon-cascades[data-v-6b7179dd]:before{content:"\\E67C"}.icon-settings[data-v-6b7179dd]:before{content:"\\E68A"}.icon-pic[data-v-6b7179dd]:before{content:"\\E69B"}.icon-right[data-v-6b7179dd]:before{content:"\\E6A3"}.icon-deletefill[data-v-6b7179dd]:before{content:"\\E6A6"}.icon-cart[data-v-6b7179dd]:before{content:"\\E6AF"}.icon-delete[data-v-6b7179dd]:before{content:"\\E6B4"}.icon-lock[data-v-6b7179dd]:before{content:"\\E6C0"}.icon-unlock[data-v-6b7179dd]:before{content:"\\E6C2"}.icon-share[data-v-6b7179dd]:before{content:"\\E6F3"}.icon-notice[data-v-6b7179dd]:before{content:"\\E70A"}.icon-markfill[data-v-6b7179dd]:before{content:"\\E730"}.icon-mark[data-v-6b7179dd]:before{content:"\\E731"}.icon-radiobox[data-v-6b7179dd]:before{content:"\\E75B"}.icon-radioboxfill[data-v-6b7179dd]:before{content:"\\E763"}.icon-add[data-v-6b7179dd]:before{content:"\\E767"}.icon-move[data-v-6b7179dd]:before{content:"\\E768"}.icon-my_light[data-v-6b7179dd]:before{content:"\\E7D5"}.icon-share_light[data-v-6b7179dd]:before{content:"\\E7E0"}.icon-more_android_light[data-v-6b7179dd]:before{content:"\\E7E3"}.icon-video_light[data-v-6b7179dd]:before{content:"\\E7E9"}.icon-qr_code_light[data-v-6b7179dd]:before{content:"\\E7F8"}.icon-ren[data-v-6b7179dd]:before{content:"\\E605"}uni-page-body[data-v-6b7179dd]{position:relative;background-color:#fff}.header[data-v-6b7179dd]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;z-index:999;background-color:#fff;top:0}.header .addr[data-v-6b7179dd]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.header .addr .icon[data-v-6b7179dd]{height:%?60?%;margin-right:%?5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%;color:#ffc50a}.header .input-box[data-v-6b7179dd]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .input-box .icon[data-v-6b7179dd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input-box uni-input[data-v-6b7179dd]{padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .icon-btn[data-v-6b7179dd]{width:%?60?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-6b7179dd]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.place[data-v-6b7179dd]{background-color:#fff;height:%?100?%}body.?%PAGE?%[data-v-6b7179dd]{background-color:#fff}',""])},a6d6:function(A,e,n){"use strict";n.r(e);var o=n("f9cb"),t=n("12b9");for(var a in t)"default"!==a&&function(A){n.d(e,A,function(){return t[A]})}(a);n("e731");var i,r=n("f0c5"),g=Object(r["a"])(t["default"],o["b"],o["c"],!1,null,"6b7179dd",null,!1,o["a"],i);e["default"]=g.exports},b399:function(A,e,n){"use strict";var o=n("d236"),t=n.n(o);t.a},c6bb:function(A,e,n){var o=n("9d6e");"string"===typeof o&&(o=[[A.i,o,""]]),o.locals&&(A.exports=o.locals);var t=n("4f06").default;t("5327b7a5",o,!0,{sourceMap:!1,shadowMode:!1})},d236:function(A,e,n){var o=n("9311");"string"===typeof o&&(o=[[A.i,o,""]]),o.locals&&(A.exports=o.locals);var t=n("4f06").default;t("2116f824",o,!0,{sourceMap:!1,shadowMode:!1})},d349:function(A,e,n){"use strict";var o,t=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("v-uni-view",{staticClass:"status"})},a=[];n.d(e,"b",function(){return t}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},d3d6:function(A,e,n){var o=n("b041");e=A.exports=n("2350")(!1),e.push([A.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */@font-face{font-family:iconfont;src:url("+o(n("3c2a"))+')}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-appreciate:before{content:"\\E644"}.icon-emoji:before{content:"\\E64A"}.icon-favorfill:before{content:"\\E64B"}.icon-favor:before{content:"\\E64C"}.icon-loading:before{content:"\\E64F"}.icon-locationfill:before{content:"\\E650"}.icon-location:before{content:"\\E651"}.icon-roundcheckfill:before{content:"\\E656"}.icon-roundcheck:before{content:"\\E657"}.icon-search:before{content:"\\E65C"}.icon-likefill:before{content:"\\E668"}.icon-like:before{content:"\\E669"}.icon-back:before{content:"\\E679"}.icon-cascades:before{content:"\\E67C"}.icon-settings:before{content:"\\E68A"}.icon-pic:before{content:"\\E69B"}.icon-right:before{content:"\\E6A3"}.icon-deletefill:before{content:"\\E6A6"}.icon-cart:before{content:"\\E6AF"}.icon-delete:before{content:"\\E6B4"}.icon-lock:before{content:"\\E6C0"}.icon-unlock:before{content:"\\E6C2"}.icon-share:before{content:"\\E6F3"}.icon-notice:before{content:"\\E70A"}.icon-markfill:before{content:"\\E730"}.icon-mark:before{content:"\\E731"}.icon-radiobox:before{content:"\\E75B"}.icon-radioboxfill:before{content:"\\E763"}.icon-add:before{content:"\\E767"}.icon-move:before{content:"\\E768"}.icon-my_light:before{content:"\\E7D5"}.icon-share_light:before{content:"\\E7E0"}.icon-more_android_light:before{content:"\\E7E3"}.icon-video_light:before{content:"\\E7E9"}.icon-qr_code_light:before{content:"\\E7F8"}.icon-ren:before{content:"\\E605"}uni-page-body{position:relative;background-color:#fff}body.?%PAGE?%{;background-color:#fff}',""])},d6bb:function(A,e,n){"use strict";var o=n("288e"),t=o(n("cebc"));n("cadf"),n("551c"),n("097d"),n("832e"),n("1c31"),n("921b");var a=o(n("e143")),i=o(n("5c1f")),r=o(n("efe3")),g=o(n("82d6")),c=o(n("a6d6"));a.default.config.productionTip=!1,a.default.prototype.request=r.default,a.default.component("page-status",g.default),a.default.component("pageHeader",c.default),i.default.mpType="app";var s=new a.default((0,t.default)({},i.default));s.$mount()},d865:function(A,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=o},e731:function(A,e,n){"use strict";var o=n("c6bb"),t=n.n(o);t.a},efe3:function(A,n,o){"use strict";A.exports=function(A){var n=A.url,o=A.method,t=A.header||{},a=A.data||{};o&&(o=o.toUpperCase(),"POST"==o&&(t={"content-type":"application/x-www-form-urlencoded"})),A.hideLoading||uni.showLoading({title:"加载中..."}),uni.request({url:n,method:o||"GET",header:t,data:a,success:function(e){e.statusCode&&200!=e.statusCode?uni.showModal({content:e.msg}):"function"==typeof A.success&&A.success(e.data)},fall:function(e){uni.showModal({content:e.meg}),"function"==typeof A.fail&&A.fail(e.data)},complete:function(){console.log("网络请求complete"),uni.hideLoading(),"function"==typeof A.complete&&A.complete(e.data)}})}},f7729:function(A,e,n){"use strict";n.r(e);var o=n("d865"),t=n.n(o);for(var a in o)"default"!==a&&function(A){n.d(e,A,function(){return o[A]})}(a);e["default"]=t.a},f9cb:function(A,e,n){"use strict";var o,t=function(){var A=this,e=A.$createElement,n=A._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"header"},[n("v-uni-view",{staticClass:"addr"},[n("v-uni-view",{staticClass:"icon iconfont"},[A._v("")]),A._v(A._s(A.city))],1),n("v-uni-view",{staticClass:"input-box"},[n("v-uni-input",{attrs:{type:"text",placeholder:"some words...","placeholder-style":"color:#c0c0c0"}}),n("v-uni-view",{staticClass:"icon iconfont"},[A._v("")])],1),n("v-uni-view",{staticClass:"icon-btn"},[n("v-uni-view",{staticClass:"icon iconfont"},[A._v("")])],1)],1),n("v-uni-view",{staticClass:"place"})],1)},a=[];n.d(e,"b",function(){return t}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})}});