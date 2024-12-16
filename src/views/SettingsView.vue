Settings View (bottom) <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from "../store";

  const store = useStore();
  const firstName = ref(store.firstName);
  const lastName = ref(store.lastName);
  const email = ref(store.email);

  const router = useRouter();

  function handleSave() {

    store.firstName = firstName.value;
    store.lastName = lastName.value;

    alert("Your changes have been saved!");
    router.push("/movies");
  }
</script>

<template>
  <div class="streamflix-theme">
    <div class="settings-view">
      <h1>User Settings</h1>
      <form @submit.prevent="handleSave">
        <div class="form-group">
          <label for="firstName">First Name:</label>
          <input v-model="firstName" id="firstName" type="text" placeholder="Enter first name" class="input-field" />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name:</label>
          <input v-model="lastName" id="lastName" type="text" placeholder="Enter last name" class="input-field" />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input :value="email" id="email" type="email" class="input-field" disabled />
        </div>
        <button type="submit" class="button save">Save Changes</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.streamflix-theme {
  font-family: Arial, sans-serif;
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.settings-view {
  background: #2a2a2a;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #f5a623;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #cccccc;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #444;
  border-radius: 4px;
  background: #333;
  color: #ffffff;
}

.input-field:focus {
  outline: none;
  border-color: #f5a623;
  box-shadow: 0 0 5px #f5a623;
}

.button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button.save {
  background-color: #f5a623;
  color: #ffffff;
  font-weight: bold;
  transition: background-color 0.3s;
}

.button.save:hover {
  background-color: #e5941f;
}
</style>
