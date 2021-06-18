<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <top :title="'Tarefas de: ' + todo.task" :todoId="todo.id"></top>
      <todos-list :todos='todos'></todos-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticatedVue from '@/Layouts/Authenticated.vue';
import TodosList from './TodosList.vue';
import Top from "./Top.vue";

export default {
  layout: [ AuthenticatedVue ],
  components: { Top, TodosList },
  props: {
      todo: Object,
      todos: Object
  }
};
</script>

<style>
</style>