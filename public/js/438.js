(self.webpackChunk=self.webpackChunk||[]).push([[438,957,578,171],{9438:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>d});var n=t(5166),r={class:"container mx-auto mt-5"};const l={components:{Todos:t(4957).default},props:{todos:Object},render:function(e,o,t,l,d,s){var c=(0,n.resolveComponent)("todos");return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)(c,{todos:t.todos},null,8,["todos"])])}},d=l},4957:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>i});var n=t(5166),r={class:""},l={class:"px-4 py-4 bg-white border border-gray-200 rounded shadow-md"};var d=t(6838),s=t(171);const c={components:{TodosList:d.default,Top:s.default},props:{todos:Object,todo:Object},render:function(e,o,t,d,s,c){var i=(0,n.resolveComponent)("top"),a=(0,n.resolveComponent)("todos-list");return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)("div",l,[(0,n.createVNode)(i),(0,n.createVNode)(a,{todos:t.todos},null,8,["todos"])])])}},i=c},6838:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>s});var n=t(5166),r={class:"todo-list"},l=(0,n.createVNode)("path",{d:"M6 18L18 6M6 6l12 12"},null,-1);const d={props:{todos:Object},methods:{childs:function(e){this.$inertia.get(route("todo.show",e.id))},toggleTodo:function(e){"pending"===e.status?(e.status="completed",this.$inertia.post(route("todo.complete",e.id),{},{preserveScroll:!0})):(e.status="pending",this.$inertia.post(route("todo.uncomplete",e.id),{},{preserveScroll:!0}))},deleteTodo:function(e){this.$inertia.delete(route("todo.destroy",e.id))}},render:function(e,o,t,d,s,c){return(0,n.openBlock)(),(0,n.createBlock)("ul",r,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(t.todos,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("li",{class:"flex items-center justify-between mt-3",key:e.id},[(0,n.createVNode)("div",{class:["flex items-center",{"line-through":"completed"===e.status}]},[(0,n.createVNode)("input",{checked:"completed"===e.status,type:"checkbox",onClick:function(o){return c.toggleTodo(e)}},null,8,["checked","onClick"]),(0,n.createVNode)("div",{class:"ml-3 text-sm font-semibold",onClick:function(o){return c.childs(e)}},(0,n.toDisplayString)(e.task),9,["onClick"])],2),(0,n.createVNode)("div",null,[(0,n.createVNode)("button",null,[((0,n.openBlock)(),(0,n.createBlock)("svg",{class:"w-4 h-4 text-gray-600 fill-current",onClick:function(o){return c.deleteTodo(e)},fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[l],8,["onClick"]))])])])})),128))])}},s=d},171:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>p});var n=t(5166),r={class:"text-lg font-bold title"},l={key:0},d=(0,n.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"relative inline w-5 h-5",style:{top:"-2px"},viewBox:"0 0 20 20",fill:"currentColor"},[(0,n.createVNode)("path",{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"})],-1),s=(0,n.createTextVNode)(" Voltar "),c=(0,n.createTextVNode)("Windows 10"),i=(0,n.createVNode)("button",{class:"outline-none"},[(0,n.createVNode)("svg",{class:"w-3 h-3 mr-3 focus:outline-none",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,n.createVNode)("path",{d:"M12 4v16m8-8H4"})])],-1),a=(0,n.createVNode)("span",null,"Clique para adicionar tarefas",-1);const u={props:{title:{type:String,default:"Lista de Todos"},todoId:{type:String,default:null}},data:function(){return{newTodo:null}},methods:{inputFocus:function(){this.$refs.input.focus()},back:function(){window.history.back()},addTodo:function(){this.newTodo&&(this.$inertia.post(route("todo.store"),{task:this.newTodo,todo_id:this.todoId},{preserveScroll:!0}),this.newTodo=null)}},render:function(e,o,t,u,p,f){var k=(0,n.resolveComponent)("inertia-link");return(0,n.openBlock)(),(0,n.createBlock)("div",null,[(0,n.createVNode)("div",r,[t.todoId?((0,n.openBlock)(),(0,n.createBlock)("div",l,[(0,n.createVNode)("span",{onClick:o[1]||(o[1]=function(){return f.back&&f.back.apply(f,arguments)}),class:"inline-block px-3 text-white bg-blue-500 rounded cursor-pointer"},[d,s])])):(0,n.createCommentVNode)("",!0),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(t.title)+" ",1),(0,n.createVNode)(k,{href:e.route("todo.createTodosForWindows"),class:"float-right px-3 text-white bg-blue-500 rounded"},{default:(0,n.withCtx)((function(){return[c]})),_:1},8,["href"])]),(0,n.createVNode)("div",{class:"flex items-center mt-2 text-sm cursor-pointer select-none",onClick:o[2]||(o[2]=function(){return f.inputFocus&&f.inputFocus.apply(f,arguments)})},[i,a]),(0,n.withDirectives)((0,n.createVNode)("input",{onKeydown:o[3]||(o[3]=(0,n.withKeys)((function(){return f.addTodo&&f.addTodo.apply(f,arguments)}),["enter"])),ref:"input","onUpdate:modelValue":o[4]||(o[4]=function(e){return p.newTodo=e}),type:"text",placeholder:"Quais os seus planos para hoje?",class:"w-full px-4 py-2 mt-4 border border-gray-200 rounded-sm shadow-sm"},null,544),[[n.vModelText,p.newTodo]])])}},p=u}}]);