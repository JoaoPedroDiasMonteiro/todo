<template>
  <div class="">
    <!-- todo wrapper -->
    <div class="px-4 py-4 bg-white border border-gray-200 rounded shadow-md">
      <div class="text-lg font-bold title">
        {{title}}
        <inertia-link
          :href="route('todo.createTodosForWindows')"
          class="float-right px-3 text-white bg-blue-500 rounded"
          >Windows 10</inertia-link
        >
      </div>
      <div
        class="flex items-center mt-2 text-sm cursor-pointer select-none"
        @click="inputFocus"
      >
        <button class="outline-none">
          <svg
            class="w-3 h-3 mr-3 focus:outline-none"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 4v16m8-8H4"></path>
          </svg>
        </button>
        <span>Clique para adicionar tarefas</span>
      </div>
      <input
        @keydown.enter="addTodo"
        ref="input"
        v-model="newTodo"
        type="text"
        placeholder="Quais os seus planos para hoje?"
        class="w-full px-4 py-2 mt-4 border border-gray-200 rounded-sm shadow-sm "
      />

      <!-- todo list -->
      <ul class="mt-4 todo-list">
        <div>
          <li
            class="flex items-center justify-between mt-3"
            v-for="todo in todos"
            :key="todo.id"
          >
            <div
              class="flex items-center"
              :class="{ 'line-through': todo.status === 'completed' }"
            >
              <input
                :checked="todo.status === 'completed'"
                type="checkbox"
                @click="toggleTodo(todo)"
              />
              <div class="ml-3 text-sm font-semibold">{{ todo.task }}</div>
            </div>
            <div>
              <button>
                <svg
                  class="w-4 h-4 text-gray-600 fill-current "
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
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: Object,
    title: {
        type: String,
        default: 'Lista de Todos'
    }
  },
  data() {
    return {
      newTodo: null
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.$inertia.post(
          route("todo.store"),
          { task: this.newTodo },
          {
            preserveScroll: true
          }
        );
        this.newTodo = null;
      }
    },
    toggleTodo(todo) {
      if (todo.status === "pending") {
        todo.status = "completed";
        this.$inertia.post(
          route("todo.complete", todo.id),
          {},
          {
            preserveScroll: true
          }
        );
      } else {
        todo.status = "pending";
        this.$inertia.post(
          route("todo.uncomplete", todo.id),
          {},
          {
            preserveScroll: true
          }
        );
      }
    },
    deleteTodo(todo) {
      this.$inertia.delete(route("todo.destroy", todo.id));
    }
  }
};
</script>

<style></style>
