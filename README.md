# vue3-color
a color picker component base in vue3 &amp; typescript

## 安装

```
npm install @tucy/vue3-color --save-dev
```

## 使用

```
<template>
<Sketch v-model="colors"/>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import { Sketch } from "@tucy/vue3-color";
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
```