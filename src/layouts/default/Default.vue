<template>
  <v-app>
    <v-app-bar app color="primary">
      <img :src="logo" alt="VinFetch Logo" height="40" class="ml-4" />
      <v-toolbar-title class="ml-1">
        <span>VinFetch</span>
      </v-toolbar-title>
    </v-app-bar>
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultView from './View.vue'
import logo from '@/assets/logo-cropped.svg'
</script>