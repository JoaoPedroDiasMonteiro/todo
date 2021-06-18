<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <todos :todos="todos"></todos>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticatedVue from '@/Layouts/Authenticated.vue';
import Todos from "./Todos.vue";
export default {
  layout: [AuthenticatedVue],
  components: { Todos },
  props: {
    todos: Object
  }
};
</script>

<style></style>
