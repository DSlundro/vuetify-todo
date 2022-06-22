<template>
    <div class="text-subtitle-1 ml-5">
        {{ date }}
    </div>
</template>

<script>
import { format } from 'date-fns'

export default {
    name: 'LiveDateTime',
    data(){
        return{
            date: '',
        }
    },
    methods:{
        getDate(){
        this.date = format(new Date(), 'dd MMM yy, H:mm:ss')
        setTimeout(this.getDate, 500)
        },
    },
    mounted(){
        this.getDate()
    }
}
</script>

<style>

</style>