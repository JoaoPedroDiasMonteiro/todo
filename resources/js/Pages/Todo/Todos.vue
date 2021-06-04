<template>
  <div class="">
    <div class="px-4 py-4 bg-white border border-gray-200 rounded shadow-md">
      <top></top>
      <todos-list :todos="todos"></todos-list>
    </div>
  </div>
</template>

<script>
import TodosList from "./TodosList.vue";
import Top from "./Top.vue";
export default {
  components: { TodosList, Top },
  props: {
    todos: Object,
    todo: Object,
  },
};
</script>

<style></style>
