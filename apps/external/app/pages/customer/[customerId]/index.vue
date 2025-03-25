<script lang="ts" setup>
const { customerId } = useRoute().params;
</script>

<template>
  <div class="m-auto grid grid-cols-2 gap-2 max-w-[600px]">
    <NavigationButton
      icon="lucide:message-circle-question"
      title="Versicherungsantrag"
      :to="`/customer/${customerId}/request`"
    />
    <NavigationButton
      icon="lucide:dollar-sign"
      title="Schadensmeldung"
      :to="`/customer/${customerId}/claim`"
    />
  </div>
</template>
