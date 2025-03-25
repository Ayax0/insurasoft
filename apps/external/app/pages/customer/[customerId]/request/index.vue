<script setup lang="ts">
import { requestInsertValidate } from "@db/schema";

function upload(file: FormData) {
  return $fetch("/api/file", {
    method: "POST",
    body: file,
  });
}
</script>

<template>
  <Card class="max-w-[600px] m-auto">
    <CardHeader>
      <CardTitle>Versicherungsfall Melden</CardTitle>
      <CardDescription>
        Durch ausfüllen dieses Formulars kann ein neuer Versicherungsfall
        eröffnet werden.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <Form :validation-schema="requestInsertValidate" class="space-y-2">
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
              <FileInput
                v-slot="{ select }"
                @data="upload($event).then((index) => setValue(index.id))"
              >
                <Button variant="outline" @click="select">
                  <Icon name="lucide:upload" />
                  Datei hochladen
                </Button>
              </FileInput>
            </FormControl>
            {{ value }}
          </FormItem>
        </FormField>
      </Form>
    </CardContent>
  </Card>
</template>
