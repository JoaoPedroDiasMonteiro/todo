<template class="font-serif">
	<div>
		<div class="text-blue-500 cursor-pointer inline-block" @click="back">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			<span> </span>
			{{ backText }}
		</div>
		<div class="ml-8 mt-2 text-3xl">
			{{ todo.task }}
		</div>
		<slot />
		<input @keydown.enter="addTodo" ref="input" v-model="newTodo" type="text" placeholder="Add sub-task" class="w-full px-4 py-2 rounded-sm shadow-sm input" />
	</div>
</template>

<script>
export default {
	props: {
		todo: Object
	},
	data() {
		return {
			newTodo: null
		};
	},
	computed: {
		backText() {
			if (this.todo.todo != null) {
				return this.todo.todo.task;
			}
			return "Back to TODOS";
		}
	},
	methods: {
		back() {
			if (this.todo.todo != null) {
				this.$inertia.get(
					route("todo.show", this.todo.todo.id),
					{},
					{
						only: ["subTodos", "todo"]
					}
				);
			} else {
				this.$inertia.get(route("todo.index"), {}, {});
			}
		},
		addTodo() {
			if (this.newTodo) {
				this.$inertia.post(
					route("todo.store"),
					{
						task: this.newTodo,
						todo_id: this.todo.id
					},
					{
						preserveScroll: true,
						only: ["subTodos"]
					}
				);
				this.newTodo = null;
			}
		}
	}
};
</script>

<style scoped>
.input {
	outline: 2px solid transparent !important;
	outline-offset: 2px !important;
	--tw-ring-inset: var(--tw-empty, /*!*/ /*!*/) !important;
	--tw-ring-offset-width: 0px !important;
	--tw-ring-offset-color: #fff !important;
	--tw-ring-color: #818181 !important;
	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
	box-shadow: none !important;
	border-color: none !important;
	border: none !important;
	border-top:  1px solid rgba(209, 213, 219, 1) !important;
}

.input:focus {
	border-top: 1px solid gray !important;
}
</style>
