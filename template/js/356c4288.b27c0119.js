(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["356c4288"],{"37c8":function(e,t,i){t.f=i("2b4c")},"3a72":function(e,t,i){var a=i("7726"),n=i("8378"),o=i("2d00"),r=i("37c8"),s=i("86cc").f;e.exports=function(e){var t=n.Symbol||(n.Symbol=o?{}:a.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:r.f(e)})}},"454f":function(e,t,i){i("46a7");var a=i("584a").Object;e.exports=function(e,t,i){return a.defineProperty(e,t,i)}},"46a7":function(e,t,i){var a=i("63b6");a(a.S+a.F*!i("8e60"),"Object",{defineProperty:i("d9f6").f})},"7bbc":function(e,t,i){var a=i("6821"),n=i("9093").f,o={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return n(e)}catch(t){return r.slice()}};e.exports.f=function(e){return r&&"[object Window]"==o.call(e)?s(e):n(a(e))}},"85f2":function(e,t,i){e.exports=i("454f")},"8a81":function(e,t,i){"use strict";var a=i("7726"),n=i("69a8"),o=i("9e1e"),r=i("5ca1"),s=i("2aba"),l=i("67ab").KEY,c=i("79e5"),d=i("5537"),u=i("7f20"),m=i("ca5a"),p=i("2b4c"),b=i("37c8"),f=i("3a72"),_=i("d4c0"),v=i("1169"),g=i("cb7c"),h=i("d3f4"),q=i("4bf8"),y=i("6821"),x=i("6a99"),w=i("4630"),O=i("2aeb"),C=i("7bbc"),S=i("11e9"),k=i("2621"),j=i("86cc"),$=i("0d58"),P=S.f,T=j.f,L=C.f,M=a.Symbol,A=a.JSON,F=A&&A.stringify,N="prototype",D=p("_hidden"),E=p("toPrimitive"),I={}.propertyIsEnumerable,H=d("symbol-registry"),R=d("symbols"),V=d("op-symbols"),G=Object[N],B="function"==typeof M&&!!k.f,z=a.QObject,U=!z||!z[N]||!z[N].findChild,Q=o&&c(function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(e,t,i){var a=P(G,t);a&&delete G[t],T(e,t,i),a&&e!==G&&T(G,t,a)}:T,J=function(e){var t=R[e]=O(M[N]);return t._k=e,t},K=B&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},W=function(e,t,i){return e===G&&W(V,t,i),g(e),t=x(t,!0),g(i),n(R,t)?(i.enumerable?(n(e,D)&&e[D][t]&&(e[D][t]=!1),i=O(i,{enumerable:w(0,!1)})):(n(e,D)||T(e,D,w(1,{})),e[D][t]=!0),Q(e,t,i)):T(e,t,i)},Y=function(e,t){g(e);var i,a=_(t=y(t)),n=0,o=a.length;while(o>n)W(e,i=a[n++],t[i]);return e},X=function(e,t){return void 0===t?O(e):Y(O(e),t)},Z=function(e){var t=I.call(this,e=x(e,!0));return!(this===G&&n(R,e)&&!n(V,e))&&(!(t||!n(this,e)||!n(R,e)||n(this,D)&&this[D][e])||t)},ee=function(e,t){if(e=y(e),t=x(t,!0),e!==G||!n(R,t)||n(V,t)){var i=P(e,t);return!i||!n(R,t)||n(e,D)&&e[D][t]||(i.enumerable=!0),i}},te=function(e){var t,i=L(y(e)),a=[],o=0;while(i.length>o)n(R,t=i[o++])||t==D||t==l||a.push(t);return a},ie=function(e){var t,i=e===G,a=L(i?V:y(e)),o=[],r=0;while(a.length>r)!n(R,t=a[r++])||i&&!n(G,t)||o.push(R[t]);return o};B||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=m(arguments.length>0?arguments[0]:void 0),t=function(i){this===G&&t.call(V,i),n(this,D)&&n(this[D],e)&&(this[D][e]=!1),Q(this,e,w(1,i))};return o&&U&&Q(G,e,{configurable:!0,set:t}),J(e)},s(M[N],"toString",function(){return this._k}),S.f=ee,j.f=W,i("9093").f=C.f=te,i("52a7").f=Z,k.f=ie,o&&!i("2d00")&&s(G,"propertyIsEnumerable",Z,!0),b.f=function(e){return J(p(e))}),r(r.G+r.W+r.F*!B,{Symbol:M});for(var ae="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;ae.length>ne;)p(ae[ne++]);for(var oe=$(p.store),re=0;oe.length>re;)f(oe[re++]);r(r.S+r.F*!B,"Symbol",{for:function(e){return n(H,e+="")?H[e]:H[e]=M(e)},keyFor:function(e){if(!K(e))throw TypeError(e+" is not a symbol!");for(var t in H)if(H[t]===e)return t},useSetter:function(){U=!0},useSimple:function(){U=!1}}),r(r.S+r.F*!B,"Object",{create:X,defineProperty:W,defineProperties:Y,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ie});var se=c(function(){k.f(1)});r(r.S+r.F*se,"Object",{getOwnPropertySymbols:function(e){return k.f(q(e))}}),A&&r(r.S+r.F*(!B||c(function(){var e=M();return"[null]"!=F([e])||"{}"!=F({a:e})||"{}"!=F(Object(e))})),"JSON",{stringify:function(e){var t,i,a=[e],n=1;while(arguments.length>n)a.push(arguments[n++]);if(i=t=a[1],(h(t)||void 0!==e)&&!K(e))return v(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!K(t))return t}),a[1]=t,F.apply(A,a)}}),M[N][E]||i("32e9")(M[N],E,M[N].valueOf),u(M,"Symbol"),u(Math,"Math",!0),u(a.JSON,"JSON",!0)},"8e6e":function(e,t,i){var a=i("5ca1"),n=i("990b"),o=i("6821"),r=i("11e9"),s=i("f1ae");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){var t,i,a=o(e),l=r.f,c=n(a),d={},u=0;while(c.length>u)i=l(a,t=c[u++]),void 0!==i&&s(d,t,i);return d}})},"990b":function(e,t,i){var a=i("9093"),n=i("2621"),o=i("cb7c"),r=i("7726").Reflect;e.exports=r&&r.ownKeys||function(e){var t=a.f(o(e)),i=n.f;return i?t.concat(i(e)):t}},bc55:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-card",{staticClass:"my-card"},[i("heading"),i("q-tabs",{staticClass:"text-secondary bg-grey-4",attrs:{align:"left"},model:{value:e.avtiveTab,callback:function(t){e.avtiveTab=t},expression:"avtiveTab"}},[i("q-tab",{attrs:{label:"Overview",name:"overview"}}),i("q-tab",{attrs:{label:"Proposal",name:"proposal"}}),i("q-tab",{attrs:{label:"Execution",name:"execution"}}),i("q-tab",{attrs:{label:"Team",name:"team"}}),i("q-tab",{attrs:{label:"Result",name:"result"}})],1),i("q-separator"),i("q-tab-panels",{attrs:{animated:""},model:{value:e.avtiveTab,callback:function(t){e.avtiveTab=t},expression:"avtiveTab"}},[i("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"overview"}},[i("overview")],1),i("q-tab-panel",{attrs:{name:"proposal"}},[i("proposal")],1),i("q-tab-panel",{attrs:{name:"execution"}},[i("execution")],1),i("q-tab-panel",{attrs:{name:"team"}},[i("team")],1),i("q-tab-panel",{attrs:{name:"result"}},[i("result")],1)],1)],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card-section",{staticClass:"bg-secondary text-white"},[i("div",{staticClass:"row items-center no-wrap"},[i("div",{staticClass:"col"},[i("div",{staticClass:"text-h6"},[e._v("\n        "+e._s(e.use_case.title)+"\n        "),i("q-btn",{attrs:{icon:e.edit_mode?"save":"edit",flat:"",round:"",color:"white",size:"md"},on:{click:e.toggleEditMode}},[i("q-tooltip",[e._v("\n            "+e._s(e.edit_mode?"Save":"Edit")+"\n          ")])],1)],1),i("div",{staticClass:"text-subtitle2 q-mt-xs"},[e._v("initiated by \n        "),i("q-badge",{staticClass:"text-caption text-bold q-mr-xs",attrs:{color:"primary"}},[e._v("\n          "+e._s(e.use_case.initiated_by)+"\n        ")])],1)]),i("div",{staticClass:"col-auto"},[i("q-btn-dropdown",{staticClass:"float-right text-caption text-bold q-mb-xs",attrs:{label:e.status,"disable-dropdown":!e.edit_mode,split:"",color:"primary",size:"sm"}},[i("q-list",e._l(e.status_options,function(t,a){return i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(i){e.status=t}}},[i("q-item-section",[i("q-item-label",[e._v(e._s(t))])],1)],1)}),1)],1),i("br"),i("q-rating",{attrs:{size:"sm",color:"orange"},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}}),i("q-badge",{staticClass:"float-right text-bold q-mt-xs q-ml-xs",attrs:{align:"middle"}},[e._v(e._s(e.rating)+"/5")])],1)])])},r=[],s=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("c47a")),l=i.n(s),c=i("5935"),d=i("2f62");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(i,!0).forEach(function(t){l()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var p={name:"use-case",computed:m({},Object(c["b"])("UseCase",["status_options","use_case","use_case.status","use_case.rating","use_case.edit_mode"])),methods:m({},Object(d["b"])("UseCase",["toggleEditMode"]))},b=p,f=i("2877"),_=Object(f["a"])(b,o,r,!1,null,null,null),v=_.exports,g=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-splitter",{scopedSlots:e._u([{key:"before",fn:function(){return[i("q-tabs",{attrs:{vertical:""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("q-tab",{attrs:{name:"description",label:"Description"}}),i("q-tab",{attrs:{name:"evaluation",label:"Evaluation"}}),i("q-tab",{attrs:{name:"qna",label:"Q&A"}})],1)]},proxy:!0},{key:"after",fn:function(){return[i("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[i("q-tab-panel",{staticClass:"q-mb-sm",attrs:{name:"description"}},[i("div",{staticClass:"text-h6 text-primary"},[e._v("Title")]),e.edit_mode?i("q-input",{staticClass:"q-mb-sm",attrs:{filled:"",dense:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}):i("p",{staticClass:"text-subtitle1 text-bold"},[e._v(e._s(e.title))]),i("div",{staticClass:"text-h6 text-primary"},[e._v("Start here if...")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.object,callback:function(t){e.object=t},expression:"object"}}):i("p",{domProps:{innerHTML:e._s(e.object)}}),i("div",{staticClass:"text-h6 text-primary"},[e._v("Competition Description")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}):i("p",{domProps:{innerHTML:e._s(e.content)}}),i("div",{staticClass:"text-h6 text-primary"},[e._v("Practice Skills")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.pratice_skills,callback:function(t){e.pratice_skills=t},expression:"pratice_skills"}}):i("p",{domProps:{innerHTML:e._s(e.pratice_skills)}})],1),i("q-tab-panel",{attrs:{name:"evaluation"}},[i("div",{staticClass:"row q-col-gutter-md"},[i("div",{staticClass:"col-2"},[i("div",{staticClass:"text-h6 text-primary"},[e._v("Sponsored by")]),e.edit_mode?i("q-input",{attrs:{outlined:"",dense:""},model:{value:e.sponsored_by,callback:function(t){e.sponsored_by=t},expression:"sponsored_by"}}):i("q-chip",{staticClass:"q-mx-none text-bold",attrs:{square:""}},[e._v("\n              "+e._s(e.sponsored_by)+"\n            ")]),i("div",{staticClass:"text-h6 text-primary"},[e._v("Value")]),e.edit_mode?i("q-select",{attrs:{options:e.options,dense:"",outlined:"","options-dense":""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):i("q-chip",{staticClass:"q-mx-none text-bold",attrs:{color:e.chip_options[e.value].bg_color,"text-color":e.chip_options[e.value].text_color,square:""}},[e._v("\n              "+e._s(e.value)+"\n            ")])],1),i("div",{staticClass:"col-2"},[i("div",{staticClass:"text-h6 text-primary"},[e._v("Feasiblity")]),e.edit_mode?i("q-select",{attrs:{options:e.options,dense:"",outlined:"","options-dense":""},model:{value:e.feasiblity,callback:function(t){e.feasiblity=t},expression:"feasiblity"}}):i("q-chip",{staticClass:"q-mx-none text-bold",attrs:{color:e.chip_options[e.feasiblity].bg_color,"text-color":e.chip_options[e.feasiblity].text_color,square:""}},[e._v("\n              "+e._s(e.feasiblity)+"\n            ")]),i("div",{staticClass:"text-h6 text-primary"},[e._v("Urgent")]),e.edit_mode?i("q-select",{attrs:{options:e.options,dense:"",outlined:"","options-dense":""},model:{value:e.urgent,callback:function(t){e.urgent=t},expression:"urgent"}}):i("q-chip",{staticClass:"q-mx-none text-bold",attrs:{color:e.chip_options[e.urgent].bg_color,"text-color":e.chip_options[e.urgent].text_color,square:""}},[e._v("\n              "+e._s(e.urgent)+"\n            ")])],1),i("div",{staticClass:"col-5"},[i("div",{staticClass:"text-h6 text-primary"},[e._v("Category")]),e.edit_mode?i("q-select",{attrs:{options:e.options,outlined:"","use-chips":"",dense:"","use-input":"",multiple:"","options-dense":"","input-debounce":"0"},on:{"new-value":e.createValue},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}}):e._l(e.category,function(t,a){return i("q-chip",{key:a,staticClass:"q-ml-none text-bold",attrs:{square:""}},[e._v("\n                "+e._s(t)+"\n              ")])})],2)])]),i("q-tab-panel",{attrs:{name:"qna"}},[i("div",{staticClass:"text-h6 q-mb-md text-primary"},[e._v("Frequently Asked Questions")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.QnA,callback:function(t){e.QnA=t},expression:"QnA"}}):i("p",{domProps:{innerHTML:e._s(e.QnA)}})],1)],1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})},h=[];i("6762"),i("2fdb");function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(i,!0).forEach(function(t){l()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var x={name:"use-case-overview",data:function(){return{activeTab:"description",splitterModel:10,options:["High","Medium","Low"],chip_options:{High:{text_color:"white",bg_color:"red"},Medium:{text_color:"white",bg_color:"primary"},Low:{text_color:"white",bg_color:"positive"}}}},computed:y({},Object(c["b"])("UseCase",["use_case.title","use_case.edit_mode","use_case.overview.description.object","use_case.overview.description.content","use_case.overview.description.pratice_skills","use_case.overview.evaluation.sponsored_by","use_case.overview.evaluation.feasiblity","use_case.overview.evaluation.value","use_case.overview.evaluation.urgent","use_case.overview.evaluation.category","use_case.overview.QnA"])),methods:{createValue:function(e,t){e.length>0&&(this.options.includes(e)||this.options.push(e),t(e,"toggle"))}}},w=x,O=Object(f["a"])(w,g,h,!1,null,null,null),C=O.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v("Potential applications")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.potential_applications,callback:function(t){e.potential_applications=t},expression:"potential_applications"}}):i("p",{domProps:{innerHTML:e._s(e.potential_applications)}}),i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v("Data")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}):i("p",{domProps:{innerHTML:e._s(e.data)}}),i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v("Analytics")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.analytics,callback:function(t){e.analytics=t},expression:"analytics"}}):i("p",{domProps:{innerHTML:e._s(e.analytics)}}),i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v("Value")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}):i("p",{domProps:{innerHTML:e._s(e.value)}})],1)},k=[];function j(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function $(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?j(i,!0).forEach(function(t){l()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):j(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var P={name:"use-case-proposal",computed:$({},Object(c["b"])("UseCase",["use_case.edit_mode","use_case.proposal.potential_applications","use_case.proposal.data","use_case.proposal.analytics","use_case.proposal.value"]))},T=P,L=Object(f["a"])(T,S,k,!1,null,null,null),M=L.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v(" Technical paper ")]),i("q-uploader",{staticClass:"q-mb-md",attrs:{url:"http://localhost:4444/upload",label:"Custom list",multiple:""},scopedSlots:e._u([{key:"list",fn:function(t){return[i("q-list",{attrs:{separator:""}},e._l(t.files,function(a){return i("q-item",{key:a.name},[i("q-item-section",[i("q-item-label",{staticClass:"full-width ellipsis"},[e._v("\n                "+e._s(a.name)+"\n              ")]),i("q-item-label",{attrs:{caption:""}},[e._v("\n                Status: "+e._s(a.__status)+"\n              ")]),i("q-item-label",{attrs:{caption:""}},[e._v("\n                "+e._s(a.__sizeLabel)+" / "+e._s(a.__progressLabel)+"\n              ")])],1),a.__img?i("q-item-section",{staticClass:"gt-xs",attrs:{thumbnail:""}},[i("img",{attrs:{src:a.__img.src}})]):e._e(),i("q-item-section",{attrs:{top:"",side:""}},[i("q-btn",{staticClass:"gt-xs",attrs:{size:"12px",flat:"",dense:"",round:"",icon:"delete"},on:{click:function(e){return t.removeFile(a)}}})],1)],1)}),1)]}}])}),i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v(" Highlights ")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.highlights,callback:function(t){e.highlights=t},expression:"highlights"}}):i("p",{domProps:{innerHTML:e._s(e.highlights)}}),i("div",{staticClass:"text-h6 q-mb-sm text-primary"},[e._v(" \n      Progress \n      "),i("q-btn-group",[i("q-btn",{attrs:{size:"sm",color:"primary"}},[e._v(e._s(e.progress.length)+" events")]),e.edit_mode?i("q-btn",{attrs:{size:"sm",icon:"add"}}):e._e()],1)],1),i("q-timeline",{staticClass:"q-px-md",attrs:{color:"secondary"}},e._l(e.progress,function(t,a){return i("q-timeline-entry",{key:a,attrs:{title:t.title,subtitle:t.subtitle,color:t.color,icon:t.icon}},[i("p",[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")]),i("p",[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n        ")]),e.edit_mode?i("q-btn",{attrs:{flat:"",round:"",color:"negative",icon:"fas fa-trash",size:"sm"}}):e._e()],1)}),1)],1)},F=[];function N(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function D(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?N(i,!0).forEach(function(t){l()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):N(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var E={name:"use-case-execution",computed:D({},Object(c["b"])("UseCase",["use_case.edit_mode","use_case.execution.technical_paper","use_case.execution.highlights","use_case.execution.progress"]))},I=E,H=Object(f["a"])(I,A,F,!1,null,null,null),R=H.exports,V=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6 text-primary"},[e._v("\n      Team Name\n    ")]),e.edit_mode?i("q-input",{staticClass:"q-mb-sm",attrs:{filled:"",dense:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}):i("p",{staticClass:"text-h6"},[e._v("\n      "+e._s(e.name)+"\n    ")]),i("div",{staticClass:"text-h6 q-mb-md text-primary"},[e._v("\n      Team Members \n      "),i("q-btn-group",[i("q-btn",{attrs:{size:"sm",color:"primary"}},[e._v(e._s(e.members.length)+" members")]),e.edit_mode?i("q-btn",{attrs:{size:"sm",icon:"add"}}):e._e()],1)],1),i("q-list",{staticClass:"rounded-borders q-mb-md",attrs:{separator:"",bordered:""}},e._l(e.members,function(t,a){return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{active:t.leader,"active-class":"bg-teal-1 text-grey-8"}},[i("q-item-section",{attrs:{avatar:""}},[i("q-avatar",[i("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1),i("q-item-section",[i("q-item-label",{attrs:{lines:"1"}},[i("span",{staticClass:"text-primary text-subtitle2"},[e._v("\n              "+e._s(t.user)+"\n            ")]),i("span",{staticClass:"text-grey text-bold"},[e._v("\n              "+e._s(t.leader?"(you)":"")+"\n            ")])]),i("q-item-label",{attrs:{caption:"",lines:"2"}},[i("span",{staticClass:"text-weight-bold"},[e._v("\n              "+e._s(t.department)+"\n            ")]),e._v("\n            "+e._s(t.slogan)+"\n          ")])],1),i("q-item-section",{staticClass:"text-bold",attrs:{side:""}},[e._v("\n          "+e._s(t.leader?"Leader":"Member")+"\n        ")]),i("q-item-section",{staticClass:"text-bold",attrs:{side:""}},[e.edit_mode?i("q-btn",{attrs:{flat:"",round:"",color:"negative",icon:"fas fa-trash",size:"sm"}}):e._e()],1)],1)}),1)],1)},G=[];function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?B(i,!0).forEach(function(t){l()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var U={name:"use-case-team",computed:z({},Object(c["b"])("UseCase",["use_case.edit_mode","use_case.team.name","use_case.team.members"]))},Q=U,J=Object(f["a"])(Q,V,G,!1,null,null,null),K=J.exports,W=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6 text-primary"},[e._v("Data")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}}):i("p",{domProps:{innerHTML:e._s(e.data)}}),i("div",{staticClass:"text-h6 text-primary"},[e._v("Analytics")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.analytics,callback:function(t){e.analytics=t},expression:"analytics"}}):i("p",{domProps:{innerHTML:e._s(e.analytics)}}),i("div",{staticClass:"text-h6 text-primary"},[e._v("Insights/Recommendations")]),e.edit_mode?i("q-editor",{staticClass:"q-mb-md",attrs:{dense:e.$q.screen.lt.md,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline"],["fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.insights_recommendations,callback:function(t){e.insights_recommendations=t},expression:"insights_recommendations"}}):i("p",{domProps:{innerHTML:e._s(e.insights_recommendations)}})],1)},Y=[];function X(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function Z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?X(i,!0).forEach(function(t){l()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):X(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var ee={name:"use-case-result",computed:Z({},Object(c["b"])("UseCase",["use_case.edit_mode","use_case.result.data","use_case.result.analytics","use_case.result.insights_recommendations"])),data:function(){return{test:""}}},te=ee,ie=Object(f["a"])(te,W,Y,!1,null,null,null),ae=ie.exports,ne={name:"use-case",components:{Heading:v,Overview:C,Proposal:M,Execution:R,Team:K,Result:ae},data:function(){return{avtiveTab:"overview",splitterModel:10,ratingModel:3}}},oe=ne,re=Object(f["a"])(oe,a,n,!1,null,null,null);t["default"]=re.exports},c47a:function(e,t,i){var a=i("85f2");function n(e,t,i){return t in e?a(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}e.exports=n},d4c0:function(e,t,i){var a=i("0d58"),n=i("2621"),o=i("52a7");e.exports=function(e){var t=a(e),i=n.f;if(i){var r,s=i(e),l=o.f,c=0;while(s.length>c)l.call(e,r=s[c++])&&t.push(r)}return t}},f1ae:function(e,t,i){"use strict";var a=i("86cc"),n=i("4630");e.exports=function(e,t,i){t in e?a.f(e,t,n(0,i)):e[t]=i}}}]);