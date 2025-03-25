<script lang="ts" setup>
function upload(data: FormData) {
  console.log(data);
  // $fetch("/api/upload", {
  //   method: "POST",
  //   body: data,
  // });
}
</script>

<template>
  <div>
    <FileInput v-slot="{ select }" @data="upload">
      <Button @click="select">
        <Icon name="lucide:upload" />
        Upload
      </Button>
    </FileInput>
  </div>
</template>
