webpackJsonp([7],{282:function(e,t,n){var o=n(211)(n(482),n(502),null,null);o.options.__file="F:\\my-aim\\src\\views\\test2.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] test2.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},482:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{loading:!1,loading2:!1}},methods:{toLoading:function(){this.loading=!0},toLoading2:function(){this.loading2=!0}}}},502:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Button",{attrs:{type:"primary",loading:""}},[e._v("Loading...")]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.loading,shape:"circle"},on:{click:e.toLoading}},[e.loading?n("span",[e._v("Loading...")]):n("span",[e._v("Click me!")])]),e._v(" "),n("Button",{attrs:{type:"primary",loading:e.loading2,icon:"ios-power",shape:e.circle},on:{click:e.toLoading2}},[e.loading2?n("span",[e._v("Loading...")]):n("span",[e._v("Click me!")])]),e._v(" "),n("Button",{attrs:{loading:"",shape:"circle"}}),e._v(" "),n("Button",{attrs:{shape:"circle",type:"primary",loading:"false"}}),e._v(" "),n("button",[e._v("git更新")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});