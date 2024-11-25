<script setup>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="app-container">
        <Header />
        <Hero />
        <Footer />
    </div>
</template>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f9f9f9; 
}
</style>
