(this["webpackJsonpreact-around-auth"]=this["webpackJsonpreact-around-auth"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(20),s=n.n(c),o=n(25),r=n(6),i=n(3),l=n(4),u=(n(31),n(10)),p=n.p+"static/media/Logo.50fce9df.svg",d=n(0),j=function(e){var t=e.title,n=e.userEmail,a=e.onLogout,c=e.link;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:p,alt:"Logo of Around the U.S",className:"header__logo"}),Object(d.jsxs)("ul",{className:"header__nav",children:[n&&Object(d.jsx)("li",{children:Object(d.jsx)("p",{className:"header__email",children:n})}),Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:c,onClick:a,className:"header__logout",children:t})})]})]})},b=function(e){var t=e.name,n=e.isOpen,a=e.card,c=e.onClose;return Object(d.jsx)("section",{className:"popup popup_type_".concat(t," ").concat(n&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&c()},children:Object(d.jsxs)("div",{className:"popup__container popup__container_".concat(t),children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_preview","aria-label":"Close button",onClick:c}),Object(d.jsx)("img",{className:"popup__image",src:a.link||"#",alt:"bigger size of the card with its link and name"}),Object(d.jsx)("p",{className:"popup__preview-title",children:a.name})]})})},m=Object(a.createContext)(),h=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,o=(e.onConfirmDeleteClick,Object(a.useContext)(m)),r=t.owner._id===o._id,i=t.likes.some((function(e){return e._id===o._id}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("button",{className:"element__delete-button ".concat(r?"element__delete-button":"element__delete-button_type_hidden"),"aria-label":"Delete button",type:"button",onClick:function(e){e.preventDefault(),s(t)}}),Object(d.jsx)("div",{className:"element__image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){return n(t)}}),Object(d.jsxs)("div",{className:"element__flex",children:[Object(d.jsx)("h2",{className:"element__text",children:t.name}),Object(d.jsxs)("div",{className:"element__like-wrapper",children:[Object(d.jsx)("button",{type:"button",className:"element__like-button ".concat(i?"element__like-button_active":"element__like-button"),onClick:function(){return c(t)}}),Object(d.jsx)("p",{className:"element__like-count",children:t.likes.length})]})]})]})})},O=function(e){var t=e.onEditProfileClick,n=e.onAddPlaceClick,c=e.onEditAvatarClick,s=e.onCardClick,o=e.onConfirmDeleteClick,r=e.cards,i=e.onCardLike,l=e.onCardDelete,u=e.userEmail,p=e.onLogoutClick,b=Object(a.useContext)(m);return Object(d.jsxs)("main",{children:[Object(d.jsx)(j,{onLogout:p,link:"/",title:"Log out",userEmail:u}),Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"profile__avatar-overlay",onClick:c}),Object(d.jsx)("img",{src:b.avatar,alt:"old person with a red hat smiling to camera",className:"profile__avatar"})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:b.name}),Object(d.jsx)("button",{className:"profile__edit-button","aria-label":"edit button",type:"button",onClick:t}),Object(d.jsx)("p",{className:"profile__job",children:b.about})]}),Object(d.jsx)("button",{className:"profile__add-button","aria-label":"Add button",type:"button",onClick:n})]}),Object(d.jsx)("section",{className:"elements",children:Object(d.jsx)("ul",{className:"elements__list",children:r.map((function(e){return Object(d.jsx)(h,{card:e,onCardClick:s,onConfirmDeleteClick:o,onCardLike:i,onCardDelete:l},e._id)}))})})]})},f=function(e){var t=e.title,n=e.name,a=e.buttonText,c=e.isOpen,s=e.children,o=e.onClose,r=e.onSubmit;return Object(d.jsx)("section",{className:"popup popup_type_".concat(n," ").concat(c&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&o()},children:Object(d.jsxs)("div",{className:"popup__container popup__container_".concat(n),children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_profile","aria-label":"Close button",onClick:o}),Object(d.jsxs)("form",{name:n,className:"popup__form popup__form_type_".concat(n),onSubmit:r,children:[Object(d.jsx)("h2",{className:"popup__title",children:t}),s,Object(d.jsx)("button",{type:"submit",className:"popup__button",children:a})]})]})})},g=n(11),x=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=Object(a.useContext)(m),o=Object(a.useState)({name:"",about:""}),l=Object(i.a)(o,2),u=l[0],p=l[1],j=u.name,b=u.about,h=function(e){var t=e.target,n=t.name,a=t.value;p(Object(r.a)(Object(r.a)({},u),{},Object(g.a)({},n,a)))};Object(a.useEffect)((function(){p({name:s.name,about:s.about})}),[s,t]);return Object(d.jsxs)(f,{isOpen:t,onClose:n,name:"edit-profile",title:"Edit Profile",buttonText:"Save",onSubmit:function(e){e.preventDefault(),c(u),p({name:"",link:""})},children:[Object(d.jsxs)("label",{className:"popup__form-field",htmlFor:"name-input",children:[Object(d.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_name",placeholder:"Name",minLength:"2",maxLength:"40",id:"name-input",required:!0,value:j||"",onChange:h}),Object(d.jsx)("span",{className:"popup__input-error name-input-error"})]}),Object(d.jsxs)("label",{className:"popup__form-field",htmlFor:"job-input",children:[Object(d.jsx)("input",{type:"text",name:"about",className:"popup__input popup__input_type_job",placeholder:"Job",minLength:"2",maxLength:"200",id:"job-input",required:!0,value:b||"",onChange:h}),Object(d.jsx)("span",{className:"popup__input-error job-input-error"})]})]})},v=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=Object(a.useRef)();return Object(d.jsx)(f,{isOpen:t,onClose:n,name:"profile-avatar",title:"Change profile picture",buttonText:"Save",onSubmit:function(e){e.preventDefault();var t=s.current.value;c(t)},children:Object(d.jsxs)("label",{className:"popup__form-field",htmlFor:"avatar-input",children:[Object(d.jsx)("input",{type:"url",name:"avatar",className:"popup__input popup__input_type_image-link",placeholder:"Avatar link",id:"avatar-input",required:!0,ref:s}),Object(d.jsx)("span",{className:"popup__input-error avatar-input-error"})]})})},C=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=Object(a.useState)({name:"",link:""}),o=Object(i.a)(s,2),l=o[0],u=o[1],p=l.name,j=l.link,b=function(e){var t=e.target,n=t.name,a=t.value;u(Object(r.a)(Object(r.a)({},l),{},Object(g.a)({},n,a)))};return Object(d.jsxs)(f,{isOpen:t,onClose:n,name:"add-card",title:"New place",buttonText:"Create",onSubmit:function(e){e.preventDefault(),c(l),u({name:"",link:""})},children:[Object(d.jsxs)("label",{className:"popup__form-field",children:[Object(d.jsx)("input",{type:"text",name:"name",className:"popup__input popup__input_type_title",placeholder:"Title",required:!0,minLength:"1",maxLength:"30",id:"title-input",value:p,onChange:b}),Object(d.jsx)("span",{className:"popup__input-error title-input-error"})]}),Object(d.jsxs)("label",{className:"popup__form-field",children:[Object(d.jsx)("input",{type:"url",name:"link",className:"popup__input popup__input_type_image-link",placeholder:"Image Link",required:!0,id:"url-input",value:j,onChange:b}),Object(d.jsx)("span",{className:"popup__input-error url-input-error"})]})]})},N=n(26),y=function(e){var t=e.component,n=Object(N.a)(e,["component"]);return Object(d.jsx)(l.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(r.a)({},n)):Object(d.jsx)(l.a,{to:"./login"})}})},k=n.p+"static/media/success.1b6082f8.svg",_=n.p+"static/media/error.df8eddf6.svg",A=function(e){var t=e.isOpen,n=e.onClose,a=e.name,c=e.success;return Object(d.jsx)("section",{className:"popup popup_type_".concat(a," ").concat(t&&"popup_opened"),onClick:function(e){e.target===e.currentTarget&&n()},children:Object(d.jsxs)("div",{className:"popup__container popup__container_".concat(a),children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_profile","aria-label":"Close button",onClick:n}),Object(d.jsx)("div",{className:"popup__tooltip",children:c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"popup__success",alt:"success",src:k}),Object(d.jsx)("p",{className:"popup__title",children:"Success! You have now been registered."})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"popup__error",alt:"error icon",src:_}),Object(d.jsx)("p",{className:"popup__title",children:"Oops, something went wrong! Please try again."})]})})]})})},S=function(e){var t=e.onRegister,n=Object(l.g)(),c=Object(a.useState)({email:"",password:"",confirmPassword:""}),s=Object(i.a)(c,2),o=s[0],p=s[1];Object(a.useEffect)((function(){localStorage.getItem("token")&&n.push("/")}),[]);var j=function(e){var t=e.target,n=t.name,a=t.value;p(Object(r.a)(Object(r.a)({},o),{},Object(g.a)({},n,a)))},b=function(e){e.preventDefault(),o.password===o.confirmPassword&&(m(),t(o.email,o.password))},m=function(){p({email:"",password:"",confirmPassword:""})};return Object(d.jsxs)("section",{className:"register",children:[Object(d.jsx)("p",{className:"register__title",children:"Sign Up"}),Object(d.jsxs)("form",{onSubmit:b,className:"register__form",children:[Object(d.jsx)("label",{htmlFor:"email",className:"register__form-field",children:Object(d.jsx)("input",{id:"email",name:"email",type:"email",value:o.email,onChange:j,placeholder:"Email",className:"register__input"})}),Object(d.jsx)("label",{htmlFor:"password",className:"register__form-field",children:Object(d.jsx)("input",{id:"password",name:"password",type:"password",value:o.password,onChange:j,placeholder:"Password",className:"register__input"})}),Object(d.jsx)("label",{htmlFor:"confirmPassword",className:"register__form-field",children:Object(d.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:o.confirmPassword,onChange:j,placeholder:"Confirm Password",className:"register__input"})}),Object(d.jsx)("button",{type:"submit",onSubmit:b,className:"register__button",children:"Sign up"})]}),Object(d.jsxs)("p",{className:"register__text",children:["Already a member?",Object(d.jsx)(u.b,{to:"signin",className:"register__link",children:"Log in here!"})]})]})},w=function(e){var t=e.onLogin,n=Object(a.useState)({email:"",password:""}),c=Object(i.a)(n,2),s=c[0],o=c[1],l=function(e){var t=e.target,n=t.name,a=t.value;o(Object(r.a)(Object(r.a)({},s),{},Object(g.a)({},n,a)))},p=function(){o({email:"",password:""})};return Object(d.jsxs)("section",{className:"login",children:[Object(d.jsx)("h2",{className:"login__title",children:"Log in"}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),s.email&&s.password&&(p(),t(s.email,s.password))},children:[Object(d.jsx)("label",{htmlFor:"username",className:"login__form-field",children:Object(d.jsx)("input",{className:"login__input",placeholder:"Email",type:"email",name:"email",minLength:2,maxLength:40,required:!0,value:s.email,onChange:l})}),Object(d.jsx)("label",{htmlFor:"password",className:"login__form-field",children:Object(d.jsx)("input",{className:"login__input",placeholder:"Password",type:"password",name:"password",minLength:2,maxLength:10,required:!0,value:s.password,onChange:l})}),Object(d.jsx)("button",{className:"login__button",type:"submit",children:"Log In"})]}),Object(d.jsxs)("p",{className:"login__text",children:["Not a member yet?",Object(d.jsx)(u.b,{to:"/signup",className:"login__link",children:"Sign up here!"})]})]})},q="https://register.nomoreparties.co",P=n(23),L=n(24),R=new(function(){function e(t){var n=t.baseUrl,a=t.headers;t.apiKey;Object(P.a)(this,e),this._baseUrl=n,this._headers=a}return Object(L.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getAppInfo",value:function(){return Promise.all([this.getUserData(),this.getInitialCards()])}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:t,about:n})}).then(this._handleResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then(this._handleResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"}).then(this._handleResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLike(e):this.deleteLike(e)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._handleResponse)}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/".concat("group-10"),headers:{authorization:"6af9648e-23ea-4651-bc48-5ca8b1b3f30e","Content-Type":"application/json"}});var F=function(){var e=Object(l.g)(),t=Object(a.useState)({name:"",about:"",avatar:"data:image/png;base64,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"}),n=Object(i.a)(t,2),c=n[0],s=n[1],u=Object(a.useState)([]),p=Object(i.a)(u,2),h=p[0],g=p[1],N=Object(a.useState)(!1),k=Object(i.a)(N,2),_=k[0],P=k[1],L=Object(a.useState)(!1),F=Object(i.a)(L,2),Z=F[0],T=F[1],Y=Object(a.useState)(!1),V=Object(i.a)(Y,2),X=V[0],D=V[1],J=Object(a.useState)(!1),U=Object(i.a)(J,2),E=U[0],G=U[1],M=Object(a.useState)(!1),I=Object(i.a)(M,2),Q=I[0],z=I[1],H=Object(a.useState)(!1),B=Object(i.a)(H,2),K=B[0],W=B[1],$=Object(a.useState)({}),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ae=function(){P(!1),T(!1),D(!1),G(!1),W(!1),z(!1)},ce=Object(a.useState)(!0),se=Object(i.a)(ce,2),oe=se[0],re=se[1],ie=Object(a.useState)(""),le=Object(i.a)(ie,2),ue=le[0],pe=le[1],de=Object(a.useState)(!1),je=Object(i.a)(de,2),be=je[0],me=je[1];Object(a.useEffect)((function(){he()}),[]);var he=function(){var t=localStorage.getItem("token");t?function(e){return fetch("".concat(q,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))}(t).then((function(t){re(!0),pe(t.data.email),me(!0),z(!0),e.push("/")})).catch((function(e){return console.error(e)})):re(!1)};return Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&ae()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){R.getAppInfo().then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];s(n),g(a)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsxs)(m.Provider,{value:c,children:[Object(d.jsxs)(l.d,{children:[Object(d.jsx)(y,{exact:!0,path:"/",loggedIn:oe,component:O,onEditProfileClick:function(){return P(!0)},onAddPlaceClick:function(){return T(!0)},onEditAvatarClick:function(){return D(!0)},onCardClick:function(e){ne(e),W(!0)},onConfirmDeleteClick:function(){return G(!0)},cards:h,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===c._id}));R.changeLikeCardStatus(e._id,!t).then((function(t){g((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.error(e)}))},onCardDelete:function(e){R.deleteCard(e._id).then((function(){g((function(t){return t.filter((function(t){return t._id!==e._id}))})),ae()})).catch((function(e){return console.error(e)}))},onLogoutClick:function(){localStorage.removeItem("token"),re(!1),pe(""),e.push("/signin")},userEmail:ue}),Object(d.jsxs)(l.b,{path:"/signup",children:[Object(d.jsx)(j,{title:"Sign In",link:"/signin"}),Object(d.jsx)(S,{onRegister:function(t,n){(function(e,t){return fetch("".concat(q,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t,n).then((function(t){t?(me(!0),z(!0),e.push("/signin")):(me(!1),z(!0))})).catch((function(e){console.error(e),z(!0)}))}})]}),Object(d.jsxs)(l.b,{path:"/signin",children:[Object(d.jsx)(j,{title:"Sign Up",link:"/signup"}),Object(d.jsx)(w,{onLogin:function(e,t){(function(e,t){return fetch("".concat(q,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e.token?(localStorage.setItem("token",e.token),e):void 0})).catch((function(e){return console.log(e)}))})(e,t).then((function(e){e||(z(!0),re(!1),me(!1)),he()})).catch((function(e){console.log(e),z(!0),me(!1)}))}})]}),Object(d.jsx)(l.b,{children:oe?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(l.a,{to:"/signin"})})]}),Object(d.jsx)(A,{isOpen:Q,onClose:ae,name:"infoTooltip",success:be}),Object(d.jsx)(x,{isOpen:_,onClose:ae,onUpdateUser:function(e){var t=e.name,n=e.about;R.setUserInfo({name:t,about:n}).then((function(e){s(Object(r.a)({name:t,about:n},e)),ae()})).catch((function(e){return console.error(e)}))}}),Object(d.jsx)(v,{isOpen:X,onClose:ae,onUpdateAvatar:function(e){R.setUserAvatar(e).then((function(t){s(Object(r.a)({avatar:e},t)),ae()})).catch((function(e){return console.error(e)}))}}),Object(d.jsx)(C,{isOpen:Z,onClose:ae,onAddPlace:function(e){var t=e.name,n=e.link;R.addCard({name:t,link:n}).then((function(e){g([e].concat(Object(o.a)(h))),ae()})).catch((function(e){return console.error(e)}))}}),Object(d.jsx)(f,{isOpen:E,onClose:ae,name:"confirm",title:"Are you sure?",buttonText:"Yes"}),Object(d.jsx)(b,{card:te,onClose:ae,isOpen:K,name:"preview"}),Object(d.jsx)(f,{isOpen:E,onClose:ae,name:"confirm",title:"Are you sure?",buttonText:"Yes"})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};n(43);s.a.render(Object(d.jsx)(u.a,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),Z()}},[[44,1,2]]]);
//# sourceMappingURL=main.cc4db539.chunk.js.map