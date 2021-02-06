(this.webpackJsonpaudioboard=this.webpackJsonpaudioboard||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),i=n.n(r),c=n(6),d=n.n(c),o=(n(24),n.p,n(25),n(7)),s=n(8),u=n(10),p=n(9),l=n(4),h="PLAY",j="FETCH_JSON_REQUEST",b="FETCH_JSON_SUCCESS",f="FETCH_JSON_FAILURE",O=function(){return{type:j}},y=function(){var e=function(e){if(!e.ok)throw Error(e.statusText);return e};return function(t){t(O),fetch("pads.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(e).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:b,payload:e}}(e)),e})).catch((function(e){return t(function(e){return{type:f,payload:e}}(e))}))}},v=n(3),g=n(17),P=n.n(g),m=(n(31),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handlePlay=function(){a.setState({isPlaying:!0}),a.props.playPad(a.props.padId),a.audioRef.current.play()},a.handleKeyDown=function(e){e.toUpperCase===a.props.padId.toUpperCase&&a.handlePlay()},a.handleAudioEnd=function(){a.setState({isPlaying:!1})},a.state={isPlaying:!1,bgColor:""},a.audioRef=i.a.createRef(),a.handlePlay=a.handlePlay.bind(Object(l.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(l.a)(a)),a.handleAudioEnd=a.handleAudioEnd.bind(Object(l.a)(a)),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.padId;return Object(a.jsxs)("div",{className:"drum-pad ".concat(this.state.isPlaying?"playing":""),onClick:this.handlePlay,style:this.props.padStyle,tabIndex:"0",children:[Object(a.jsx)(P.a,{handleKeys:[t],onKeyEvent:function(t,n){return e.handleKeyDown(t)}}),Object(a.jsx)("audio",{className:"clip",id:t,preload:"auto",ref:this.audioRef,src:"/audioboard"+this.props.audioSrc,onEnded:this.handleAudioEnd}),Object(a.jsx)("header",{children:t})]})}}]),n}(i.a.Component)),x=Object(v.b)((function(e,t){return{activePad:e.activePad,loading:e.loading,audioSrc:e.pads.find((function(e){return e.keyId===t.padId})).audioSrc}}),(function(e){return{playPad:function(t){return e(function(e){return{type:h,padId:e}}(t))}}}))(m),I=(n(32),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPads()}},{key:"render",value:function(){var e=this.props.pads.map((function(e){var t={background:"hsla("+e.padHue+", 65%, 45%, 1)"};return Object(a.jsx)(x,{padId:e.keyId,padStyle:t},e.keyId)}));return Object(a.jsx)("div",{id:"drum-machine-container",children:Object(a.jsxs)("div",{id:"drum-machine",children:[e,Object(a.jsx)("div",{id:"display",children:this.props.activeDescription})]})})}}]),n}(i.a.Component)),k=Object(v.b)((function(e){return{activePad:e.activePad,activeDescription:e.activeDescription,pads:e.pads,loading:e.loading,error:e.error}}),(function(e){return{fetchPads:function(){return e(y())}}}))(I);var C=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("h1",{children:"Bad Takes Audioboard"}),Object(a.jsx)("p",{children:"Click or keyboard for hot takes from across the ages"})]}),Object(a.jsx)(k,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},E=n(5),D=n(2),A={activePad:"",activeDescription:"",loading:!1,error:"",pads:[]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(D.a)(Object(D.a)({},e),{},{loading:!0});case b:return Object(D.a)(Object(D.a)({},e),{},{pads:t.payload.map((function(e){var t=Math.ceil(0),n=Math.floor(360),a=Math.floor(Math.random()*(n-t+1)+t);return Object(D.a)(Object(D.a)({},e),{},{padHue:a})})),loading:!1,error:""});case f:return Object(D.a)(Object(D.a)({},e),{},{loading:!1,pads:[],error:t.payload});case h:return Object(D.a)(Object(D.a)({},e),{},{activePad:t.padId,activeDescription:e.pads.find((function(e){return e.keyId===t.padId})).description,pads:e.pads.map((function(e){return e.padId===t.padId?Object(D.a)(Object(D.a)({},e),{},{isPlaying:!0}):e}))});default:return e}},w=n(18),F=Object(E.c)(T,Object(E.a)(w.a));d.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(v.a,{store:F,children:Object(a.jsx)(C,{})})}),document.getElementById("root")),S()}},[[33,1,2]]]);
//# sourceMappingURL=main.328c4683.chunk.js.map