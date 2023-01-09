<template>
    <nut-cell class="cell">
        <nut-rate v-model="value" @change="onChange" />
    </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style'; 
export default {
    setup() {
        const value = ref(3);
        const onChange = (val)=>{
            showToast.text(val);
        }
    return { value,onChange }
    }
}
</script>
<style>
:root{
    --nut-rate-icon-color: green;
}
</style>
