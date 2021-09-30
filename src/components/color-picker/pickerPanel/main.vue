<template>
  <div class="picker-panel" ref="panelRef" @click.stop :style="position">
    <Sketch v-model="model">
      <template v-slot:footer>
        <div class="vc-footer-btns">
          <div class="btn btn-text" @click="doClose">取消</div>
          <div class="btn btn-primary" @click="confirm">确定</div>
        </div>
      </template>
    </Sketch>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, ref, Ref } from "vue";
import { getPosition } from "../utils";
import Sketch from "../../sketch";

export default defineComponent({
  components: { Sketch },
  props: {
    pickerDom: {
      type: Object as PropType<HTMLElement>,
    },
  },
  setup(props) {
    const visible = ref(false);
    const doClose = ref(() => null);
    const model = ref("");
    const panelRef = ref();

    const position = ref({ left: "0", top: "0" });
    const calcPosition = () => {
      const winW = document.body.clientWidth;
      const winH = document.body.clientHeight;
      position.value = { left: "0", top: "0" };
      if (props.pickerDom) {
        //判断位置
        const posi = getPosition(props.pickerDom);
        if (posi.left < 220) {
          position.value.left = posi.left + "px";
        } else if (posi.left + 30 + 220 > winW) {
          position.value.left =
            posi.left + props.pickerDom.offsetWidth - 220 + "px";
          console.log("left", posi.left, props.pickerDom.offsetWidth, 220);
        } else {
          position.value.left = posi.left + "px";
        }
        console.log("posi.top", posi.top, winH);
        if (posi.top < 350) {
          position.value.top = posi.top + props.pickerDom.offsetHeight + "px";
        } else if (posi.top > winH - 350) {
          position.value.top = posi.top - 350 + "px";
        } else {
          position.value.top = posi.top + props.pickerDom.offsetHeight + "px";
        }
      }
    };
    onMounted(() => {
      console.log(props.pickerDom);
      calcPosition();
      document.addEventListener("click", () => {
        doClose.value();
      });
    });

    const success: Ref<(color: string) => void> = ref(() => null);
    const confirm = () => {
      success.value(model.value);
      doClose.value();
    };
    return {
      visible,
      model,
      doClose,
      success,
      position,
      panelRef,
      confirm,
    };
  },
});
</script>

<style>
.picker-panel {
  position: absolute;
  z-index: 900;
}
.picker-panel.bottom {
  top: 100%;
}
.picker-panel.top {
  bottom: 100%;
}
.picker-panel.left {
  left: 0;
}
.picker-panel.right {
  right: 0;
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
