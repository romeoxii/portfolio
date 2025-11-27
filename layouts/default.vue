<script setup>
import NavBar from "~/components/NavBar.vue";
import Toggle from "~/components/toggle.vue";
</script>

<template>
    <div class="relative">
        <NavBar />
        <NuxtPage />
        <Toggle class="fixed bottom-5 right-5" />
    </div>
</template>
