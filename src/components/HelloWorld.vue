<script setup lang="ts">
import { app, ipcRenderer } from 'electron';
import { onMounted, ref } from 'vue'
import router from '../router/router';
import { inject } from 'vue';
import SheetDB from './SheetDB.vue';



  const back = function() { router.push({ name: 'Sudoku' }) } 

  const count = ref(0)

</script>

<template>

  
  <button @click="back()">Go to sudoku</button>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <Suspense><SheetDB></SheetDB></Suspense>


</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
