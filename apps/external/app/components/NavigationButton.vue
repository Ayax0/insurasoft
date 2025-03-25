<script lang="ts" setup>
interface Props {
  icon: string;
  title: string;
  to: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="border rounded-lg flex flex-col justify-center items-center p-4 hover:border-primary hover:text-primary transition-all cursor-pointer"
    :to="to"
  >
    <Icon :name="icon" class="size-8" />
    <h1 class="text-lg font-semibold">{{ title }}</h1>
  </NuxtLink>
</template>
