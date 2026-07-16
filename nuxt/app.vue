<template>
  <main class="container">
    <div class="card">
      <h1>Hello from Flux! 👋</h1>
      <p>This Nuxt app is running on the decentralized Flux Network.</p>
      <a href="https://runonflux.com" target="_blank" rel="noopener noreferrer" class="btn">
        Learn more about Flux
      </a>
    </div>
  </main>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: #0a0a0a;
  color: #ededed;
  font-family: sans-serif;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.card {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #2563eb;
  color: #fff;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
}
</style>
