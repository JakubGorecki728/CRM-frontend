<script setup lang="ts">
import { app, ipcRenderer } from 'electron';
import { onMounted, ref } from 'vue'
import router from '../router/router';
import { inject } from 'vue';
import SheetDB from './SheetDB.vue';
import { useTheme } from 'vuetify/lib/framework.mjs';



  const back = function() { router.push({ name: 'Sudoku' }) } 

  const theme = useTheme();

  const changeTheme = () => theme.global.name.value = nextTheme();

  const nextTheme = () => theme.global.name.value === 'light' ? 'dark' : 'light';

</script>

<template>

  
  <button @click="back()">Go to sudoku</button>

  <button @click="changeTheme()" class="btn btn-primary">change theme to {{ nextTheme() }}</button>

  <v-container>
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>


  <Suspense>
    <template #fallback>
      <v-progress-circular
      color="blue-lighten-3"
      indeterminate
      :size="46"
      :width="10"
      ></v-progress-circular>
    </template>

    <SheetDB></SheetDB>

  </Suspense>
  


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
