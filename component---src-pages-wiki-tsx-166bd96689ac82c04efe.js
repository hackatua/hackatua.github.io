"use strict";(self.webpackChunkhackatua_github_io=self.webpackChunkhackatua_github_io||[]).push([[963],{3351:function(t,e,n){n.d(e,{D:function(){return u}});var i=n(7294),o=n(5444),r=n(9),l=r.default.div.withConfig({displayName:"WikiBreadcrumbstyled__StyledWikiBreadcrumb",componentId:"sc-1yw5e71-0"})(["color:",";"],(function(t){return t.theme.colors.inchworm})),a=(0,r.default)(o.rU).withConfig({displayName:"WikiBreadcrumbstyled__StyledWikiBreadcrumbLink",componentId:"sc-1yw5e71-1"})(["text-decoration:underline;transition:text-shadow 0.15s ease-out;&:hover{text-shadow:0 0 2px ",",0 0 4px ",";}"],(function(t){return t.theme.colors.inchworm}),(function(t){return t.theme.colors.inchworm})),c=r.default.span.withConfig({displayName:"WikiBreadcrumbstyled__StyledWikiBreadcrumbActive",componentId:"sc-1yw5e71-2"})(["text-shadow:0 0 4px ",";"],(function(t){return t.theme.colors.inchworm})),u=function(t){var e=t.slug.split("/").filter(Boolean).map((function(t,e,n){return{title:t,path:"/"+n.slice(0,e+1).join("/")+"/"}}));return i.createElement(l,null,i.createElement(a,{to:"/"},"~"),e.map((function(t,n){var o=t.title,r=t.path;return i.createElement(i.Fragment,{key:n},n<e.length?" / ":"",n<e.length-1?i.createElement(a,{to:r},o):i.createElement(c,null,o))})))}},2345:function(t,e,n){n.d(e,{G:function(){return i}});var i=n(9).default.h1.withConfig({displayName:"WikiTitlestyled__WikiTitle",componentId:"sc-xhcs57-0"})(["color:#b5e853;margin:20px 0 10px;font-size:2em;"])},7898:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var i=n(7294),o=n(5444),r=n(9),l=n(2390),a=r.default.div.withConfig({displayName:"WikiContentstyles__StyledWikiContent",componentId:"sc-1vrhvyn-0"})(["padding:20px;margin-top:10px;background:rgba(0,0,0,0.3);border:1px dashed ","70;border-radius:15px;"],(function(t){return t.theme.colors.inchworm})),c=r.default.h2.withConfig({displayName:"WikiContentstyles__StyledWikiContentTitle",componentId:"sc-1vrhvyn-1"})(["margin-bottom:10px;color:",";font-size:24px;"],(function(t){return t.theme.colors.inchworm})),u=r.default.ul.withConfig({displayName:"WikiContentstyles__StyledWikiContentBlock",componentId:"sc-1vrhvyn-2"})(["list-style-type:disc;padding-inline-start:40px;& &{padding-inline-start:20px;}"]),A=r.default.li.withConfig({displayName:"WikiContentstyles__StyledWikiContentItem",componentId:"sc-1vrhvyn-3"})(["margin:10px 0;font-size:18px;line-height:30px;list-style-image:url(",");"],l.Z),d=(0,r.default)(o.rU).withConfig({displayName:"WikiContentstyles__StyledWikiContentLink",componentId:"sc-1vrhvyn-4"})(["color:",";text-decoration:underline;transition:text-shadow 0.15s ease-out;&:hover{text-shadow:0 0 2px ",",0 0 4px ",";}"],(function(t){return t.theme.colors.inchworm}),(function(t){return t.theme.colors.inchworm}),(function(t){return t.theme.colors.inchworm})),s=function t(e){var n=e.contentNode,o=n.path,r=n.title,l=n.nodes;return i.createElement(A,null,i.createElement(d,{to:o},r),l.length>0&&i.createElement(u,null,l.map((function(e){return i.createElement(t,{contentNode:e,key:e.path})}))))},m=function(t){var e=t.content;return e.length?i.createElement(a,null,i.createElement(c,null,"Content"),i.createElement(u,null,e.map((function(t){return i.createElement(s,{contentNode:t,key:t.path})})))):null},h=n(2345),f=n(3351),p=function(t){var e,n,o=t.data,r=t.path,l=(e=o.allMarkdownRemark.nodes,n=[],e.forEach((function(t){var e;t.fields.slug.split("/").filter(Boolean).slice(1).forEach((function(i,o,r){var l=0===o?n:e.nodes,a=l.find((function(t){return t.path===y(r,o)}));if(a)e=a;else{var c={path:y(r,o),title:i,nodes:[]};l.push(c),e=c}o===r.length-1&&(e.title=t.frontmatter.title||i)}))})),n);return i.createElement(i.Fragment,null,i.createElement(f.D,{slug:r}),i.createElement(h.G,null,"Hackatua's Wiki"),i.createElement("p",null,"Welcome to Hackatua Wiki Page!"),i.createElement(m,{content:l}))};function y(t,e){return"/wiki/"+t.slice(0,e+1).join("/")+"/"}},2390:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAKEAYAAAD++UIrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAAB3RJTUUH4QEFFQUT+FZvBQAAAUtJREFUOMu1lL1qAkEURmdXGxtLCQRBsbMSa7ERBAmkyIKFoGLjC9nqgtqIkBTBBV/AwtJOH2BhtVOxUsHi7A1ZSDb+ZG5zmJ2d75t7Z+YajuN5lpVOK6WUUp0O7HbhZPLy+vT8/nE6qTvD+fRc602fvkECySTD1QrGYnC9hoMBtG0Ml8vbEtCnb6iIiihDjOJxPlersNmEhUJw2WwGez04HmN8OIQn8v/6XwmEG2cyjBoNWK9DuRr7PRyNxBjD+fy6E7pf/88EfjY0/BXFImy1gsamCXM5jBYLXfrm9Vv/HtksrFRgqRQUdl243erW//UEqEQiwahWC1Ygn4fHo/+3A6W7TKdU/nwOr/Tj+n4XikaZsCwod7FchjIv3cG2Yb+P0GYTvlF9+v7CVArKI5HXPhxCeTTSHW4Nffp+ArsdbLfFCEF5/Y+GPv0LjpjmIv4L+ZoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDEtMDVUMjE6MDU6MTkrMDE6MDCJRMiFAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTAxLTA1VDIxOjA1OjE5KzAxOjAw+BlwOQAAAAh0RVh0bGFiZWwAPj6zNXeIAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-wiki-tsx-166bd96689ac82c04efe.js.map