"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[703],{28826:function(x,i,t){t.r(i),t.d(i,{default:function(){return j}});var d=t(12741),c=t.n(d),v=t(15715),m=t(36275),l=t(67294),h=t(36934),g=t(97983),u=t.n(g),p=t(11281),y=t.n(p),T=t(40794),I=t.n(T);function A(r){return e.apply(this,arguments)}function e(){return e=I()(u()().mark(function r(s){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/analysis/top/interface/invoke",y()({method:"GET"},s||{})));case 1:case"end":return n.stop()}},r)})),e.apply(this,arguments)}var f=t(85893),S=function(){var s=(0,l.useState)([]),o=c()(s,2),n=o[0],G=o[1];(0,l.useEffect)(function(){try{A().then(function(a){a.data&&G(a.data)})}catch(a){}},[]);var C=n.map(function(a){return{value:a.totalNum,name:a.name}}),E={title:{text:"\u8C03\u7528\u6B21\u6570\u6700\u591A\u7684\u63A5\u53E3TOP3",left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:"50%",data:C,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return(0,f.jsx)(v._z,{children:(0,f.jsx)(h.Z,{option:E})})},j=S}}]);
