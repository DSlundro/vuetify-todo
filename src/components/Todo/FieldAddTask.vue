<template>
    <v-text-field
        v-model="$store.state.newTaskTitle"
        @keyup.enter="$store.dispatch('addTask', $store.state.newTaskTitle)"
        class="pa-3"
        outlined
        label="Add Task"
        hide-details
        clearable
    >
    <template v-slot:append>
        <v-icon
        @click="$store.dispatch('addTask', $store.state.newTaskTitle)"
        color="primary"
        :disabled="!$store.state.newTaskTitle"
        >
            mdi-plus
        </v-icon>
    </template>
    </v-text-field>
</template>

<script>
export default {
    name: 'FieldAddTask',
}
</script>

<style>

</style>