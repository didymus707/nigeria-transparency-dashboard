<template>
  <div class="kpi-card">
    <p class="kpi-card__title">{{ title }}</p>
    <h2 class="kpi-card__value">{{ value }}</h2>
    <p v-if="info" class="kpi-card__info">{{ info }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  info?: string;
}>();
</script>

<style scoped>
.kpi-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  gap: var(--space-2);
  box-shadow: var(--shadow-sm);
}

.kpi-card__title {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.kpi-card__value {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

.kpi-card__info {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}
</style>
