<template>
<nut-pagination v-model="currentPage3" :total-items="500"  @change="pageChange"  :show-page-size="5">
   
</nut-pagination>


</template>

<script lang="ts">
import { defineComponent, ref,reactive ,toRefs} from "vue";
export default defineComponent({
  name: "Pagination",


  setup() {
    const state = reactive({
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1
    });
    const pageChange = (value) => {
      console.log(value);
    };

    return {
      ...toRefs(state),
      pageChange
    };
  }


});
</script>
