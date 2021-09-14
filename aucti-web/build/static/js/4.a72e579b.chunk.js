(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[4],{176:function(e,t,s){"use strict";s(1);var n=s(0);t.a=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(n.jsx)("thead",{className:"bg-gray-900",children:Object(n.jsx)("tr",{children:e.columns.map((function(e){return Object(n.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider",children:e.title},e.title)}))})}),Object(n.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:e.children})]})})}},182:function(e,t,s){"use strict";var n=s(12),i=s(1),c=s.n(i),r=s(207),l=s(0);t.a=function(e){var t=c.a.useState(!1),s=Object(n.a)(t,2),i=s[0],a=s[1],o=c.a.createRef(),d=c.a.createRef();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"flex flex-wrap",children:Object(l.jsxs)("div",{className:"text-center ",children:[Object(l.jsx)("div",{type:"button",onMouseEnter:function(){Object(r.a)(o.current,d.current,{placement:"top"}),a(!0)},onMouseLeave:function(){a(!1)},ref:o,children:e.children}),Object(l.jsx)("div",{className:(i?"":"hidden ")+"bg-auctiHover border-0 mb-3  z-50  text-xs text-left no-underline  rounded-lg w-auto",ref:d,children:Object(l.jsxs)("div",{className:"flex flex-col justify-center items-center p-3",children:[Object(l.jsx)("p",{className:"text-gray-900",children:e.msg1}),Object(l.jsx)("p",{className:"text-gray-900",children:e.msg2})]})})]})})})}},201:function(e,t,s){"use strict";s.r(t);var n=s(12),i=s(1),c=s(15),r=s(19),l=(s(26),s(21)),a=(s(37),s(74)),o=s(38),d=(s(54),s(55)),u=s(176),x=s(182),j=s(0);t.default=Object(c.b)((function(e){return{user:e.user,buyerCompleted:e.buyerCompleted,buyerHistory:e.buyerHistory}}),(function(e){return{loadBuyerHistory:function(t,s,n){return e(Object(l.x)(t,s,n))},loadBuyerCompleted:function(t,s,n){return e(Object(l.w)(t,s,n))},confirmReceived:function(t){return e(Object(l.o)(t))},confirmDispute:function(t){return e(Object(l.n)(t))}}}))((function(e){var t=e.buyerHistory,s=e.user,c=e.buyerCompleted,l=null===t||void 0===t?void 0:t.data,b=null===c||void 0===c?void 0:c.data,m=Object(i.useState)(!1),h=Object(n.a)(m,2),p=h[0],f=h[1],g=Object(i.useState)(!1),v=Object(n.a)(g,2),O=v[0],y=v[1],w=Object(i.useState)(""),N=Object(n.a)(w,2),k=N[0],P=N[1],C=Object(i.useState)(1),_=Object(n.a)(C,2),L=_[0],S=_[1],M=Object(i.useState)(1),B=Object(n.a)(M,2),z=B[0],I=B[1];Object(i.useEffect)((function(){var t=H.firstPageIndex,n=H.lastPageIndex,i=R.firstPageIndex2,c=R.lastPageIndex2;e.loadBuyerHistory(s.uid,t,n),e.loadBuyerCompleted(s.uid,i,c)}),[L]);var H=Object(i.useMemo)((function(){var e=5*(L-1);return{firstPageIndex:e,lastPageIndex:e+5}}),[L]),R=Object(i.useMemo)((function(){var e=5*(z-1);return{firstPageIndex2:e,lastPageIndex2:e+5}}),[z]);if(!t)return Object(j.jsx)(o.a,{});var D=[{title:"Auction ID"},{title:"Product"},{title:"Base price"},{title:"Your Bid"},{title:"Seller"},{title:"Product Status"},{title:"Action"}];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"py-8",children:[Object(j.jsx)("div",{className:"flex-1 flex-col px-4 pb-4",children:Object(j.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(j.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(j.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg xs:rounded-lg",children:[Object(j.jsx)("p",{className:"p-3 text-md font-semibold text-gray-700 dark:text-gray-200 bg-gray-200",children:"Pending Transactions"}),Object(j.jsx)(u.a,{columns:D,children:null!=l&&l.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-bold text-gray-900 ",children:5*(L-1)+t+1}),Object(j.jsx)("td",{className:"px-6 py-4  text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.title}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.base_price}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.highest_bid}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.seller_id}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(j.jsx)("div",{className:"flex justify-center items-center space-x-4",children:Object(j.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:null===e||void 0===e?void 0:e.product_transaction_status})})}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(j.jsxs)("div",{className:"flex items-center space-x-4",children:["sent"===(null===e||void 0===e?void 0:e.product_transaction_status)&&Object(j.jsx)(x.a,{color:"amber",msg1:"Please click the button",msg2:"to confirm shipment received ",children:Object(j.jsx)("button",{layout:"link",size:"icon","aria-label":"bids",className:"hover:text-aucti",onClick:function(){return function(e){P(e.id),f(!0)}(e)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})}),"sent"===(null===e||void 0===e?void 0:e.product_transaction_status)&&Object(j.jsx)(x.a,{color:"amber",msg1:"Please click the button",msg2:"to raise a dispute regarding received product",children:Object(j.jsx)("button",{layout:"link",size:"icon","aria-label":"bids",className:"hover:text-red-500",onClick:function(){return function(e){P(e.id),y(!0)}(e)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})})}),"pending"===(null===e||void 0===e?void 0:e.product_transaction_status)&&Object(j.jsx)(r.a,{to:"/payments/".concat(e.bid_id),children:Object(j.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-yellow-300 font-bold py-2 px-4 rounded",children:"Pay Now"})})]})})]},null===e||void 0===e?void 0:e.id)}))}),null!==l&&0===(null===l||void 0===l?void 0:l.length)&&Object(j.jsx)("div",{className:"w=full flex justify-center items-center p-8",children:"No pending bid data available!"})]})})})}),Object(j.jsx)("div",{className:"grid justify-items-end px-8 pt-8 pb-8",children:Object(j.jsx)(d.a,{currentPage:L,totalCount:null===t||void 0===t?void 0:t.length,pageSize:5,onPageChange:function(e){return S(e)},onNext:function(){S(L+1)},onPrevious:function(){S(L-1)},handlePageSelect:function(e){S(e)}})})]}),Object(j.jsxs)("div",{className:"pb-16",children:[Object(j.jsx)("div",{className:"flex-1 flex-col px-4 pb-4",children:Object(j.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(j.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(j.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg xs:rounded-lg",children:[Object(j.jsx)("p",{className:"p-3 text-md font-semibold text-gray-700 dark:text-gray-200 bg-gray-200",children:"Completed Transactions"}),Object(j.jsx)(u.a,{columns:D,children:null!=b&&b.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-bold text-gray-900 ",children:5*(L-1)+t+1}),Object(j.jsx)("td",{className:"px-6 py-4  text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.title}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.base_price}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.highest_bid}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===e||void 0===e?void 0:e.user_id}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(j.jsx)("div",{className:"flex justify-center items-center space-x-4",children:Object(j.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:null===e||void 0===e?void 0:e.product_transaction_status})})}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(j.jsx)("div",{className:"flex items-center space-x-4"})})]},e.id)}))}),null!==b&&0===(null===b||void 0===b?void 0:b.length)&&Object(j.jsx)("div",{className:"w=full flex justify-center items-center p-32",children:"No successful bid data available!"})]})})})}),Object(j.jsx)("div",{className:"grid justify-items-end px-8 pt-8 pb-8",children:Object(j.jsx)(d.a,{currentPage:z,totalCount:null===c||void 0===c?void 0:c.length,pageSize:5,onPageChange:function(e){return I(e)},onNext:function(){I(z+1)},onPrevious:function(){I(z-1)},handlePageSelect:function(e){I(e)}})})]}),Object(j.jsx)(a.a,{showModal:p,setShowModal:f,children:Object(j.jsx)("div",{className:"",children:Object(j.jsx)("div",{className:"w-full h-full text-center",children:Object(j.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Object(j.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-xs py-2 px-6",children:"Please confrim that the product has been recieved?"}),Object(j.jsxs)("div",{className:"flex items-center justify-between gap-4 w-full mt-8",children:[Object(j.jsx)("button",{type:"button",className:"py-2 px-2  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray-900 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded",onClick:function(){P(""),f(!1)},children:"Cancel"}),Object(j.jsx)("button",{type:"button",className:"py-2 px-2  bg-aucti hover:bg-auctiHover focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded ",onClick:function(){e.confirmReceived(k),P(""),f(!1)},children:"Confirm Recieved"})]})]})})})}),Object(j.jsx)(a.a,{showModal:O,setShowModal:y,children:Object(j.jsx)("div",{className:"",children:Object(j.jsx)("div",{className:"w-full h-full text-center",children:Object(j.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Object(j.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-xs py-2 px-6",children:"Please confirm to raise a dispute regarding received product?"}),Object(j.jsxs)("div",{className:"flex items-center justify-between gap-4 w-full mt-8",children:[Object(j.jsx)("button",{type:"button",className:"py-2 px-2  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray-900 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded",onClick:function(){P(""),y(!1)},children:"Cancel"}),Object(j.jsx)("button",{type:"button",className:"py-2 px-2  bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded ",onClick:function(){e.confirmDispute(k),P(""),y(!1)},children:"Raise Dispute"})]})]})})})})]})}))}}]);
//# sourceMappingURL=4.a72e579b.chunk.js.map