<template>
  <div id="app" :style="{'background-color': typeof colors === 'object' ? colors.hex8 : colors}">
    <Sketch v-model="colors" @change="onChange"/>
    <!-- <Chrome v-model="colors"/>
    <Compact v-model="colors"/>
    <Grayscale v-model="colors"/>
    <Material v-model="colors"/>
    <Photoshop v-model="colors"/>
    <Slider v-model="colors"/>
    <Swatches v-model="colors"/>
    <Twitter v-model="colors"/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import { Sketch } from '../src';
export default defineComponent({
  name: 'ServeDev',
  components:{Sketch},
  setup(){
    const colors = ref("#194D33")
    const onChange = (data)=>{
      console.log(data.hex)
      console.log(data.rgba)
    }
    return {
      colors,
      onChange
    }
  }
});
</script>

<style>
  #app >div {
    margin: 30px 0;
  }
</style>
