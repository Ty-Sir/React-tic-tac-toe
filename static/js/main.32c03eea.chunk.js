(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);var s=r(8),a=r(2),n=r(3),c=r(5),i=r(4),u=r(1),l=r.n(u),o=r(7),h=r.n(o),j=(r(14),r(15),r(0));function d(){return Object(j.jsxs)("div",{className:"header",children:["\u269b\ufe0f ",Object(j.jsx)("span",{className:"react",children:"React"})," Tic-Tac-Toe"]})}var b=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"handleRestart",value:function(){window.location.reload()}},{key:"render",value:function(){return Object(j.jsx)("span",{className:"restartBtn",onClick:this.handleRestart,children:"\ud83d\udd04"})}}]),r}(l.a.Component);function m(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var x=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(m,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(l.a.Component),v=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(a.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(n.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();O(r)||r[e]||(r[e]=this.state.xIsNext?"\ud83d\udd25":"\ud83d\udca6",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],a=O(s.squares),n=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"btn moveBtn",onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=a?"Winner: "+a:10!==r.length||a?1!==r.length||a?"Next player: "+(this.state.xIsNext?"\ud83d\udd25":"\ud83d\udca6"):"Up First: "+(this.state.xIsNext?"\ud83d\udd25":"\ud83d\udca6"):"It's a draw, restart game",Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{}),Object(j.jsx)("div",{className:"status",children:e}),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-info",children:Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(x,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})})}),Object(j.jsx)("ul",{className:"moves",children:n})]}),Object(j.jsx)(b,{})]})}}]),r}(l.a.Component);function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(s.a)(t[r],3),n=a[0],c=a[1],i=a[2];if(e[n]&&e[n]===e[c]&&e[n]===e[i])return e[n]}return null}h.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.32c03eea.chunk.js.map