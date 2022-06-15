<template>
    <v-list
    flat
    class="pa-0"
    >
        <v-list-item-group
            multiple
            active-class=""
        >
        <SingleTask 
        v-for="task in $store.state.tasks" 
        :key="task.id"
        :task="task"
        />
        </v-list-item-group>
    </v-list>
</template>

<script>
import SingleTask from './Task.vue'
export default {
    components: { SingleTask },
    name: 'ListTask',
}
</script>

<style>

</style>