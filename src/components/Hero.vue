<script setup>
</script>

<template> 
    <div class="hero-section">
        <img src="/src/assets/MovieScreen.jpg" alt="Hero Image" class="background-image">
        <div class="hero-text">
            <h1>Welcome to StreamFlix!</h1>
            <p>Stream the latest movies and shows anytime, anywhere.</p>
        </div>
    </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: black;
  font-family: "Times New Roman", serif;
}

.hero-section {
  position: relative;
  text-align: center;
  color: white;
}

.background-image {
  width: 100%;
  height: 100vh;
  object-fit: cover; 
}

.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.hero-text h1 {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
}

.hero-text p {
  font-size: 1.5rem;
  margin-top: 10px;
}
</style>
