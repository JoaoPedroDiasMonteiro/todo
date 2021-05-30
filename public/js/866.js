(self.webpackChunk=self.webpackChunk||[]).push([[866],{4866:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});var r=o(5166),n={class:"container mx-auto mt-5 todo-container"},d={class:"px-4 py-4 bg-white border border-gray-200 rounded shadow-md"},s={class:"text-lg font-bold title"},l=(0,r.createTextVNode)(" Lista de Tarefas "),c=(0,r.createTextVNode)("Windows 10"),i=(0,r.createVNode)("button",{class:"outline-none"},[(0,r.createVNode)("svg",{class:"w-3 h-3 mr-3 focus:outline-none",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createVNode)("path",{d:"M12 4v16m8-8H4"})])],-1),a=(0,r.createVNode)("span",null,"Clique para adicionar tarefas",-1),u={class:"mt-4 todo-list"},p={class:"ml-3 text-sm font-semibold"},h=(0,r.createVNode)("div",null,[(0,r.createVNode)("button",null,[(0,r.createVNode)("svg",{class:"w-4 h-4 text-gray-600 fill-current ",click:"deleteTodo(todo.id)",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[(0,r.createVNode)("path",{d:"M6 18L18 6M6 6l12 12"})])])],-1);const f={props:{todos:Object},data:function(){return{newTodo:null}},methods:{addTodo:function(){this.newTodo&&(this.$inertia.post(route("todo.store"),{task:this.newTodo},{preserveScroll:!0}),this.newTodo=null)},toggleTodo:function(e){"pending"===e.status?(e.status="completed",this.$inertia.post(route("todo.complete",e.id),{},{preserveScroll:!0})):(e.status="pending",this.$inertia.post(route("todo.uncomplete",e.id),{},{preserveScroll:!0}))}},render:function(e,t,o,f,k,m){var w=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)("div",d,[(0,r.createVNode)("div",s,[l,(0,r.createVNode)(w,{href:e.route("todo.createTodosForWindows"),class:"float-right px-3 text-white bg-blue-500 rounded"},{default:(0,r.withCtx)((function(){return[c]})),_:1},8,["href"])]),(0,r.createVNode)("div",{class:"flex items-center mt-2 text-sm cursor-pointer select-none",onClick:t[1]||(t[1]=function(){return e.inputFocus&&e.inputFocus.apply(e,arguments)})},[i,a]),(0,r.withDirectives)((0,r.createVNode)("input",{onKeydown:t[2]||(t[2]=(0,r.withKeys)((function(){return m.addTodo&&m.addTodo.apply(m,arguments)}),["enter"])),ref:"input","onUpdate:modelValue":t[3]||(t[3]=function(e){return k.newTodo=e}),type:"text",placeholder:"Quais os seus planos para hoje?",class:"w-full px-4 py-2 mt-4 border border-gray-200 rounded-sm shadow-sm "},null,544),[[r.vModelText,k.newTodo]]),(0,r.createVNode)("ul",u,[(0,r.createVNode)("div",null,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(o.todos,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("li",{class:"flex items-center justify-between mt-3",key:e.id,onClick:function(t){return m.toggleTodo(e)}},[(0,r.createVNode)("div",{class:["flex items-center",{"line-through":"completed"===e.status}]},[(0,r.createVNode)("input",{checked:"completed"===e.status,type:"checkbox"},null,8,["checked"]),(0,r.createVNode)("div",p,(0,r.toDisplayString)(e.task),1)],2),h],8,["onClick"])})),128))])])])])}},k=f}}]);