(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var u=o.props[l],p=r[l]||new Set;p.has(u)?i=!1:(p.add(u),r[l]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=i.default();function m(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}m.rewind=d.rewind,t.default=m},"C+bE":function(e,t){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},K64n:function(e,t,n){"use strict";t.Headers=self.Headers,t.Request=self.Request,t.Response=self.Response,t.fetch=self.fetch},LpSC:function(e,t,n){n("K64n"),e.exports=self.fetch.bind(self)},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),i=n("q1tI"),a=n.n(i),s=n("8Kt/"),c=n.n(s),l=n("ANjH"),u=n("1OyB"),f=n("vuIU"),p=n("Ji7U"),d=n("md7G"),m=n("foSv"),x=(n("LpSC"),a.a.createElement);function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=a.a.createElement,h=Object(l.d)((function(e){return function(t){Object(p.a)(o,t);var n,r=(n=o,function(){var e,t=Object(m.a)(n);if(b()){var r=Object(m.a)(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return Object(d.a)(this,e)});function o(){return Object(u.a)(this,o),r.apply(this,arguments)}return Object(f.a)(o,[{key:"render",value:function(){return x(e,this.props)}}]),o}(i.Component)}),(function(e){return function(t){return y(e,t)}})),j=a.a.createElement;t.default=h((function(){return j("div",{className:"jsx-1276654382 container"},j(c.a,null,j("title",{className:"jsx-1276654382"},"Create Next App"),j("link",{rel:"icon",href:"/favicon.ico",className:"jsx-1276654382"})),j("main",{className:"jsx-1276654382"},j("h1",{className:"jsx-1276654382 title"},"Welcome to ",j("a",{href:"https://nextjs.org",className:"jsx-1276654382"},"Next.js!")),j("p",{className:"jsx-1276654382 description"},"Get started by editing ",j("code",{className:"jsx-1276654382"},"pages/index.js")),j("div",{className:"jsx-1276654382 grid"},j("a",{href:"https://nextjs.org/docs",className:"jsx-1276654382 card"},j("h3",{className:"jsx-1276654382"},"Documentation \u2192"),j("p",{className:"jsx-1276654382"},"Find in-depth information about Next.js features and API.")),j("a",{href:"https://nextjs.org/learn",className:"jsx-1276654382 card"},j("h3",{className:"jsx-1276654382"},"Learn \u2192"),j("p",{className:"jsx-1276654382"},"Learn about Next.js in an interactive course with quizzes!")),j("a",{href:"https://github.com/zeit/next.js/tree/master/examples",className:"jsx-1276654382 card"},j("h3",{className:"jsx-1276654382"},"Examples \u2192"),j("p",{className:"jsx-1276654382"},"Discover and deploy boilerplate example Next.js projects.")),j("a",{href:"https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:"jsx-1276654382 card"},j("h3",{className:"jsx-1276654382"},"Deploy \u2192"),j("p",{className:"jsx-1276654382"},"Instantly deploy your Next.js site to a public URL with ZEIT Now.")))),j("footer",{className:"jsx-1276654382"},j("a",{href:"https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:"jsx-1276654382"},"Powered by ",j("img",{src:"/zeit.svg",alt:"ZEIT Logo",className:"jsx-1276654382"}))),j(o.a,{id:"2880214721"},[".container.jsx-1276654382{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-1276654382{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-1276654382{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-1276654382 img.jsx-1276654382{margin-left:0.5rem;}","footer.jsx-1276654382 a.jsx-1276654382{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-1276654382{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-1276654382 a.jsx-1276654382{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-1276654382 a.jsx-1276654382:hover,.title.jsx-1276654382 a.jsx-1276654382:focus,.title.jsx-1276654382 a.jsx-1276654382:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-1276654382{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-1276654382,.description.jsx-1276654382{text-align:center;}",".description.jsx-1276654382{line-height:1.5;font-size:1.5rem;}","code.jsx-1276654382{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",".grid.jsx-1276654382{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",".card.jsx-1276654382{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-1276654382:hover,.card.jsx-1276654382:focus,.card.jsx-1276654382:active{color:#0070f3;border-color:#0070f3;}",".card.jsx-1276654382 h3.jsx-1276654382{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-1276654382 p.jsx-1276654382{margin:0;font-size:1.25rem;line-height:1.5;}","@media (max-width:600px){.grid.jsx-1276654382{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]),j(o.a,{id:"3892888070"},["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}","*{box-sizing:border-box;}"]))}))},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),i=n("i2R6"),a=n("48fX"),s=n("tCBg"),c=n("T0f4"),l=n("mPvQ");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){a(m,l);var f,d=(f=m,function(){var e,t=c(f);if(u()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function m(e){var i;return r(this,m),i=d.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(m,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(m,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),m}(f.Component)}},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("kG2m");e.exports=function(e){return r(e)||o(e)||i()}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},qhzo:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},rlHP:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,4]]]);