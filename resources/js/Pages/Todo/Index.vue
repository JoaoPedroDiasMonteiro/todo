<template>
    <authenticated-main-container>
        <todos :todos="todos"></todos>
        <todo-modal v-if="modal" :subTodos="subTodos" :todo="todo"></todo-modal>
    </authenticated-main-container>
</template>

<script>
import AuthenticatedVue from "@/Layouts/Authenticated.vue";
import Todos from "./Todos.vue";
import AuthenticatedMainContainer from "@/Components/AuthenticatedMainContainer.vue";
import TodoModal from './TodoModal.vue';
export default {
    layout: [AuthenticatedVue],
    components: { Todos, AuthenticatedMainContainer, TodoModal },
    props: {
        todos: Object,
        modal: Boolean,
        todo: Object,
        subTodos: Object
    },
};
</script>

<style></style>
