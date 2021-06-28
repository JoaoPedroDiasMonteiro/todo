<template>
	<ul class="todo-list li-border mt-3">
		<li class="flex items-center justify-between" v-for="todo in todos" :key="todo.id">
			<div class="flex items-center" :class="{ 'line-through': todo.status === 'completed' }">
				<input class="focus:ring-0 text-gray-500" :checked="todo.status === 'completed'" type="checkbox" @click="toggleTodo(todo)" />
				<input
					@keydown.enter="editTodo(todo.id)"
					:ref="'edit#' + todo.id"
					v-if="editTask === todo.id"
					type="text"
					class="input ml-3 text-sm font-semibold"
					:value="todo.task"
				/>
				<div v-if="editTask !== todo.id" class="ml-3 text-sm font-semibold cursor-pointer" @click="childs(todo)">
					{{ todo.task }}
					<span class="text-gray-400 font-light pl-1 font-mono" v-if="todo.subTodosDetails.total">
						{{ todo.subTodosDetails.completed + "/" + todo.subTodosDetails.total }}
					</span>
				</div>
			</div>
			<div>
				<button>
					<svg @click="showEditInput(todo)" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
						<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
					</svg>
				</button>
				<button>
					<svg
						class="w-4 h-4 text-gray-600 fill-current"
						@click="deleteTodo(todo)"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		todos: Object
	},
	data() {
		return {
			editTask: null
		};
	},
	methods: {
		childs(todo) {
			this.$inertia.get(route("todo.show", todo.id), {}, { only: ["modal", "todo", "subTodos"] });
		},
		toggleTodo(todo) {
			if (todo.status === "pending") {
				todo.status = "completed";
				this.$inertia.post(
					route("todo.complete", todo.id),
					{},
					{
						preserveScroll: true,
						only: ["todos", "subTodos"]
					}
				);
			} else {
				todo.status = "pending";
				this.$inertia.post(
					route("todo.uncomplete", todo.id),
					{},
					{
						preserveScroll: true,
						only: ["todos", "subTodos"]
					}
				);
			}
		},
		showEditInput(todo) {
			if (this.editTask === null || this.editTask !== todo.id) {
				this.editTask = todo.id;

				let input = "edit#" + todo.id;

				setTimeout(() => {
					this.$refs[input].focus();
				}, 45);
			} else {
				this.editTask = null;
			}
		},
		editTodo(todoId) {
			let task = this.$refs["edit#" + todoId].value;
			this.$inertia.put(
				route("todo.update", todoId),
				{
					task: task
				},
				{
					preserveScroll: true,
          only: ['subTodos', 'todos']
				}
			);

			setTimeout(() => {
				this.editTask = null;
			}, 66);
		},
		deleteTodo(todo) {
			this.$inertia.delete(route("todo.destroy", todo.id), {
				preserveScroll: true,
				only: ["todos", "subTodos"],
				onBefore: () => confirm("Are you sure you want to delete this task?")
			});
		}
	}
};
</script>

<style>
.li-border li {
	border-bottom: 1px solid rgba(209, 213, 219, 1);
	padding: 8px 3px 8px 3px;
}

.li-border li:last-child {
	border: none;
}

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
	border-bottom: 1px solid rgb(209, 213, 219) !important;
	/* background: rgba(209, 213, 219, 0.568); */
	padding: 0px;
}
</style>
