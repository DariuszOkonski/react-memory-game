(this["webpackJsonp018-memory-game"]=this["webpackJsonp018-memory-game"]||[]).push([[0],{25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),s=(t(30),t(1)),o=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement(s.b,{className:"navbar-brand",exact:!0,to:"/"},"DazzDev"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/game"},"Game")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/about"},"About"))))))},m=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary fixed-bottom"},r.a.createElement("span",{className:"m-auto text-light"},"Copyright \xa9 2019 Dariusz Okonski"))},i=t(6),d=function(){return r.a.createElement("div",{className:"jumbotron bg-secondary text-light"},r.a.createElement("h1",{className:"display-5"},"Memory Game"),r.a.createElement("p",{className:"lead"},"Let's play"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement(s.b,{className:"btn btn-primary btn-sm mr-2",to:"/game",role:"button"},"Game"),r.a.createElement(s.b,{className:"btn btn-primary btn-sm",to:"/about",role:"button"},"About"))},u=t(22),b=function(e){var a=e.steps;return r.a.createElement("div",{className:"card bg-secondary text-light text-center",style:{width:"100%"}},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item bg-primary"},"Number of steps: ",a)))},p=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav m-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(s.b,{className:"nav-link dropdown-toggle",to:"/game",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Number Of Cards"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(s.b,{className:"dropdown-item",to:"/game/eight"},"8"),r.a.createElement(s.b,{className:"dropdown-item",to:"/game/twelwe"},"12"),r.a.createElement(s.b,{className:"dropdown-item",to:"/game/sixteen"},"16"),r.a.createElement(s.b,{className:"dropdown-item",to:"/game/twenty"},"20"))))))},E=t(8),v=t(19),g=t(20),f=t(23),h=t(21),N=t(24),y=function(e){var a=e.id,t=e.color,n=e.displayBg,l=e.openCards,c=e.clickable,s=e.visible,o={backgroundColor:n?"gray":t,visibility:s?"visible":"hidden"};return r.a.createElement("div",{className:"box",style:o,onClick:c?function(){return l(a,t)}:null})},x=t(13),C=t.n(x),k=["green","red","blue","cadetblue","orange","darkcyan","pink","brown","aqua","chartreuse"],O=function(e){for(var a=[],t=0;t<e/2;t++)a.push({id:C()(),color:k[t],displayBg:!0,clickable:!0,visible:!0}),a.push({id:C()(),color:k[t],displayBg:!0,clickable:!0,visible:!0});return w(a)},w=function(e){for(var a,t=e.length,n=0;0!==t;)n=Math.floor(Math.random()*t),a=e[t-=1],e[t]=e[n],e[n]=a;return e},A=function(e){function a(){var e,t;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={boxesArr:O(t.props.cards),firstOpen:!1,secondOpen:!1,firstColor:"",secondColor:"",counter:0,endGame:!1},t.openCards=function(e,a){t.props.increaseSteps(),t.openFirstCard(e,a),t.state.firstOpen&&(t.openSecondCard(e,a),t.disableAllClickable())},t.openFirstCard=function(e,a){if(!t.state.firstOpen){var n=Object(E.a)(t.state.boxesArr);n.forEach((function(a){a.id===e&&(a.displayBg=!1,a.clickable=!1)})),t.setState({boxesArr:n,firstOpen:!0,firstColor:a})}},t.openSecondCard=function(e,a){if(!t.state.secondOpen){var n=Object(E.a)(t.state.boxesArr);n.forEach((function(a){a.id===e&&(a.displayBg=!1,a.clickable=!1)})),t.setState({boxesArr:n,secondOpen:!0,secondColor:a})}},t.disableAllClickable=function(){var e=Object(E.a)(t.state.boxesArr);e.forEach((function(e){return e.clickable=!1})),t.setState({boxesArr:e})},t.handleEqualColors=function(){var e=Object(E.a)(t.state.boxesArr);e.forEach((function(e){e.color===t.state.firstColor?e.visible=!1:e.clickable=!0})),t.setState((function(a){return{boxesArr:e,firstOpen:!1,secondOpen:!1,firstColor:"",secondColor:"",counter:a.counter+2}}))},t.handleNotEqualColors=function(){var e=Object(E.a)(t.state.boxesArr);e.forEach((function(e){e.visible&&(e.clickable=!0,e.displayBg=!0)})),t.setState({boxesArr:e,firstOpen:!1,secondOpen:!1,firstColor:"",secondColor:""})},t.isEndGame=function(){t.state.counter===t.props.cards&&!1===t.state.endGame&&(console.log("End of a Game"),t.setState({endGame:!0}))},t}return Object(N.a)(a,e),Object(g.a)(a,[{key:"componentDidUpdate",value:function(){this.state.firstOpen&&this.state.secondOpen&&(this.state.firstColor===this.state.secondColor?setTimeout(this.handleEqualColors,1500):setTimeout(this.handleNotEqualColors,1500)),this.isEndGame()}},{key:"render",value:function(){var e=this;return this.state.endGame?r.a.createElement("div",{className:"card bg-success text-light h5 text-center"},r.a.createElement("div",{className:"card-body"},"End Game")):0===this.props.cards?r.a.createElement("div",{className:"card bg-danger text-light h5 text-center"},r.a.createElement("div",{className:"card-body"},"Nothing to display. Choose number of cards")):r.a.createElement("div",{className:"playBoard"},this.state.boxesArr.map((function(a){return r.a.createElement(y,Object.assign({key:a.id},a,{openCards:e.openCards}))})))}}]),a}(n.Component),j=function(e){return 0===e.cards?null:r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("button",{className:"btn btn-secondary btn-sm",onClick:function(){return window.location.reload()}},"Reset Game"))},G=function(e){var a=e.cards,t=Object(n.useState)(0),l=Object(u.a)(t,2),c=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement(b,{steps:c}),r.a.createElement(p,null),r.a.createElement(A,{cards:a,increaseSteps:function(){s(c+1)}}),r.a.createElement(j,{cards:a}))},S=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-secondary text-light",style:{width:"100%"}},r.a.createElement("div",{className:"card-header h2"},"About"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item bg-primary"},"Version: 1.0.0"),r.a.createElement("li",{className:"list-group-item bg-primary"},"Author: Dariusz Okonski"),r.a.createElement("li",{className:"list-group-item bg-primary"},"Year: 2019"))))},B=function(){return r.a.createElement("div",{className:"jumbotron bg-danger text-light"},r.a.createElement("h1",{className:"display-5"},"Error - there is no such a route"),r.a.createElement("p",{className:"lead"},"choose one of the options below"),r.a.createElement("hr",{className:"my-4"}),r.a.createElement(s.b,{className:"btn btn-primary btn-sm mr-2",exact:!0,to:"/",role:"button"},"Home"),r.a.createElement(s.b,{className:"btn btn-primary btn-sm mr-2",to:"/game",role:"button"},"Game"),r.a.createElement(s.b,{className:"btn btn-primary btn-sm",to:"/about",role:"button"},"About"))};var D=function(){return r.a.createElement("div",null,r.a.createElement(s.a,{basename:"/react-memory-game"},r.a.createElement(o,null),r.a.createElement("div",{style:{marginTop:"4rem"}}),r.a.createElement("section",{className:"container mt-4"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:d}),r.a.createElement(i.a,{exact:!0,path:"/game",component:function(){return r.a.createElement(G,{cards:0})}}),r.a.createElement(i.a,{exact:!0,path:"/game/eight",component:function(){return r.a.createElement(G,{cards:8})}}),r.a.createElement(i.a,{exact:!0,path:"/game/twelwe",component:function(){return r.a.createElement(G,{cards:12})}}),r.a.createElement(i.a,{exact:!0,path:"/game/sixteen",component:function(){return r.a.createElement(G,{cards:16})}}),r.a.createElement(i.a,{exact:!0,path:"/game/twenty",component:function(){return r.a.createElement(G,{cards:20})}}),r.a.createElement(i.a,{exact:!0,path:"/about",component:S}),r.a.createElement(i.a,{component:B}))),r.a.createElement("div",{style:{marginBottom:"4rem"}}),r.a.createElement(m,null)))};c.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.107bc7f3.chunk.js.map