<template>
  <div class="vc-color-picker">
    <div class="picker" ref="pickerRef" @click.stop="show">
      <div class="picker-color" :style="{ backgroundColor: model }"></div>
      <div class="vc-icon-cha" v-if="!model"></div>
      <div class="vc-bg-alpha"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import pickerPanel from "./pickerPanel";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const model = ref("");
    const pickerRef = ref({} as HTMLElement);
    const pickerPanelRef = ref();

    const show = () => {
      pickerPanelRef.value = pickerPanel({
        pickerDom: pickerRef.value,
        success: (color) => {
          model.value = color;
          context.emit("update:modelValue", model.value);
          context.emit("change", model.value);
          console.log("success回调", color, model.value);
        },
      });
    };
    return {
      model,
      show,
      pickerRef,
    };
  },
});
</script>

<style>
.vc-color-picker {
  position: relative;
  display: inline-block;
  line-height: normal;
}
.vc-color-picker .picker {
  padding: 2px;
  background: #fff;
  border: 1px solid #eee;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
}
.vc-color-picker .picker-color {
  width: 16px;
  height: 16px;
  position: relative;
  z-index: 5;
}
.vc-color-picker .vc-icon-cha {
  width: 1em;
  height: 1em;
  display: inline-block;
  position: absolute;
  font-size: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.vc-color-picker .vc-icon-cha:before {
  content: "";
  width: 100%;
  height: 1px;
  background: #ccc;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(-45deg);
}
.vc-color-picker .vc-icon-cha:after {
  content: "";
  width: 100%;
  height: 1px;
  background: #ccc;
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(45deg);
  z-index: 5;
  background: #fff;
}
.vc-bg-alpha {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);
  background-size: 10px auto;
  position: absolute;
  display: block;
  box-sizing: border-box;
  border: 1px solid #999;
  border-radius: 2px;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  z-index: 0;
  text-align: center;
}
</style>
