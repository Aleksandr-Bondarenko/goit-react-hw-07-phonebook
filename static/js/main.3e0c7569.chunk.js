(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{20:function(t,e,n){t.exports={filter:"Filter_filter__m09Qc",label:"Filter_label__2TVyZ",input:"Filter_input__1eTzD"}},21:function(t,e,n){t.exports={item:"ContactItem_item__3veW5",tel:"ContactItem_tel__3kUkN",btn:"ContactItem_btn__2937y",loader:"ContactItem_loader__kArjO"}},33:function(t,e,n){t.exports={list:"ContactsList_list__2viaN"}},46:function(t,e,n){},67:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),s=n(3),u=(n(46),n(10)),i=n.n(u),l=n(7),b=n(9),j=n.n(b),d=n(19),f=n(4),p=n(13),O=n.n(p);O.a.defaults.baseURL="https://618db362fe09aa0017440860.mockapi.io";var m=Object(f.c)("contacts/fetchContacts",function(){var t=Object(d.a)(j.a.mark((function t(e,n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,O.a.get("/contacts").then((function(t){return t.data}));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),l.b.error("Oops, ".concat(t.t0.message,".")),t.abrupt("return",c(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),h=Object(f.c)("contacts/addContacts",function(){var t=Object(d.a)(j.a.mark((function t(e,n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,O.a.post("/contacts",e).then((function(t){var n=t.data;return l.b.success("Contact ".concat(e.name," successfully added.")),n}));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),l.b.error("Oops, ".concat(t.t0.message)),t.abrupt("return",c(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),v=Object(f.c)("contacts/delContacts",function(){var t=Object(d.a)(j.a.mark((function t(e,n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,O.a.delete("/contacts/".concat(e.id)).then((function(){l.b.success("Contact ".concat(e.name," successfully deleted."))}));case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),l.b.error("Oops, ".concat(t.t0.message)),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e,n){return t.apply(this,arguments)}}()),x=n(12),_=n(71),g=n(17),y=function(t){return t.contacts.items},N=function(t){return t.contacts.filter},C=function(t){return t.contacts.loading},k=Object(g.a)([y,N],(function(t,e){var n=e.toLowerCase().trim(" ");return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),w=n(8),F=n.n(w),T=n(1);var A=function(){var t=Object(c.useState)(""),e=Object(x.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(x.a)(r,2),u=o[0],b=o[1],j=Object(s.c)(C),d=Object(c.useRef)(""),f=Object(c.useRef)(""),p=Object(s.c)(y),O=Object(s.b)();Object(c.useEffect)((function(){d.current=Object(_.a)(),f.current=Object(_.a)()}),[]);var m=function(t){switch(t.currentTarget.name){case"name":a(t.currentTarget.value);break;case"phone":b(t.currentTarget.value);break;default:return}};return Object(T.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault(),p.find((function(t){return t.name===n}))?l.b.error("".concat(n," is already in contacts.")):(!function(t,e){O(h({name:t,phone:e}))}(n,u),a(""),b(""))},name:"adding_contacts_form",children:[Object(T.jsx)("label",{className:F.a.label,htmlFor:d.current,children:"Name"}),Object(T.jsx)("input",{className:F.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,id:d.current,onChange:m}),Object(T.jsx)("label",{className:F.a.label,htmlFor:f.current,children:"Number"}),Object(T.jsx)("input",{className:F.a.input,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,id:f.current,onChange:m}),Object(T.jsxs)("div",{className:F.a.box,children:[Object(T.jsx)("button",{className:F.a.btn,type:"submit",disabled:j,children:"Add contact"}),j&&Object(T.jsx)(i.a,{className:"s.loader",type:"spinningBubbles",color:"#2b2626",height:25,width:25})]})]})},I=Object(f.b)("contacts/filter"),L=n(20),z=n.n(L);var B=function(){var t=Object(s.c)(N),e=Object(s.b)(),n=Object(_.a)();return Object(T.jsxs)("div",{className:z.a.filter,children:[Object(T.jsx)("label",{className:z.a.label,htmlFor:n,children:"Find contacts by name:"}),Object(T.jsx)("input",{className:z.a.input,type:"text",name:"filter",value:t,id:n,onChange:function(t){return e(I(t.currentTarget.value))},autoComplete:"off"})]})},S=n(21),W=n.n(S);var R=function(t){var e=t.id,n=t.name,a=t.phone,r=Object(s.c)(C),o=Object(c.useState)(r),u=Object(x.a)(o,2),l=u[0],b=u[1],j=Object(s.b)();return Object(T.jsxs)("li",{className:W.a.item,children:[n,": ",Object(T.jsx)("span",{className:W.a.tel,children:a}),l&&Object(T.jsx)(i.a,{className:"s.loader",type:"spinningBubbles",color:"#2b2626",height:15,width:15}),Object(T.jsx)("button",{className:W.a.btn,onClick:function(){!function(t,e){b(!r),j(v({id:t,name:e}))}(e,n)},type:"button",disabled:l,children:"Delete"})]})},V=n(33),Z=n.n(V);var D=function(){var t=Object(s.c)(k);return Object(T.jsx)("ul",{className:Z.a.list,children:t.map((function(t){var e=t.id,n=t.name,c=t.phone;return Object(T.jsx)(R,{id:e,name:n,phone:c},e)}))})};n(67);var E,J,M,q=function(){var t=Object(s.c)(k),e=Object(s.c)(N),n=Object(s.c)(C),a=Object(s.b)();return Object(c.useEffect)((function(){a(m())}),[a]),Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(A,{}),Object(T.jsx)("h2",{className:"listTitle",children:"Contacts"}),Object(T.jsx)(B,{}),0===t.length?n?Object(T.jsx)(i.a,{className:"ContactsLoader",type:"spinningBubbles",color:"#2b2626",height:80,width:80}):Object(T.jsx)("p",{className:"notifyText",children:e.length>0?"No results for your search":"No contacts yet"}):Object(T.jsx)(D,{}),Object(T.jsx)(l.a,{position:"top-center",reverseOrder:!0,gutter:10,toastOptions:{className:"Toaster",duration:3e3,style:{background:"#363636",color:"#fff"}}})]})},U=(n(68),n(2)),G=n(34),H=n(6),P=Object(f.d)([],(E={},Object(U.a)(E,m.fulfilled,(function(t,e){return e.payload.reverse()})),Object(U.a)(E,h.fulfilled,(function(t,e){return[e.payload].concat(Object(G.a)(t))})),Object(U.a)(E,v.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.meta.arg.id}))})),E)),Q=Object(f.d)(!1,(J={},Object(U.a)(J,m.pending,(function(){return!0})),Object(U.a)(J,m.fulfilled,(function(){return!1})),Object(U.a)(J,m.rejected,(function(){return!1})),Object(U.a)(J,h.pending,(function(){return!0})),Object(U.a)(J,h.fulfilled,(function(){return!1})),Object(U.a)(J,h.rejected,(function(){return!1})),Object(U.a)(J,v.pending,(function(){return!0})),Object(U.a)(J,v.fulfilled,(function(){return!1})),Object(U.a)(J,v.rejected,(function(){return!1})),J)),X=Object(f.d)(null,(M={},Object(U.a)(M,m.rejected,(function(t,e){return e.payload.message})),Object(U.a)(M,m.pending,(function(){return null})),Object(U.a)(M,h.rejected,(function(t,e){return e.payload.message})),Object(U.a)(M,h.pending,(function(){return null})),Object(U.a)(M,v.rejected,(function(t,e){return e.payload.message})),Object(U.a)(M,v.pending,(function(){return null})),M)),Y=Object(f.d)("",Object(U.a)({},I,(function(t,e){return e.payload}))),$=Object(H.b)({items:P,filter:Y,loading:Q,error:X}),K=Object(f.a)({reducer:{contacts:$},devTools:!1,middleware:function(t){return t()}});o.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(s.a,{store:K,children:Object(T.jsx)(q,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__3cuYG",input:"ContactForm_input__3T6LH",label:"ContactForm_label__10R3X",btn:"ContactForm_btn__jaIWc",box:"ContactForm_box__tM6m7"}}},[[70,1,2]]]);
//# sourceMappingURL=main.3e0c7569.chunk.js.map