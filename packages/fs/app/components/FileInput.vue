<script lang="ts" setup>
interface Props {
  name?: string;
  accept?: string;
  multiple?: boolean;
}

interface Emits {
  (e: "data", data: FormData): void;
}

const props = withDefaults(defineProps<Props>(), {
  name: "data",
  accept: "*",
});
const emit = defineEmits<Emits>();

const form = ref<HTMLFormElement>();
const input = ref<HTMLInputElement>();

const data = defineModel<FormData>();
const files = defineModel<FileList | null>("files");
const url = defineModel<string>("url");

async function update(event: Event) {
  data.value = new FormData(form.value);

  const target = event.target as HTMLInputElement;
  files.value = target.files;

  const buffer = await target.files?.item(0)?.arrayBuffer();
  const blob = buffer ? new Blob([new Uint8Array(buffer)]) : undefined;
  url.value = blob ? URL.createObjectURL(blob) : undefined;

  emit("data", data.value);
}
</script>

<template>
  <form ref="form" class="cursor-pointer" @submit.prevent>
    <input
      ref="input"
      type="file"
      :name="props.name"
      :accept="props.accept"
      :multiple="multiple !== undefined && multiple !== false"
      style="display: none"
      @change="update"
    />
    <slot
      :select="() => input?.click()"
      :files="files"
      :data="data"
      :url="url"
    />
  </form>
</template>
