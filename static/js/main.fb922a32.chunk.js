(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),d=o(2),i=o.n(d),l=(o(14),o(6)),s=o(3),r=o(4),c=o(7),m=o(5),u=o(8),h=function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",{onSubmit:t.onFormSubmit},a.a.createElement("label",{className:"add-item"},"Add new Todo:"),a.a.createElement("input",{type:"text",value:t.todo,onChange:t.onInputChange}),t.editItem?a.a.createElement("button",{className:"add-btn",type:"submit"},"Edit Item"):a.a.createElement("button",{className:"add-btn",type:"submit"},"Add Item")))},f=function(t){var e=t.todos,o=t.onDeleteTodo,n=t.onEditTodo,d=e.length?e.map((function(t){return a.a.createElement("div",{className:"todo-item",key:t.id},a.a.createElement("span",{className:"todo-content"},t.content),a.a.createElement("div",{className:"btn-wrapper"},a.a.createElement("button",{className:"edit-btn",onClick:function(){return n(t.id)}},"Edit"),a.a.createElement("button",{className:"delete-btn",onClick:function(){return o(t.id)}},"Delete")))})):a.a.createElement("p",{className:"no-todos"},"You have no Todo's left, yay...!");return a.a.createElement(a.a.Fragment,null,d)},b=(o(15),function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(c.a)(this,Object(m.a)(e).call(this,t))).addTodo=function(t){var e=[].concat(Object(l.a)(o.state.todos),[t]);o.setState({todos:e})},o.editTodo=function(t){var e=o.state.todos.filter((function(e){return e.id!==t})),n=o.state.todos.find((function(e){return e.id===t}));o.setState({todos:e,todo:n.content,editItem:!0})},o.handleClearAll=function(){o.setState({todos:[]})},o.handleChange=function(t){o.setState({todo:t.target.value})},o.handleSubmit=function(t){if(t.preventDefault(),""!==o.state.todo){var e={id:Math.random(),content:o.state.todo};o.addTodo(e),o.setState({todo:"",editItem:!1})}else alert("Not allowed")},o.deleteTodo=function(t){var e=o.state.todos.filter((function(e){return e.id!==t}));o.setState({todos:e})},o.state={todos:[{id:1,content:"buy milk"},{id:2,content:"play games"}],todo:"",editItem:!1},o}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state.todos;return a.a.createElement("div",{className:"todo-app container"},a.a.createElement("h1",{className:"center blue-text"},"Todo's"),a.a.createElement(f,{todos:t,onEditTodo:this.editTodo,onDeleteTodo:this.deleteTodo}),a.a.createElement(h,{onFormSubmit:this.handleSubmit,todo:this.state.todo,onInputChange:this.handleChange,editItem:this.state.editItem}),a.a.createElement("button",{className:"clear-all",onClick:this.handleClearAll},"Clear All"))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,o){t.exports=o(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fb922a32.chunk.js.map