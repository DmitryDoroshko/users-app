(this["webpackJsonpusers-app"]=this["webpackJsonpusers-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(7),i=n.n(s),c=(n(14),n(9)),o=n(2),d=n(0),l=function(e){var t=e.type,n=e.className,r=e.children,a=e.onButtonClick;return Object(d.jsx)("button",{type:t,className:"btn ".concat(n),onClick:a,children:r})},u=function(e){var t=e.isEditing,n=e.idOfUserBeingEdited,a=e.previousUsername,s=e.previousAge,i=e.onAddUser,c=e.onEditUser,u=Object(r.useState)(""),j=Object(o.a)(u,2),b=j[0],m=j[1],f=Object(r.useState)(""),O=Object(o.a)(f,2),h=O[0],g=O[1],p=Object(r.useState)(a),x=Object(o.a)(p,2),v=x[0],U=x[1],y=Object(r.useState)(s),E=Object(o.a)(y,2),N=E[0],_=E[1],k=Object(r.useState)(t),C=Object(o.a)(k,2),A=C[0],S=C[1];return Object(r.useEffect)((function(){S(t),U(a),_(s)}),[t,a,s]),Object(d.jsxs)("form",{className:"add-user-form",onSubmit:e.onAddUser,children:[Object(d.jsxs)("div",{className:"form-controls",children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(d.jsx)("input",{type:"text",id:"username",className:"username-input",value:A?v:b,onChange:function(e){A?U(e.target.value):m(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-controls",children:[Object(d.jsx)("label",{htmlFor:"age",children:"Age (years):"}),Object(d.jsx)("input",{type:"number",id:"age",className:"age-input",value:A?N:h,onChange:function(e){A?_(e.target.value):g(e.target.value)}})]}),Object(d.jsx)(l,{type:"submit",className:"btn ".concat(A?"btn-edit":"btn-primary"),onButtonClick:function(e){!function(e){e.preventDefault(),A?(c(n,v,N),U(""),_("")):(i(b,h),m(""),g(""))}(e)},children:A?"Edit User":"Add User"})]})},j=function(e){var t=e.onAddUser,n=e.onEditUser,r=e.isEditing,a=e.idOfUserBeingEdited,s=e.previousUsername,i=e.previousAge;return Object(d.jsx)("div",{className:"add-user",children:Object(d.jsx)(u,{onAddUser:t,onEditUser:n,isEditing:r,idOfUserBeingEdited:a,previousUsername:s,previousAge:i})})},b=n(8),m=n.n(b),f=function(e){var t=e.children;return Object(d.jsx)("div",{className:m.a.card,children:t})},O=n(3),h=n.n(O),g=function(e){var t=e.errorTitle,n=e.errorText,r=e.onConfirm;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:h.a.backdrop,onClick:r}),Object(d.jsx)("div",{className:h.a["error-modal"],children:Object(d.jsxs)(f,{children:[Object(d.jsx)("header",{className:h.a["modal-header"],children:Object(d.jsx)("h2",{children:t})}),Object(d.jsx)("main",{className:h.a["modal-content"],children:n}),Object(d.jsx)("footer",{className:h.a["error-footer"],children:Object(d.jsx)(l,{type:"button",className:"btn-error",onButtonClick:r,children:"Okay"})})]})})]})},p=function(e){var t=e.id,n=e.name,r=e.age,a=e.onUserEdit,s=e.onUserDelete;return Object(d.jsxs)("li",{className:"users-item",children:[Object(d.jsxs)("div",{className:"users-info",children:["User: ",n,", Age: ",r," (years)"]}),Object(d.jsxs)("div",{className:"users-buttons",children:[Object(d.jsx)(l,{type:"button",className:"btn-edit",onButtonClick:function(){a(t,n,r)},children:"Edit"}),Object(d.jsx)(l,{type:"button",className:"btn-delete",onButtonClick:function(){s(t)},children:"Delete"})]})]})},x=function(e){var t=e.users,n=e.onUserDelete,r=e.onUserEdit,a=function(e){n(e)},s=function(e,t,n){r(e,t,n)};return Object(d.jsx)("ul",{className:"users-list",children:t.map((function(e){return Object(d.jsx)(p,{id:e.id,name:e.username,age:e.age,onUserDelete:a,onUserEdit:s},e.id)}))})},v=[{id:"id1",username:"Dmitry Doroshko",age:22},{id:"id2",username:"Oleg Yermolenko",age:21},{id:"id3",username:"Viktor Ralchenko",age:43},{id:"id4",username:"Lionel Messi",age:34}],U=n(18),y=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(v),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(r.useState)(!1),m=Object(o.a)(b,2),f=m[0],O=m[1],h=Object(r.useState)(-1),p=Object(o.a)(h,2),y=p[0],E=p[1],N=Object(r.useState)(""),_=Object(o.a)(N,2),k=_[0],C=_[1],A=Object(r.useState)(""),S=Object(o.a)(A,2),B=S[0],D=S[1];return Object(d.jsxs)("div",{className:"app",children:[n?Object(d.jsx)(g,{errorTitle:n.title,errorText:n.text,onConfirm:function(){if(!n){a({title:"Something went wrong",text:"Please try again..."})}a(null)}}):"",Object(d.jsx)(j,{error:n,onAddUser:function(e,t){var n=function(e){return"string"!==typeof e?(a({title:"Invalid type of name",text:"Username should be of type string... Try again please"}),!1):0!==e.trim().length||(a({title:"Invalid length of username",text:"Username length should be valid (more than 0 characters)... Try again please"}),!1)}(e),r=function(e){return"number"!==typeof e?(a({title:"Invalid type of age",text:"Age should be of type number... Try again please"}),!1):!(+e<0)||(a({title:"Invalid age",text:"Age should be valid (not less than 0)... Try again please"}),!1)}(+t);if(n&&r){var s={id:Object(U.a)(),age:t,username:e};u((function(e){return[].concat(Object(c.a)(e),[s])}))}},onEditUser:function(e,t,n){t&&n?(O(!1),u((function(r){return r.map((function(r){return r.id===e?{id:e,username:t,age:+n}:r}))}))):O(!1)},isEditing:f,idOfUserBeingEdited:y,previousUsername:k,previousAge:B}),Object(d.jsx)(x,{users:l,onUserDelete:function(e){-1!==l.findIndex((function(t){return t.id===e}))&&u((function(t){return t.filter((function(t){return t.id!==e}))}))},onUserEdit:function(e,t,n){O(!0),E(e),C(t),D(n)}})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__1Kvfy","error-modal":"ErrorModal_error-modal__1abCO","modal-header":"ErrorModal_modal-header__1QfCf","modal-content":"ErrorModal_modal-content__256IC","error-footer":"ErrorModal_error-footer__1cXVM"}},8:function(e,t,n){e.exports={card:"Card_card__3bayJ"}}},[[16,1,2]]]);
//# sourceMappingURL=main.f6d85888.chunk.js.map