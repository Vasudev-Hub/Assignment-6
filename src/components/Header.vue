<script setup>
</script>
<template>
    <div class = header>
        <h1>StreamFlix</h1>
    </div>
    <div class="buttons">
        <RouterLink to="/register" class="button">Register</RouterLink>
        <RouterLink to="/login" class="button">Login</RouterLink>
    </div>
</template>
<style scoped>
h1 {
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 50px;
}

.header {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    font-style: italic;
    background-color: black;
    text-align: center;
    width: auto;
}

.button {
    display: flex;
    justify-content: center;
    width: 60px;
    margin: 20px;
    padding: 10px;
    background-color: darkgray;
}
</style>