"use strict";(self.webpackChunkreact_modele=self.webpackChunkreact_modele||[]).push([[179],{7886:(e,s,t)=>{var i=t(3935),a=t(9704),n=t(2825),r=t(7294);t(2526),t(1817);const l=t.p+"images/d17d7016121a6b0f853c7118fb6a9161.jpeg",c=t.p+"images/7e14c87fa02003a707a772ab9ccbd627.png";var d=t(7811),o=t(245),u=t(5893);const h=function(e){return(0,u.jsxs)("div",{className:"card",children:[(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)("div",{className:"profile",children:(0,u.jsx)("a",{href:"#",alt:"avatar",children:(0,u.jsx)("img",{className:"avatar",src:c})})}),(0,u.jsxs)("div",{className:"card-title-group",children:[(0,u.jsx)("a",{href:"#",alt:"card-tittle",children:(0,u.jsx)("h5",{className:"card-title",children:e.title})}),(0,u.jsx)("div",{className:"card-date",children:e.date})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("a",{href:"#",alt:"card-image",children:(0,u.jsx)("img",{className:"card-image",src:l,alt:"Logo"})}),(0,u.jsxs)("div",{className:"card-like",children:[(0,u.jsx)(d.Z,{className:" card-like-icon"}),(0,u.jsx)(o.Z,{className:" card-like-icon"})]}),(0,u.jsx)("div",{className:"card-text",children:e.description}),(0,u.jsx)("div",{className:"divButton",children:(0,u.jsx)("button",{type:"button",className:"buttons-ripples",children:"View Details"})})]})]})};const j=function(){var e="Jhon,",s="Randonnée nocturne à Wanaka",t="9 janvier 2021",i="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores vel illo porro necessitatibus tenetur, facilis nam...",a=193,n=!0;return(0,u.jsx)("main",{children:(0,u.jsx)("div",{className:"slider",children:(0,u.jsxs)("div",{className:"cards",children:[(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:"Les plus populaires"})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a})]}),(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:"proches de vous"})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a})]}),(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:"proches de  vous"})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:n,likeCount:a})]})]})})})},x=t.p+"images/298b930a90b909717105c26b8e4af960.jpg";t(1249);const p=function(e){var s=e.choice,t=(0,a.v9)((function(e){return e.selectedCategory})),i=(0,a.I0)();return(0,u.jsx)("select",{name:"searchBar--category",className:"searchBar--select",value:t,onChange:function(e){console.log(e.target.value),i({type:"CHANGE_SELECT",category:e.target.value})},children:s.map((function(e){return(0,u.jsx)("option",{value:e.option,className:"searchBar--option",children:e.option},e.id)}))})};const m=function(e){var s=e.className,t=(0,a.v9)((function(e){return e.cityInProgress})),i=(0,a.I0)();return(0,u.jsx)("input",{name:"searchBar--search",className:s,placeholder:"Ville",onChange:function(e){i({type:"CHANGE_MESSAGE",city:e.target.value})},value:t})};const v=function(){var e=(0,a.v9)((function(e){return e.burgerSearch})),s=(0,a.v9)((function(e){return e.categories})),t=(0,a.I0)();return(0,u.jsxs)("div",{className:"banniere",style:{backgroundImage:"url(".concat(x,")")},children:[(0,u.jsxs)("div",{className:"banniere--searchBar",children:[(0,u.jsx)(m,{className:"searchBar--input"}),(0,u.jsx)(p,{choice:s}),(0,u.jsx)("button",{className:"searchBar--buttonSubmitGO",onClick:function(){console.log("handleSubmit SearchBar OK")},children:"GO !"})]}),(0,u.jsx)("button",{className:"searchBar--buttonSubmitMobile",onClick:function(){t({type:"BURGER_SEARCH"})},children:"Search"}),e&&(0,u.jsxs)("div",{className:"searchBar--hidden",children:[(0,u.jsx)(m,{className:"searchBar--input--hidden"}),(0,u.jsx)(p,{choice:s})]})]})};var N=function(){return(0,u.jsxs)("div",{className:"home",children:[(0,u.jsx)(v,{}),(0,u.jsx)(j,{})]})};N.propTypes={};const f=N;const g=function(){var e=(0,a.v9)((function(e){return e.burgerOpen})),s=(0,a.I0)();return(0,u.jsxs)("nav",{className:"NavbarItems",children:[(0,u.jsxs)("h1",{className:"navbar-logo",children:["Travel Mate ",(0,u.jsx)("i",{className:"fas fa-globe-africa"})]}),(0,u.jsx)("div",{className:"menu-icon",onClick:function(){s({type:"BURGEN_OPEN"})},children:(0,u.jsx)("i",{className:e?"fas fa-times":"fas fa-bars"})}),(0,u.jsxs)("ul",{className:e?"nav-menu active":"nav-menu",children:[(0,u.jsx)("li",{children:(0,u.jsx)(n.OL,{className:"nav-links",to:"/home",exact:!0,children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.OL,{className:"nav-links",to:"/events",children:"Event"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.OL,{className:"nav-links",to:"/categories",children:"Categories"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.OL,{className:"nav-links",to:"/about-us",children:"About Us"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.OL,{className:"nav-links",to:"/registration",children:"Sign Up"})})]})]})};var b=t(4749);const k=function(){var e="Jhon,",s="Randonnée nocturne à Wanaka",t="9 janvier 2021",i="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores vel illo porro necessitatibus tenetur, facilis nam...",n=193,r=!0,l=(0,a.v9)((function(e){return e.categories}));return(0,u.jsx)("main",{children:(0,u.jsx)("div",{className:"slider",children:(0,u.jsxs)("div",{className:"cards",children:[(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:l[0].option})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n})]}),(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:l[1].option})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n})]}),(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:l[2].option})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n})]}),(0,u.jsx)("div",{className:"event",children:(0,u.jsx)("a",{href:"#",children:(0,u.jsx)("h1",{className:"event-tittle",children:l[3].option})})}),(0,u.jsxs)("div",{className:"card-header",children:[(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n}),(0,u.jsx)(h,{author:e,title:s,date:t,description:i,liked:r,likeCount:n})]})]})})})};const C=function(){return(0,u.jsx)("h1",{children:"Coucou depuis Events"})};const y=function(){return(0,r.useEffect)((function(){document.title="Registration Form"}),[]),(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("div",{className:"title",children:"Registration Form"}),(0,u.jsxs)("div",{className:"form",children:[(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"First Name"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Last Name"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Pseudo"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Password"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Password"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Confirm Password"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Gender"}),(0,u.jsx)("div",{className:"gender-select",children:(0,u.jsxs)("select",{children:[(0,u.jsx)("option",{value:"",children:"Select"}),(0,u.jsx)("option",{value:"male",children:"Male"}),(0,u.jsx)("option",{value:"female",children:"Female"}),(0,u.jsx)("option",{value:"gender-fluid",children:"Gender Fluid"})]})})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Email Adress"}),(0,u.jsx)("input",{type:"text",className:"input"})]}),(0,u.jsxs)("div",{className:"input-field",children:[(0,u.jsx)("label",{children:"Description"}),(0,u.jsx)("textarea",{type:"text",className:"input",children:" "})]}),(0,u.jsx)("button",{type:"button",className:"button",children:"Register"})]})]})};const O=function(){return(0,r.useEffect)((function(){document.title="Vous etes perdu"}),[]),(0,u.jsxs)("div",{className:"not-found",children:[(0,u.jsx)("h1",{children:"Page non trouvée"}),(0,u.jsx)("p",{children:"Désolé cette page n'existe pas"}),(0,u.jsx)("p",{children:(0,u.jsx)(n.rU,{className:"not-found-link",to:"/",children:"Retourner à l'accueil"})})]})};const E=function(){return(0,u.jsxs)("div",{className:"footer--separateur",children:[(0,u.jsx)("hr",{}),(0,u.jsxs)("div",{className:"footer",children:[(0,u.jsx)("p",{children:"Contact"}),(0,u.jsx)("p",{children:"Plan du site"}),(0,u.jsx)("p",{children:"Mentions légales"})]})]})};const S=function(){return(0,u.jsxs)("div",{className:"app",children:[(0,u.jsx)(g,{}),(0,u.jsxs)(b.rs,{children:[(0,u.jsx)(b.AW,{path:"/home",children:(0,u.jsx)(f,{})}),(0,u.jsxs)(b.AW,{path:"/",exact:!0,children:[(0,u.jsx)(v,{}),(0,u.jsx)(j,{})]}),(0,u.jsx)(b.AW,{path:"/categories",children:(0,u.jsx)(k,{})}),(0,u.jsx)(b.AW,{path:"/events",children:(0,u.jsx)(C,{})}),(0,u.jsx)(b.AW,{path:"/registration",children:(0,u.jsx)(y,{})}),(0,u.jsx)(b.AW,{children:(0,u.jsx)(O,{})})]}),(0,u.jsx)(E,{})]})};var _=t(4890);t(9070),t(7941),t(7327),t(5003),t(9554),t(4747),t(9337),t(3321);function P(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,i)}return t}function w(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?P(Object(t),!0).forEach((function(s){R(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function R(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}var B={burgerSearch:!1,categories:[{option:"Sport",id:1},{option:"Culturel",id:2},{option:"Restaurant",id:3},{option:"Festifs",id:4},{option:"Rencontres",id:5},{option:"Nature",id:6},{option:"Entraide",id:7}],cityInProgress:"",selectedCategory:""};const A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(s.type){case"BURGEN_OPEN":return w(w({},e),{},{burgerOpen:!e.burgerOpen});case"BURGER_SEARCH":return w(w({},e),{},{burgerSearch:!e.burgerSearch});case"CHANGE_MESSAGE":return w(w({},e),{},{cityInProgress:s.city});case"CHANGE_SELECT":return w(w({},e),{},{selectedCategory:s.category});default:return e}};const G=(0,_.MT)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var L=(0,u.jsx)(a.zt,{store:G,children:(0,u.jsx)(n.VK,{children:(0,u.jsx)(S,{})})}),I=document.getElementById("root");(0,i.render)(L,I)},9193:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[238],(()=>(s(9193),s(7886))));e.O()}]);