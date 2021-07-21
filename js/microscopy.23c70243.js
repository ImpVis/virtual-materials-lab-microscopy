(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],u=0,h=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],i=!0,a=1;a<r.length;a++){var o=r[a];0!==n[o]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var i={},a={microscopy:0},n={microscopy:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c4639":"4790a3d3","chunk-76e94462":"30e7b526"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-76e94462":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var i="css/"+({}[e]||e)+"."+{"chunk-2d0c4639":"31d6cfe0","chunk-76e94462":"0616178c"}[e]+".css",n=c.p+i,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===n))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===i||u===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=i,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var i=n[e];if(0!==i)if(i)t.push(i[2]);else{var s=new Promise((function(t,r){i=n[e]=[t,r]}));t.push(i[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=n[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",h.name="ChunkLoadError",h.type=i,h.request=a,r[1](h)}n[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(r,i,function(t){return e[t]}.bind(null,i));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;s.push([3,"chunk-vendors"]),r()})({3:function(e,t,r){e.exports=r("db19")},"5f35":function(e,t){e.exports={publicPath:"./",pages:{index:{entry:"src/main.js",title:"Index"},intro:{entry:"src/Intro/main.js",title:"Intro"},polishing:{entry:"src/Polishing/main.js",title:"Polishing"},microscopy:{entry:"src/Microscopy/main.js",title:"Microscopy"},vickers:{entry:"src/Vickers/main.js",title:"Vickers"},charpy:{entry:"src/Charpy/main.js",title:"Charpy"},tensile:{entry:"src/Tensile/main.js",title:"Tensile"}}}},6982:function(e,t,r){"use strict";r("de3b")},db19:function(e,t,r){"use strict";r.r(t);var i=r("2b0e"),a=r("fff8"),n=(r("f3ff"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{overflow:"hidden"}},[r("iv-visualisation",{attrs:{title:e.pageName,vue_config:e.vue_config,page_number:3},scopedSlots:e._u([{key:"hotspots",fn:function(){return[r("iv-pane",{attrs:{position:"left",format:"full"}},[r("iv-sidebar-content",{attrs:{showPagination:!0}},[r("iv-sidebar-section",{attrs:{title:"Microscopy",icon:"book-open"}},[e._v(" Microscopy is a material microstructure analysis to study the microstructural features of the material under magnification. The properties of a material determine how well it will perform under a given application, and these properties are dependent on the structure of the material. "),r("br"),r("br"),e._v(" The images captured by digital microscopes can identify grain size and structure, phase distribution, microscopic defects and how a component/product has been made (cast/forged/rolled). Sample preparation (i.e. grinding and polishing) is required prior to microscopy analysis. ")]),r("iv-sidebar-section",{attrs:{title:"Pearlite Percentage Determination",icon:"search"}},[e._v(" Have a look at the "),r("i",[e._v("Crystal Structure")]),e._v(" hotspot at the bottom. "),r("br"),r("br"),e._v(" The amount of pearlite in the structure increases with increasing carbon content. The strength of the steel increases with the amount of pearlite and the strength of pearlite can be increased by decreasing the spacing between the alternating sheets of ferrite and cementite. ")]),r("iv-sidebar-section",{attrs:{title:"The Effect of Grain Size",icon:"atom"}},[e._v(" Check out the "),r("i",[e._v("Stress-Strain Curves")]),e._v(" hotspot at the bottom. Smaller grains imply more grain boundaries which make it more difficult for a crack to propagate from one grain into another. As the grain size increases, the alloy’s: "),r("ul",[r("li",[e._v("Tensile strength (Rm) and yield strength (Re) decrease")]),r("li",[e._v("Elongation at fracture (A%) increases")]),r("li",[e._v("Ductile-brittle transition temperature increases")])]),e._v(" The average grain size of an alloy is generally expressed in terms of the grain size number, ASTM. The value of ASTM ranges from 0 to 12 where 0 corresponds to coarse grained, whereas one with a grain size of ASTM 12 would be extremely fine. The grain size may be estimated by comparing with standard grain size charts (see hotspot) and the values can be converted into an average grain diameter using the "),r("i",[e._v("Table")]),e._v(" hotspot. ")]),r("iv-sidebar-section",{attrs:{title:"Fundamental Equations",icon:"calculator",theme:"Gold"}},[r("div",{staticClass:"center"},[r("label",{attrs:{for:"#hall-petch"}},[e._v("Hall Petch Equation")]),r("iv-equation-box",{attrs:{id:"hall-petch",equation:"\\sigma_{yield} = \\sigma_i + \\frac{k_y}{\\sqrt{d}}"}})],1),e._v(" Where: "),r("br"),e._v(" σ"),r("sub",[e._v("yield")]),e._v(" = Yield stress "),r("br"),e._v(" σ"),r("sub",[e._v("i")]),e._v(" = Intrinsic lattice strength / resistance to yield "),r("br"),e._v(" σ"),r("sub",[e._v("f")]),e._v(" = Stress required to propagate micro crack "),r("br"),e._v(" k"),r("sub",[e._v("y")]),e._v(" = Constant relating to grain boundary resistance to yielding "),r("br"),e._v(" k"),r("sub",[e._v("f")]),e._v(" = Constant relating to grain boundary resistance to fracture "),r("br"),e._v(" D = Grain diameter "),r("br"),r("div",{staticClass:"center"},[r("img",{staticStyle:{width:"100%"},attrs:{src:"https://static.wixstatic.com/media/bc314c_c334c501288f43d0b70833f20b44012f~mv2.png/v1/fill/w_446,h_340,al_c,q_85,usm_0.66_1.00_0.01/Screenshot%202021-03-15%20at%2014_18_30.webp",alt:"Image of microstructure of ASTM A36 steel showing ferrite (white) and pearlite (black)"}})]),r("ul",[r("li",[e._v("Grain refinement simultaneously improves both yield stress and cleavage resistance")]),r("li",[e._v("Grain boundary resistance to fracture is much greater than grain boundary resistance to yielding (k"),r("sub",[e._v("f")]),e._v(" >> k"),r("sub",[e._v("y")]),e._v(")")]),r("li",[e._v("A decrease in ductile-brittle transition temperature (DBTT) with a decrease in grain size")])])]),r("iv-sidebar-section",{attrs:{title:"Game",icon:"gamepad",theme:"Purple"}},[e._v(" Try out the game on the right to test your understanding! ")])],1)],1),r("iv-toggle-hotspot",{attrs:{position:"bottom",title:"Crystal Structure"}},[r("div",{staticStyle:{height:"100%"}},[r("img",{attrs:{src:"https://static.wixstatic.com/media/bc314c_54ce14daed9344e1a332e98ab8cce596~mv2.png/v1/fill/w_600,h_379,al_c,q_85,usm_0.66_1.00_0.01/Example%20image.webp",alt:"Image of microstructure of ASTM A36 steel showing ferrite (white) and pearlite (black)"}})])]),r("iv-toggle-hotspot",{attrs:{position:"bottom",title:"Stress-Strain Curves"}},[r("div",{staticStyle:{height:"100%"}},[r("img",{attrs:{src:"https://static.wixstatic.com/media/bc314c_643fc97eef3a415cb6caf59210e5f16d~mv2.jpg/v1/fill/w_407,h_317,al_c,q_80,usm_0.66_1.00_0.01/stress-strain_curve_for_a_typical_steel_.webp",alt:"Stress-strain curve of steel with varying grain size"}})])]),r("iv-toggle-hotspot",{attrs:{position:"bottom",title:"Grain Size Chart"}},[r("div",{staticStyle:{height:"100%"}},[r("img",{attrs:{src:"https://static.wixstatic.com/media/bc314c_9ec11d8600b44963881423dfe4a573c4~mv2.gif",alt:"Stress-strain curve of steel with varying grain size"}})])]),r("iv-toggle-hotspot",{attrs:{position:"bottom",title:"Grain Size Table"}},[r("div",{staticStyle:{height:"100%"}},[r("img",{attrs:{src:"https://static.wixstatic.com/media/bc314c_c76197df952b46f6836737c6f3469fa8~mv2.png/v1/fill/w_462,h_374,al_c,q_85,usm_0.66_1.00_0.01/ASTM%20table.webp",alt:"Stress-strain curve of steel with varying grain size"}})])])]},proxy:!0}])},[r("div",{staticClass:"game"},[r("iframe",{staticClass:"_3S5H9",attrs:{title:"htmlComp-iframe",name:"htmlComp-iframe",width:"950vh",height:"535vw","data-src":"",src:"https://microscopy.netlify.app/"}})])])],1)}),s=[],o=r("5f35"),c=r.n(o),l={name:"microscopy",data(){return{pageName:"Microscopy",vue_config:c.a}}},u=l,h=(r("6982"),r("2877")),d=Object(h["a"])(u,n,s,!1,null,null,null),p=d.exports,f=r("5dea");i["a"].config.productionTip=!1,i["a"].use(a["a"]),i["a"].use(f["a"]),new i["a"]({render:e=>e(p)}).$mount("#app")},de3b:function(e,t,r){}});
//# sourceMappingURL=microscopy.23c70243.js.map