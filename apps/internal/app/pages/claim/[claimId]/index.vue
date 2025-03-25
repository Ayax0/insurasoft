<script setup lang="ts">
import { claimUpdateValidate } from "@db/schema";

const { claimId } = useRoute().params;
const { data: claim } = useFetch(`/api/claim/${claimId}`);

function submit(body: any) {
  $fetch(`/api/claim/${claimId}`, {
    method: "POST",
    body,
    onResponse() {
      navigateTo("/");
    },
  });
}
</script>

<template>
  <Card class="max-w-[600px] m-auto">
    <CardHeader>
      <CardTitle>Schadensmeldung</CardTitle>
      <CardDescription>
        {{ claim?.description }}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Form
        v-slot="{ meta }"
        :validation-schema="claimUpdateValidate"
        class="space-y-2"
        @submit="submit"
      >
        <img :src="`/api/file/${claim?.file}`" class="rounded" />
        <FormField v-slot="{ componentField }" name="amount">
          <FormItem>
            <FormLabel>Schadenssumme</FormLabel>
            <FormControl>
              <Input v-bind="componentField" type="number" placeholder="0.0" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <Button type="submit" :disabled="!meta.valid" class="w-full">
          Abschliessen
        </Button>
      </Form>
    </CardContent>
  </Card>
</template>
