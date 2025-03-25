<script setup lang="ts">
const { requestId } = useRoute().params;
const { data: request } = useFetch(`/api/request/${requestId}`);

function approve() {
  $fetch(`/api/request/${requestId}`, {
    method: "POST",
    onResponse() {
      navigateTo("/");
    },
  });
}

function reject() {
  $fetch(`/api/request/${requestId}`, {
    method: "DELETE",
    onResponse() {
      navigateTo("/");
    },
  });
}
</script>

<template>
  <Card class="max-w-[600px] m-auto">
    <CardHeader>
      <CardTitle>Versicherungsfall</CardTitle>
      <CardDescription>
        {{ request?.description }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <img :src="`/api/file/${request?.file}`" class="rounded" />
      <div class="grid grid-cols-2 gap-2 mt-2">
        <Button variant="destructive" @click="reject">Ablehnen</Button>
        <Button @click="approve">Genehmigen</Button>
      </div>
    </CardContent>
  </Card>
</template>
