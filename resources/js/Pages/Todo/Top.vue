<template>
  <div>
    <div class="text-lg font-bold title">
      {{ title }}
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
      class="w-full px-4 py-2 mt-4 border border-gray-200 rounded-sm shadow-sm"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Lista de Todos",
    },
    todoId: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      newTodo: null,
    };
  },
  methods: {
    inputFocus() {
      this.$refs.input.focus();
    },
    addTodo() {
      if (this.newTodo) {
        this.$inertia.post(
          route("todo.store"),
          { task: this.newTodo, todo: this.todoId },
          {
            preserveScroll: true,
          }
        );
        this.newTodo = null;
      }
    },
  },
};
</script>

<style>
</style>