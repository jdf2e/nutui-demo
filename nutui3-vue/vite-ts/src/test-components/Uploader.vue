<template>
  <nut-uploader method="get" :url="uploadUrl"></nut-uploader>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
  name: "uploader",
  setup() {
     const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts';

    return { uploadUrl };
  },
});
</script>
