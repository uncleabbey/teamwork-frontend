(this.webpackJsonpteamwork=this.webpackJsonpteamwork||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(2),s=(a(32),a(33),a(34),a(10)),m=a(1),i=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)(!1),b=Object(m.a)(p,2),d=b[0],h=b[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),E=g[0],v=g[1];return r.a.createElement("div",{className:"container admin"},r.a.createElement("div",{className:"row form-container"},r.a.createElement("form",{className:"login col-sm-6",onSubmit:function(t){t.preventDefault();var a="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","auth/signin"),n={email:c,password:i};fetch(a,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){"error"===t.status&&(console.log(t.error),h(!0),v(t.error)),localStorage.setItem("token",t.data.token),!0===t.data.isAdmin?e.history.push("/dashboard"):e.history.push("/feed"),console.log(t)})).catch((function(e){console.log(e)}))}},r.a.createElement("h3",null,"Welcome Login"),r.a.createElement("input",{required:!0,type:"email",className:"form-control",placeholder:"Email",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{required:!0,type:"password",className:"form-control",placeholder:"Password",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{className:"login-button"},"LOGIN"),r.a.createElement("p",{className:"alert alert-danger",role:"alert"},d&&E)),r.a.createElement("div",{className:"welcome col-sm-6"},r.a.createElement("h2",null,"Teamwork"))))},u=a(5),p=function(e){return r.a.createElement("div",null,r.a.createElement("label",null,e.label,r.a.createElement("br",null),r.a.createElement("input",{className:"form-control epm-input",name:e.name,value:e.value,placeholder:e.placeholder,type:e.type,onChange:e.handleChange})))};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var d=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:"",gender:"",jobRole:"",department:"",address:"",isAdmin:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),s=o[0],i=o[1],d=Object(n.useState)(""),h=Object(m.a)(d,2),f=h[0],g=h[1],E=function(e){var t=e.target,n=t.name,r=t.value;c(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,Object(u.a)({},n,r)))};return r.a.createElement("div",{className:"create-emp-container"},r.a.createElement("form",{className:"create-employee",onSubmit:function(e){e.preventDefault();var t={firstName:a.firstName,lastName:a.lastName,email:a.email,password:a.password,gender:a.gender,jobRole:a.jobRole,department:a.department,address:a.address,isAdmin:a.isAdmin};fetch("https://abbey-teamwork-backend.herokuapp.com/api/v1/auth/create-user",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){"error"===e.status&&(console.log(e.error),i(!0),g(e.error))})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"form-input"},r.a.createElement("h3",{className:"emp-title"},"Create Employee"),r.a.createElement("div",{className:"row"},r.a.createElement(p,{className:"form-control",label:"First Name",name:"firstName",type:"text",placeholder:"First Name",value:a.firstName,handleChange:E}),r.a.createElement(p,{className:"form-control",label:"Last Name",name:"lastName",type:"text",placeholder:"Last Name",value:a.lastName,handleChange:E})),r.a.createElement("div",{className:"row"},r.a.createElement(p,{className:"form-control",label:"Email",name:"email",type:"email",placeholder:"Email",value:a.email,handleChange:E}),r.a.createElement(p,{className:"form-control",label:"Password",name:"password",type:"password",placeholder:"Password",value:a.password,handleChange:E})),r.a.createElement("div",{className:"row"},r.a.createElement(p,{className:"form-control",label:"Address",name:"address",type:"text",placeholder:"Address",value:a.address,handleChange:E}),r.a.createElement("div",{className:"form-group gender"},r.a.createElement("span",null,"Gender"),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"gender",value:"Male",onChange:E}),"Male"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"gender",value:"Female",onChange:E}),"Female"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"gender",value:"Others",onChange:E}),"Others"))),r.a.createElement("div",{className:"row"},r.a.createElement(p,{className:"form-control",label:"Department",name:"department",type:"text",placeholder:"Department",value:a.department,handleChange:E}),r.a.createElement(p,{className:"form-control",label:"Job Role",name:"jobRole",type:"text",placeholder:"Job Role",value:a.jobRole,handleChange:E})),r.a.createElement("div",null,r.a.createElement("select",{name:"isAdmin",onChange:E,value:a.isAdmin},r.a.createElement("option",{value:"true"},"true"),r.a.createElement("option",{value:"false"},"false"))),r.a.createElement("button",{className:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("div",{className:"alert alert-danger",role:"alert"},r.a.createElement("p",null,s&&f)))))},h=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null))},f=function(){return r.a.createElement("header",{className:"row"},r.a.createElement("div",{className:"row logo"},r.a.createElement("img",{src:"https://res.cloudinary.com/kayode/image/upload/v1572940640/icons/6_-_Team-512_biztib.png",alt:"Icon"}),r.a.createElement("h3",{className:"title"},"TeamWork")),r.a.createElement(h,null))},g=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("h4",{className:"text-light"},"Error 404"),r.a.createElement("p",{className:"text-light"},"Oops this page does not exist"))},E=a(3),v=a.n(E),O=a(6),j=function(e){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Tags",value:e.tag,onChange:e.handleTagChange}),r.a.createElement("button",{type:"button",onClick:e.handleClick,className:"tag"},"Add"))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=function(e){var t=Object(n.useState)({title:"",article:"",tags:[]}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),p=i[0],b=i[1],d=Object(n.useState)(""),h=Object(m.a)(d,2),f=h[0],g=h[1],E=function(e){var t=e.target,a=t.name,n=t.value;l(N({},c,Object(u.a)({},a,n)))},y=function(){var t=Object(O.a)(v.a.mark((function t(a){var n,r,l,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:c.title,article:c.article,tags:c.tags},r="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","articles"),t.prev=3,t.next=6,fetch(r,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 6:return l=t.sent,t.next=9,l.json();case 9:o=t.sent,g(o.data.message),e.history.push("/timeline"),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"article-form"},r.a.createElement("h2",null,"Create Article"),r.a.createElement(o.b,{to:"/timeline"},r.a.createElement("button",{className:"btn btn-primary ml-3"},"Back")," "),r.a.createElement("form",{onSubmit:y},r.a.createElement("label",null,"Title:"),r.a.createElement("br",null),r.a.createElement("input",{required:!0,name:"title",type:"text",placeholder:"Title",onChange:E}),r.a.createElement("br",null),r.a.createElement("label",null,"Article: "),r.a.createElement("br",null),r.a.createElement("textarea",{cols:"30",rows:"10",required:!0,name:"article",placeholder:"Article",onChange:E}),r.a.createElement("p",null,"Tags:"," ",c.tags.map((function(e){return r.a.createElement("span",{key:e},e)}))),r.a.createElement(j,{handleTagChange:function(e){b(e.target.value)},handleClick:function(e){e.preventDefault(),l(N({},c,{tags:c.tags.concat(p)})),b("")},tag:p}),r.a.createElement("button",{type:"submit",className:"article-btn"},"Post"),r.a.createElement("p",{className:"alert alert-success"},f)))},w=function(){return r.a.createElement("img",{src:"https://res.cloudinary.com/kayode/image/upload/v1574541497/giphy_lwlnu8.gif",alt:"Loading........"})};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)({title:"",article:"",tags:[]}),i=Object(m.a)(s,2),p=i[0],b=i[1],d=Object(n.useState)([]),h=Object(m.a)(d,2),f=h[0],g=h[1],E=Object(n.useState)(!1),y=Object(m.a)(E,2),N=y[0],k=y[1];Object(n.useEffect)((function(){k(!0);var t="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","articles/").concat(e.match.params.id);(function(){var e=Object(O.a)(v.a.mark((function e(){var a,n,r,c,l,o;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=n.data,c=r.title,l=r.article,o=r.tags,b({title:c,article:l,tags:o}),k(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var S=function(e){var t=e.target,a=t.name,n=t.value;b(x({},p,Object(u.a)({},a,n)))},P=function(){var t=Object(O.a)(v.a.mark((function t(a){var n,r,c,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:p.title,article:p.article,tags:p.tags},r="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","articles/").concat(e.match.params.id),t.prev=3,t.next=6,fetch(r,{method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 6:return c=t.sent,t.next=9,c.json();case 9:o=t.sent,l(o.data.message),e.history.push("/article/".concat(e.match.params.id)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,14]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"article-form"},r.a.createElement("h2",null,"Edit Article"),r.a.createElement("div",{className:"pt-2"},r.a.createElement(o.b,{to:"/article/".concat(e.match.params.id)},r.a.createElement("span",{className:"btn btn-sm btn-primary ml-4"},"Back"))),N&&r.a.createElement(w,null),r.a.createElement("form",{onSubmit:P},r.a.createElement("label",null,"Title:"),r.a.createElement("br",null),r.a.createElement("input",{required:!0,value:p.title,name:"title",type:"text",placeholder:"Title",onChange:S}),r.a.createElement("br",null),r.a.createElement("label",null,"Article: "),r.a.createElement("br",null),r.a.createElement("textarea",{value:p.article,cols:"30",rows:"10",required:!0,name:"article",placeholder:"Article",onChange:S}),r.a.createElement("p",null,"Tags:"," ",p.tags.map((function(e,t){return r.a.createElement("span",{key:t},e)}))),r.a.createElement(j,{handleTagChange:function(e){g(e.target.value)},handleClick:function(e){b(x({},p,{tags:p.tags.concat(f)})),g("")},tag:f}),r.a.createElement("button",{type:"submit",className:"article-btn"},"Post"),r.a.createElement("p",{className:"alert alert-success"},c)))};function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(e){var t=Object(n.useState)({title:"",file:""}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),p=i[0],b=i[1];return r.a.createElement("div",{className:"article-form"},r.a.createElement(o.b,{to:"/timeline"},r.a.createElement("button",{className:"btn btn-primary ml-3"},"Back")," "),r.a.createElement("h2",null,"Post Gifs"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","gifs"),n=new FormData;n.append("title",c.title),n.append("imageUrl",c.file);var r=!0,l=!1,o=void 0;try{for(var s,m=n[Symbol.iterator]();!(r=(s=m.next()).done);r=!0){var i=s.value;console.log(i)}}catch(u){l=!0,o=u}finally{try{r||null==m.return||m.return()}finally{if(l)throw o}}fetch(a,{method:"POST",headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))},body:n}).then((function(e){return e.json()})).then((function(t){console.log(t),b(t.message),e.history.push("/timeline")})).catch((function(e){console.log(e)}))}},r.a.createElement("label",null,"Title:"),r.a.createElement("br",null),r.a.createElement("input",{required:!0,name:"title",type:"text",placeholder:"Title",onChange:function(e){var t=e.target,a=t.name,n=t.value;l(D({},c,Object(u.a)({},a,n)))}}),r.a.createElement("br",null),r.a.createElement("label",null,"Gifs: "),r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"imageUrl",onChange:function(e){l(D({},c,{file:e.target.files[0]}))}}),r.a.createElement("button",{type:"submit",className:"article-btn"},"Post"),r.a.createElement("p",{className:"alert alert-success"},p)))},A=a(13),B=function(e){var t=e.handleSubmit,a=e.comment,n=e.handleChange;return r.a.createElement("form",{onSubmit:t},r.a.createElement("textarea",{value:a,placeholder:"comments",onChange:n}),r.a.createElement("button",{className:"add-comment"},"Add"))},I=function(e){var t=e.comment,a=e.firstName,n=e.lastName,c=e.createdOn,l=new Date(c.replace(" ","T"));return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"comments"},r.a.createElement("span",{className:"user-name"},a+" "+n),r.a.createElement("small",{className:"float-right"},l.toLocaleString())),r.a.createElement("div",{className:"card-text"},t))},z=a(22),J=a(23),L=a(25),F=a(24),R=a(26),q=function(e){function t(){var e,a;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(L.a)(this,(e=Object(F.a)(t)).call.apply(e,[this].concat(r)))).state={error:!1,info:null},a}return Object(R.a)(t,e),Object(J.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,r.a.createElement("h5",null,this.props.message),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.info.componentStack)):this.props.children}}]),t}(n.Component);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function _(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=function(e){var t=Object(n.useState)({comments:[],title:"",article:"",tags:[]}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),u=i[0],p=i[1],b=Object(n.useState)(""),d=Object(m.a)(b,2),h=d[0],f=d[1],g=Object(n.useState)(""),E=Object(m.a)(g,2),j=E[0],y=E[1],N=Object(n.useState)(""),k=Object(m.a)(N,2),S=k[0],x=k[1],P=Object(n.useState)(!1),C=Object(m.a)(P,2),D=C[0],T=C[1];Object(n.useEffect)((function(){p(!0);var t="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","articles/").concat(e.match.params.id);(function(){var e=Object(O.a)(v.a.mark((function e(){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return a=e.sent,e.next=6,a.json();case 6:if(n=e.sent,p(!1),"error"!==n.status){e.next=13;break}return console.log(n.error),T(!0),y(n.error),e.abrupt("return",l({comments:[],title:"",article:"",tags:[]}));case 13:return e.abrupt("return",l(n.data));case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var z=function(){var t=Object(O.a)(v.a.mark((function t(a){var n,r,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),n="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","articles/").concat(e.match.params.id,"/comment"),t.next=5,fetch(n,{method:"POST",body:JSON.stringify({comment:h}),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,y(o.data.message),f(""),l(_({},c,{comments:[].concat(Object(A.a)(c.comments),[o.data.commentData])})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),J=c.comments,L=c.title,F=c.article,R=c.tags;return r.a.createElement("div",{className:"pad-articles"},r.a.createElement("div",{className:"card article-container"},r.a.createElement("h2",{className:"text-center text-success"},S),r.a.createElement("div",{className:"pt-2"},r.a.createElement(o.b,{to:"/timeline"},r.a.createElement("span",{className:"btn btn-sm btn-primary ml-4"},"Back")),r.a.createElement(o.b,{to:"/edit-article/".concat(e.match.params.id)},r.a.createElement("span",{className:"btn btn-sm btn-success ml-3"},"Edit")),r.a.createElement("span",{className:"btn btn-sm btn-danger ml-3",onClick:function(t){prompt("Are you sure");var a="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","articles/").concat(e.match.params.id);fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){"error"===t.status&&(console.log(t.error),T(!0),y(t.error)),x(t.message),e.history.push("/timeline")})).catch((function(e){console.log(e)}))}},"Delete")),r.a.createElement(q,{message:j},u&&r.a.createElement(w,null),D?r.a.createElement("div",{className:"pt-4 pb-4"},r.a.createElement("h5",{className:"card-text text-danger text-center"},"Error retrieving article")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,L),r.a.createElement("div",{className:"card-subtitle"},"Tags:",R.length>0?R.map((function(e,t){return r.a.createElement(o.b,{to:"/tags/".concat(e),key:t},r.a.createElement("span",{className:"ml-2 text-primary"},e))})):r.a.createElement("span",null,"No Tags"))),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},F),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B,{handleSubmit:z,comment:h,handleChange:function(e){f(e.target.value)}}),j),r.a.createElement("ul",{className:"card-footer list-group mb-4"},J.length>0?J.map((function(e){return r.a.createElement(I,{key:e.commentId,comment:e.comment,firstName:e.firstName,lastName:e.lastName,createdOn:e.createdOn})})):"No comment yet for the article")))))};function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var H=function(e){var t=Object(n.useState)({comments:[],title:"",url:""}),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),u=i[0],p=i[1],b=Object(n.useState)(""),d=Object(m.a)(b,2),h=d[0],f=d[1],g=Object(n.useState)(""),E=Object(m.a)(g,2),j=E[0],y=E[1],N=Object(n.useState)(""),k=Object(m.a)(N,2),S=k[0],x=k[1],P=Object(n.useState)(!1),C=Object(m.a)(P,2),D=C[0],T=C[1];Object(n.useEffect)((function(){p(!0);var t="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","gifs/").concat(e.match.params.id);(function(){var e=Object(O.a)(v.a.mark((function e(){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,p(!1),"error"!==n.status){e.next=12;break}return console.log(n.error),T(!0),y(n.error),e.abrupt("return",l({comments:[],title:"",url:""}));case 12:return e.abrupt("return",l(n.data));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[e.match.params.id]);var z=function(){var t=Object(O.a)(v.a.mark((function t(a){var n,r,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a.preventDefault(),n="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","gifs/").concat(e.match.params.id,"/comment"),t.next=5,fetch(n,{method:"POST",body:JSON.stringify({comment:h}),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,y(o.data.message),f(""),l(U({},c,{comments:[].concat(Object(A.a)(c.comments),[o.data.commentData])})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}(),J=c.comments,L=c.title,F=c.url;return r.a.createElement("div",{className:"pad-articles"},r.a.createElement("div",{className:"card article-container"},r.a.createElement("h2",{className:"text-center text-success"},S),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/timeline"},r.a.createElement("button",{className:"btn btn-sm btn-primary"},"Back")),r.a.createElement("span",{className:"btn btn-sm btn-danger ml-5",onClick:function(t){prompt("Are you sure");var a="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","gifs/").concat(e.match.params.id);fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(t){x(t.message),e.history.push("/timeline")})).catch((function(e){console.log(e)}))}},"Delete")),u&&r.a.createElement(w,null),D?r.a.createElement("div",{className:"pt-4 pb-4"},r.a.createElement("h5",{className:"card-text text-danger text-center"},"Error retrieving article")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,L)),r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{src:F,className:"card-img",alt:"ImageGifs"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B,{handleSubmit:z,comment:h,handleChange:function(e){f(e.target.value)}}),j),r.a.createElement("ul",{className:"card-footer list-group mb-4"},J.length>0?J.map((function(e){return r.a.createElement(I,{key:e.commentId,comment:e.comment,firstName:e.firstName,lastName:e.lastName,createdOn:e.createdOn})})):r.a.createElement("h5",null,j)))))},$=function(){return r.a.createElement("div",{className:"dashboard-cont"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",{className:"card-header-pills"},"Welcome Admin")),r.a.createElement("div",{className:"card-body"},r.a.createElement(o.b,{to:"/create-emp"},r.a.createElement("button",{className:"btn btn-lg btn-primary"},"Create Employees")),r.a.createElement(o.b,{to:"/timeline"},r.a.createElement("button",{className:"btn btn-lg btn-success"},"Go to Feed")),r.a.createElement(o.b,{to:"/flag"},r.a.createElement("button",{className:"btn btn-lg btn-danger"},"Check Flagged Post")))))},K=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Oops!!!!! Site is Under Construction"))},Q=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("span",{onClick:function(){return n(e)},className:"page-link"},e))}))))},V=function(e){var t=e.title,a=e.createdOn,n=e.content,c=e.id,l=e.firstName,s=e.lastName,m=new Date(a.replace(" ","T")),i=r.a.createElement("div",null,n.substr(0,120)," ",r.a.createElement(o.b,{to:"/article/".concat(c)}," Read more....."));return r.a.createElement("div",null,r.a.createElement("div",{className:"comments"},r.a.createElement("span",{className:"user-name"},l+" "+s),r.a.createElement("small",{className:"float-right"},m.toLocaleString())),r.a.createElement(o.b,{to:"/article/".concat(c)},r.a.createElement("h6",null,t)),r.a.createElement("div",null,n.length>110?i:n))},X=function(e){var t=e.title,a=e.content,n=e.createdOn,c=e.id,l=e.firstName,s=e.lastName,m=new Date(n.replace(" ","T"));return r.a.createElement("div",null,r.a.createElement("div",{className:"comments"},r.a.createElement("span",{className:"user-name"},l+" "+s),r.a.createElement("small",{className:"float-right"},m.toLocaleString())),r.a.createElement(o.b,{to:"/gif/".concat(c)},r.a.createElement("h6",null,t)),r.a.createElement("img",{className:"gif-img",src:a,alt:"gifpost"}))},Y=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(5),s=Object(m.a)(l,1)[0],i=Object(n.useState)([]),u=Object(m.a)(i,2),p=u[0],b=u[1],d=Object(n.useState)(!1),h=Object(m.a)(d,2),f=h[0],g=h[1],E=Object(n.useState)(null),j=Object(m.a)(E,2),y=j[0],N=j[1];Object(n.useEffect)((function(){g(!0),function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","feed?currentPage=").concat(a,"&pageSize=").concat(s),{headers:{authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n.data),N(n.meta.count),g(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,s]);return r.a.createElement("div",{className:"feed-cont"},r.a.createElement("h3",{className:"feed-header"},"Teamwork Timeline"),r.a.createElement("div",{className:"pt-3 pb-3"},r.a.createElement(o.b,{to:"/post-gif"},r.a.createElement("button",{className:"btn btn-primary"},"Create Gifs")," "),r.a.createElement(o.b,{to:"/create-article"},r.a.createElement("button",{className:"btn btn-primary ml-3"},"Create Articles")," "),r.a.createElement(o.b,{to:"/search"},r.a.createElement("button",{className:"btn btn-info ml-3"},"Search")," ")),r.a.createElement("ul",{className:"list-group mb-4"},f?r.a.createElement(w,null):p.map((function(e){return r.a.createElement("li",{key:e.feedID,className:"list-group-item"},"article"===e.type?r.a.createElement(V,{title:e.title,content:e.content,createdOn:e.createdOn,id:e.id,firstName:e.firstName,lastName:e.lastName}):r.a.createElement(X,{title:e.title,content:e.content,createdOn:e.createdOn,id:e.id,firstName:e.firstName,lastName:e.lastName}))}))),r.a.createElement(Q,{postsPerPage:s,totalPosts:y,paginate:function(e){return c(e)}}))},Z=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(m.a)(l,2),i=s[0],u=s[1],p=Object(n.useState)([]),b=Object(m.a)(p,2),d=b[0],h=b[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),E=g[0],v=g[1];return r.a.createElement("div",{className:"feed-cont"},r.a.createElement("h3",{className:"feed-header"},"Search by Tags"),r.a.createElement("form",{onSubmit:function(e){u(!0),e.preventDefault();var t="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","search"),n={tags:a};console.log(n),fetch(t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){if("No Article has that tag in the database"===e.data.message)throw console.log(e.data),v(e.data.message),h([]),u(!1),new Error("No Article has that tag in the database");console.log(e.data),h(e.data.data),u(!1)})).catch((function(e){u(!1)}))},className:"pt-3 pb-3"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search Articles By Tags",onChange:function(e){return c(e.target.value)}})),i?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group mb-4"},d.length>0?d.map((function(e){var t=e.article_id,a=e.title;return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(o.b,{to:"/article/".concat(t)},r.a.createElement("p",null,a)))})):r.a.createElement("div",{className:"bg-white"},r.a.createElement("h6",{className:"text-danger"},E)))))},ee=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),i=Object(m.a)(s,2),u=i[0],p=i[1],b=Object(n.useState)(""),d=Object(m.a)(b,2),h=d[0],f=d[1];return Object(n.useEffect)((function(){l(!0);var t="".concat("https://abbey-teamwork-backend.herokuapp.com/api/v1/","search"),a={tags:e.match.params.tag};console.log(a),fetch(t,{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).then((function(e){if("No Article has that tag in the database"===e.data.message)throw console.log(e.data),f(e.data.message),p([]),l(!1),new Error("No Article has that tag in the database");console.log(e.data),p(e.data.data),l(!1)})).catch((function(e){l(!1)}))}),[e.match.params.tag]),r.a.createElement("div",{className:"feed-cont"},r.a.createElement("h4",{className:"text-white"},"Articles that have the tag"),c?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group mb-4"},u.length>0?u.map((function(e){var t=e.article_id,a=e.title;return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(o.b,{to:"/article/".concat(t)},r.a.createElement("p",null,a)))})):r.a.createElement("div",{className:"bg-white"},r.a.createElement("h6",{className:"text-danger"},h)))))},te=function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:i}),r.a.createElement(s.a,{exact:!0,path:"/dashboard",component:$}),r.a.createElement(s.a,{exact:!0,path:"/create-emp",component:d}),r.a.createElement(s.a,{exact:!0,path:"/timeline",component:Y}),r.a.createElement(s.a,{exact:!0,path:"/create-article",component:k}),r.a.createElement(s.a,{exact:!0,path:"/edit-article/:id",component:P}),r.a.createElement(s.a,{exact:!0,path:"/post-gif",component:T}),r.a.createElement(s.a,{exact:!0,path:"/article/:id",component:W}),r.a.createElement(s.a,{exact:!0,path:"/gif/:id",component:H}),r.a.createElement(s.a,{exact:!0,path:"/flag",component:K}),r.a.createElement(s.a,{exact:!0,path:"/search",component:Z}),r.a.createElement(s.a,{exact:!0,path:"/tags/:tag",component:ee}),r.a.createElement(s.a,{component:g})))};var ae=function(){return r.a.createElement("div",{className:"container app-container"},r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c6f28fe5.chunk.js.map