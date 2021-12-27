"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{7606:function(e,t,a){a.d(t,{G:function(){return E}});var l=a(4694),r=a(5697),n=a.n(r),c=a(7294);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function p(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,l=t.indexOf(":"),r=f(t.slice(0,l)),n=t.slice(l+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=n:e[r]=n,e}),{})}var b=!1;try{b=!0}catch(y){}function u(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:l.parse.icon?l.parse.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?i({},e,t):{}}function E(e){var t=e.forwardedRef,a=A(e,["forwardedRef"]),r=a.icon,n=a.mask,c=a.symbol,s=a.className,o=a.title,f=a.titleId,p=u(r),y=g("classes",[].concat(d(function(e){var t,a=e.spin,l=e.pulse,r=e.fixedWidth,n=e.inverse,c=e.border,s=e.listItem,o=e.flip,m=e.size,A=e.rotation,d=e.pull,f=(i(t={"fa-spin":a,"fa-pulse":l,"fa-fw":r,"fa-inverse":n,"fa-border":c,"fa-li":s,"fa-flip-horizontal":"horizontal"===o||"both"===o,"fa-flip-vertical":"vertical"===o||"both"===o},"fa-".concat(m),null!=m),i(t,"fa-rotate-".concat(A),null!=A&&0!==A),i(t,"fa-pull-".concat(d),null!=d),i(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(a)),d(s.split(" ")))),x=g("transform","string"==typeof a.transform?l.parse.transform(a.transform):a.transform),w=g("mask",u(n)),N=(0,l.icon)(p,m({},y,{},x,{},w,{symbol:c,title:o,titleId:f}));if(!N)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var v=N.abstract,k={ref:t};return Object.keys(a).forEach((function(e){E.defaultProps.hasOwnProperty(e)||(k[e]=a[e])})),h(v[0],k)}E.displayName="FontAwesomeIcon",E.propTypes={border:n().bool,className:n().string,mask:n().oneOfType([n().object,n().array,n().string]),fixedWidth:n().bool,inverse:n().bool,flip:n().oneOf(["horizontal","vertical","both"]),icon:n().oneOfType([n().object,n().array,n().string]),listItem:n().bool,pull:n().oneOf(["right","left"]),pulse:n().bool,rotation:n().oneOf([0,90,180,270]),size:n().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:n().bool,symbol:n().oneOfType([n().bool,n().string]),title:n().string,transform:n().oneOfType([n().string,n().object]),swapOpacity:n().bool},E.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var h=function e(t,a){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),n=Object.keys(a.attributes||{}).reduce((function(e,t){var l=a.attributes[t];switch(t){case"class":e.attrs.className=l,delete a.attributes.class;break;case"style":e.attrs.style=p(l);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=l:e.attrs[f(t)]=l}return e}),{attrs:{}}),c=l.style,s=void 0===c?{}:c,i=A(l,["style"]);return n.attrs.style=m({},n.attrs.style,{},s),t.apply(void 0,[a.tag,m({},n.attrs,{},i)].concat(d(r)))}.bind(null,c.createElement)},1247:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(7294),r=a(6325),n=(a(4381),a(6125)),c=a(8553),s=a(7606),i=a(7190),o=a(5444),m=a(4397),A=a(6187),d=a(7784),f=a(7542),p=a(1958),b=a(994),u=a(7408),g=a.p+"static/norellanac-resume-f698c51a17658e0239470bb62ccd3fbb.pdf",E=a.p+"static/norellanac-hoja-de-vida-9df4761b57a11a392dd28cdcfd88d6ce.pdf";var h=function(e){console.warn("lenguage: ",e);var t=(0,o.K2)("3159585216");return l.createElement(c.Z,e,l.createElement("title",null,t.site.siteMetadata.title),l.createElement("div",null,l.createElement(m.Z,{bg:"dark",variant:"dark",expand:!1,fixed:"top"},l.createElement(A.Z,{fluid:!0},l.createElement(m.Z.Brand,{href:"#"},l.createElement("span",{className:"text-light"},"norellanac")),l.createElement(m.Z.Toggle,{"aria-controls":"offcanvasNavbar",className:"text-light"}),l.createElement(m.Z.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end"},l.createElement(d.Z.Header,{closeButton:!0},l.createElement(d.Z.Title,{id:"offcanvasNavbarLabel"},"norellanac")),l.createElement(d.Z.Body,null,l.createElement(f.Z,{className:"justify-content-end flex-grow-1 pe-3"},l.createElement(o.rU,{className:"nav-link",to:e.location.href+"resume/"},l.createElement(r.Z,{id:"resume",defaultMessage:"Resume"})),l.createElement(p.Z,{title:"Lenguage",id:"offcanvasNavbarDropdown"},l.createElement(o.rU,{className:"pl-4 dropdown-item nav-link ",to:"/"},"English (Default)"),l.createElement(o.rU,{className:"pl-4 dropdown-item nav-link",to:"/es/"},"Español")),l.createElement(p.Z,{title:"Dowload Resume",id:"offcanvasNavbarDropdown"},l.createElement("a",{className:"pl-4 dropdown-item nav-link ",href:g,target:"_blank"},"Dowload | English (Default)"),l.createElement("a",{className:"pl-4 dropdown-item nav-link",href:E,target:"_blank"},"Descargar en Español")))))))),l.createElement("section",{className:"ftco-section ftco-counter bg-light img pt-3 mt-5",id:"section-counter"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center mb-1"},l.createElement("div",{className:"col-md-10 text-center heading-section ftco-animate"},l.createElement("h2",{className:"mb-4"},l.createElement(r.Z,{id:"projects_title",defaultMessage:"projects_title"})))),l.createElement(b.Z,{className:"justify-content-center"},l.createElement(u.Z,{xs:12,md:3,className:"mt-3 d-flex justify-content-center counter-wrap ftco-animate"},l.createElement("div",{className:"block-18 text-center"},l.createElement("div",{className:"text"},l.createElement("h4",{className:"number text-primary","data-number":"36"},"+35"),l.createElement("h5",{className:"text-secondary"},l.createElement(r.Z,{id:"github_experience",defaultMessage:"github_experience"}))))),l.createElement(u.Z,{xs:12,md:3,className:"mt-3 d-flex justify-content-center counter-wrap ftco-animate"},l.createElement("div",{className:"block-18 text-center"},l.createElement("div",{className:"text"},l.createElement("h4",{className:"number text-primary","data-number":"5"},"+5"),l.createElement("h5",{className:"text-secondary"},l.createElement(r.Z,{id:"years_experience",defaultMessage:"years_experience"}))))),l.createElement(u.Z,{xs:12,md:3,className:"mt-3 d-flex justify-content-center counter-wrap ftco-animate"},l.createElement("div",{className:"block-18 text-center"},l.createElement("div",{className:"text"},l.createElement("h4",{className:"number text-primary","data-number":"10"},"+10"),l.createElement("h5",{className:"text-secondary"},l.createElement(r.Z,{id:"managed_projects",defaultMessage:"managed_projects"}))))),l.createElement(u.Z,{xs:12,md:3,className:"mt-3 d-flex justify-content-center counter-wrap ftco-animate"},l.createElement("div",{className:"block-18 text-center"},l.createElement("div",{className:"text"},l.createElement("h4",{className:"number text-primary","data-number":"2"},"2"),l.createElement("h5",{className:"text-secondary"},l.createElement(r.Z,{id:"mobile_apps",defaultMessage:"mobile_apps"})))))))),l.createElement("section",{className:"mt-3 pb-5"},l.createElement("div",{className:"justify-content-center pt-5"},l.createElement("div",{className:"text-center"},l.createElement("h2",{className:"mb-2 mt-2 text-dark"},l.createElement(r.Z,{id:"skills",defaultMessage:"skills"})))),l.createElement(A.Z,{className:"d-flex justify-content-center"},l.createElement(b.Z,null,l.createElement(u.Z,{xs:6,md:4,lg:4,className:"mt-3"},l.createElement(n.S,{src:"../img/docker1.png",alt:"docker1",placeholder:"blurred",layout:"fixed",width:140,height:110,style:{marginRight:30,marginLeft:30,marginTop:30},__imageData:a(6278)})),l.createElement(u.Z,{xs:6,md:4,lg:4,className:"mt-5"},l.createElement(n.S,{src:"../img/laravel.png",alt:"laravel",placeholder:"blurred",layout:"fixed",width:150,height:110,style:{marginRight:30,marginLeft:30,marginTop:30},__imageData:a(1423)})),l.createElement(u.Z,{xs:6,md:4,lg:4,className:"mt-5"},l.createElement(n.S,{src:"../img/react.png",alt:"react",placeholder:"blurred",layout:"fixed",width:110,height:110,style:{marginRight:30,marginLeft:30,marginTop:30},__imageData:a(9142)})),l.createElement(u.Z,{xs:6,md:4,lg:4,className:"mt-5"},l.createElement(n.S,{src:"../img/docker.png",alt:"docker",placeholder:"blurred",layout:"fixed",width:130,height:110,style:{marginRight:30,marginLeft:30,marginTop:30},__imageData:a(1996)})),l.createElement(u.Z,{xs:6,md:4,lg:4,className:"mt-5"},l.createElement(n.S,{src:"../img/aws.png",alt:"aws",placeholder:"blurred",layout:"fixed",width:120,height:110,style:{marginRight:30,marginLeft:30,marginTop:30},__imageData:a(4744)})),l.createElement(u.Z,{xs:6,md:4,lg:4,className:"mt-5"},l.createElement(n.S,{src:"../img/kubernetes.png",alt:"kubernetes",placeholder:"blurred",layout:"fixed",width:140,height:110,style:{marginRight:30,marginLeft:30,marginTop:30},__imageData:a(986)}))))),l.createElement("section",{className:"bg-light pb-0"},l.createElement("div",{className:"container pb-0"},l.createElement("div",{className:"row justify-content-center mb-3 pb-3 pt-3"},l.createElement("div",{className:"col-md-7 text-center heading-section ftco-animate"},l.createElement("h2",null,l.createElement(r.Z,{id:"portfolio",defaultMessage:"portfolio"})))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-4"},l.createElement("div",{className:"blog-entry"},l.createElement("a",{href:"https://app.canjeaton.com/",className:"block-20"},l.createElement(n.S,{src:"../img/canjeaton.png",alt:"canjeaton",placeholder:"blurred",layout:"fixed",width:140,height:110,style:{display:"block",marginLeft:"auto",marginRight:"auto"},__imageData:a(2274)})),l.createElement("div",{className:"text text-center py-3"},l.createElement("div",{className:""},l.createElement("div",null,l.createElement("a",{href:"https://app.canjeaton.com/"},l.createElement(r.Z,{id:"post_date1",defaultMessage:"post_date1"}))),l.createElement("div",null,l.createElement("a",{href:"https://app.canjeaton.com/"},l.createElement(r.Z,{id:"post_label1",defaultMessage:"post_label1"})))),l.createElement("div",{className:"desc"},l.createElement("h5",null,l.createElement("a",{href:"https://app.canjeaton.com/"},l.createElement(r.Z,{id:"post_title1",defaultMessage:"post_title1"}))," ",l.createElement("a",{className:"text-primary",href:"http://tenxprotocol.com/"},"10x Informatica")," "))))),l.createElement("div",{className:"col-md-4"},l.createElement("div",{className:"blog-entry"},l.createElement("a",{href:"http://www.rrhhpayroll.com/",className:"block-20",style:{backgroundImage:"url('http://www.rrhhpayroll.com/storage/banners/1.jpg');"}},l.createElement(n.S,{src:"http://demo.rrhhpayroll.com/storage/banners/1.jpg",alt:"canjeaton",placeholder:"blurred",layout:"fixed",width:140,height:110,style:{display:"block",marginLeft:"auto",marginRight:"auto"},__imageData:a(6418)})),l.createElement("div",{className:"text text-center py-3"},l.createElement("div",{className:""},l.createElement("div",null,l.createElement("a",{href:"http://www.rrhhpayroll.com/"},l.createElement(r.Z,{id:"post_date2",defaultMessage:"post_date2"}))),l.createElement("div",null,l.createElement("a",{href:"http://www.rrhhpayroll.com/"},l.createElement(r.Z,{id:"post_label2",defaultMessage:"post_label2"})))),l.createElement("div",{className:"desc"},l.createElement("h5",null,l.createElement("a",{href:"http://www.rrhhpayroll.com/"},l.createElement(r.Z,{id:"post_title2",defaultMessage:"post_title2"}))))))),l.createElement("div",{className:"d-none col-md-4"},l.createElement("div",{className:"blog-entry"},l.createElement("a",{href:"http://pakal.website/",className:"block-20",style:{backgroundImage:"url('../img/pakal.png');"}}),l.createElement(n.S,{src:"../img/pakal.png",alt:"pakal",placeholder:"blurred",layout:"fixed",width:140,height:110,style:{display:"block",marginLeft:"auto",marginRight:"auto"},__imageData:a(6834)}),l.createElement("div",{className:"text text-center py-3"},l.createElement("div",{className:""},l.createElement("div",null,l.createElement("a",{href:"http://pakal.website/"},l.createElement(r.Z,{id:"post_date3",defaultMessage:"post_date3"}))),l.createElement("div",null,l.createElement("a",{href:"http://pakal.website/"},l.createElement(r.Z,{id:"post_label3",defaultMessage:"post_label3"})))),l.createElement("div",{className:"desc"},l.createElement("h5",null,l.createElement("a",{href:"http://pakal.website/"},"A",l.createElement(r.Z,{id:"post_title3",defaultMessage:"post_title3"}))))))),l.createElement("div",{className:"col-md-4"},l.createElement("div",{className:"blog-entry"},l.createElement("a",{target:"_blank",href:"http://tecunapp.com/",className:"block-20",style:{backgroundImage:"url('../img/grupotecun.png');"}},l.createElement(n.S,{src:"../img/grupotecun.png",alt:"grupotecun",placeholder:"blurred",layout:"fixed",width:140,height:110,style:{display:"block",marginLeft:"auto",marginRight:"auto"},__imageData:a(2958)})),l.createElement("div",{className:"text text-center py-3"},l.createElement("div",{className:""},l.createElement("div",null,l.createElement("a",{target:"_blank",href:"http://tecunapp.com/"},l.createElement(r.Z,{id:"post_date3",defaultMessage:"post_date3"}))),l.createElement("div",null,l.createElement("a",{target:"_blank",href:"http://tecunapp.com/"},l.createElement(r.Z,{id:"post_label3",defaultMessage:"post_label3"})))),l.createElement("div",{className:"desc"},l.createElement("h5",null,l.createElement("a",{target:"_blank",href:"http://tecunapp.com/"},l.createElement(r.Z,{id:"post_title3",defaultMessage:"post_title3"})))))))))),l.createElement("section",null,l.createElement(m.Z,{fixed:"",bg:"primary",variant:"dark"},l.createElement(A.Z,null,l.createElement(m.Z.Brand,{href:"#home"},"norellanac"),l.createElement(m.Z.Toggle,null),l.createElement(m.Z.Collapse,{className:"justify-content-end"},l.createElement(m.Z.Text,null,l.createElement("p",null,l.createElement("span",{className:" h1 mt-5 text-center ml-5",style:{fontsize:"60px;"}},l.createElement("a",{href:"https://github.com/norellanac"},l.createElement(s.G,{style:{marginRight:20},icon:i.zhw,size:"1x"})),l.createElement("a",{href:"https://www.linkedin.com/in/nery-alexis-orellana-cuy-3612888b/"},l.createElement(s.G,{style:{marginRight:20},icon:i.D9H,size:"1x"})),l.createElement("a",{href:"https://m.facebook.com/alexis.orellana2"},l.createElement(s.G,{style:{marginRight:20},icon:i.neY,size:"1x"})),l.createElement("a",{href:"https://www.instagram.com/norellanac/"},l.createElement(s.G,{style:{marginRight:20},icon:i.Zzi,size:"1x"})),l.createElement("a",{href:"https://api.whatsapp.com/send?phone=50233120413"},l.createElement(s.G,{style:{marginRight:20},icon:i.VHX,size:"1x"}),"                                                   ")))))))))}},6834:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJUlEQVQoz02RzWtcVRiH786NQiAkk8yMd+Z+Jg0yJpEKpYE0kdpEqgXFhdKNWKwlidUi0gELMZRqLUgtYsVSFyZG06apM/ee73PPx52bdGZSNJZWCG6Erq3/gpwb1MJvcRbnOef5va8VajikoSPBmzvtN35tT7blke10uqMOdVSo8eMJNB5JyXiL+ZqEeSxXgkDDUENXQlcBX8NAwUCjPNhXyFPmsBdfIV/hUJNAk0ARK8xJT8F9moxn9NmWSa1FxzJWS9loiz23yYfN7ccVyB5vBQr6yvAvdPSxu9lMN53u6KmOOtzVs93spW72yt3NkRb1c5FAYVeiqsC+yrVDUzh+moODW3JiS0611cx2+mI3nbgjRlO+T9Faiz2/lezfNKlpZie4yFGRwUqCrb1p9dPIlzgUeMx4srGMjWfM5qhAY0+i4RQP5YWLDNgJrAhU4rDEoeVJ6AgDOwI9o2gtpYFCjoQVAYoclDmoCjSUV/WUYezEaJc4Kv8H95GomkA/wSNmjMiTsJLAQQqKDJQ4DBQOFXYSMEBBmSNH4iKHgwxaZkMS9JOoQONeEtkCeMqszTGPIkciW0A7AY5ElbZwFB5KI09jR+KqQFZ+D/TRaJCZ/ysC+Aru6XgCBhJVOPQEckj81JdXHdQ8ubo+TJGtsJ0go+3m8ACNc3lQVbisSEGgXg57OOxVsLdNPfDTyWOvOle+OLz0IGxQp4WrAv+rTaNBGhVIVEzgqLx1kN+axDenZXwc3z6+Es9+R167BrfWLh29AI98dK+aQk8QV5L/4R6GnyRwiq19i/TCQn21kS4DdfXra+ur2Zm3lj6fA5deZ0ff3S0jUVbQFaa25QvgiriPNA/h7wv4Rh3Txp1H5+uLaw1y/cOXVy5+ADbvycufnjrwYOG9dDz5eVqslBj2Va5dzajdov00Xm7O/7gxd53/9v7ao8nLO2fP3t6dPRFdufFDsruxTk/N3H9nPk3Y218160XJPYldia3JxXMHLnzyRNycICt/oLm/wen7jXM78Wfby0sPv/n44cbF3+Pzu3Dxz7j+18b8L/TMGL3ZQ9AAifsJ+AecOA1FEEyspwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/myWebsite/static/f46df8344b06bf6fd3645fb8082f1f0f/dca51/pakal.png","srcSet":"/myWebsite/static/f46df8344b06bf6fd3645fb8082f1f0f/dca51/pakal.png 140w,\\n/myWebsite/static/f46df8344b06bf6fd3645fb8082f1f0f/31890/pakal.png 280w","sizes":"140px"},"sources":[{"srcSet":"/myWebsite/static/f46df8344b06bf6fd3645fb8082f1f0f/22534/pakal.webp 140w,\\n/myWebsite/static/f46df8344b06bf6fd3645fb8082f1f0f/b9b27/pakal.webp 280w","type":"image/webp","sizes":"140px"}]},"width":140,"height":110}')},2274:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbklEQVQoz23SSWwbdRQG8O9vx6emxCqLK+LiIhAnToUDorcegLKopCqKmiZd0thJSJUAKmpRmybN4pJ4G8+MZ8aNl7Fdx7tjx7ETJ3Edb80CtGwqmwQHhMRShETbEITcARs4ICH9Du990ie9wwMMRbmxtI2q3EeVlXSliS430WUlU9pOF7b9jVn5X41MATAU1cL6Tm5tB7uqtOR3mJfup64qqfwDQlkllFRCUWUvquyF/6olO+1FEENRw69hsvyMdrDn4IF9Le3Pvfhq32stmjMcqDwxzsO08K95mOtMCzAvwJStl6c2MJR1RJeluz9+GaB++eIj6c6t494MDLkGKgfLEiyLhKoBlYW5lhBqiVC1ckHjWMdg2pXdkH7/LXr2+MfXb0iSdCRSbrQEH7WFlPRMEx1/iIluZ2rDk7yoYiMPMhFQGRDjisaxhqE5Z6YiSdJX39767oefpeofHZFij+tcl2di1P9Ol6gPRHSH3KZT3hE6MLD3st0T6YM1DWLMaxyrGEpNza9Li4HbouGOj5I+rOhSpYPW/qcZKjy177SgLTn36PiBN/jeC/Zjz7KGguMpFeMDMV7VOK9hKHk5+76U8X3Pjf5k10vXC4cTG69M6gZth3vozg76dS2r7WZOtrH9b1tbD9Fv9jMdj1s5EFNO46zgYpJPXZMkaat6b6sqSdK9o0IM7ZfkWhN0VnSb0a6Xdb5LWodlXROyY2PotGCAATEta5xlDCf49OrWr7ffu/H5p599U93cPCqm0DbScOCMvG1QduSC7MQoeektsldLuvRoPS9vPYcT4/Wyq4zhWKjyyc2bX7ecHD913l69u9k9W8CYt2FcxIgLkz5YAxh1YMIDow+XRIy5MCaCmJcecRehnzltCa6XPwjHcolUYTW39jwzDT4ut8cgRMGFYQtCCIMPgguBD4OPgIuCmBd3u1ZkbLax7eITL/Q+9nLf7v29zfu7yVkKQgxMAMw0GD9YP5grYK/Uhzo6AJiyDzvyu9z5ZnGl2bms5NOg4nJ7UjGVUPBhhRBS8EEFP63g/QqhjvfX14CCCwHmbO1XqDlQSVgTMmam2ZXRuOfU4qzaM6v2JtSeeI03pvZG/+GJqT3xXZ5ErUys88SaJnSK0EnCzMAaAxMBGwI7Dc4P1gebF5wIzl0nwuaBzffX/X8CJeHPVJcWnykAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/myWebsite/static/11b0d83825df6750e929a283db5b59cb/dca51/canjeaton.png","srcSet":"/myWebsite/static/11b0d83825df6750e929a283db5b59cb/dca51/canjeaton.png 140w,\\n/myWebsite/static/11b0d83825df6750e929a283db5b59cb/31890/canjeaton.png 280w","sizes":"140px"},"sources":[{"srcSet":"/myWebsite/static/11b0d83825df6750e929a283db5b59cb/22534/canjeaton.webp 140w,\\n/myWebsite/static/11b0d83825df6750e929a283db5b59cb/b9b27/canjeaton.webp 280w","type":"image/webp","sizes":"140px"}]},"width":140,"height":110}')},2958:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAADyUlEQVQoz13CaUxTdwAA8LdZjnYUCnRzWdziTMhG5jGCMpz0pEClAuVaYbZAoSeF2hawlCJOjqIVChWYyGGwrY4y6OaYUzRM3WGyxLFk2Qc3soRlMnu9HkD773s87eI3t19+UGqJmkCR44v0nLKaTlZONyP3blfaH3YyR9sRw3ek1l8jCmxviGyX7/x246fVrx48unpn5btfVrPqenCZfIhMk+IYGhGD1sM6xCvhs47KiqmcBeG+fOE5nHQpSbKYKLqeUDuX1jyfrrCliSbS60cPScypBa3xH4qheJaGwSwbLsorb2ps09VaPu2qLKaPVDGWxcxU6dcpym9fbfyGLHEk1tjwvEl8qTmOY4hhdeAZagJFBsUzNRo2Y250Ut9vUApL1Q18RU2V/KPKS9U5bPn4zra7byvnd8tte8QTSfxpfMUYvugcgX2aVKB9hSKHCIwTndx8c//g0LjdPDjWr+8923G2xzA51igQt45lDK3RjT8f7vkhQ7e0X+PIapn94MTMvgYzuVCXQG2EYnNbKmns80cpxRX8AaNJq9bq2w29w5/Nyiqpqtn9hl+zuh9kf3Ivo/3GXtXnGUprpmJqT7Uxjq4hUOQQkd78Lpc/L3tLLSg/XCKqUzbnVfK7OEdOfiyMlS8nSm8SRIuEunnCcSuBN4HnDsUX9uHz9QlMDSFHCqXSm85cSbu1EmPVvK+jZU/VUka4B+Wl1eSGucQGB0nkSBbNpwivJQtmSFUXSeUmUnFvIruDmKsiUiRQ7MG6Ik2mdnz3O2J+eqHiQL5iV3E3VDEdx5tOEliIAgu+6nJM+UUc14w7ZsQVnNnB1O7IUb6cJXopoxpiibuzaw0UyTBHP0xrn8pum6Vo7SydPe+Ug9OzWGZYzDvloLfb6Sev0ltmaKoJWtMoVT5IFfXR6k9DIRRZCzl9MOx0eV1OF+x2wTDs8Xi9Xq/TG7A+9G2GUQzbRrdfjKEIiiIoFAIIHAj4g0HYH/D6/LA/6AtuwIHg2t+P/cHN313hLYBEEBS8OIIC7GkkGoU2trYerf7pcnv+efLE5fY4Xa7H6+te2Ld8/0efPxB9hoFI5P+3sa2/1jZWHkIRDIvAATj01O0Lu4OoZxPzbGLuDRTewiLPomEsGon+N4oh0ajPYlsv50Hgljq8IPFeV7hvdrodUs8XUo9D6l6Q+L6UgWUduN8NllTgdiu43fL8kgp83wfudYYXxCHrcQgMJgETCTG/jlqOIOadiImEmpIRUwoyQAQX3gSX3gPGBDBAAgNJz58ngskD4MKuiIkERl77FzhVDcQNL1g7AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/myWebsite/static/5d53bd708797a99185d5103b23058fc8/dca51/grupotecun.png","srcSet":"/myWebsite/static/5d53bd708797a99185d5103b23058fc8/dca51/grupotecun.png 140w,\\n/myWebsite/static/5d53bd708797a99185d5103b23058fc8/31890/grupotecun.png 280w","sizes":"140px"},"sources":[{"srcSet":"/myWebsite/static/5d53bd708797a99185d5103b23058fc8/22534/grupotecun.webp 140w,\\n/myWebsite/static/5d53bd708797a99185d5103b23058fc8/b9b27/grupotecun.webp 280w","type":"image/webp","sizes":"140px"}]},"width":140,"height":110}')},6418:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABy9lLo3HDf//EABkQAAIDAQAAAAAAAAAAAAAAAAIDABESBP/aAAgBAQABBQIQIlqZleofONgDLqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGn/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECERIQITEyUf/aAAgBAQAGPwKTnSSXhCPOx1ZSTFeGK0//xAAbEAADAQADAQAAAAAAAAAAAAAAAREhMVGBsf/aAAgBAQABPyGajHUpXU3UdGlfgUpcmUV4MxRtng//2gAMAwEAAgADAAAAEE/v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERITH/2gAIAQMBAT8QhrCz/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EEuz/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBYdH/2gAIAQEAAT8QEAW26PuzkMiratA93ClYsvD9SyhULKzGHkFAKnKeqxSGlHME/9k="},"images":{"fallback":{"src":"/myWebsite/static/e0d6f5d384fd4046d4b1e514436afb2b/5317d/1.jpg","srcSet":"/myWebsite/static/e0d6f5d384fd4046d4b1e514436afb2b/5317d/1.jpg 140w,\\n/myWebsite/static/e0d6f5d384fd4046d4b1e514436afb2b/d59c1/1.jpg 280w","sizes":"140px"},"sources":[{"srcSet":"/myWebsite/static/e0d6f5d384fd4046d4b1e514436afb2b/22534/1.webp 140w,\\n/myWebsite/static/e0d6f5d384fd4046d4b1e514436afb2b/b9b27/1.webp 280w","type":"image/webp","sizes":"140px"}]},"width":140,"height":110}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4987c4a13f462b54b0f9.js.map