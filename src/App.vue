<script setup lang="ts">
import { provide, ref } from 'vue';
import { DbService } from './services/DbService'
provide("DbService", new DbService())


</script>

<template>
  <div>
    <nav class="nav nav-tabs m-2 justify-content-center">
      <router-link :to="{name: 'Hello'}" class="nav-link active" role="presentation">Go to Hello</router-link>
      <router-link to="/test-db" class="nav-link active" role="presentation">Test DB</router-link>
      <router-link to="/test-vuetify" class="nav-link active" role="presentation">Test Vuetify</router-link>
    </nav>
    <router-view />
  </div>  
</template>

<style>

</style>
