!function(e){var n={},r={0:0};function s(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(n){if(0!==r[n]){var s=require("./"+n+".server.js"),o=s.modules,t=s.ids;for(var i in o)e[i]=o[i];for(var a=0;a<t.length;a++)r[t[a]]=0}return Promise.all([])},s.m=e,s.c=n,s.d=function(e,n,r){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(r,o,function(n){return e[n]}.bind(null,o));return r},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){process.nextTick(function(){throw e})},s(s.s=17)}([function(e,n){e.exports=require("@babel/runtime/helpers/objectSpread")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-loadable")},function(e,n){e.exports=require("redux")},function(e,n,r){"use strict";r.d(n,"e",function(){return s}),r.d(n,"c",function(){return o}),r.d(n,"a",function(){return t}),r.d(n,"d",function(){return i}),r.d(n,"b",function(){return a});var s="https://restcountries.eu/rest/v2",o="REQUEST_COUNTRIES",t="RECEIVE_COUNTRIES",i="REQUEST_COUNTRY",a="RECEIVE_COUNTRY"},function(e,n){e.exports=require("@babel/runtime/regenerator")},function(e,n){e.exports=require("react-router-config")},function(e,n){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("react-redux")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("react-helmet")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-loadable/webpack")},function(e){e.exports={react:[{id:0,name:"./node_modules/react/index.js",file:"vendor.js",publicPath:"vendor.js"}],"prop-types":[{id:1,name:"./node_modules/prop-types/index.js",file:"vendor.js",publicPath:"vendor.js"}],invariant:[{id:3,name:"./node_modules/invariant/browser.js",file:"vendor.js",publicPath:"vendor.js"}],warning:[{id:4,name:"./node_modules/warning/warning.js",file:"vendor.js",publicPath:"vendor.js"}],"./utils":[{id:5,name:"./node_modules/axios/lib/utils.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/esm/extends":[{id:6,name:"./node_modules/@babel/runtime/helpers/esm/extends.js",file:"vendor.js",publicPath:"vendor.js"}],redux:[{id:7,name:"./node_modules/redux/es/index.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/classCallCheck":[{id:8,name:"./node_modules/@babel/runtime/helpers/classCallCheck.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/createClass":[{id:9,name:"./node_modules/@babel/runtime/helpers/createClass.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/possibleConstructorReturn":[{id:10,name:"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/getPrototypeOf":[{id:11,name:"./node_modules/@babel/runtime/helpers/getPrototypeOf.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/inherits":[{id:12,name:"./node_modules/@babel/runtime/helpers/inherits.js",file:"vendor.js",publicPath:"vendor.js"}],"react-redux":[{id:14,name:"./node_modules/react-redux/es/index.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/objectSpread":[{id:15,name:"./node_modules/@babel/runtime/helpers/objectSpread.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/regenerator":[{id:16,name:"./node_modules/@babel/runtime/regenerator/index.js",file:"vendor.js",publicPath:"vendor.js"}],"react-loadable":[{id:17,name:"./node_modules/react-loadable/lib/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./../../webpack/buildin/global.js":[{id:19,name:"./node_modules/webpack/buildin/global.js",file:"vendor.js",publicPath:"vendor.js"}],"react-router/matchPath":[{id:20,name:"./node_modules/react-router/matchPath.js",file:"vendor.js",publicPath:"vendor.js"}],history:[{id:21,name:"./node_modules/history/esm/history.js",file:"vendor.js",publicPath:"vendor.js"}],"object-assign":[{id:22,name:"./node_modules/object-assign/index.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/asyncToGenerator":[{id:23,name:"./node_modules/@babel/runtime/helpers/asyncToGenerator.js",file:"vendor.js",publicPath:"vendor.js"}],axios:[{id:24,name:"./node_modules/axios/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./defaults":[{id:25,name:"./node_modules/axios/lib/defaults.js",file:"vendor.js",publicPath:"vendor.js"}],"react-is":[{id:26,name:"./node_modules/react-is/index.js",file:"vendor.js",publicPath:"vendor.js"}],"path-to-regexp":[{id:27,name:"./node_modules/react-router/node_modules/path-to-regexp/index.js",file:"vendor.js",publicPath:"vendor.js"}],"react-helmet":[{id:28,name:"./node_modules/react-helmet/lib/Helmet.js",file:"vendor.js",publicPath:"vendor.js"}],"symbol-observable":[{id:29,name:"./node_modules/symbol-observable/es/index.js",file:"vendor.js",publicPath:"vendor.js"}],"@babel/runtime/helpers/extends":[{id:30,name:"./node_modules/@babel/runtime/helpers/extends.js",file:"vendor.js",publicPath:"vendor.js"}],"./helpers/bind":[{id:31,name:"./node_modules/axios/lib/helpers/bind.js",file:"vendor.js",publicPath:"vendor.js"}],"./adapters/xhr":[{id:32,name:"./node_modules/axios/lib/adapters/xhr.js",file:"vendor.js",publicPath:"vendor.js"}],"../core/createError":[{id:33,name:"./node_modules/axios/lib/core/createError.js",file:"vendor.js",publicPath:"vendor.js"}],"./cancel/isCancel":[{id:34,name:"./node_modules/axios/lib/cancel/isCancel.js",file:"vendor.js",publicPath:"vendor.js"}],"./cancel/Cancel":[{id:35,name:"./node_modules/axios/lib/cancel/Cancel.js",file:"vendor.js",publicPath:"vendor.js"}],"./HelmetConstants.js":[{id:36,name:"./node_modules/react-helmet/lib/HelmetConstants.js",file:"vendor.js",publicPath:"vendor.js"}],"react-dom":[{id:37,name:"./node_modules/react-dom/index.js",file:"vendor.js",publicPath:"vendor.js"}],"hoist-non-react-statics":[{id:38,name:"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js",file:"vendor.js",publicPath:"vendor.js"}],"./ponyfill.js":[{id:39,name:"./node_modules/symbol-observable/es/ponyfill.js",file:"vendor.js",publicPath:"vendor.js"}],"./_freeGlobal.js":[{id:40,name:"./node_modules/lodash-es/_freeGlobal.js",file:"vendor.js",publicPath:"vendor.js"}],"react-router/Router":[{id:41,name:"./node_modules/react-router/Router.js",file:"vendor.js",publicPath:"vendor.js"}],"react-router/Switch":[{id:42,name:"./node_modules/react-router/Switch.js",file:"vendor.js",publicPath:"vendor.js"}],"react-router/Route":[{id:43,name:"./node_modules/react-router/Route.js",file:"vendor.js",publicPath:"vendor.js"}],"redux-thunk":[{id:44,name:"./node_modules/redux-thunk/es/index.js",file:"vendor.js",publicPath:"vendor.js"}],"react-router-config":[{id:45,name:"./node_modules/react-router-config/es/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./cjs/react.production.min.js":[{id:49,name:"./node_modules/react/cjs/react.production.min.js",file:"vendor.js",publicPath:"vendor.js"}],"./cjs/react-dom.production.min.js":[{id:50,name:"./node_modules/react-dom/cjs/react-dom.production.min.js",file:"vendor.js",publicPath:"vendor.js"}],scheduler:[{id:51,name:"./node_modules/scheduler/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./cjs/scheduler.production.min.js":[{id:52,name:"./node_modules/scheduler/cjs/scheduler.production.min.js",file:"vendor.js",publicPath:"vendor.js"}],"./factoryWithThrowingShims":[{id:53,name:"./node_modules/prop-types/factoryWithThrowingShims.js",file:"vendor.js",publicPath:"vendor.js"}],"./lib/ReactPropTypesSecret":[{id:54,name:"./node_modules/prop-types/lib/ReactPropTypesSecret.js",file:"vendor.js",publicPath:"vendor.js"}],"./cjs/react-is.production.min.js":[{id:55,name:"./node_modules/react-is/cjs/react-is.production.min.js",file:"vendor.js",publicPath:"vendor.js"}],"./../../webpack/buildin/harmony-module.js":[{id:56,name:"./node_modules/webpack/buildin/harmony-module.js",file:"vendor.js",publicPath:"vendor.js"}],isarray:[{id:57,name:"./node_modules/react-router/node_modules/isarray/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./defineProperty":[{id:58,name:"./node_modules/@babel/runtime/helpers/defineProperty.js",file:"vendor.js",publicPath:"vendor.js"}],"../helpers/typeof":[{id:59,name:"./node_modules/@babel/runtime/helpers/typeof.js",file:"vendor.js",publicPath:"vendor.js"}],"./assertThisInitialized":[{id:60,name:"./node_modules/@babel/runtime/helpers/assertThisInitialized.js",file:"vendor.js",publicPath:"vendor.js"}],"./setPrototypeOf":[{id:61,name:"./node_modules/@babel/runtime/helpers/setPrototypeOf.js",file:"vendor.js",publicPath:"vendor.js"}],"regenerator-runtime":[{id:62,name:"./node_modules/regenerator-runtime/runtime.js",file:"vendor.js",publicPath:"vendor.js"}],"./lib/axios":[{id:63,name:"./node_modules/axios/lib/axios.js",file:"vendor.js",publicPath:"vendor.js"}],"is-buffer":[{id:64,name:"./node_modules/axios/node_modules/is-buffer/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./core/Axios":[{id:65,name:"./node_modules/axios/lib/core/Axios.js",file:"vendor.js",publicPath:"vendor.js"}],"./../../process/browser.js":[{id:66,name:"./node_modules/process/browser.js",file:"vendor.js",publicPath:"vendor.js"}],"./helpers/normalizeHeaderName":[{id:67,name:"./node_modules/axios/lib/helpers/normalizeHeaderName.js",file:"vendor.js",publicPath:"vendor.js"}],"./../core/settle":[{id:68,name:"./node_modules/axios/lib/core/settle.js",file:"vendor.js",publicPath:"vendor.js"}],"./enhanceError":[{id:69,name:"./node_modules/axios/lib/core/enhanceError.js",file:"vendor.js",publicPath:"vendor.js"}],"./../helpers/buildURL":[{id:70,name:"./node_modules/axios/lib/helpers/buildURL.js",file:"vendor.js",publicPath:"vendor.js"}],"./../helpers/parseHeaders":[{id:71,name:"./node_modules/axios/lib/helpers/parseHeaders.js",file:"vendor.js",publicPath:"vendor.js"}],"./../helpers/isURLSameOrigin":[{id:72,name:"./node_modules/axios/lib/helpers/isURLSameOrigin.js",file:"vendor.js",publicPath:"vendor.js"}],"./../helpers/cookies":[{id:73,name:"./node_modules/axios/lib/helpers/cookies.js",file:"vendor.js",publicPath:"vendor.js"}],"./InterceptorManager":[{id:74,name:"./node_modules/axios/lib/core/InterceptorManager.js",file:"vendor.js",publicPath:"vendor.js"}],"./dispatchRequest":[{id:75,name:"./node_modules/axios/lib/core/dispatchRequest.js",file:"vendor.js",publicPath:"vendor.js"}],"./transformData":[{id:76,name:"./node_modules/axios/lib/core/transformData.js",file:"vendor.js",publicPath:"vendor.js"}],"./../helpers/isAbsoluteURL":[{id:77,name:"./node_modules/axios/lib/helpers/isAbsoluteURL.js",file:"vendor.js",publicPath:"vendor.js"}],"./../helpers/combineURLs":[{id:78,name:"./node_modules/axios/lib/helpers/combineURLs.js",file:"vendor.js",publicPath:"vendor.js"}],"./cancel/CancelToken":[{id:79,name:"./node_modules/axios/lib/cancel/CancelToken.js",file:"vendor.js",publicPath:"vendor.js"}],"./helpers/spread":[{id:80,name:"./node_modules/axios/lib/helpers/spread.js",file:"vendor.js",publicPath:"vendor.js"}],"react-side-effect":[{id:81,name:"./node_modules/react-side-effect/lib/index.js",file:"vendor.js",publicPath:"vendor.js"}],exenv:[{id:82,name:"./node_modules/exenv/index.js",file:"vendor.js",publicPath:"vendor.js"}],shallowequal:[{id:83,name:"./node_modules/shallowequal/index.js",file:"vendor.js",publicPath:"vendor.js"}],"react-fast-compare":[{id:84,name:"./node_modules/react-fast-compare/index.js",file:"vendor.js",publicPath:"vendor.js"}],"./HelmetUtils.js":[{id:85,name:"./node_modules/react-helmet/lib/HelmetUtils.js",file:"vendor.js",publicPath:"vendor.js"}],"./NavLink":[{id:88,name:"./node_modules/react-router-dom/es/NavLink.js",file:"vendor.js",publicPath:"vendor.js"}],"./BrowserRouter":[{id:89,name:"./node_modules/react-router-dom/es/BrowserRouter.js",file:"vendor.js",publicPath:"vendor.js"}],"../action/types":[{id:2,name:"./src/action/types.js",file:"app.js",publicPath:"app.js"},{id:2,name:"./src/action/types.js",file:"styles.css",publicPath:"styles.css"}],"./src/index.js":[{id:86,name:"./src/index.js",file:"app.js",publicPath:"app.js"},{id:86,name:"./src/index.js",file:"styles.css",publicPath:"styles.css"}],"../scss/main.scss":[{id:107,name:"./scss/main.scss",file:"app.js",publicPath:"app.js"},{id:107,name:"./scss/main.scss",file:"styles.css",publicPath:"styles.css"}],"../../action/countries":[{id:13,name:"./src/action/countries.js",file:"2.js",publicPath:"2.js"},{id:13,name:"./src/action/countries.js",file:"3.js",publicPath:"3.js"}],"../../common":[{id:18,name:"./src/common/index.js",file:"2.js",publicPath:"2.js"},{id:18,name:"./src/common/index.js",file:"3.js",publicPath:"3.js"}],"../components/Countries":[{id:47,name:"./src/components/Countries/index.js",file:"2.js",publicPath:"2.js"}],"../components/Country":[{id:48,name:"./src/components/Country/index.js",file:"3.js",publicPath:"3.js"}]}},function(e,n){e.exports=require("redux-thunk")},function(e,n){e.exports=require("express-static-gzip")},function(e,n,r){"use strict";r.r(n);var s=r(5),o=r.n(s),t=r(0),i=r.n(t),a=r(7),d=r.n(a),l=r(12),c=r.n(l),u=r(8),p=r(6),m=r(2),j=r.n(m),b=r(1),h=r.n(b),f=r(9),v=r(10),x=r(13),P=r(11),_=function(){return h.a.createElement("div",null,"Loading...")},y=[{component:j()({loader:function(){return r.e(1).then(r.bind(null,26))},modules:["../components/Countries"],webpack:function(){return[26]},loading:_}),path:"/",exact:!0},{component:j()({loader:function(){return r.e(2).then(r.bind(null,25))},modules:["../components/Country"],webpack:function(){return[25]},loading:_}),path:"/:name"}],g=r(14),w=function(e,n,r){var s=P.Helmet.renderStatic(),o=[],t=Object(u.renderToString)(h.a.createElement(j.a.Capture,{report:function(e){return o.push(e)}},h.a.createElement(f.Provider,{store:n},h.a.createElement(v.StaticRouter,{location:e,context:r},h.a.createElement("div",null,Object(p.renderRoutes)(y)))))),i=Object(x.getBundles)(g,o);return'\n  <!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta name="viewport" content="width=device-width, height=device-height,initial-scale=1.0,user-scalable=yes,maximum-scale=5" />\n        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />\n        <meta http-equiv="content-language" content="en" />\n        <meta http-equiv="" content="IE=edge" />\n        <meta name="apple-mobile-web-app-capable" content="yes" />\n        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />\n        <meta httpEquiv="x-ua-compatible" content="ie=edge,chrome=1" />\n        <meta content="yes" name="apple-touch-fullscreen" />\n        <noscript>Please enable javascript.</noscript>\n        <link rel="stylesheet" href="/styles.css">\n        '.concat(s.title.toString(),"\n        ").concat(s.meta.toString(),"\n        ").concat(s.link.toString(),"\n        ").concat(s.style.toString(),"\n        ").concat(s.script.toString(),"\n        ").concat(s.noscript.toString(),' \n      </head>\n      <body>\n      \n      <div id="app">').concat(t,"</div>\n      <script>\n        window.INITIAL_STATE = ").concat(JSON.stringify(n.getState()),'\n      <\/script>\n\n     \n         \n      <script src="/vendor.js"><\/script>\n            ').concat(i.map(function(e){return'<script src="/'.concat(e.file,'"><\/script>')}).join("\\n"),'\n            <script src="/app.js"><\/script>\n         \n      </body>\n      </html>\n  ')},S=r(3),C=r(4),T={data:[],isFetching:!1,lastUpdate:Date.now()},R={name:"",nativeName:"",flag:"",capital:"",region:"",population:"",languages:[],isFetching:!1,lastUpdate:Date.now()},E=Object(S.combineReducers)({countries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C.c:return i()({},e,{isFetching:!0});case C.a:return i()({},e,{isFetching:!1,data:n.payload});default:return e}},country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case C.d:return i()({},e,{isFetching:!0});case C.b:return i()({},e,{isFetching:!1},n.payload);default:return e}}}),O=r(15),q=r.n(O),k=S.compose,U={};"undefined"!=typeof window&&(k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.compose,U=window.INITIAL_STATE||{},delete window.INITIAL_STATE);var I=Object(S.createStore)(E,U,k(Object(S.applyMiddleware)(q.a))),L=r(16),N=process.env.PORT||8079,A=c()();A.use("/dist",L("dist",{enableBrotli:!0})),A.use(function(e,n,r){/\.js|\.css/.test(e.path)?n.redirect("/dist"+e.path):r()}),A.use(/\.js$/,L("dist",{enableBrotli:!0})),A.get("*",function(){var e=d()(o.a.mark(function e(n,r){var s,t,a,l,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(p.matchRoutes)(y,n.path).map(function(e){var n=e.route;return n.component.preload?n.component.preload().then(function(e){return e.default}):n.component}),e.next=3,Promise.all(s);case 3:return t=e.sent,a=t.map(function(e){return e.fetching?e.fetching(i()({},I,{path:n.path})):null}).map(function(){var e=d()(o.a.mark(function e(n){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all((n||[]).map(function(e){return e&&new Promise(function(n){return e.then(n).catch(n)})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()),e.next=7,Promise.all(a);case 7:l={},c=w(n.path,I,l),r.send(c);case 10:case"end":return e.stop()}},e)}));return function(n,r){return e.apply(this,arguments)}}()),j.a.preloadAll().then(function(){A.listen(N,function(){return console.log("Frontend service listening on port: ".concat(N))})})},function(e,n){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,n){e.exports=require("@babel/runtime/helpers/createClass")},function(e,n){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,n){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,n){e.exports=require("@babel/runtime/helpers/inherits")},function(e,n){e.exports=require("axios")},function(e,n){e.exports=require("@babel/runtime/helpers/extends")}]);