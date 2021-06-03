<template>
  <div class="container mx-auto mt-5">
    <div class="todo-wrapper">
      <top :title="'Tarefas de: ' + todo.task" :todoId="todo.id"></top>
      <todos-list :todos='todos'></todos-list>
    </div>
  </div>
</template>

<script>
import TodosList from './TodosList.vue';
import Top from "./Top.vue";

export default {
  components: { Top, TodosList },
  props: {
      todo: Object,
      todos: Object
  }
};
</script>

<style>
</style>