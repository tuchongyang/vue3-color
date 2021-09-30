<template>
  <div
    id="app"
    :style="{
      'background-color': typeof colors === 'object' ? colors.hex8 : colors,
    }"
  >
    <Sketch v-model="colors" @change="onChange" />
    <!-- <Chrome v-model="colors"/>
    <Compact v-model="colors"/>
    <Grayscale v-model="colors"/>
    <Material v-model="colors"/>
    <Photoshop v-model="colors"/>
    <Slider v-model="colors"/>
    <Swatches v-model="colors"/>
    <Twitter v-model="colors"/> -->
    <ColorPicker
      v-model="colors"
      @change="onChange"
      style="left: 80%; top: 50%; position: absolute"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Sketch, ColorPicker } from "../src";
import { ColorInput } from "tinycolor2";
export default defineComponent({
  name: "ServeDev",
  components: { Sketch, ColorPicker },
  setup() {
    const colors = ref("#194D33");
    const onChange = (data: ColorInput) => {
      console.log("父级监听change", data);
    };
    return {
      colors,
      onChange,
    };
  },
});
</script>

<style>
#app > div {
  margin: 30px 0;
}
</style>
