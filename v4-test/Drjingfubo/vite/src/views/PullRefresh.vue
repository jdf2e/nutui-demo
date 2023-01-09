<template>
    <div class="demo">
        <nut-pull-refresh :duration="1" v-model="refresh2" loosingTxt="松开吧" loadingTxt="玩命加载中..." completeTxt="好啦"
            @refresh="refreshFun">
            <template #pullingTxt>
                <div>用力拉</div>
            </template>
            <div class="pull-block">向下拉试试吧！</div>
        </nut-pull-refresh>
    </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs } from 'vue';
export default {
    setup(props) {
        const refresh2 = ref(false);
        const refreshFun = () => {
            setTimeout(() => {
                refresh2.value = false;
            }, 3000);
        };
        return { refresh2, refreshFun };
    }
}
</script>
<style>
.demo {
    height: 400px;
}
</style>

