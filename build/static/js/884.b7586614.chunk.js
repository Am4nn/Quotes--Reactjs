"use strict";(self.webpackChunkproject8=self.webpackChunkproject8||[]).push([[884],{556:function(e,t,n){n.d(t,{Z:function(){return o}});var r="LoadingSpinner_spinner__ZSbA1",s=n(184),o=function(){return(0,s.jsx)("div",{className:r})}},995:function(e,t,n){var r=n(683),s=n(861),o=n(152),u=n(757),a=n.n(u),c=n(791);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,c.useReducer)(i,{status:t?"pending":null,data:null,error:null}),u=(0,o.Z)(n,2),f=u[0],l=u[1],p=(0,c.useCallback)(function(){var t=(0,s.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,r.Z)({sendRequest:p},f)}},853:function(e,t,n){n.d(t,{Ir:function(){return h},KP:function(){return p},Lf:function(){return c},h_:function(){return x},jR:function(){return f}});var r=n(683),s=n(861),o=n(757),u=n.n(o),a="https://react-http-bc7c5-default-rtdb.firebaseio.com";function c(){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)(u().mark((function e(){var t,n,s,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(o in s=[],n)c=(0,r.Z)({id:o},n[o]),s.push(c);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)(u().mark((function e(t){var n,s,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,console.log(s),n.ok){e.next=9;break}throw new Error(s.message||"Could not fetch quote.");case 9:return o=(0,r.Z)({id:t},s),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)(u().mark((function e(t){var n,s,o,c,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(c in o=[],s)i=(0,r.Z)({id:c},s[c]),o.push(i);return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},884:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(791),s=n(271),o=n(152),u="Card_card__O+Uwx",a=n(184),c=function(e){return(0,a.jsx)("div",{className:u,children:e.children})},i=n(556),f="QuoteForm_form__fUFg1",l="QuoteForm_loading__oykYb",p="QuoteForm_control__8PbyG",d="QuoteForm_actions__Ynqfk",h=function(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),u=n[0],h=n[1],m=(0,r.useRef)(),x=(0,r.useRef)();return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(s.Prompt,{when:u,message:function(e){return"Are you sure to leave ?"}}),(0,a.jsx)(c,{children:(0,a.jsxs)("form",{onFocus:function(){h(!0)},className:f,onSubmit:function(t){t.preventDefault();var n=m.current.value,r=x.current.value;e.onAddQuote({author:n,text:r})},children:[e.isLoading&&(0,a.jsx)("div",{className:l,children:(0,a.jsx)(i.Z,{})}),(0,a.jsxs)("div",{className:p,children:[(0,a.jsx)("label",{htmlFor:"author",children:"Author"}),(0,a.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,a.jsxs)("div",{className:p,children:[(0,a.jsx)("label",{htmlFor:"text",children:"Text"}),(0,a.jsx)("textarea",{id:"text",rows:"5",ref:x})]}),(0,a.jsx)("div",{className:d,children:(0,a.jsx)("button",{onClick:function(){h(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(995),x=n(853),v=function(){var e=(0,m.Z)(x.KP),t=e.sendRequest,n=e.status,o=(0,s.useHistory)();(0,r.useEffect)((function(){"completed"===n&&o.push("/quotes")}),[n,o]);return(0,a.jsx)(h,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=884.b7586614.chunk.js.map