<template>
  <Badge></Badge>
  <Forms></Forms>
  <Pagination></Pagination>
  <Popover></Popover>
  <Tag></Tag>
  <ShortPassword></ShortPassword>
  <Calendar></Calendar>
  <Button></Button>
  <Rate></Rate>
  <Price></Price>
  <Tabbar></Tabbar>
  <Video></Video>
  <NoticeBar></NoticeBar>
  <CountDown></CountDown>
  <NumberKeyboard></NumberKeyboard>
  <Uploader></Uploader>
  <List></List>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./test-components/HelloWorld.vue";
import ShortPassword from "./test-components/ShortPassword.vue";
import Button from "./test-components/Button.vue";
import Price from "./test-components/Price.vue";
import Tabbar from "./test-components/Tabbar.vue";
import Rate from "./test-components/Rate.vue";
import Calendar from "./test-components/Calendar.vue";
import Video from "./test-components/Video.vue";
import NoticeBar from "./test-components/NoticeBar.vue";
import CountDown from "./test-components/CountDown.vue";
import List from "./test-components/List.vue";
import NumberKeyboard from "./test-components/NumberKeyboard.vue";
import Tag from "./test-components/Tag.vue";
import Badge from "./test-components/Badge.vue";
import Popover from "./test-components/Popover.vue"
import Pagination from "./test-components/Pagination.vue"
import Forms from "./test-components/Form.vue"
import Uploader from "./test-components/Uploader.vue"
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    ShortPassword,
    Button,
    Price,
    Tabbar,
    Calendar,
    Rate,
    Video,
    NoticeBar,
    NumberKeyboard,
    CountDown,
    Tag,
    Badge,
    Popover,
    Pagination,
    Forms,
    Uploader,
    List
  },
  setup() {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
* {
  box-sizing: border-box;
}
</style>
