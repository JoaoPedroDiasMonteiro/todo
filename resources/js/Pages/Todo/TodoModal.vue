<template>
    <div class="modal-container" @click="close">
        <div class="content-container shadow-md" @click.stop="t">
            <todo-modal-header :todo="todo">
                <todos-list :todos="subTodos"></todos-list>
            </todo-modal-header>
        </div>
    </div>
</template>

<script>
import TodoModalHeader from '@/Components/Todo/TodoModalHeader.vue';
import TodosList from './TodosList.vue';
import Top from './Top.vue';
export default {
    components: { TodosList, Top, TodoModalHeader },
    props: {
        todo: Object,
        subTodos: Object,
    },
    methods: {
        close() {
            this.$inertia.get(route("todo.index"));
        },
        t() {},
    },
};
</script>

<style scoped>
.modal-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 200000;
}
.content-container {
    width: 100%;
    height: 100%;
    max-width: 900px;
    margin: auto;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
}
</style>
