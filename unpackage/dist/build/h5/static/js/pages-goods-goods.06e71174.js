(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"0226":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.spaceInfo.showSpace,expression:"spaceInfo.showSpace"}],staticClass:"popup spec",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hideSpecifications.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask"}),i("v-uni-view",{staticClass:"layer"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title"},[e._v("选择规格:")]),i("v-uni-view",{staticClass:"sp"},e._l(e.goodsData.spec,function(t,n){return i("v-uni-view",{key:n,class:{on:t==e.goodsInfo.spec},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.handleSelectSpecification(t)}}},[e._v(e._s(t))])}),1),i("v-uni-view",{staticClass:"length"},[i("v-uni-view",{staticClass:"text"},[e._v("数量")]),i("counter",{attrs:{goodsInfo:e.goodsInfo},on:{sub:function(t){arguments[0]=t=e.$handleEvent(t),e.sub.apply(void 0,arguments)},add:function(t){arguments[0]=t=e.$handleEvent(t),e.add.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"button",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.hideSpecifications.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)},o=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return n})},"03d4":function(e,t,i){var n=i("7665");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("f5ee56c2",n,!0,{sourceMap:!1,shadowMode:!1})},"09b1":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"before"},[i("v-uni-view",{staticClass:"back"},[e.showBack?i("v-uni-view",{staticClass:"icon iconfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("")]):e._e()],1),i("v-uni-view",{staticClass:"middle"}),i("v-uni-view",{staticClass:"icon-btn"},[i("v-uni-view",{staticClass:"icon iconfont",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showCart.apply(void 0,arguments)}}},[e._v("")])],1)],1)],1)},o=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return n})},"09f8":function(e,t,i){"use strict";i.r(t);var n=i("1d6f"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},1787:function(e,t,i){"use strict";i.r(t);var n=i("87ed"),a=i("2ce5");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("283c");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"72bda44b",null,!1,n["a"],s);t["default"]=r.exports},"1d6f":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{showBack:!0}},onLoad:function(){},methods:{back:function(){uni.navigateBack()},showCart:function(){uni.switchTab({url:"../tabBar/cart/cart"})}}};t.default=n},"1e5a":function(e,t,i){"use strict";var n=i("8657"),a=i.n(n);a.a},"24ba":function(e,t,i){"use strict";i.r(t);var n=i("8a48"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"283c":function(e,t,i){"use strict";var n=i("03d4"),a=i.n(n);a.a},"2ce5":function(e,t,i){"use strict";i.r(t);var n=i("bc6d"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"32e2":function(e,t,i){"use strict";var n=i("9460"),a=i.n(n);a.a},"37c6":function(e,t,i){"use strict";i.r(t);var n=i("e1be"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"4f62":function(e,t,i){var n=i("f866");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("a7e4b516",n,!0,{sourceMap:!1,shadowMode:!1})},"52bf":function(e,t,i){"use strict";var n="http://uni-app-mall.raomaiping.xyz/",a={getMallData:n+"api/profiles/mall_list",getCategory:n+"api/profiles/category",getGoodsList:n+"api/profiles/goodslist",getGoods:n+"api/profiles/goods"};e.exports=a},"611e":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("page-status"),i("goodsHeader"),i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{circular:"true",autoplay:"true"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)}}},e._l(e.goodsData.swiperList,function(e){return i("v-uni-swiper-item",{key:e.id},[i("v-uni-image",{attrs:{src:e.img}})],1)}),1),i("v-uni-view",{staticClass:"indicator"},[e._v(e._s(e.currentSwiper+1)+"/"+e._s(e.goodsData.swiperList.length))])],1),i("v-uni-view",{staticClass:"info-box goods-info"},[i("v-uni-view",{staticClass:"price"},[e._v("￥"+e._s(e.goodsInfo.price))]),i("v-uni-view",{staticClass:"title"},[e._v(e._s(e.goodsInfo.name))])],1),i("v-uni-view",{staticClass:"info-box"},[i("v-uni-view",{staticClass:"row",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.spaceInfo.showSpace=!0}}},[i("v-uni-view",{staticClass:"text"},[e._v("选择")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[e._v("选择规格:")]),i("v-uni-view",{staticClass:"sp"},e._l(e.goodsData.spec,function(t,n){return i("v-uni-view",{key:n,class:{on:t==e.goodsInfo.spec}},[e._v(e._s(t))])}),1)],1),i("v-uni-view",{staticClass:"arrow"},[i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")])],1)],1)],1),i("popupSpec",{attrs:{spaceInfo:e.spaceInfo,goodsInfo:e.goodsInfo,goodsData:e.goodsData},on:{add:function(t){arguments[0]=t=e.$handleEvent(t),e.add.apply(void 0,arguments)},sub:function(t){arguments[0]=t=e.$handleEvent(t),e.sub.apply(void 0,arguments)},setSelectSpec:function(t){arguments[0]=t=e.$handleEvent(t),e.setSelectSpec.apply(void 0,arguments)},hideSpec:function(t){arguments[0]=t=e.$handleEvent(t),e.hideSpec.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"info-box comments"},[i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"text"},[e._v("商品评价("+e._s(e.goodsData.comment.length)+")")]),i("v-uni-view",{staticClass:"arrow",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleRatings.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"show"},[e._v("查看全部"),i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")])],1)],1)],1),i("v-uni-view",{staticClass:"comment",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleRatings.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"user-info"},[i("v-uni-view",{staticClass:"face"},[i("v-uni-image",{attrs:{src:e.goodsData.comment[0].face}})],1),i("v-uni-view",{staticClass:"username"},[e._v(e._s(e.goodsData.comment[0].username))])],1),i("v-uni-view",{staticClass:"content"},[e._v(e._s(e.goodsData.comment[0].content))])],1)],1),i("v-uni-view",{staticClass:"description"},[i("v-uni-view",{staticClass:"title"},[e._v("———— 商品详情 ————")]),i("v-uni-view",{staticClass:"content"},[i("v-uni-rich-text",{attrs:{nodes:e.goodsData.descriptionStr}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"icons"},[i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")]),i("v-uni-view",{staticClass:"text"},[e._v("分享")])],1),i("v-uni-view",{staticClass:"box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.keep.apply(void 0,arguments)}}},[e.isKeep?i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")]):i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")]),i("v-uni-view",{staticClass:"text"},[e._v(e._s(e.isKeep?"已":"")+"收藏")])],1)],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-view",{staticClass:"joinCart",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.joinCart.apply(void 0,arguments)}}},[e._v("加入购物车")]),i("v-uni-view",{staticClass:"buy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleBuy.apply(void 0,arguments)}}},[e._v("立即购买")])],1)],1)],1)},o=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return n})},7665:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.number[data-v-72bda44b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.number .input[data-v-72bda44b]{width:%?80?%;height:%?60?%;margin:0 %?10?%;background-color:#f3f3f3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center}.number .input uni-input[data-v-72bda44b]{width:%?80?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;font-size:%?26?%}.number .add[data-v-72bda44b],.number .sub[data-v-72bda44b]{width:%?60?%;height:%?60?%;background-color:#f3f3f3;border-radius:%?5?%}.number .add .icon[data-v-72bda44b],.number .sub .icon[data-v-72bda44b]{font-size:%?30?%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""])},8657:function(e,t,i){var n=i("ff0b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("08e4bd2b",n,!0,{sourceMap:!1,shadowMode:!1})},"87ed":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"number"},[i("v-uni-view",{staticClass:"sub",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.sub.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")])],1),i("v-uni-view",{staticClass:"input"},[i("v-uni-input",{attrs:{type:"number"},model:{value:e.goodsInfo.number,callback:function(t){e.$set(e.goodsInfo,"number",t)},expression:"goodsInfo.number"}})],1),i("v-uni-view",{staticClass:"add",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.add.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[e._v("")])],1)],1)},o=[];i.d(t,"b",function(){return a}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return n})},"8a48":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("1787")),o={components:{counter:a.default},props:{spaceInfo:Object,goodsInfo:Object,goodsData:Object},methods:{hideSpecifications:function(){this.$emit("hideSpec")},handleSelectSpecification:function(e){this.$emit("setSelectSpec",e)},sub:function(){this.$emit("sub")},add:function(){this.$emit("add")}}};t.default=o},9460:function(e,t,i){var n=i("c462");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("621e49f9",n,!0,{sourceMap:!1,shadowMode:!1})},bc6d:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={methods:{sub:function(){this.$emit("sub")},add:function(){this.$emit("add")}},props:{goodsInfo:Object}};t.default=n},c462:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-173e9a13]{width:100%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;z-index:10}.header .before[data-v-173e9a13]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;top:0;-webkit-transition:opacity .05s linear;transition:opacity .05s linear}.header .before .back[data-v-173e9a13]{width:%?125?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0}.header .before .back .icon[data-v-173e9a13]{margin-left:-10%;width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?42?%}.header .before .middle[data-v-173e9a13]{width:100%}.header .before .icon-btn[data-v-173e9a13]{width:%?60?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .before .icon-btn .icon[data-v-173e9a13]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.header .before .back .icon[data-v-173e9a13]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}.header .before .icon-btn .icon[data-v-173e9a13]{color:#fff;background-color:rgba(0,0,0,.2);border-radius:100%}',""])},cc4b:function(e,t,i){"use strict";i.r(t);var n=i("611e"),a=i("37c6");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("1e5a");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"9ee0a16e",null,!1,n["a"],s);t["default"]=r.exports},d93d:function(e,t,i){"use strict";i.r(t);var n=i("09b1"),a=i("09f8");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("32e2");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"173e9a13",null,!1,n["a"],s);t["default"]=r.exports},e1be:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6"),i("ac6a");var a=n(i("52bf")),o=n(i("d93d")),s=n(i("e80a")),c={components:{goodsHeader:o.default,popupSpec:s.default},data:function(){return{isKeep:!1,goodsData:{swiperList:[],spec:[],comment:[{face:"",content:"",username:""}],descriptionStr:""},goodsInfo:{name:"",price:"",number:1,spec:""},currentSwiper:0,spaceInfo:{showSpace:!1}}},onLoad:function(e){this.goodsInfo=JSON.parse(e.goodsInfo),this.initData()},methods:{add:function(){this.goodsInfo.number++},sub:function(){this.goodsInfo.number<=1||this.goodsInfo.number--},setSelectSpec:function(e){this.goodsInfo.spec=e},hideSpec:function(){this.spaceInfo.showSpace=!1},initData:function(){var e=this;this.request({url:a.default.getGoods,success:function(t){e.goodsData=t.data,console.log(e.goodsData)}})},swiperChange:function(e){this.currentSwiper=e.detail.current},handleBuy:function(){var e=[];e.push(this.goodsInfo),uni.setStorage({key:"confirmList",data:e,success:function(){uni.navigateTo({url:"../order/confirm"})}})},handleRatings:function(){uni.setStorageSync("comments",this.goodsData.comment),uni.navigateTo({url:"./ratings"})},keep:function(){this.isKeep=!this.isKeep,this.isKeep&&uni.showToast({icon:"success",title:"已收藏"})},joinCart:function(){var e=this;uni.getStorage({key:"goodsList",success:function(t){var i=t.data,n=!1;i.forEach(function(t){t.goods_id==e.goodsInfo.goods_id&&t.spec==e.goodsInfo.spec&&(console.log(11),t.number+=Number(e.goodsInfo.number),e.setGoodsList(i),n=!0)}),n||(i.push(e.goodsInfo),e.setGoodsList(i))},fail:function(t){var i=[];i.push(e.goodsInfo),e.setGoodsList(i)}})},setGoodsList:function(e){uni.setStorage({key:"goodsList",data:e,success:function(){uni.showToast({icon:"success",title:"添加购物车成功"})}})}}};t.default=c},e80a:function(e,t,i){"use strict";i.r(t);var n=i("0226"),a=i("24ba");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("ec4b");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3e286277",null,!1,n["a"],s);t["default"]=r.exports},ec4b:function(e,t,i){"use strict";var n=i("4f62"),a=i.n(n);a.a},f866:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.popup[data-v-3e286277]{position:fixed;top:0;width:100%;height:100%;z-index:20}.popup .mask[data-v-3e286277]{position:fixed;top:0;width:100%;height:100%;z-index:21;background-color:rgba(0,0,0,.6)}.popup .layer[data-v-3e286277]{position:fixed;z-index:22;bottom:0;width:92%;padding:0 4%;height:70%;border-radius:%?20?% %?20?% 0 0;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;align-content:space-between}.popup .layer .content[data-v-3e286277]{width:100%;padding:%?20?% 0}.popup .layer .btn[data-v-3e286277]{width:100%;height:%?100?%}.popup .layer .btn .button[data-v-3e286277]{width:100%;height:%?80?%;border-radius:%?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f47952;font-size:%?28?%}.popup.spec .title[data-v-3e286277]{font-size:%?30?%;margin:%?30?% 0}.popup.spec .sp[data-v-3e286277]{display:-webkit-box;display:-webkit-flex;display:flex}.popup.spec .sp uni-view[data-v-3e286277]{font-size:%?28?%;padding:%?5?% %?20?%;border-radius:%?8?%;margin:0 %?30?% %?20?% 0;background-color:#f6f6f6}.popup.spec .sp uni-view.on[data-v-3e286277]{padding:%?3?% %?18?%;border:solid %?1?% #f47925}.popup.spec .length[data-v-3e286277]{margin-top:%?30?%;border-top:solid %?1?% #aaa;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-top:%?20?%}.popup.spec .length .text[data-v-3e286277]{font-size:%?30?%}',""])},ff0b:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*  修改状态栏样式 */.swiper-box[data-v-9ee0a16e]{position:relative;width:100%;height:100vw}.swiper-box uni-swiper[data-v-9ee0a16e]{width:100%;height:100vw}.swiper-box uni-swiper uni-swiper-item uni-image[data-v-9ee0a16e]{width:100%;height:100vw}.swiper-box .indicator[data-v-9ee0a16e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?25?%;height:%?40?%;border-radius:%?40?%;font-size:%?22?%;position:absolute;bottom:%?20?%;right:%?20?%;color:#fff;background-color:rgba(0,0,0,.2)}.info-box[data-v-9ee0a16e]{width:92%;padding:%?20?% 4%;background-color:#fff;margin-bottom:%?20?%}.goods-info .price[data-v-9ee0a16e]{font-size:%?46?%;font-weight:600;color:#f47925}.goods-info .title[data-v-9ee0a16e]{font-size:%?30?%}.row[data-v-9ee0a16e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 0 %?30?% 0}.row .text[data-v-9ee0a16e]{font-size:%?28?%;color:#a2a2a2;margin-right:%?20?%}.row .content[data-v-9ee0a16e]{font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.row .content .serviceitem[data-v-9ee0a16e]{margin-right:%?10?%}.row .content .sp[data-v-9ee0a16e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.row .content .sp uni-view[data-v-9ee0a16e]{background-color:#f6f6f6;padding:%?10?%;color:#999;margin-right:%?10?%;font-size:%?20?%;border-radius:%?5?%}.row .content .sp uni-view.on[data-v-9ee0a16e]{border:solid %?1?% #f47952;padding:%?4?% %?8?%}.row .arrow[data-v-9ee0a16e]{position:absolute;right:4%}.row .arrow .icon[data-v-9ee0a16e]{color:#ccc}.comments .row[data-v-9ee0a16e]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:0 0 %?30?% 0}.comments .row .text[data-v-9ee0a16e]{font-size:%?30?%}.comments .row .arrow[data-v-9ee0a16e]{font-size:%?28?%;position:absolute;right:4%;color:#17e6a1}.comments .row .arrow .show[data-v-9ee0a16e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments .row .arrow .show .icon[data-v-9ee0a16e]{color:#17e6a1}.comments .comment[data-v-9ee0a16e]{width:100%}.comments .comment .user-info[data-v-9ee0a16e]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.comments .comment .user-info .face[data-v-9ee0a16e]{width:%?40?%;height:%?40?%;margin-right:%?8?%}.comments .comment .user-info .face uni-image[data-v-9ee0a16e]{width:%?40?%;height:%?40?%;border-radius:100%}.comments .comment .user-info .username[data-v-9ee0a16e]{font-size:%?24?%;color:#999}.comments .comment .content[data-v-9ee0a16e]{margin-top:%?10?%;font-size:%?26?%}.description .title[data-v-9ee0a16e]{width:100%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#999}.footer[data-v-9ee0a16e]{position:fixed;bottom:%?0?%;width:92%;padding:0 4%;height:%?99?%;border-top:solid %?1?% #eee;background-color:#fff;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .icons[data-v-9ee0a16e]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?80?%;margin-left:-4%}.footer .icons .box[data-v-9ee0a16e]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.footer .icons .box .icon[data-v-9ee0a16e]{font-size:%?40?%;color:#828282}.footer .icons .box .text[data-v-9ee0a16e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;font-size:%?22?%;color:#666}.footer .btn[data-v-9ee0a16e]{height:%?80?%;border-radius:%?40?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;margin-right:-2%}.footer .btn .buy[data-v-9ee0a16e],.footer .btn .joinCart[data-v-9ee0a16e]{height:%?80?%;padding:0 %?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.footer .btn .joinCart[data-v-9ee0a16e]{background-color:#f0b46c}.footer .btn .buy[data-v-9ee0a16e]{background-color:#f06c7a}',""])}}]);