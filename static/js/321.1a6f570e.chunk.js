"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[321],{1291:function(n,e,t){t.d(e,{M:function(){return g}});var r,o,i,u,c=t(501),s=t(6871),a=t(414),l=t(168),f=t(6444),h=f.ZP.main(r||(r=(0,l.Z)(["\n    height: 100%;\n    margin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),d=f.ZP.ul(o||(o=(0,l.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: ","px;\n"])),(function(n){return n.theme.space[5]})),p=f.ZP.div(i||(i=(0,l.Z)(["\n    text-align: center;\n    transition: ",";\n    &:hover {\n        transform: ",";\n    }\n"])),(function(n){return n.theme.transition.cubicBezier}),(function(n){return n.theme.transform.scaleFirst})),m=f.ZP.p(u||(u=(0,l.Z)(["\n    padding-top: ","px;\n    font-weight: ",";\n    font-size: ",";\n    color: ",";\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.reallyBisque})),x=t(184),g=function(n){var e=n.data,t=(0,s.TH)();return(0,x.jsx)(h,{children:(0,x.jsx)(d,{children:e.map((function(n){var e=n.id,r=n.title,o=n.poster_path,i=(0,a.Yp)("poster",o);return(0,x.jsx)("li",{children:(0,x.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,x.jsxs)(p,{children:[(0,x.jsx)("img",{src:i,alt:r}),(0,x.jsx)(m,{children:r})]})})},e)}))})})}},5729:function(n,e,t){t.d(e,{Cx:function(){return c},_N:function(){return s},hK:function(){return i},m0:function(){return u}});var r=t(8174),o=(t(5462),{theme:"colored"}),i=function(){return r.Am.info("It looks like you want to find nothing, please check your query \ud83d\ude15",o)},u=function(){return r.Am.info("It looks like there are already movies found for your request, please check if this will be a new search \ud83e\udd14",o)},c=function(){return r.Am.warn("Sorry, nothing was found for your request, try something else \ud83d\ude48",o)},s=function(){return r.Am.error("Oops, something went wrong, please try again \ud83d\ude4a",o)}},5321:function(n,e,t){t.r(e),t.d(e,{Movies:function(){return k}});var r,o,i,u,c=t(1413),s=t(2982),a=t(885),l=t(2791),f=t(501),h=t(414),d=t(1291),p=t(168),m=t(6444),x=m.ZP.section(r||(r=(0,p.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: ","px;\n    padding-top: ","px;\n    padding-right: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]})),g=m.ZP.form(o||(o=(0,p.Z)(["\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    width: 100%;\n    max-width: 600px;\n    background-color: ",";\n    border: ",";\n    border-radius: ",";\n"])),(function(n){return n.theme.colors.reallyBisque}),(function(n){return"".concat(n.theme.borders.normal," ").concat(n.theme.colors.cherryRed)}),(function(n){return n.theme.radii.sm})),v=m.ZP.button(i||(i=(0,p.Z)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    opacity: 0.6;\n    transition: ",";\n    cursor: pointer;\n    outline: none;\n    background-color: ",";\n    &:hover {\n        opacity: 1;\n    }\n"])),(function(n){return n.theme.transition.cubicBezier}),(function(n){return n.theme.colors.tastyCoffe})),w=m.ZP.input(u||(u=(0,p.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: ",";\n    border: none;\n    outline: none;\n    padding-left: ","px;\n    padding-right: ","px;\n    background-color: ",";\n    &::placeholder {\n        font: inherit;\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.reallyBisque}),(function(n){return n.theme.fontSizes.m})),y=t(5729),Z=t(8402),b=t(2498),j=t(2121),_=t(184),k=function(){var n,e=(0,l.useState)(""),t=(0,a.Z)(e,2),r=t[0],o=t[1],i=(0,l.useState)([]),u=(0,a.Z)(i,2),p=u[0],m=u[1],k=(0,l.useState)(!1),z=(0,a.Z)(k,2),S=z[0],q=z[1],C=(0,l.useState)(!1),P=(0,a.Z)(C,2),B=P[0],M=P[1],A=(0,f.lr)(),I=(0,a.Z)(A,2),F=I[0],H=I[1],K=null!==(n=F.get("query"))&&void 0!==n?n:"";return(0,l.useEffect)((function(){if(K){q(!0);try{(0,h.gH)(K).then((function(n){var e=n.total_results,t=n.results;if(0===e)return(0,y.Cx)(),q(!1),void M(!0);var r=t.map((function(n){return{id:n.id,poster_path:n.poster_path,title:n.title,vote_average:n.vote_average,overview:n.overview,genres:n.genres,release_date:n.release_date}}));m((0,s.Z)(r)),q(!1),M(!1)})).finally((function(){q(!1)}))}catch(B){(0,y._N)()}}}),[K]),(0,_.jsxs)("main",{style:{flexGrow:"1"},children:[(0,_.jsxs)(x,{children:[(0,_.jsxs)(g,{onSubmit:function(n){return n.preventDefault(),""===r.trim()?(0,y.hK)():r===K.trim()?(0,y.m0)():(m([]),H(""!==r?{query:r}:{}),void o(""))},children:[(0,_.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",name:"text",value:r,onChange:function(n){return o(n.currentTarget.value)}}),(0,_.jsx)(v,{type:"submit",children:(0,_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",fill:"currentColor",viewBox:"0 0 32 32",children:(0,_.jsx)("path",{d:"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"})})})]}),S&&(0,_.jsx)(Z.ko,(0,c.Z)({},h.Y_))]}),null!==p&&(0,_.jsx)(d.M,{data:p}),B&&(0,_.jsx)(b.j,{errorImg:j})]})}}}]);
//# sourceMappingURL=321.1a6f570e.chunk.js.map