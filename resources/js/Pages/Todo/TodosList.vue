<template>
	<ul class="todo-list">
		<li class="flex items-center justify-between mt-3" v-for="todo in todos" :key="todo.id">
			<div class="flex items-center" :class="{ 'line-through': todo.status === 'completed' }">
				<input class="focus:ring-0 text-gray-500" :checked="todo.status === 'completed'" type="checkbox" @click="toggleTodo(todo)" />
				<div class="ml-3 text-sm font-semibold" @click="childs(todo)">
					{{ todo.task }}
					<span class="text-gray-400 font-light pl-1 font-mono" v-if="todo.subTodosDetails.total">
						{{ todo.subTodosDetails.completed + "/" + todo.subTodosDetails.total }}
					</span>
				</div>
			</div>
			<div>
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

<style></style>
