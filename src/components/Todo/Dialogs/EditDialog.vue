<template>
    <v-dialog
    :value="true"
    persistent
    max-width="290"
    >
        <v-card>
        <v-card-title class="text-h5">
            Edit task?
        </v-card-title>
        <v-card-text>Are you sure you want edit this task?
            <v-text-field 
            v-model="taskTitle"
            @keyup.enter="saveTask"
            @keyup.esc="$emit('close')"
            />
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
            color="black"
            text
            @click="$emit('close')"
            >
            CANCEL
            </v-btn>
            <v-btn
            color="red"
            :disabled="taskTitleInvalid"
            text
            @click="saveTask"
            >
            SAVE
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DeleteDialog',
    props: ['task'],
    data(){
        return{
            taskTitle: null,
        }
    },
    computed:{
        taskTitleInvalid(){
        return !this.taskTitle || this.taskTitle === this.task.title
        }
    },
    methods:{
        saveTask(){
            if(!this.taskTitleInvalid){

                let payload = {
                    id: this.task.id,
                    title: this.taskTitle
            }
            this.$store.dispatch('updateTaskTitle', payload);
            this.$emit('close')
            }
        }
    },
    mounted(){
        this.taskTitle = this.task.title
    }
}
</script>

<style>

</style>