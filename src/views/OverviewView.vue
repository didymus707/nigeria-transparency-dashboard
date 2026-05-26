<template>
  <div class="overview__wrapper">
    <section class="overview__section">
      <h2>Overview</h2>
      <div class="overview__cards">
        <KpiCard
          title="Total Contracts"
          :value="computedContracts"
          :info="computedContractsChange + ' from last year'"
        />
        <KpiCard
          title="Total Spend"
          :value="computedCurrency"
          :info="computedSpendChange + ' from last year'"
        />
        <KpiCard title="Flagged Contracts" :value="computedFlagged" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import KpiCard from '@/components/ui/KpiCard.vue';
import { formatCurrency, formatNumber, formatPercent } from '@/composables/useFormatter';

const rawContracts = ref(1432);
const rawSpend = ref(284500000000);
const rawFlagged = ref(47);
const spendChange = ref(8);
const contractsChange = ref(12);

const computedContracts = computed(() => formatNumber(rawContracts.value));
const computedCurrency = computed(() => formatCurrency(rawSpend.value));
const computedFlagged = computed(() => formatNumber(rawFlagged.value));
const computedSpendChange = computed(() => formatPercent(spendChange.value));
const computedContractsChange = computed(() => formatPercent(contractsChange.value));
</script>

<style scoped>
.overview__wrapper {
  padding: var(--space-8);
  margin: 0 auto;
  max-width: 1200px;
}
.overview__section {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--space-6);
}
.overview__cards {
  display: flex;
  gap: var(--space-4);
}
.overview__cards > * {
  flex: 1;
}
</style>
