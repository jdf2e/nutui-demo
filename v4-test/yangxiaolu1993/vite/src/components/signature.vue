<template>
  <nut-signature  
    @confirm="confirm" 
    @clear="clear"
  ></nut-signature>
  <p class="demo-tips demo">Tips: 点击确认按钮,下方显示签名图片</p>
</template>
<script lang="ts">
import { reactive, toRefs, ref } from 'vue';
export default {
    props: {},
    setup() {
      
        const confirm = (canvas, data) => {
          console.log(canvas, data)
            let img = document.createElement('img');
            img.src = data;
            document.querySelector('.demo').appendChild(img);
        };

        const clear = () => {
          
            let img = document.querySelector('.demo img'); 
            if (img) {
                img.remove();
            }
        }

        console.log(11)
        return { confirm, clear };
    }
}
</script>
