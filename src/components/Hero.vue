<script setup>
</script>
<template>
    <div class="hero-section">
        <div class="text">
            <h2>Welcome to StreamFlix!</h2>
            <p>Stream the latest movies and shows anytime, anywhere.</p>
        </div>
        <img src="/src/assets/Hero.jpg" alt="Hero" class="hero">
        <button class="herobuttons">Browse Movies</button>
        <button class="herobuttons2">Trending Movies</button>
    </div>
</template>
<style scoped>
.hero-section {
    position: relative;
    color: white;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 55px;
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.hero {
    width: 100%;
    height: 5%;
}

.herobuttons {
    position: absolute;
    top: 67%;
    left: 39%;
    transform: translate(-50%, -50%);
    background-color: #ffffffd8;
    color: rgb(0, 0, 0);
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    border-radius: 20px;
    text-align: center;
    transition-duration: 0.4s;
    cursor: pointer;
}

.herobuttons:hover {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
}

.herobuttons2 {
    position: absolute;
    top: 67%;
    left: 61%;
    transform: translate(-50%, -50%);
    background-color: #ffffffd8;
    color: rgb(0, 0, 0);
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    border-radius: 20px;
    text-align: center;
    transition-duration: 0.4s;
    cursor: pointer;
}

.herobuttons2:hover {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
}
</style>