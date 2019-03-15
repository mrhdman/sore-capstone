(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(39),l=a.n(o),c=a(2),s=a(3),u=a(5),i=a(4),m=a(6),h=a(106),E=a(105),p=(a(48),a(104));a(49);var d=function(e){return r.a.createElement("div",{className:"childrenInlineBlock"},r.a.createElement("div",{className:"leftArm"},r.a.createElement("div",{className:"leftForearmFistContainer"},r.a.createElement("div",{className:"leftFist"}),r.a.createElement("div",{className:"leftForearm"})),r.a.createElement("div",{className:"leftBicep"})),r.a.createElement("div",{className:"soreTitle"},r.a.createElement(p.a,{to:"/"},r.a.createElement("button",null,r.a.createElement("h1",null,"SORE")))),r.a.createElement("div",{className:"rightArm"},r.a.createElement("div",{className:"rightBicep"}),r.a.createElement("div",{className:"rightForearmFistContainer"},r.a.createElement("div",{className:"rightForearm"}),r.a.createElement("div",{className:"rightFist"}))))},b=a(8),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).testAuth=function(e){"/login".then(function(e){console.log(e)}).catch(function(e){console.log(e)})},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="";return e=void 0!==this.props.auth.username?r.a.createElement("span",null,"Hello, ",this.props.auth.username,"."):r.a.createElement("span",{className:"loginOrRegister"},r.a.createElement(p.a,{to:"/login"},"login")," or ",r.a.createElement(p.a,{to:"/register"},"register")),r.a.createElement("div",{className:"login-nav-bar"},e)}}]),t}(n.Component);var f=Object(b.b)(function(e){return{auth:e.auth}})(v);a(54);var O=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement(f,null))};a(55);a(56);var w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbarContainer"},r.a.createElement("div",{className:"navbarRow"},r.a.createElement("div",{className:"workoutButtonContainer"},r.a.createElement(p.a,{to:"/workout"},r.a.createElement("button",{className:"workoutButton"},r.a.createElement("h2",null,"WORKOUTS")))),r.a.createElement("div",{className:"timerButtonContainer"},r.a.createElement(p.a,{to:"/timer"},r.a.createElement("button",{className:"timerButton"},r.a.createElement("h2",null,"TIMER"))))),r.a.createElement("div",{className:"navbarRow"},r.a.createElement("div",{className:"logButtonContainer"},r.a.createElement(p.a,{to:"/log"},r.a.createElement("button",{className:"logButton"},r.a.createElement("h2",null,"LOG"))))))}}]),t}(n.Component),g=a(7),N=a(9),j=a.n(N),k=function(e){return{type:"AUTH_ACTION",payload:j()({url:"".concat(window.apiHost,"/register"),method:"POST",data:e})}},y=a(21),T=a.n(y),C=(a(35),a(87),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).registerSubmit=function(t){t.preventDefault();var a=t.target[0].value,n=t.target[1].value;e.props.authAction({username:a,password:n})},e.state={msg:"",showAlert:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e),"userExists"===e.auth.msg?this.setState({showAlert:!0}):"userAdded"===e.auth.msg&&this.props.history.push("/")}},{key:"render",value:function(){var e=this,t=this.state.msg;return r.a.createElement("main",null,r.a.createElement(T.a,{show:this.state.showAlert,title:"Error",text:"This Email is already registered. Login or choose a different email.",onConfirm:function(){return e.setState({showAlert:!1})}}),r.a.createElement("div",{className:"registerContainer"},r.a.createElement("h3",null,t),r.a.createElement("form",{onSubmit:this.registerSubmit},r.a.createElement("div",{className:"email-input-field"},r.a.createElement("input",{className:"validate",type:"email",name:"email",id:"email",defaultValue:"email"})),r.a.createElement("div",{className:"password-input-field"},r.a.createElement("input",{className:"validate",type:"password",name:"password",id:"password",defaultValue:"****"})),r.a.createElement("div",{className:"createAccountButtonContainer"},r.a.createElement("button",{type:"submit",name:"createAccountButton"},"create account")))))}}]),t}(n.Component));var R=Object(b.b)(function(e){return{auth:e.auth}},function(e){return Object(g.b)({authAction:k},e)})(C),A=function(e){return{type:"LOGIN_ACTION",payload:j()({url:"".concat(window.apiHost,"/login"),method:"POST",data:e})}},S=(a(88),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).handleLogin=function(t){t.preventDefault();var a=t.target[0].value,n=t.target[1].value;e.props.loginAction({username:a,password:n})},e.state={showAlert:!1,msg:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e),"badPassword"===e.auth.msg?this.setState({showAlert:!0,msg:"Please re-enter your password"}):"badUser"===e.auth.msg?this.setState({showAlert:!0,msg:"Username not found"}):"loginSuccess"===e.auth.msg&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement(T.a,{show:this.state.showAlert,title:"Login Error",text:this.state.msg,onConfirm:function(){return e.setState({showAlert:!1})}}),r.a.createElement("div",{className:"loginContainer"},r.a.createElement("form",{onSubmit:this.handleLogin},r.a.createElement("div",{className:"email-input-field"},r.a.createElement("input",{className:"validate",type:"email",name:"email",id:"email",defaultValue:"email"})),r.a.createElement("div",{className:"password-input-field"},r.a.createElement("input",{className:"validate",type:"password",name:"password",id:"password",defaultValue:"****"})),r.a.createElement("div",{className:"loginButtonContainer"},r.a.createElement("button",{type:"submit",name:"createAccountButton"},"login")))))}}]),t}(n.Component));var W=Object(b.b)(function(e){return{auth:e.auth}},function(e){return Object(g.b)({loginAction:A},e)})(S),B=(a(16),function(e){return{type:"GET_WORKOUTS",payload:j()({method:"POST",url:"".concat(window.apiHost,"/personalworkouts/getuserworkouts"),data:{token:e}})}}),L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).trash=function(t){j.a.get("".concat(window.apiHost,"/personalworkouts/trash/").concat(t.target.id)).then(function(t){"deleted"===t.data.msg&&e.props.getPersonalWorkouts(e.props.auth.token)})},e.state={workouts:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.row;return r.a.createElement("tr",null,r.a.createElement("th",{className:"nameRow"},e.name),r.a.createElement("th",{className:"setsRow"},e.sets),r.a.createElement("th",{className:"repsRow"},e.reps),r.a.createElement("th",{className:"weightRow"},e.weight),r.a.createElement("th",{className:"notesRow"},e.notes),r.a.createElement("th",{className:"deleteRow",id:e.id,onClick:this.trash},"TRASH"))}}]),t}(n.Component);var I=Object(b.b)(function(e){return{auth:e.auth}},function(e){return Object(g.b)({getPersonalWorkouts:B},e)})(L),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={workouts:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(this.props.auth.token)this.props.getPersonalWorkouts(this.props.auth.token)}},{key:"render",value:function(){console.log(this.props);var e=this.props.workouts.map(function(t,a){return console.log(e),r.a.createElement(I,{key:a,row:t})});return r.a.createElement("div",{className:"workoutTable"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"firstRow"},r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"SETS"),r.a.createElement("th",null,"REPS"),r.a.createElement("th",null,"WEIGHT"),r.a.createElement("th",null,"NOTES"),r.a.createElement("th",null,"DELETE"))),r.a.createElement("tbody",null,e)))}}]),t}(n.Component);var P=Object(b.b)(function(e){return{auth:e.auth,workouts:e.personalWorkouts}},function(e){return Object(g.b)({getPersonalWorkouts:B},e)})(x),H=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={workouts:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.row;return r.a.createElement("tr",null,r.a.createElement("th",{className:"nameRow"},e.name),r.a.createElement("th",{className:"setsRow"},e.sets),r.a.createElement("th",{className:"repsRow"},e.reps),r.a.createElement("th",{className:"weightRow"},e.weight),r.a.createElement("th",{className:"notesRow"},e.notes))}}]),t}(n.Component);var _=Object(b.b)(function(e){return{auth:e.auth}},function(e){return Object(g.b)({getPersonalWorkouts:B},e)})(H),D=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={workout:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(window.apiHost,"/workoutlog/getworkouts")).then(function(t){e.setState({workout:t.data})})}},{key:"render",value:function(){var e=this.state.workout.map(function(e,t){return r.a.createElement(_,{key:t,row:e})});return r.a.createElement("div",{className:"workoutTable"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"firstRow"},r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"SETS"),r.a.createElement("th",null,"REPS"),r.a.createElement("th",null,"WEIGHT"),r.a.createElement("th",null,"NOTES"))),r.a.createElement("tbody",null,e)))}}]),t}(n.Component),G=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"BrowseWorkoutsContainer"},r.a.createElement("h1",{className:"TITLE"},"BROWSE WORKOUTS"),r.a.createElement("div",{className:"workoutButtons"},r.a.createElement(p.a,{to:"/workout/browse/personal"},r.a.createElement("button",{className:"personalButton"},r.a.createElement("h2",null,"PERSONAL"))),r.a.createElement(p.a,{to:"/workout/browse/global"},r.a.createElement("button",{className:"globalButton"},r.a.createElement("h2",null,"GLOBAL")))),r.a.createElement("div",{className:"workoutRoutes"},r.a.createElement(E.a,{exact:!0,path:"/workout/browse/personal",component:P}),r.a.createElement(E.a,{exact:!0,path:"/workout/browse/global",component:D}))))}}]),t}(n.Component),U=function(e){return{type:"CREATE_WORKOUT_ACTION",payload:j()({url:"".concat(window.apiHost,"/workout/create"),method:"POST",data:e})}},M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).createWorkoutSubmit=function(e){e.preventDefault();var t=e.target[0].value,n=e.target[1].value,r=e.target[2].value,o=e.target[3].value,l=e.target[4].value;a.props.createWorkoutAction({name:t,sets:n,reps:r,weight:o,notes:l,username:a.props.auth.username})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"createWorkoutContainer"},r.a.createElement("h1",{className:"TITLE"},"CREATE WORKOUTS"),r.a.createElement("form",{onSubmit:this.createWorkoutSubmit},r.a.createElement("table",{className:"createWorkoutTable"},r.a.createElement("tr",{className:"notInputRow"},r.a.createElement("th",null,"name")),r.a.createElement("tr",{className:"inputRow"},r.a.createElement("th",null,r.a.createElement("input",{type:"name",name:"name",id:"name",maxlength:"21",defaultValue:"Bench"}))),r.a.createElement("tr",{className:"notInputRow"},r.a.createElement("th",null,"sets")),r.a.createElement("tr",{className:"inputRow"},r.a.createElement("th",null,r.a.createElement("input",{type:"number",name:"sets",id:"sets",min:"0",defaultValue:"5"}))),r.a.createElement("tr",{className:"notInputRow"},r.a.createElement("th",null,"reps")),r.a.createElement("tr",{className:"inputRow"},r.a.createElement("th",null,r.a.createElement("input",{type:"number",name:"reps",id:"reps",min:"0",defaultValue:"5"}))),r.a.createElement("tr",{className:"notInputRow"},r.a.createElement("th",null,"weight")),r.a.createElement("tr",{className:"inputRow"},r.a.createElement("th",null,r.a.createElement("input",{type:"number",name:"weight",id:"weight",min:"0",step:"5",defaultValue:"225"}))),r.a.createElement("tr",{className:"notInputRow"},r.a.createElement("th",null,"notes")),r.a.createElement("tr",{className:"inputRow"},r.a.createElement("th",null,r.a.createElement("input",{type:"text",name:"notes",id:"notes",maxlength:"31",defaultValue:"HEAVY"})))),r.a.createElement("div",{className:"createWorkoutButtonContainer"},r.a.createElement("button",{type:"submit",name:"createWorkoutButton"},"Add Workout"))))}}]),t}(n.Component);var V=Object(b.b)(function(e){return{addWorkouts:e.addWorkouts,auth:e.auth}},function(e){return Object(g.b)({createWorkoutAction:U},e)})(M),F=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"quadChildrenContainer"},r.a.createElement("h1",{className:"TITLE"},"WORKOUTS"),r.a.createElement("div",{className:"workoutButtons"},r.a.createElement(p.a,{to:"/workout/browse"},r.a.createElement("button",{className:"browseButton"},r.a.createElement("h2",null,"BROWSE"))),r.a.createElement(p.a,{to:"/workout/create"},r.a.createElement("button",{className:"createButton"},r.a.createElement("h2",null,"CREATE")))),r.a.createElement("div",{className:"workoutRoutes"},r.a.createElement(E.a,{exact:!0,path:"/workout/browse",component:G}),r.a.createElement(E.a,{exact:!0,path:"/workout/create",component:V}))))}}]),t}(n.Component),K=(a(24),function(e){return{type:"ADD_TO_LOG_ACTION",payload:j()({url:"".concat(window.apiHost,"/timer/stopwatch"),method:"POST",data:e})}}),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).stopWatch=function(){e.state.count>-1&&e.setState({count:e.state.count+1})},e.startButtonClicked=function(t){if(!e.state.stopWatchOn){var a=setInterval(e.stopWatch,1e3);e.setState({stopWatchOn:!0}),e.setState({interval:a})}},e.stopButtonClicked=function(t){e.setState({stopWatchOn:!1}),clearInterval(e.state.interval)},e.logButtonClicked=function(t){e.setState({stopWatchOn:!1}),clearInterval(e.state.interval)},e.submitToLog=function(t){t.preventDefault();var a=document.getElementById("name").value,n=document.querySelector(".hours").innerText+document.querySelector(".minutes").innerText+document.querySelector(".seconds").innerText,r=new Date,o=r.getDate(),l=r.getMonth()+1+"/"+o+"/"+r.getFullYear();l=l.replace(/\//g,"-");var c=t.target[3].value;e.props.addToLogFromStopwatchAction({name:a,llength:n,todaysDate:l,notes:c,username:e.props.auth.username})},e.resetButtonClicked=function(t){e.setState({stopWatchOn:!1,count:0}),clearInterval(e.state.interval)},e.state={count:0,stopWatchOn:!1,interval:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.count,t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),n=Math.floor(e-3600*t-60*a);return r.a.createElement("div",{className:"stopwatchContainer"},r.a.createElement("h1",{className:"TITLE"},"STOPWATCH"),r.a.createElement("form",{onSubmit:this.submitToLog},r.a.createElement("div",null,r.a.createElement("input",{type:"name",name:"name",id:"name",maxlength:"21",defaultValue:"Name"})),r.a.createElement("div",{className:"buttonsAndClockContainer"},r.a.createElement("div",{className:"top-button-container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:"start-button"},r.a.createElement("button",{className:"start-btn",type:"button",onClick:this.startButtonClicked})))),r.a.createElement("div",{className:"clock-container",type:"llength",id:"llength"},r.a.createElement("span",{className:"hours"},t<10?"0".concat(t):"".concat(t)),r.a.createElement("span",{className:"minutes"},a<10?":0".concat(a,":"):":".concat(a,":")),r.a.createElement("span",{className:"seconds"},n<10?"0".concat(n):"".concat(n))),r.a.createElement("div",{className:"bottom-button-container"},r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:"stop-button"},r.a.createElement("button",{className:"stop-btn",type:"submit",onClick:this.stopButtonClicked}))))),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"notes",id:"notes",maxlength:"31",defaultValue:"notes"}))),r.a.createElement("div",{className:"button-container"},r.a.createElement("div",{className:"reset-button"},r.a.createElement("button",{className:"reset-btn",type:"button",onClick:this.resetButtonClicked},"RESET"))))}}]),t}(n.Component);var J=Object(b.b)(function(e){return{addToLog:e.addToLog,auth:e.auth}},function(e){return Object(g.b)({addToLogFromStopwatchAction:K},e)})(q);var Y=function(e){return r.a.createElement("div",{className:"countdownContainer"},r.a.createElement("h3",null,"Countdown timer coming soon!"))},z=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"quadChildrenContainer"},r.a.createElement("h1",{className:"TITLE"},"TIMER"),r.a.createElement("div",{className:"timerButtons"},r.a.createElement(p.a,{to:"/timer/stopwatch"},r.a.createElement("button",{className:"stopwatchButton"},r.a.createElement("h2",null,"STOPWATCH"))),r.a.createElement(p.a,{to:"/timer/countdown"},r.a.createElement("button",{className:"countdownButton"},r.a.createElement("h2",null,"COUNTDOWN")))),r.a.createElement("div",{className:"timerRoutes"},r.a.createElement(E.a,{exact:!0,path:"/timer/stopwatch",component:J}),r.a.createElement(E.a,{exact:!0,path:"/timer/countdown",component:Y}))))}}]),t}(n.Component);a(90);var Q=function(e){return r.a.createElement("div",{className:"quadChildrenContainer"},r.a.createElement("h1",{className:"TITLE"},"PLANNER"))},X=function(e){return{type:"GET_LOG",payload:j()({method:"POST",url:"".concat(window.apiHost,"/personallog/getuserlog"),data:{token:e}})}},Z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).trash=function(t){j.a.get("".concat(window.apiHost,"/personallog/trash/").concat(t.target.id)).then(function(t){"deleted"===t.data.msg&&e.props.getPersonalLog(e.props.auth.token)})},e.state={log:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.row;return r.a.createElement("tr",null,r.a.createElement("th",{className:"nameRow"},e.name),r.a.createElement("th",{className:"timeRow"},e.llength),r.a.createElement("th",{className:"dateRow"},e.date),r.a.createElement("th",{className:"notesRow"},e.notes),r.a.createElement("th",{className:"deleteRow",id:e.id,onClick:this.trash},"TRASH"))}}]),t}(n.Component);var $=Object(b.b)(function(e){return{auth:e.auth}},function(e){return Object(g.b)({getPersonalLog:X},e)})(Z),ee=(a(91),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(i.a)(t).call(this))).state={logs:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(this.props.auth.token)this.props.getPersonalLog(this.props.auth.token)}},{key:"render",value:function(){console.log(this.props);var e=this.props.logs.map(function(e,t){return console.log(e),r.a.createElement($,{key:t,row:e})});return r.a.createElement("div",{className:"logTable"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"firstRow"},r.a.createElement("th",null,"NAME"),r.a.createElement("th",null,"TIME"),r.a.createElement("th",null,"DATE"),r.a.createElement("th",null,"NOTES"),r.a.createElement("th",null))),r.a.createElement("tbody",null,e)))}}]),t}(n.Component));var te=Object(b.b)(function(e){return{auth:e.auth,logs:e.personalLog}},function(e){return Object(g.b)({getPersonalLog:X},e)})(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(O,null),r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{exact:!0,path:"/"}),r.a.createElement(E.a,{exact:!0,path:"/register",component:R}),r.a.createElement(E.a,{exact:!0,path:"/login",component:W}),r.a.createElement(E.a,{exact:!0,path:"/workout",component:F}),r.a.createElement(E.a,{exact:!0,path:"/timer",component:z}),r.a.createElement(E.a,{exact:!0,path:"/planner",component:Q}),r.a.createElement(E.a,{exact:!0,path:"/log",component:te}),r.a.createElement(E.a,{exact:!0,path:"/log/logentry",component:$}))))}}]),t}(n.Component),ne=Object(g.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"AUTH_ACTION"===t.type||"LOGIN_ACTION"===t.type?t.payload.data:"LOGOUT"===t.type?[]:e},addToLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_LOG_ACTION"===t.type?t.payload.data:e},addWorkout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CREATE_WORKOUT_ACTION"===t.type?t.payload.data:e},personalLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOG":return t.payload.data;default:return e}},personalWorkouts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_WORKOUTS":return t.payload.data;default:return e}}}),re=a(42),oe=a.n(re),le=Object(g.a)(oe.a)(g.d)(ne);l.a.render(r.a.createElement(b.a,{store:le},r.a.createElement(ae,null)),document.getElementById("root"))},16:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){e.exports=a(103)},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.98623513.chunk.js.map