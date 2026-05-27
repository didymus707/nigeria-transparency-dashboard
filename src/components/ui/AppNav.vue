<template>
  <nav class="app-nav__container">
    <span class="app-nav__brand">OjuOwó</span>
    <RouterLink to="/" class="app-nav__link">Overview</RouterLink>
    <RouterLink to="/contracts" class="app-nav__link">Contracts</RouterLink>
    <RouterLink to="/budget" class="app-nav__link">Budget</RouterLink>
    <RouterLink to="/risk-flags" class="app-nav__link">Risk Flags</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-nav__container {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  padding: var(--space-4) var(--space-8);
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}
.app-nav__brand {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-text-primary);
  margin-right: auto;
}

.app-nav__link {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  transition: color 0.2s;
}

.app-nav__link.router-link-exact-active {
  color: var(--color-accent);
  font-weight: 600;
}

.app-nav__link:hover {
  color: var(--color-text-primary);
}
</style>
