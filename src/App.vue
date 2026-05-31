<template>
  <AppNav />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppNav from './components/ui/AppNav.vue';
</script>
