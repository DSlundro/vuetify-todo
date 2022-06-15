<template>
    <div>
        <v-menu
        bottom
        left
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="on"
                >
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="handleClick(i)"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <EditDialog 
        v-if="dialogs.edit" 
        @close="dialogs.edit = false"
        :task="task"
        />
        <DueDateDialog 
        v-if="dialogs.dueDate" 
        @close="dialogs.dueDate = false"
        :task="task"
        />
        <DeleteDialog 
        v-if="dialogs.delete" 
        @close="dialogs.delete = false"
        :task="task"
        />
    </div>
</template>

<script>
import DeleteDialog from './Dialogs/DeleteDialog.vue'
import DueDateDialog from './Dialogs/DueDateDialog.vue'
import EditDialog from './Dialogs/EditDialog.vue'
export default {
    props: ['task'],
    components: { DeleteDialog, EditDialog, DueDateDialog },
    name: 'TaskMenu',
    data: () => ({
        dialogs: {
            edit: false,
            dueDate: false,
            delete: false,
            },
        items: [
            { 
                title: 'Edit',
                icon: 'mdi-pencil', 
                click(){
                    this.dialogs.edit = true
                }
            },
            { 
                title: 'Due date',
                icon: 'mdi-calendar',
                click(){
                    this.dialogs.dueDate = true
                },
            },
            { 
                title: 'Delete',
                icon: 'mdi-delete',
                click(){
                    this.dialogs.delete = true
                },
            },
        ],
    }),
    methods:{
        handleClick(i){
            this.items[i].click.call(this)
        }
    }
}
</script>

<style>

</style>