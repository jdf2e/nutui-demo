import { ref, defineComponent } from 'vue'
import { View } from '@tarojs/components'

export default defineComponent({
  name: 'Index',
  setup() {
    const show = ref(false)
    const click = () => {
      show.value = true;
    };

    return () => {
      return (
        <View>
          <NutCell title="我是标题" desc="描述文字" onClick={click} />
          <NutPopup v-model:visible={show.value} closeable position="bottom" style={{height: "50%"}}>
            这里是 popup 的内容
          </NutPopup>
        </View>
      )
    }
  }
})
