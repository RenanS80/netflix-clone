(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(7),c=n.n(s),i=n(3),o=n.n(i),l=n(4),u=n(5),d=(n(21),"96b1128d8054f935381ec276aba5c6bf"),j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/discover/tv?with_network=213&language=pt-BR&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais da Netflix",items:e.t0},e.next=6,j("/trending/all/week?language=pt-BR&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,j("/movie/top_rated?language=pt-BR&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"top rated",title:"Em Alta",items:e.t4},e.next=14,j("/discover/movie?with_genres=28&language=pt-BR&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,j("/discover/movie?with_genres=35&language=pt-BR&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,j("/discover/movie?with_genres=27&language=pt-BR&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,j("/discover/movie?with_genres=10749&language=pt-BR&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,j("/discover/movie?with_genres=99&language=pt-BR&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rios",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,j("/movie/".concat(t,"?language=pt-BR&api_key=").concat(d));case 7:return r=e.sent,e.abrupt("break",15);case 9:return e.next=11,j("/tv/".concat(t,"?language=pt-BR&api_key=").concat(d));case 11:return r=e.sent,e.abrupt("break",15);case 13:return r=null,e.abrupt("break",15);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=(n(22),n(1));var h=function(e){var t=e.black;return Object(b.jsxs)("header",{className:t?"black-background":"",children:[Object(b.jsx)("div",{className:"header-logo",children:Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{src:"https://ik.imagekit.io/zqxyh6u3ylz/Netflix/netflix-logo_ske-ZD_gL.png?updatedAt=1630868412855",alt:"Netflix"})})}),Object(b.jsx)("div",{className:"header-user",children:Object(b.jsx)("a",{href:"/",children:Object(b.jsx)("img",{src:"https://ik.imagekit.io/zqxyh6u3ylz/Netflix/user_oTNp1qKbf.png?updatedAt=1630868606216",alt:"Usu\xe1rio"})})})]})};n(24);var f=function(e){var t=e.item,n=new Date(t.first_air_date),r=[];for(var a in t.genres)r.push(t.genres[a].name);var s=t.overview;return s.length>200&&(s=s.substring(0,200)+"..."),Object(b.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(b.jsx)("div",{className:"featured-horizontal-effect",children:Object(b.jsxs)("div",{className:"featured-vertical-effect",children:[Object(b.jsx)("div",{className:"featured-name",children:t.original_name}),Object(b.jsxs)("div",{className:"featured-info",children:[Object(b.jsxs)("div",{className:"featured-points",children:["Nota ",t.vote_average]}),Object(b.jsx)("div",{className:"featured-year",children:n.getFullYear()}),Object(b.jsxs)("div",{className:"featured-seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]}),Object(b.jsx)("div",{className:"featured-description",children:s}),Object(b.jsxs)("div",{className:"featured-buttons",children:[Object(b.jsx)("a",{href:"/watch/".concat(t.id),className:"watch-button",children:"\u25ba Assistir"}),Object(b.jsx)("a",{href:"/list/add/".concat(t.id),className:"mylist-button",children:"+ Minha Lista"})]}),Object(b.jsxs)("div",{className:"featured-genres",children:[Object(b.jsx)("strong",{children:"G\xeaneros:"})," ",r.join(", ")]})]})]})})})},g=(n(25),n(12)),v=n.n(g),p=n(14),x=n.n(p),O=function(e){var t=e.title,n=e.items,a=Object(r.useState)(0),s=Object(u.a)(a,2),c=s[0],i=s[1];return Object(b.jsxs)("div",{className:"movieRow",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"movieRow-left",onClick:function(){var e=c+Math.round(window.innerWidth/2);e>0&&(e=0),i(e)},children:Object(b.jsx)(v.a,{style:{fontSize:50}})}),Object(b.jsx)("div",{className:"movieRow-right",onClick:function(){var e=c-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),i(e)},children:Object(b.jsx)(x.a,{style:{fontSize:50}})}),Object(b.jsx)("div",{className:"movieRow-listarea",children:Object(b.jsx)("div",{className:"movieRow-list",style:{marginLeft:c,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(b.jsx)("div",{className:"movieRow-item",children:Object(b.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.original_title})},t)}))})})]})};n(31);var w=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsxs)("p",{children:["Direitos de imagem para",Object(b.jsx)("a",{href:"https://www.netflix.com/br/",target:"_new",children:" Netflix"})]}),Object(b.jsx)("p",{children:"Dados obtidos de themoviedb.org"})]})};var k=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),c=Object(u.a)(s,2),i=c[0],d=c[1],j=Object(r.useState)(!1),g=Object(u.a)(j,2),v=g[0],p=g[1];return Object(r.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getHomeList();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,m.getMovieInfo(s.id,"tv");case 9:c=e.sent,d(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){var e=function(){window.scrollY>10?p(!0):p(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)(h,{black:v}),i&&Object(b.jsx)(f,{item:i}),Object(b.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(b.jsx)(O,{title:e.title,items:e.items},t)}))}),Object(b.jsx)(w,{}),n.length<=0&&Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("svg",{children:Object(b.jsx)("circle",{cx:"70",cy:"70",r:"70"})})})]})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.bcfc5274.chunk.js.map