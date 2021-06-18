<template>
  <div>
    <top></top>
    <todos-list :todos="todos"></todos-list>
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
