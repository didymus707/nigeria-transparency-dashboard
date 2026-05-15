<script setup lang="ts">
type DropdownOption = Record<string, any>[]

const props = defineProps<{
  options: DropdownOption
  modelValue: string | number
  labelKey: string
  valueKey: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>

<template>
  <select
    :value="modelValue"
    @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option disabled value="">{{ placeholder ?? 'Select an option' }}</option>
    <option v-for="option in options" :key="option[valueKey]" :value="option[valueKey]">{{ option[labelKey] }}</option>
  </select>
</template>
