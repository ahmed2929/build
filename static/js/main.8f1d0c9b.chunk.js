(this.webpackJsonpprotofolio=this.webpackJsonpprotofolio||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),l=c(42),r=c.n(l),i=(c(51),c(52),c.p+"static/media/pexels-adrien-olichon-2387793.258bf262.jpg"),o=function(){return Object(s.jsxs)("main",{children:[Object(s.jsx)("img",{src:i,alt:"home",className:"absolute object-cover w-full h-full"}),Object(s.jsx)("section",{className:"relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8",children:Object(s.jsx)("h1",{className:"text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name",children:"hello. I'm Ahmed."})})]})},j=c(10),x=c(43),d=c.n(x)()({projectId:"yrhutsqp",dataset:"production",useCdn:!0}),m=c(14),h=c.n(m),b=c.p+"static/media/homeImage.4d0e3d85.jpg",g=h()(d);function u(){var e,t=Object(n.useState)(null),c=Object(j.a)(t,2),a=c[0],l=c[1];return Object(n.useEffect)((function(){d.fetch('*[_type == "author"]{\n          name,\n          "bio": bio[0].children[0].text,\n          "authorImage": image.asset->url\n      }').then((function(e){return l(e[0])})).catch(console.error)}),[]),a?Object(s.jsxs)("main",{className:"relative",children:[Object(s.jsx)("img",{src:b,alt:"Plumeria Flower",className:"absolute w-full"}),Object(s.jsx)("div",{className:"p-10 lg:pt-48 container mx-auto relative",children:Object(s.jsxs)("section",{className:"bg-green-800 rounded-lg shadow-2xl lg:flex p-20",children:[Object(s.jsx)("img",{src:(e=a.authorImage,g.image(e)).url(),className:"rounded w-32 h-32 lg:w-64 lg:h-64 mr-8",alt:"Kapehe"}),Object(s.jsxs)("div",{className:"text-lg flex flex-col justify-center",children:[Object(s.jsxs)("h1",{className:"cursive text-6xl text-green-300 mb-4",children:["Hey there. I'm"," ",Object(s.jsx)("span",{className:"text-green-100",children:a.name})]}),Object(s.jsx)("p",{className:"text-green-200 text-lg",children:a.bio})]})]})})]}):Object(s.jsx)("div",{className:"cursive text-6xl text-green-300 mb-4 justify-center",children:"loading! \ud83d\ude03...."})}var p=c(3),f=c(44),O=c.n(f),y=h()(d);function N(){var e,t=Object(n.useState)(null),c=Object(j.a)(t,2),a=c[0],l=c[1],r=Object(p.f)().id;return Object(n.useEffect)((function(){d.fetch('*[slug.current == "'.concat(r,'"]{\n            title,\n            _id,\n            slug,\n            mainImage{\n                asset->{\n                    _id,\n                    url\n                }\n            },\n            body,\n            "name": author->name,\n            "authorImage": author->image\n        }')).then((function(e){console.log("data is ",e),l(e[0])})).catch(console.error)}),[r]),a?Object(s.jsx)("main",{className:"bg-gray-200 min-h-screen p-12",children:Object(s.jsxs)("article",{className:"container shadow-lg mx-auto bg-green-100 rounded-lg",children:[Object(s.jsxs)("header",{className:"relative",children:[Object(s.jsx)("div",{className:"absolute h-full w-full flex items-center justify-center p-8",children:Object(s.jsxs)("div",{className:"bg-white bg-opacity-75 rounded p-12",children:[Object(s.jsx)("h1",{className:"cursive text-3xl lg:text-6xl mb-4",children:a.title}),Object(s.jsxs)("div",{className:"flex justify-center text-gray-800",children:[Object(s.jsx)("img",{src:(e=a.authorImage,y.image(e)).url(),alt:a.name,className:"w-10 h-10 rounded-full"}),Object(s.jsx)("p",{className:"cursive flex items-center pl-2 text-2xl",children:a.name})]})]})}),Object(s.jsx)("img",{src:a.mainImage.asset.url,alt:a.title,className:"w-full object-cover rounded-t",style:{height:"400px"}})]}),Object(s.jsx)("div",{className:"px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full",children:Object(s.jsx)(O.a,{blocks:a.body,projectId:"yrhutsqp",dataset:"production"})})]})}):Object(s.jsx)("div",{className:"cursive text-6xl text-green-300 mb-4 justify-center",children:"loading! \ud83d\ude03...."})}var v=c(8),w=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){d.fetch('\n            *[_type == "post"]{\n                title,\n                slug,\n                mainImage{\n                    asset->{\n                        _id,\n                        url\n                    },\n                    alt\n                }\n            }\n            \n            ').then((function(e){a(e)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(s.jsxs)("section",{className:"container mx-auto",children:[Object(s.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"Blog Posts Page"}),Object(s.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my page of blog posts"}),Object(s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-1",children:c&&c.map((function(e,t){return Object(s.jsx)("article",{children:Object(s.jsx)(v.b,{to:"/posts/"+e.slug.current,children:Object(s.jsxs)("span",{className:"block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400",children:[Object(s.jsx)("img",{src:e.mainImage.asset.url,alt:e.mainImage.alt,className:"w-full h-full rounded-r object-cover absolute"}),Object(s.jsx)("span",{className:"block relative h-full flex justify-end items-end pr-4 pb-4",children:Object(s.jsx)("h3",{className:"text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded",children:e.title})})]},t)},e.slug.current)})}))})]})})};function I(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){d.fetch('*[_type == "project"]{\n          title,\n          date,\n          place,\n          description,\n          projectType,\n          link,\n          tags\n      }').then((function(e){return a(e)})).catch(console.error)}),[]),Object(s.jsx)("main",{className:"bg-green-100 min-h-screen p-12",children:Object(s.jsxs)("section",{className:"container mx-auto",children:[Object(s.jsx)("h1",{className:"text-5xl flex justify-center cursive",children:"My Projects"}),Object(s.jsx)("h2",{className:"text-lg text-gray-600 flex justify-center mb-12",children:"Welcome to my projects page!"}),Object(s.jsx)("section",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:grid-cols-1 gap-8",children:c&&c.map((function(e,t){return Object(s.jsxs)("article",{className:"relative rounded-3xl shadow-xl bg-white p-3",children:[Object(s.jsx)("div",{}),Object(s.jsx)("h3",{className:"text-gray-800 text-3xl font-bold mb-2 hover:text-red-700",children:Object(s.jsx)("a",{href:e.link,alt:e.title,target:"_blank",rel:"noopener noreferrer",children:e.title})}),Object(s.jsxs)("div",{className:"text-gray-500 text-xs space-x-4",children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{className:"font-bold",children:"Finished on"}),":"," ",new Date(e.date).toLocaleDateString()]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{className:"font-bold",children:"Company"}),":"," ",e.place]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("strong",{className:"font-bold",children:"Type"}),":"," ",e.projectType]}),Object(s.jsx)("p",{className:"my-6 text-lg text-gray-700 leading-relaxed",children:e.description}),Object(s.jsxs)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"text-red-500 font-bold hover:underline hover:text-red-400 text-xl",children:["View The Project"," ",Object(s.jsx)("span",{role:"img","aria-label":"right pointer",children:"\ud83d\udc49"})]})]})]})}))})]})})}var k=c(18),C=function(){return Object(s.jsx)("header",{className:"bg-black ",children:Object(s.jsxs)("div",{className:"container mx-auto flex justify-between ",children:[Object(s.jsxs)("nav",{className:"flex-row md:justify-between",children:[Object(s.jsx)(v.c,{to:"/",exact:!0,activeClassName:"text-gray-400",className:"inflex-flex items-center py-6 px-3 mr-4 text-gray-50 hover:text-gray-400 text-4xl font-bold cursive tracking-widest",children:"Home"}),Object(s.jsx)(v.c,{to:"/about",className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-50 hover:text-gray-400",activeClassName:"text-gray-400",children:"About"}),Object(s.jsx)(v.c,{to:"/posts",exact:!0,className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-50 hover:text-gray-400",activeClassName:"text-gray-400",children:"Blog posts"}),Object(s.jsx)(v.c,{to:"/project",className:"inline-flex items-center py-3 px-3 my-6 rounded text-gray-50 hover:text-gray-400",activeClassName:"text-gray-400",children:"Projects"})]}),Object(s.jsxs)("div",{className:"inline-flex py-3 px-3 my-6",children:[Object(s.jsx)(k.SocialIcon,{url:"https://twitter.com/AKahmed_khaled",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(k.SocialIcon,{url:"https://www.linkedin.com/in/ahmed-khaled-9702a8154/",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}}),Object(s.jsx)(k.SocialIcon,{url:"https://github.com/ahmed2929",className:"mr-4",target:"_blank",fgColor:"#fff",style:{height:35,width:35}})]})]})})};var _=function(){return Object(s.jsxs)(v.a,{children:[Object(s.jsx)(C,{}),Object(s.jsxs)(p.c,{children:[Object(s.jsx)(p.a,{component:o,path:"/",exact:!0}),Object(s.jsx)(p.a,{component:u,path:"/about"}),Object(s.jsx)(p.a,{component:N,path:"/posts/:id"}),Object(s.jsx)(p.a,{component:w,path:"/posts"}),Object(s.jsx)(p.a,{component:I,path:"/Project"})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root")),S()},51:function(e,t,c){},52:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.8f1d0c9b.chunk.js.map