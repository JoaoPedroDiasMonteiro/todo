<template>
<div class="container mx-auto mt-5">
  <todos :todos="todos"></todos>
</div>
</template>

<script>
import Todos from './Todos.vue';
export default {
  components: { Todos },
  props: {
    todos: Object
  }
};
</script>

<style></style>
