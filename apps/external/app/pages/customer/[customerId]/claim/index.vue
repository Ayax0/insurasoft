<script setup lang="ts">
import { claimInsertValidate } from "@db/schema";

const { customerId } = useRoute().params;

function upload(file: FormData) {
  return $fetch("/api/file", {
    method: "POST",
    body: file,
  });
}

function submit(body: any) {
  $fetch(`/api/customer/${customerId}/claim`, {
    method: "POST",
    body,
    onResponse() {
      navigateTo(`/customer/${customerId}`);
    },
  });
}
</script>

<template>
  <Card class="max-w-[600px] m-auto">
    <CardHeader>
      <CardTitle>Schadensmeldung erstellen</CardTitle>
      <CardDescription>
        Durch ausfüllen dieses Formulars kann eine neue Schadensmeldung eröffnet
        werden.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Form
        v-slot="{ meta }"
        :validation-schema="claimInsertValidate"
        class="space-y-2"
        @submit="submit"
      >
        <FormField
          name="customer"
          :model-value="Number(customerId?.toString())"
          hidden
        />

        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Beschreibung</FormLabel>
            <FormControl>
              <Textarea v-bind="componentField" placeholder="Lorem Ipsum..." />
            </FormControl>
          </FormItem>
        </FormField>

        <FormField v-slot="{ value, setValue }" name="file">
          <FormItem>
            <FormLabel>Datei</FormLabel>
            <FormControl>
              <ClientOnly>
                <FileInput
                  v-slot="{ select }"
                  @data="upload($event).then((index) => setValue(index.id))"
                >
                  <Button variant="outline" @click="select">
                    <Icon name="lucide:upload" />
                    Datei hochladen
                  </Button>
                </FileInput>

                <template #fallback>
                  <Skeleton class="w-[160px] h-10" />
                </template>
              </ClientOnly>
            </FormControl>
          </FormItem>
        </FormField>

        <Button type="submit" :disabled="!meta.valid" class="w-full">
          Einreichen
        </Button>
      </Form>
    </CardContent>
  </Card>
</template>
