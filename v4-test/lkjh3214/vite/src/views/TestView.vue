<template>
  <nut-countup
    ref="countupMachineDom"
    type="machine"
    :machine-num="machineNum"
    :machine-prize-num="5"
    :machine-prize-level="prizeLevel"
    :custom-bg-img="bgImage"
    :num-width="100"
    :num-height="100"
    :during="3000"
    @scroll-end="scrollAniEnd"
  >
  </nut-countup>
  <div class="btnBtn">
    <nut-button type="danger" @click="startRole" :disabled="startFlag">
      中奖
    </nut-button>
    <nut-button type="danger" @click="startRole2" :disabled="startFlag">
      不中奖
    </nut-button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const countupMachineDom = ref(null);
    const startFlag = ref(false);
    const machineNum = ref(3);
    const bgImage = ref(
      "https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png"
    );
    const prizeLevel = ref(0);
    const startRole = () => {
      prizeLevel.value = Math.floor(Math.random() * 5 + 1);
      startFlag.value = true;
      countupMachineDom.value.machineLuck();
    };
    const startRole2 = () => {
      prizeLevel.value = -1;
      startFlag.value = true;
      setTimeout(() => {
        countupMachineDom.value.machineLuck();
      }, 500);
    };

    const scrollAniEnd = () => {
      console.log("恭喜中奖！！！");
      setTimeout(() => {
        startFlag.value = false;
      }, 300);
    };

    return {
      countupMachineDom,
      startFlag,
      machineNum,
      bgImage,
      prizeLevel,
      startRole,
      startRole2,
      scrollAniEnd,
    };
  },
};
</script>

<style lang="scss">
.btnBtn {
  text-align: center;
  .nut-button {
    margin-right: 20px;
  }
}
</style>
