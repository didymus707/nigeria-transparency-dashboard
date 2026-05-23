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
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kpi-card__title {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
  margin: 0;
}

.kpi-card__value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.kpi-card__info {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
}
</style>
