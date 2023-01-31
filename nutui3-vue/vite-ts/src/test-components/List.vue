<template>
<nut-list :height="50" :listData="count" @scroll-bottom="handleScroll" :container-height="containerHeight">
    <template v-slot="{ item }">
        <div class="list-item">
        {{ item }}
        </div>
    </template>
</nut-list>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
    name: "List",

    setup: () => {
        const state = reactive({
            count: new Array(100).fill(0),
            containerHeight: 4000
        });

        const handleScroll = () => {
            console.log(12312412341342)
            let arr = new Array(100).fill(0);
            const len = state.count.length;
            state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
        };

        onMounted(() => {
            state.count = state.count.map((item: number, index: number) => index + 1);
            setTimeout(() => {
                state.containerHeight = 400
            }, 2000);
        })

        return { ...toRefs(state), handleScroll };
    },
});
</script>
<style lang="scss">
.list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    background-color: #f4a8b6;
    border-radius: 10px;
}
</style>
