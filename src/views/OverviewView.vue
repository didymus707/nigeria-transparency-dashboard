<template>
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
