(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(8),s=a.n(r),i=(a(13),a(7)),d=a(1),o=a(4),l=(a(14),a(15),a(16),a(0));function j(e){return Object(l.jsx)("button",{className:"btn-add",onClick:e.onClick,style:e.style,children:e.text})}var u=function(e){return Object(l.jsxs)("div",{className:"header-container",children:[Object(l.jsx)("h3",{className:"",children:"Task Tracker"}),Object(l.jsx)(j,{onClick:e.onBtnClick,style:e.showAddTask?{backgroundColor:"red"}:{backgroundColor:"green"},text:e.showAddTask?"Close":"Add"})]})},b=(a(18),a(19),function(e){return Object(l.jsxs)("div",{className:"task",style:e.task.remainder?{borderLeft:"3px solid green"}:{border:"none"},onDoubleClick:function(){return e.toggleRemainder(e.task.id)},children:[Object(l.jsx)("h6",{children:e.task.title}),Object(l.jsx)("p",{children:e.task.date}),Object(l.jsx)("i",{className:"fas fa-times cross",onClick:function(){return e.deleteTask(e.task.id)}})]})}),f=function(e){var t=e.tasks.map((function(t){return Object(l.jsx)(b,{task:t,deleteTask:e.deleteTask,toggleRemainder:e.toggleRemainder},t.id)}));return Object(l.jsx)("div",{className:"tasks",style:e.showAddTask?{maxHeight:"220px"}:{maxHeight:"465px"},children:t})},k=(a(20),function(){return Object(l.jsxs)("div",{className:"app-footer",children:["Inspired by Brad Traversy @",Object(l.jsx)("a",{href:"https://twitter.com/traversymedia?s=20",target:"__blank",children:"traversyMedia"}),Object(l.jsx)("br",{}),"Copyright \xa9 2021 Eduard Gavrila"]})}),m=(a(21),function(e){var t=Object(n.useState)({title:"",date:"",remainder:!1}),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(l.jsxs)("form",{className:"add-task-form",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"add-task",children:"Task"}),Object(l.jsx)("input",{type:"text",id:"add-task",className:"form-control",placeholder:"Add Task",value:c.title,onChange:function(e){return r(Object(d.a)(Object(d.a)({},c),{},{title:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{for:"add-datetime",children:"Date & Time"}),Object(l.jsx)("input",{type:"text",id:"add-datetime",className:"form-control",placeholder:"Add Date and time",value:c.date,onChange:function(e){return r(Object(d.a)(Object(d.a)({},c),{},{date:e.target.value}))}})]}),Object(l.jsxs)("div",{className:"form-check mb-2",children:[Object(l.jsx)("input",{type:"checkbox",id:"remainder",className:"form-check-input",checked:c.remainder,onChange:function(e){return r(Object(d.a)(Object(d.a)({},c),{},{remainder:e.target.checked}))}}),Object(l.jsx)("label",{for:"remainder",className:"form-check-label",children:"Set Remainder"})]}),Object(l.jsx)("input",{type:"submit",className:"btn btn-dark btn-block",value:"Add Task",onClick:function(t){t.preventDefault(),e.addTaskHandler(c),r({title:"",date:"",remainder:!1})}})]})});var O=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),j=s[0],b=s[1];Object(n.useEffect)((function(){c(O())}),[]);var O=function(){var e=JSON.parse(localStorage.getItem("task-app-tasks"));return e||[]},h=function(e){localStorage.setItem("task-app-tasks",JSON.stringify(e))};return Object(l.jsxs)("div",{className:"App-container",children:[Object(l.jsx)(u,{onBtnClick:function(){b(!j)},showAddTask:j}),j?Object(l.jsx)(m,{addTaskHandler:function(e){var t=Math.floor(1e4*Math.random()),n=Object(d.a)({id:t},e);c([].concat(Object(i.a)(a),[n])),h([].concat(Object(i.a)(a),[n]))}}):null,Object(l.jsx)(f,{tasks:a,deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));c(t),h(t)},toggleRemainder:function(e){var t=a.map((function(t){return e!==t.id?t:Object(d.a)(Object(d.a)({},t),{},{remainder:!t.remainder})}));c(t),h(t)},showAddTask:j}),Object(l.jsx)(k,{})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),h()}],[[22,1,2]]]);
//# sourceMappingURL=main.aefdb51c.chunk.js.map