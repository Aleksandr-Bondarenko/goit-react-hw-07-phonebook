(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={item:"ContactItem_item__1L9mb",tel:"ContactItem_tel__7m9bq",btn:"ContactItem_btn__1NriN"}},17:function(t,e,n){t.exports={list:"ContactsList_list__GvFDC"}},29:function(t,e,n){},31:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(7),o=n.n(r),s=n(2),i=(n(29),n(14)),l=n(35),u=n(4),b=Object(u.b)("contacts/add",(function(t,e){return{payload:{id:Object(l.a)(),name:t,number:e}}})),j=Object(u.b)("contacts/delete"),m=Object(u.b)("contacts/filter"),d=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},O=function(t){var e=f(t),n=d(t),c=e.toLowerCase().trim(" ");return n.filter((function(t){return t.name.toLowerCase().includes(c)}))},p=n(5),h=n.n(p),_=n(1);var x=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],j=o[1],m=Object(c.useRef)(""),f=Object(c.useRef)(""),O=Object(s.c)(d),p=Object(s.b)();Object(c.useEffect)((function(){m.current=Object(l.a)(),f.current=Object(l.a)()}),[]);var x=function(t){switch(t.currentTarget.name){case"name":a(t.currentTarget.value);break;case"number":j(t.currentTarget.value);break;default:return}};return Object(_.jsxs)("form",{className:h.a.form,onSubmit:function(t){t.preventDefault(),O.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts.")):(!function(t,e){p(b(t,e))}(n,u),a(""),j(""))},name:"adding_contacts_form",children:[Object(_.jsx)("label",{className:h.a.label,htmlFor:m.current,children:"Name"}),Object(_.jsx)("input",{className:h.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,id:m.current,onChange:x}),Object(_.jsx)("label",{className:h.a.label,htmlFor:f.current,children:"Number"}),Object(_.jsx)("input",{className:h.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,id:f.current,onChange:x}),Object(_.jsx)("button",{className:h.a.btn,type:"submit",children:"Add contact"})]})},v=n(9),N=n.n(v);var C=function(){var t=Object(s.c)(f),e=Object(s.b)(),n=Object(l.a)();return Object(_.jsxs)("div",{className:N.a.filter,children:[Object(_.jsx)("label",{className:N.a.label,htmlFor:n,children:"Find contacts by name:"}),Object(_.jsx)("input",{className:N.a.input,type:"text",name:"filter",value:t,id:n,onChange:function(t){return e(m(t.currentTarget.value))},autoComplete:"off"})]})},g=n(10),y=n.n(g);var F=function(t){var e=t.id,n=t.name,c=t.number,a=t.toDelContact;return Object(_.jsxs)("li",{className:y.a.item,children:[n,": ",Object(_.jsx)("span",{className:y.a.tel,children:c}),Object(_.jsx)("button",{className:y.a.btn,onClick:function(){a(e)},type:"button",children:"Delete"})]})},S=n(17),k=n.n(S);var w=function(){var t=Object(s.c)(O),e=Object(s.b)(),n=function(t){return e(j(t))};return Object(_.jsx)("ul",{className:k.a.list,children:t.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(_.jsx)(F,{id:e,name:c,number:a,toDelContact:n},e)}))})};n(31);var A,I,T=function(){var t=Object(s.c)(d),e=Object(s.c)(O),n=Object(s.c)(f);return Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]),Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("h1",{children:"Phonebook"}),Object(_.jsx)(x,{}),Object(_.jsx)("h2",{className:"listTitle",children:"Contacts"}),Object(_.jsx)(C,{}),0===e.length?Object(_.jsx)("p",{className:"notifyText",children:n.length>0?"No results for your search":"No contacts yet"}):Object(_.jsx)(w,{})]})},z=(n(32),n(11)),D=n(18),J=n(3),E=Object(u.c)([],(A={},Object(z.a)(A,b,(function(t,e){return[e.payload].concat(Object(D.a)(t))})),Object(z.a)(A,j,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),A)),L=Object(u.c)("",Object(z.a)({},m,(function(t,e){return e.payload}))),R=Object(J.b)({items:E,filter:L}),q={contacts:{items:null!==(I=JSON.parse(localStorage.getItem("contacts")))&&void 0!==I?I:[],filter:""}},Z=Object(u.a)({reducer:{contacts:R},devTools:!1,middleware:function(t){return t()},preloadedState:q});o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(s.a,{store:Z,children:Object(_.jsx)(T,{})})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__1ejIW",input:"ContactForm_input__21RFx",label:"ContactForm_label__Ez_8F",btn:"ContactForm_btn__1cmr7"}},9:function(t,e,n){t.exports={filter:"Filter_filter__1nbtc",label:"Filter_label__2d3RH",input:"Filter_input__N2pb1"}}},[[34,1,2]]]);
//# sourceMappingURL=main.ef6579ed.chunk.js.map