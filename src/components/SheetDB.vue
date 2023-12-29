<script setup lang="ts">
import { ipcRenderer } from 'electron';
import { computed, ref } from 'vue';


    const data = await fetch(`
    https://script.google.com/macros/s/AKfycbxi4cIjbuFeZ2K-kGCZJCEVJ-pkM8ppn--bnAwTMW0uSjc7ZVpCG1FolIf28JqJt5lQ6A/exec
    `).then(el => el.json());

    const model = ref(null)

    const dataref = ref(data);

</script>

<template>  

<v-autocomplete
v-model="model"
no-data-text="brak danych"
auto-select-first
clearable
label="kod pocztowy"
:items="dataref"
variant="solo-filled"
item-title="postalCode"
:loading="false"
return-object
:filter-keys="['title', 'value.district']"
>
    <template v-slot:item="data">
        <v-list-item 
        v-bind="data.props" 
        :title="`${data.item.value.postalCode} (${data.item.value.district})`"
        ></v-list-item> 
    </template>
</v-autocomplete>

<div style="width: 300px;">
    model: {{ model }}
</div>



</template>

<style scoped>

</style>