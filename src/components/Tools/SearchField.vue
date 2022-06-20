<template>
    <v-text-field
    :value="$store.state.search"
    @input="$store.commit('setSearch', $event)"
    @focus="searchClosed = false"
    @blur="searchClosed = true"
    filled
    class="expanding-search mt-1"
    :class="{'closed' : searchClosed && !$store.state.search}"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    dense
    ></v-text-field>
</template>

<script>
export default {
    name: 'SearchField',
    data(){
        return{
            searchClosed: true,
        }
    }
}
</script>

<style lang="scss">
.expanding-search{
    transition: max-width .4s ease;
    .v-input__control{
        align-items: flex-end;
        .v-input__slot{
            cursor: pointer !important;
            &:before, &:after{
                border-color: transparent !important;
            }
        }
    }
}
.closed{
    max-width: 45px !important;
    .v-input__slot{
        background: transparent !important;
    }
}

</style>