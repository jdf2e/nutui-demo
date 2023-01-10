<template>
  <nut-uploader
    :url="uploadUrl"
    multiple
    :before-upload="beforeUpload"
  ></nut-uploader>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const uploadUrl = "https://xxxxx";
    const fileToDataURL = (file: Blob): Promise<any> => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = (e) => resolve((e.target as FileReader).result);
        reader.readAsDataURL(file);
      });
    };
    const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.src = dataURL;
      });
    };
    const canvastoFile = (
      canvas: HTMLCanvasElement,
      type: string,
      quality: number
    ): Promise<Blob | null> => {
      return new Promise((resolve) =>
        canvas.toBlob((blob) => resolve(blob), type, quality)
      );
    };
    const beforeUpload = async (file: File[]) => {
      let fileName = file[0].name;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      const base64 = await fileToDataURL(file[0]);
      const img = await dataURLToImage(base64);
      canvas.width = img.width;
      canvas.height = img.height;

      context.clearRect(0, 0, img.width, img.height);
      context.drawImage(img, 0, 0, img.width, img.height);

      let blob = (await canvastoFile(canvas, "image/jpeg", 0.5)) as Blob; //quality:0.5可根据实际情况计算
      const f = await new File([blob], fileName);
      return [f];
    };
    return {
      uploadUrl,
      beforeUpload,
    };
  },
};
</script>
<style>
:root {
  /* --nut-uploader-picture-width: 250px; */
  /* --nut-uploader-picture-height: 100px; */
  /* --nut-uploader-background: red; */
}
</style>
