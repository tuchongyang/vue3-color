<template>
  <div class="vc-color-picker">
    <div class="picker" @click.stop="show">
      <div class="picker-color" :style="{ backgroundColor: model }"></div>
      <div class="vc-icon-cha" v-if="!model"></div>
      <div class="vc-bg-alpha"></div>
    </div>
    <div class="picker-panel" @click.stop v-if="visible">
      <Sketch v-model="model" @change="onChange">
        <template v-slot:footer>
          <div class="vc-footer-btns">
            <div class="btn btn-text" @click="cancel">取消</div>
            <div class="btn btn-primary" @click="confirm">确定</div>
          </div>
        </template>
      </Sketch>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Sketch from "../sketch";

export default defineComponent({
  components: { Sketch },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const model = ref("");
    const visible = ref(false);
    const show = () => {
      visible.value = true;
      document.addEventListener("click", () => {
        visible.value = false;
      });
    };
    const cancel = () => {
      model.value = props.modelValue;
      visible.value = false;
    };
    const confirm = () => {
      context.emit("update:modelValue", model.value);
      visible.value = false;
      context.emit("change", model.value);
    };
    return {
      model,
      visible,
      show,
      confirm,
      cancel,
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
.vc-color-picker .picker-panel {
  position: absolute;
  top: 100%;
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
.vc-footer-btns {
  text-align: right;
  padding: 10px 0;
}
.vc-footer-btns .btn {
  display: inline-block;
  padding: 0 15px;
  font-size: 12px;
  cursor: pointer;
}
.vc-footer-btns .btn:hover {
  opacity: 0.9;
}
.vc-footer-btns .btn-primary {
  background: #1684fc;
  color: #fff;
  line-height: 24px;
}
</style>
