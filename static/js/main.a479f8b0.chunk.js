(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),a=n(2),o=n(3),s=n(5),r=n(4),l=n(1),u=(n(12),n(0)),m=function(){return(new Date).toUTCString().slice(-12,-4)},h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={time:m()},t.timerId=0,t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({time:m()}),console.info(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.time,e=this.props.name;return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(l.Component);function d(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var v=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={hasClock:!0,clockName:"Clock-0",prevClockName:""},t.timerId=0,t.watchVisibilityOff=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.watchVisibilityOn=function(){t.setState({hasClock:!0})},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",this.watchVisibilityOff),document.addEventListener("click",this.watchVisibilityOn),this.timerId=window.setInterval((function(){t.setState({clockName:d()})}),3300)}},{key:"componentDidUpdate",value:function(t,e){this.state.prevClockName=e.clockName}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.watchVisibilityOff),document.removeEventListener("click",this.watchVisibilityOn)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{name:n})]})}}]),n}(l.Component);i.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a479f8b0.chunk.js.map