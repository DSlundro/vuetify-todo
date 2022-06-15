<template>
    <v-text-field
        v-model="$store.state.newTaskTitle"
        @click:append="$store.dispatch('addTask', $store.state.newTaskTitle)"
        @keyup.enter="$store.dispatch('addTask', $store.state.newTaskTitle)"
        class="pa-3"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        hide-details
        clearable
    ></v-text-field>
</template>

<script>
export default {
    name: 'FieldAddTask',
}
</script>

<style>

</style>