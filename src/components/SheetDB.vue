<script setup lang="ts">
import { ipcRenderer } from 'electron';
import { computed, ref } from 'vue';


    const data = await fetch(`
    https://script.google.com/macros/s/AKfycbxi4cIjbuFeZ2K-kGCZJCEVJ-pkM8ppn--bnAwTMW0uSjc7ZVpCG1FolIf28JqJt5lQ6A/exec
    `).then(el => el.json());


    const dataref = ref(data);

    const textfield = ref("");

    const computedData = computed(() => 
        textfield.value === '' ? [] :
        dataref.value.filter((el: any) => {
        const norm = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return norm(el.district).includes(norm(textfield.value)) ||
        norm(el.postalCode).includes(norm(textfield.value)) 
        }).filter((el, idx) => idx < 10)
    )

    // postal_code	voivodeship	county	district

</script>

<template>  

<!-- {{ data }} -->

<input type="text" class="form-control my-2" v-model="textfield">

<table class="table table-responsive table-striped table-primary table-hover">
    <thead>
        <tr>
            <th>Kod</th>
            <th>Gmina</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="row of computedData">
            <td>{{ row['postalCode'] }}</td>
            <td>{{ row['district'] }}</td>
        </tr>
    </tbody>
</table>
    SHEETDB

</template>

<style scoped>

</style>