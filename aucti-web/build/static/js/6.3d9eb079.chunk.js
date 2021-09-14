(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{176:function(e,t,s){"use strict";s(1);var i=s(0);t.a=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(i.jsx)("thead",{className:"bg-gray-900",children:Object(i.jsx)("tr",{children:e.columns.map((function(e){return Object(i.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider",children:e.title},e.title)}))})}),Object(i.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:e.children})]})})}},202:function(e,t,s){"use strict";s.r(t);var i=s(12),c=s(1),n=s(15),l=s(19),r=s(26),a=s(21),o=s(74),d=s(38),u=(s(54),s(55)),x=s(176),h=s(0);t.default=Object(n.b)((function(e){return{user:e.user,wishlist:e.wishlist}}),(function(e){return{loadBuyerWishlist:function(t){return e(Object(a.z)(t))},deleteWislist:function(t){return e(Object(a.r)(t))}}}))((function(e){var t=e.wishlist,s=e.user,n=Object(c.useState)(!1),a=Object(i.a)(n,2),j=a[0],b=a[1],m=Object(c.useState)(""),f=Object(i.a)(m,2),p=f[0],g=f[1];Object(c.useEffect)((function(){e.loadBuyerWishlist(s.uid)}),[]);var O=Object(c.useState)(1),v=Object(i.a)(O,2),w=v[0],y=v[1],N=function(){var e=5*(w-1),s=e+5;return t.slice(e,s)};if(null===N()||null===t)return Object(h.jsx)(d.a,{});return null===t?Object(h.jsx)(d.a,{}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"py-16",children:[Object(h.jsx)("div",{className:"flex-1 flex-col px-4 pb-4",children:Object(h.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(h.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(h.jsxs)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg xs:rounded-lg",children:[Object(h.jsx)(x.a,{columns:[{title:"Auction ID"},{title:"Product"},{title:"Base price"},{title:"Highest Bid"},{title:"Auction Status"},{title:"Action"}],children:null!=N()&&N().map((function(e,t){var s,i,c,n;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-bold text-gray-900 ",children:5*(w-1)+t+1}),Object(h.jsx)("td",{className:"px-6 py-4 text-sm text-gray-500 ",children:null===(s=e.product)||void 0===s?void 0:s.title}),Object(h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===(i=e.product)||void 0===i?void 0:i.base_price}),Object(h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 ",children:null===(c=e.product)||void 0===c?void 0:c.highest_bid}),Object(h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(h.jsx)("div",{className:"flex justify-center items-center space-x-4",children:Object(h.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:null===(n=e.product)||void 0===n?void 0:n.auction_status})})}),Object(h.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:Object(h.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(h.jsx)(l.a,{to:"/",children:Object(h.jsx)("button",{className:"hover:text-aucti",layout:"link",size:"icon","aria-label":"Edit",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]})})}),Object(h.jsx)("button",{layout:"link",size:"icon","aria-label":"Delete",children:Object(h.jsx)(r.TrashIcon,{className:"w-5 h-5 hover:text-aucti","aria-hidden":"true",onClick:function(){return function(e){g(e),b(!0)}(e)}})})]})})]},e.id)}))}),null!==N()&&0===N().length&&Object(h.jsx)("div",{className:"w=full flex justify-center items-center p-8",children:"No wishlist data available!"})]})})})}),Object(h.jsx)("div",{className:"grid justify-items-end px-8 pt-8 pb-8",children:Object(h.jsx)(u.a,{currentPage:w,totalCount:t.length,pageSize:5,onPageChange:function(e){return y(e)}})}),Object(h.jsx)(o.a,{showModal:j,setShowModal:b,children:Object(h.jsx)("div",{className:"",children:Object(h.jsx)("div",{className:"w-full h-full text-center",children:Object(h.jsxs)("div",{className:"flex h-full flex-col justify-between",children:[Object(h.jsx)("svg",{width:"40",height:"40",className:"mt-4 w-12 h-12 m-auto text-red-500",fill:"currentColor",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg",children:Object(h.jsx)("path",{d:"M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"})}),Object(h.jsx)("p",{className:"text-gray-800 dark:text-gray-200 text-xl font-bold mt-4",children:"Remove item"}),Object(h.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-xs py-2 px-6",children:"Are you sure you want to delete this bid from wishlist?"}),Object(h.jsxs)("div",{className:"flex items-center justify-between gap-4 w-full mt-8",children:[Object(h.jsx)("button",{type:"button",className:"py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-gray-900 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded",onClick:function(){b(!1),g("")},children:"Cancel"}),Object(h.jsx)("button",{type:"button",className:"py-2 px-4  bg-red-500 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded ",onClick:function(){e.deleteWislist(p.id),g(""),b(!1)},children:"Delete"})]})]})})})})]})})}))}}]);
//# sourceMappingURL=6.3d9eb079.chunk.js.map