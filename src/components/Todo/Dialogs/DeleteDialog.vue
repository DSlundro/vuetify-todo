<template>
    <v-dialog
    :value="true"
    persistent
    max-width="290"
    >
        <v-card>
        <v-card-title class="text-h5">
            Delete task?
        </v-card-title>
        <v-card-text>Are you sure you want delete this task?</v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="black"
            text
            @click="$emit('close')"
            >
            NO
            </v-btn>
            <v-btn
            color="red"
            text
            @click="$store.dispatch('deleteTask', task.id)"
            >
            YES
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DeleteDialog',
    props: ['task'],
}
</script>

<style>

</style>