<template>
  <div>
    <div class="text-lg font-bold title">
      <div v-if="todoId">
        <span
          @click="back"
          class="inline-block px-3 text-white bg-blue-500 rounded cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="relative inline w-5 h-5"
            style="top: -2px"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Voltar
        </span>
      </div>
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
      class="w-full px-4 py-2 mt-4 border border-gray-200 rounded-sm shadow-sm inputfdp"
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
      type: Number,
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
    back() {
      window.history.back();
      setTimeout(() => { this.$inertia.get(window.location.href)  }, 50)
    },
    addTodo() {
      if (this.newTodo) {
        this.$inertia.post(
          route("todo.store"),
          { task: this.newTodo, todo_id: this.todoId },
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
  .inputfdp {
    outline: 2px solid transparent !important;
    outline-offset: 2px !important;
    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/) !important;
    --tw-ring-offset-width: 0px !important;
    --tw-ring-offset-color: #fff !important;
    --tw-ring-color: #818181 !important;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
    border-color: #36363600 !important;
  }
</style>