"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[265],{9623:function(e,a,t){t.r(a);var l=t(7294),n=t(9616),m=t(6325),c=t(3723),s=t(8255),r=t(9856),i=t(3639),d=t(994),o=t(7408),E=t(1172),u=t(259),p=t(3182),N=t(2354);a.default=function(e){var a,h=e.pageContext.messages.data;console.error("resume update: ",h);var y=null==h||null===(a=h.work_history)||void 0===a?void 0:a.map((function(e){var a,t;return l.createElement(l.Fragment,null,l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:""}," ",l.createElement("p",null,(0,E.Z)((0,u.Z)(e.start_date,"yyyy-mm-dd"),"MMM, yy","pp")," - ",(0,E.Z)(e.end_date?(0,u.Z)(e.end_date,"yyyy-mm-dd"):new Date,"MMM,yy","pp")," "),console.error("testing: ",(0,p.Z)({start:(0,u.Z)(e.start_date,"yyyy-mm-dd"),end:e.end_date?(0,u.Z)(e.end_date,"yyyy-mm-dd"):new Date})),console.error("formatDuration: ",(0,N.Z)((0,p.Z)({start:(0,u.Z)(e.start_date,"yyyy-mm-dd"),end:e.end_date?(0,u.Z)(e.end_date,"yyyy-mm-dd"):new Date}))),(0,N.Z)((0,p.Z)({start:(0,u.Z)(e.start_date,"yyyy-mm-dd"),end:e.end_date?(0,u.Z)(e.end_date,"yyyy-mm-dd"):new Date}),{format:["years","months"]})),l.createElement("div",{className:"mx-4"},l.createElement("p",{className:"h3"},e.position),l.createElement("p",{className:"h5"},e.company))),l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:"mx-5"}),l.createElement("div",{className:"mx-5"},l.createElement("p",{className:""},e.description))),l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:"mx-5"}),l.createElement("div",{className:"mx-4"},l.createElement("ul",null," ",null==e||null===(a=e.tasks)||void 0===a?void 0:a.map((function(e){return l.createElement("li",null,e)}))))),l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:"mx-5"}),l.createElement("div",{className:""},null===(t=e.achievements)||void 0===t?void 0:t.map((function(e){return l.createElement("p",{className:"px-5"}," ",l.createElement("a",{href:e.url,className:"h5"}," ",null==e?void 0:e.title),"  | ",e.description," ")})))))}));return l.createElement(n.Z,e,l.createElement("div",{style:{paddingLeft:0,paddingRight:0,marginLeft:0,marginRight:0}},l.createElement(i.Z,{fluid:!0,className:"p-0"},l.createElement(d.Z,{style:{marginLeft:0,marginRight:0}},l.createElement(o.Z,{xs:12,className:"p-0 bg-dark text-light"},l.createElement("div",{className:"d-flex align-items-center"},l.createElement("div",{className:"p-3"},l.createElement("span",{className:"mx-5 h2"}," Alexis Orellana "),l.createElement("p",{className:"mx-5 mt-1"}," React Native Developer ")),l.createElement("div",{className:"d-flex align-items-center justify-content-center m-2"},l.createElement(c.S,{src:"../img/norellanac.JPG",alt:"norellanac",placeholder:"blurred",layout:"fixed",width:110,height:110,className:s.X,__imageData:t(1673)}))))),l.createElement(d.Z,null,l.createElement(o.Z,{xs:9,className:"py-2 px-5"},l.createElement("section",{className:"p-0 m-0"},l.createElement("p",null,l.createElement(m.Z,{id:"data.summary",defaultMessage:h.summary}))),l.createElement("section",{className:"p-0 mx-0 mb-3"},l.createElement("span",{className:"h3"},l.createElement(m.Z,{id:"experience",defaultMessage:"experience"})),l.createElement("hr",null),y),l.createElement("section",{className:"p-0 m-0"},l.createElement("span",{className:"h3"},l.createElement(m.Z,{id:"education",defaultMessage:"education"})),l.createElement("hr",null),l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:""},l.createElement("p",null,h.education.start_date),l.createElement("p",null,h.education.end_date)),l.createElement("div",{className:"mx-5"},l.createElement("p",{className:"h3"},h.education.title),l.createElement("p",{className:"h5"},h.education.school))))),l.createElement(o.Z,{xs:3,className:"bg-light"},l.createElement("section",{className:"p-0 m-0"},l.createElement("span",{className:"h3"},l.createElement(m.Z,{id:"contact_info",defaultMessage:"contact_info"})),l.createElement("hr",null),l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:""},l.createElement("a",{href:"tel:+"+h.phone,className:"nav-link m-1"},l.createElement("span",{className:"h5"},"+"+h.phone," ")),l.createElement("a",{href:"mailto:"+h.email,className:"nav-link m-1"},l.createElement("span",{className:""},h.email," ")),h.contact_url.map((function(e){return l.createElement("a",{href:e.url,className:"nav-link m-1"},l.createElement("span",{className:""},e.title," "))}))))),l.createElement("section",{className:"p-0 mx-0 mt-3"},l.createElement("span",{className:"h3"},l.createElement(m.Z,{id:"lenguages",defaultMessage:"lenguages"})),l.createElement("hr",null),l.createElement(r.Z,{direction:"horizontal",gap:3},l.createElement("div",{className:""},h.languages.map((function(e){return l.createElement("p",{className:"h5"},e.language," | ",e.level," ")}))))),l.createElement(l.Fragment,null,l.createElement("section",{className:"pt-5 m-0"},l.createElement("span",{className:"h3"},l.createElement(m.Z,{id:"skills",defaultMessage:"skills"})),l.createElement("hr",null)),h.tech_skills.map((function(e){return l.createElement("section",{className:"py-3 m-0"},l.createElement("span",{className:"h5"},l.createElement(m.Z,{id:e.title,defaultMessage:e.title}),function(e){for(var a="",t=0;t<e;t++)a+="★";return l.createElement("span",null," ",a," ")}(e.stars)),l.createElement(r.Z,{direction:"horizontal",gap:1},l.createElement("div",{className:""},e.tools.map((function(e){return l.createElement("span",{className:"mx-auto"},e," | ")})))))}))))))))}}}]);
//# sourceMappingURL=component---src-pages-print-js-fd959e1e865cedc36318.js.map