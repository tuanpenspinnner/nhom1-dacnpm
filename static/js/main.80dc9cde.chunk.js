(this.webpackJsonpfe=this.webpackJsonpfe||[]).push([[0],{104:function(e,t){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},127:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),o=n(18),l=n(7),i=n(8),m="https://dacnpm-nhom1.herokuapp.com",u=n(26),b=n.n(u),p={socket:b()(m,{rememberUpgrade:!0,transports:["websocket"],secure:!0,rejectUnauthorized:!1}),questions:null,numberCurrentQuestion:0,score:0,start:!1,nickName:"",pin:"",arrRoom:[],isJoinRoom:!1,disableAnswer:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_SUBMIT_PIN":return e.socket.emit("join_room",t.pin),e.socket.emit("nickName",t.nickName),e.pin=t.pin,e.nickName=t.nickName,Object(i.a)({},e);case"IS_JOIN_ROOM":return e.isJoinRoom=t.isJoinRoom,Object(i.a)({},e);case"IS_PLAY":return e.start=t.start,Object(i.a)({},e);case"LOAD_QUESTIONS":return e.questions=t.questions,Object(i.a)({},e);case"LOAD_QUESTION":return e.numberCurrentQuestion=t.numberCurrentQuestion,e.disableAnswer=t.disableAnswer,Object(i.a)({},e);case"CLICK_ANSWER":return e.disableAnswer=t.disableAnswer,Object(i.a)({},e);default:return e}},h=n(66),E={socket:b()(m,{rememberUpgrade:!0,transports:["websocket"],secure:!0,rejectUnauthorized:!1}),pin:Math.floor(1e4*Math.random())+1,startPlay:!1,questions:[],numberMembersAnswer:0,members:[],numberCurrentQuestion:0,time:0,timerId:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_NEW_MEMBER":return e.members.push(t.newMember),Object(i.a)({},e);case"CLICK_START_PLAY":return e.startPlay=t.startPlay,e.questions=Object(h.a)(t.questions),Object(i.a)({},e);case"CLICK_NEXT_QUESTION":return e.socket.emit("next",1),e.numberCurrentQuestion+=1,e.time=e.questions[e.numberCurrentQuestion].timeAnswer,e.timerId=null,e.numberMembersAnswer=0,Object(i.a)({},e);case"MEMBER_EXIT":return e.members=t.members,Object(i.a)({},e);case"MEMBER_ANSWER":return e.numberMembersAnswer+=1,e.members=t.members,Object(i.a)({},e);case"SET_TIME_QUESTION":return e.time=t.time,Object(i.a)({},e);default:return Object(i.a)({},e)}},N=Object(o.b)({player:d,host:f}),g=n(2),y=n(3),O=n(5),k=n(4),v=n(6),w=n(19),j=n(15),C=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){var t=n.props.player,a=t.socket,r=t.questions,c=t.numberCurrentQuestion,s=n.props.clickAnswer,o=r[c].rightAnswer;s(!0),e===o?(a.emit("memberAnswer",!0),alert("B\u1ea1n tr\u1ea3 l\u1eddi \u0111\xfang r\u1ed3i")):(a.emit("memberAnswer",!1),alert("B\u1ea1n tr\u1ea3 l\u1eddi sai r\u1ed3i"))},n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this,t=this.props.player,n=t.questions,a=t.numberCurrentQuestion,c=t.disableAnswer,s=n[a];return r.a.createElement("div",{className:"answers "},r.a.createElement("button",{onClick:function(){return e.onClick(1)},type:"button",disabled:c,className:"btn btn-success  col-10 col-sm-5 answer"},s.answer1),r.a.createElement("button",{onClick:function(){return e.onClick(2)},type:"button",disabled:c,className:"btn btn-success col-10 col-sm-5 answer"},s.answer2),r.a.createElement("button",{onClick:function(){return e.onClick(3)},type:"button",disabled:c,className:"btn btn-success col-10 col-sm-5 answer"},s.answer3),r.a.createElement("button",{onClick:function(){return e.onClick(4)},type:"button",disabled:c,className:"btn btn btn-success col-10 col-sm-5 answer"},s.answer4))}}]),t}(a.Component),x=Object(l.b)((function(e){return{player:e.player}}),(function(e,t){return{clickAnswer:function(t){e(function(e){return{type:"CLICK_ANSWER",disableAnswer:e}}(t))}}}))(C),A=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.player,t=e.questions[e.numberCurrentQuestion].question;return r.a.createElement("h2",{className:"question"},t)}}]),t}(a.Component),I=Object(l.b)((function(e){return{player:e.player}}),null)(A),S=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"img"})}}]),t}(a.Component),_=(n(107),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=document.getElementById("nickName").value,t=document.getElementById("pin").value;(0,n.props.clickSubmitPin)(e,parseInt(t))},n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"enterpin"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()},method:"POST",className:"formEnterpin"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"nickName",placeholder:"Nick Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"pin",placeholder:"PIN"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(){return e.onClick()}},"Enter")))}}]),t}(a.Component)),Q=Object(l.b)((function(e){return{player:e.player}}),(function(e,t){return{clickSubmitPin:function(t,n){e(function(e,t){return{type:"CLICK_SUBMIT_PIN",nickName:e,pin:t}}(t,n))}}}))(_),T=(n(108),function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"waiting row "},r.a.createElement("div",{className:"spinner-border text-success",role:"status"}),r.a.createElement("h1",{className:"text-danger"},"\u0110\u1ee3i ch\u1ee7 tr\xf2 b\u1eaft \u0111\u1ea7u tr\xf2 ch\u01a1i"),r.a.createElement("div",{className:"spinner-border text-success",role:"status"}))}}]),t}(a.Component)),M=(n(109),function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(n=Object(O.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=function(){var e=n.props.player.socket;e.on("is_join_room",(function(e){(0,n.props.isJoinRoom)(e)})),e.on("startOk",(function(e){(0,n.props.isPlay)(e)})),e.on("questions",(function(e){(0,n.props.loadQuestions)(e)})),e.on("numberCurrentQuestion",(function(e){(0,n.props.loadQuestion)(e,!1)}))},n.show=function(){var e=n.props.player,t=e.questions,a=e.start,c=e.pin,s=e.nickName,o=e.isJoinRoom;return null!==t&&a&&c&&o?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-sm-8 wrapper mx-auto"},r.a.createElement(I,null),r.a.createElement(S,null),r.a.createElement(x,null))):c&&s&&!a&&o?r.a.createElement(T,null):r.a.createElement(Q,null)},n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.show())}}]),t}(a.Component)),P=Object(l.b)((function(e){return{player:e.player}}),(function(e,t){return{isJoinRoom:function(t){e(function(e){return{type:"IS_JOIN_ROOM",isJoinRoom:e}}(t))},isPlay:function(t){e(function(e){return{type:"IS_PLAY",start:e}}(t))},loadQuestions:function(t){e(function(e){return{type:"LOAD_QUESTIONS",questions:e}}(t))},loadQuestion:function(t,n){e(function(e,t){return{type:"LOAD_QUESTION",numberCurrentQuestion:e,disableAnswer:t}}(t,n))}}}))(M),R=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=n.props.host,t=e.numberCurrentQuestion,a=e.questions,r=n.props.clickNextQuestion;t<a.length-1&&r()},n.timeCountDown=function(){var e=n.props.host.time,t=n.props.setTimeQuestion;e>0&&t(e-1)},n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.host,n=t.questions[t.numberCurrentQuestion].timeAnswer;(0,this.props.setTimeQuestion)(n),setInterval((function(){e.timeCountDown()}),100),this.props.host.socket.on("memberAnswer",(function(t){var n=e.props.host.members,a=e.props.memberAnswer;if(t.isRight){var r=n.findIndex((function(e){return e.id===t.id}));n[r]={id:n[r].id,nickName:n[r].nickName,rightQuestion:n[r].rightQuestion+1,score:n[r].score+100},n.sort((function(e,t){return e.score>t.score?-1:t.score>e.score?1:0}))}a(n)}))}},{key:"render",value:function(){var e=this.props.host,t=e.numberCurrentQuestion,n=e.questions,a=e.numberMembersAnswer,c=e.members,s=(e.time,n[t]),o=n.length,l=c.length,i=c.map((function(e,t){return r.a.createElement("tbody",{key:t},r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},t+=1),r.a.createElement("td",null,e.nickName),r.a.createElement("td",null,e.rightQuestion),r.a.createElement("td",null,e.score)))}));return r.a.createElement("div",{className:" row"},r.a.createElement("div",{className:"col-12 col-lg-8  wrapper"},r.a.createElement("h2",{className:"question"},s.question),r.a.createElement("div",{className:"card bg-dark text-white mt-3"},r.a.createElement("h3",{className:"card-title text-center"},r.a.createElement("div",{className:"d-flex flex-wrap justify-content-center mt-2"},r.a.createElement("span",{className:"pl-3 text-warning"},"Time:"),r.a.createElement("span",{className:"pl-3 pr-3"})))),r.a.createElement("div",{className:"img"}),r.a.createElement("div",{className:"answers"},r.a.createElement("button",{className:"btn btn-success col-10 col-sm-5 answer"},s.answer1),r.a.createElement("button",{className:"btn btn-success col-10 col-sm-5 answer"},s.answer2),r.a.createElement("button",{className:"btn btn-success col-10 col-sm-5 answer"},s.answer3),r.a.createElement("button",{className:"btn btn-success col-10 col-sm-5 answer"},s.answer4))),r.a.createElement("div",{className:"col-12 col-lg-4 statistic"},r.a.createElement("h1",null,"C\xe2u h\u1ecfi s\u1ed1: ",t+=1," / ",o),r.a.createElement("h1",null,"S\u1ed1 ng\u01b0\u1eddi tr\u1ea3 l\u1eddi:",a," /",l),r.a.createElement("button",{type:"button",className:"btn btn-primary nextquestion",onClick:this.onClick},"Next question"," ",r.a.createElement("i",{className:"fa fa-step-forward","aria-hidden":"true"})),r.a.createElement("div",{className:"table-wrapper-scroll-y my-custom-scrollbar"},r.a.createElement("table",{className:"table table-bordered table-striped mb-0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"STT"),r.a.createElement("th",{scope:"col"},"Nick Name"),r.a.createElement("th",{scope:"col"},"S\u1ed1 c\xe2u tr\u1ea3 l\u1eddi \u0111\xfang"),r.a.createElement("th",{scope:"col"},"\u0110i\u1ec3m s\u1ed1"))),i))))}}]),t}(a.Component),q=Object(l.b)((function(e){return{host:e.host}}),(function(e,t){return{setTimeQuestion:function(t){e(function(e){return{type:"SET_TIME_QUESTION",time:e}}(t))},clickNextQuestion:function(t){e(function(e){return{type:"CLICK_NEXT_QUESTION",numberCurrentQuestion:e}}(t))},memberAnswer:function(t){e(function(e){return{type:"MEMBER_ANSWER",members:e}}(t))}}}))(R),F=n(35),U=n.n(F),L=n(62),B=n(63),J=n.n(B),K=n(64),D=n.n(K),W=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).onClick=Object(L.a)(U.a.mark((function e(){var t,a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.host.socket,a=n.props.clickStartGame,t.emit("start",!0),e.next=5,J.a.get("https://dacnpm-nhom1.herokuapp.com/getdata ");case 5:r=e.sent,t.emit("questions",r.data),a(!0,r.data);case 8:case"end":return e.stop()}}),e)}))),n}return Object(v.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.host,n=t.socket,a=t.pin;n.emit("creat_room",a),n.on("newMember",(function(t){(0,e.props.saveNewMember)(t)})),n.on("memberExit",(function(t){var n=e.props.host.members,a=n.findIndex((function(e){return e.id===t.id}));n.splice(a,1),(0,e.props.memberExit)(n)}))}},{key:"render",value:function(){var e=this.props.host,t=e.members,n=e.pin,a=t.length,c=t.map((function(e,t){return r.a.createElement("button",{type:"button",key:t,className:"btn btn-danger member "},e.nickName," ",r.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"}))}));return r.a.createElement("div",{className:"prepareplaygame"},r.a.createElement("audio",{className:"hideAudio",controls:!0,loop:!0,autoPlay:!0},r.a.createElement("source",{src:D.a})),r.a.createElement("p",{className:"pin"},"PIN:",n),r.a.createElement("div",{className:"startgame"},r.a.createElement("button",{type:"button",onClick:this.onClick,className:"btn btn-success"},"Start Game")),r.a.createElement("div",{className:"card boxmembers"},r.a.createElement("h2",{className:"card-header"},"S\u1ed1 l\u01b0\u1ee3ng th\xe0nh vi\xean: ",a," "),r.a.createElement("div",{className:"members"},c)))}}]),t}(a.Component),Y=Object(l.b)((function(e){return{host:e.host}}),(function(e,t){return{clickStartGame:function(t,n){e(function(e,t){return{type:"CLICK_START_PLAY",startPlay:e,questions:t}}(t,n))},saveNewMember:function(t){e(function(e){return{type:"SAVE_NEW_MEMBER",newMember:e}}(t))},memberExit:function(t){e(function(e){return{type:"MEMBER_EXIT",members:e}}(t))}}}))(W),G=(n(127),function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return this.props.host.startPlay?r.a.createElement(q,null):r.a.createElement(Y,null)}}]),t}(a.Component)),X=Object(l.b)((function(e){return{host:e.host}}),null)(G),z=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Kh\xf4ng t\xecm th\u1ea5y trang b\u1ea1n \u01a1i!!!!!!!!!!!!!!!!!")}}]),t}(a.Component),V=(n(60),function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background p-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-signin"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-signin",method:"POST",id:"loginForm"},r.a.createElement("img",{src:"http://pluspng.com/img-png/login-button-png-login-button-png-image-18028-872.png",className:"card-img mb-5",alt:""}),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"text",id:"inputUserame",name:"username",className:"form-control",placeholder:"Username",autoFocus:!0,onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputUserame"},"Username")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",id:"inputPassword",name:"password",className:"form-control",placeholder:"Password",onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputPassword"},"Password")),r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:this.onchange}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",type:"button",onClick:this.onclick},"Login"),r.a.createElement(w.b,{className:"d-block text-center mt-2 small",to:"./register"},"Register"),r.a.createElement("hr",{className:"mt-5"}),r.a.createElement("button",{className:"btn btn-lg btn-google btn-block text-uppercase",type:"submit"},r.a.createElement("i",{className:"fab mr-2"})," Sign in with Google"),r.a.createElement("button",{className:"btn btn-facebook btn-block text-uppercase",type:"submit"},r.a.createElement("i",{className:"fab fa-facebook-f mr-2"})," Sign in with Facebook")))))))}}]),t}(a.Component)),H=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background p-1"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto"},r.a.createElement("div",{className:"card card-signin"},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{className:"form-signin",method:"POST",id:"loginForm"},r.a.createElement("img",{src:"https://lh3.googleusercontent.com/proxy/2yUY8bRd1oKOJgSpD5uCEOuYIOlIFWkTdlubvxfJ5K7v-9sW6Idy0aCdaAd8OQhvsgvCERwz7SAAGFFDAyqNmTiMhtKgdka-TYrK_3IXsuVeIQK0-ZlOYSJ9dF9SIH_WRA",className:"card-img  mb-5",alt:""}),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"text",name:"username",id:"inputUsername",className:"form-control",placeholder:"Username",autoFocus:!0,onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputUsername"},"Username")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"text",name:"fullname",id:"inputFullname",className:"form-control",placeholder:"Full name",onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputFullname"},"Full name")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"email",name:"email",id:"inputEmail",className:"form-control",placeholder:"Email address",onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputEmail"},"Email address")),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"password",id:"inputPassword",className:"form-control",placeholder:"Password",onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputPassword"},"Password")),r.a.createElement("div",{className:"form-label-group"},r.a.createElement("input",{type:"password",name:"confirmpassword",id:"inputConfirmPassword",className:"form-control",placeholder:"Password",onChange:this.onchange}),r.a.createElement("label",{htmlFor:"inputConfirmPassword"},"Confirm password")),r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1",onChange:this.onchange}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember password")),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block text-uppercase",type:"button",onClick:this.onclick},"Login"),r.a.createElement(w.b,{className:"d-block text-center mt-2 small",to:"./login"},"login"),r.a.createElement("hr",{className:"mt-2"}),r.a.createElement("button",{className:"btn btn-lg btn-google btn-block text-uppercase",type:"submit"},r.a.createElement("i",{className:"fab mr-2"})," Sign in with Google"),r.a.createElement("button",{className:"btn btn-lg btn-facebook btn-block text-uppercase",type:"submit"},r.a.createElement("i",{className:"fab  mr-2"})," Sign in with Facebook")))))))}}]),t}(a.Component),Z=function(e){function t(){return Object(g.a)(this,t),Object(O.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0},r.a.createElement(P,null)),r.a.createElement(j.a,{path:"/playgame",exact:!0},r.a.createElement(X,null)),r.a.createElement(j.a,{path:"/account/login",exact:!0},r.a.createElement(V,null)),r.a.createElement(j.a,{path:"/account/register",exact:!0},r.a.createElement(H,null)),r.a.createElement(j.a,null,r.a.createElement(z,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=Object(o.c)(N);s.a.render(r.a.createElement(l.a,{store:$},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,n){},64:function(e,t,n){e.exports=n.p+"static/media/backgroundaudio.249424ec.mp3"},67:function(e,t,n){e.exports=n(129)}},[[67,1,2]]]);
//# sourceMappingURL=main.80dc9cde.chunk.js.map