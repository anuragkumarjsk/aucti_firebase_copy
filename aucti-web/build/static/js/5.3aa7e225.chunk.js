(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{176:function(e,t,s){"use strict";s(1);var n=s(0);t.a=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(n.jsx)("thead",{className:"bg-gray-900",children:Object(n.jsx)("tr",{children:e.columns.map((function(e){return Object(n.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider",children:e.title},e.title)}))})}),Object(n.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:e.children})]})})}},182:function(e,t,s){"use strict";var n=s(12),c=s(1),i=s.n(c),l=s(207),a=s(0);t.a=function(e){var t=i.a.useState(!1),s=Object(n.a)(t,2),c=s[0],r=s[1],d=i.a.createRef(),o=i.a.createRef();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"flex flex-wrap",children:Object(a.jsxs)("div",{className:"text-center ",children:[Object(a.jsx)("div",{type:"button",onMouseEnter:function(){Object(l.a)(d.current,o.current,{placement:"top"}),r(!0)},onMouseLeave:function(){r(!1)},ref:d,children:e.children}),Object(a.jsx)("div",{className:(c?"":"hidden ")+"bg-auctiHover border-0 mb-3  z-50  text-xs text-left no-underline  rounded-lg w-auto",ref:o,children:Object(a.jsxs)("div",{className:"flex flex-col justify-center items-center p-3",children:[Object(a.jsx)("p",{className:"text-gray-900",children:e.msg1}),Object(a.jsx)("p",{className:"text-gray-900",children:e.msg2})]})})]})})})}},204:function(e,t,s){"use strict";s.r(t);var n=s(12),c=s(1),i=s(15),l=(s(26),s(21),s(37)),a=s(74),r=s(38),d=(s(54),s(55)),o=s(176),x=s(182),u=s(0);t.default=Object(i.b)((function(e){return{user:e.user,sellerHistory:e.sellerHistory,sellerCompleted:e.sellerCompleted}}),(function(e){return{loadSellerHistory:function(t,s,n){return e(Object(l.j)(t,s,n))},loadSellerCompleted:function(t,s,n){return e(Object(l.i)(t,s,n))},confirmShipment:function(t){return e(Object(l.f)(t))}}}))((function(e){var t=e.sellerHistory,s=e.user,i=e.sellerCompleted,l=null===t||void 0===t?void 0:t.data,j=null===i||void 0===i?void 0:i.data,b=Object(c.useState)(!1),m=Object(n.a)(b,2),p=m[0],h=m[1],f=Object(c.useState)(""),g=Object(n.a)(f,2),v=g[0],O=g[1],y=Object(c.useState)(1),w=Object(n.a)(y,2),N=w[0],k=w[1],P=Object(c.useState)(1),C=Object(n.a)(P,2),S=C[0],_=C[1];Object(c.useEffect)((function(){var t=H.firstPageIndex,n=H.lastPageIndex,c=M.firstPageIndex2,i=M.lastPageIndex2;e.loadSellerHistory(s.uid,t,n),e.loadSellerCompleted(s.uid,c,i)}),[N]);var H=Object(c.useMemo)((function(){var e=5*(N-1);return{firstPageIndex:e,lastPageIndex:e+5}}),[N]),M=Object(c.useMemo)((function(){var e=5*(S-1);return{firstPageIndex2:e,lastPageIndex2:e+5}}),[S]);if(!t)return Object(u.jsx)(r.a,{});var I=[{title:"Auction ID"},{title:"Product"},{title:"Base price"},{title:"Highest Bid"},{title:"Highest Bidder"},{title:"Product Status"},{title:"Action"}];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"py-8",children:[Object(u.jsx)("div",{className:"flex-1 flex-col px-4 pb-4",children:Object(u.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(u.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(u.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg xs:rounded-lg",children:[Object(u.jsx)("p",{className:"p-3 text-md font-semibold text-gray-700 dark:text-gray-200 bg-gray-200",children:"Pending Transactions"}),Object(u.jsx)(o.a,{columns:I,children:null!=l&&l.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-bold text-gray-900 ",children:5*(N-1)+t+1}),Object(u.jsx)("td",{className:"px-6 py-4  text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.title}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.base_price}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.highest_bid}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.user_id}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(u.jsx)("div",{className:"flex justify-center items-center space-x-4",children:Object(u.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:null===e||void 0===e?void 0:e.product_transaction_status})})}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(u.jsx)("div",{className:"flex items-center space-x-4",children:"paid"===(null===e||void 0===e?void 0:e.product_transaction_status)&&Object(u.jsx)(x.a,{color:"amber",msg1:"Please\r click\r the\r button",msg2:"to\r confirm\r after\r shipping\r the\r product\r to\r user",children:Object(u.jsx)("button",{layout:"link",size:"icon","aria-label":"bids",className:"hover:text-aucti",onClick:function(){return function(e){console.log(e),O(e.id),h(!0)}(e)},children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(u.jsx)("path",{d:"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"}),Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"})]})})})})})]},e.id)}))}),null!==l&&0===(null===l||void 0===l?void 0:l.length)&&Object(u.jsx)("div",{className:"w=full flex justify-center items-center p-8",children:"No successful bid data available!"})]})})})}),Object(u.jsx)("div",{className:"grid justify-items-end px-8 pt-8 pb-8",children:Object(u.jsx)(d.a,{currentPage:N,totalCount:null===t||void 0===t?void 0:t.length,pageSize:5,onPageChange:function(e){return k(e)},onNext:function(){k(N+1)},onPrevious:function(){k(N-1)},handlePageSelect:function(e){k(e)}})})]}),Object(u.jsxs)("div",{className:"pb-16",children:[Object(u.jsx)("div",{className:"flex-1 flex-col px-4 pb-4",children:Object(u.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(u.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(u.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg xs:rounded-lg",children:[Object(u.jsx)("p",{className:"p-3 text-md font-semibold text-gray-700 dark:text-gray-200 bg-gray-200",children:"Completed Transactions"}),Object(u.jsx)(o.a,{columns:I,children:null!=j&&j.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-bold text-gray-900 ",children:5*(N-1)+t+1}),Object(u.jsx)("td",{className:"px-6 py-4  text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.title}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.base_price}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.highest_bid}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.user_id}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(u.jsx)("div",{className:"flex justify-center items-center space-x-4",children:Object(u.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:null===e||void 0===e?void 0:e.product_transaction_status})})}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(u.jsx)("div",{className:"flex items-center space-x-4"})})]},e.id)}))}),null!==j&&0===(null===j||void 0===j?void 0:j.length)&&Object(u.jsx)("div",{className:"w=full flex justify-center items-center p-8",children:"No successful bid data available!"})]})})})}),Object(u.jsx)("div",{className:"grid justify-items-end px-8 pt-8 pb-8",children:Object(u.jsx)(d.a,{currentPage:S,totalCount:null===i||void 0===i?void 0:i.length,pageSize:5,onPageChange:function(e){return _(e)},onNext:function(){_(S+1)},onPrevious:function(){_(S-1)},handlePageSelect:function(e){_(e)}})})]}),Object(u.jsx)(a.a,{showModal:p,setShowModal:h,children:Object(u.jsx)("div",{className:"",children:Object(u.jsx)("div",{className:"w-full h-full text-center",children:Object(u.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(u.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Object(u.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-xs py-2 px-6",children:"Please confrim that the product has been shipped?"}),Object(u.jsxs)("div",{className:"flex items-center justify-between gap-4 w-full mt-8",children:[Object(u.jsx)("button",{type:"button",className:"py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray-900 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded",onClick:function(){O(""),h(!1)},children:"Cancel"}),Object(u.jsx)("button",{type:"button",className:"py-2 px-4  bg-aucti hover:bg-auctiHover focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded ",onClick:function(){e.confirmShipment(v),O(""),h(!1)},children:"Confirm"})]})]})})})})]})}))}}]);
//# sourceMappingURL=5.3aa7e225.chunk.js.map