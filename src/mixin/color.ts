import tinycolor, { ColorInput, ColorFormats } from "tinycolor2";

type CustomColorInput = {
  hsl: ColorFormats.HSL;
  hex: string;
  hex8: string;
  rgba: ColorFormats.RGBA;
  rgb: ColorFormats.RGB;
  hsv: ColorFormats.HSV;
  oldHue: number;
  source: string;
  a: number;
};
type DataType = CustomColorInput;

function _colorChange(data: ColorInput, oldHue?: number) {
  // const alpha = data && data.a;
  const color: tinycolor.Instance = tinycolor(data);

  // if (color && (color._a === undefined || color._a === null)) {
  //   color.setAlpha(alpha || 1);
  // }

  const hsl: ColorFormats.HSL = color.toHsl();
  const hsv: ColorFormats.HSV = color.toHsv();

  // if (hsl.s === 0) {
  //   hsv.h = hsl.h = data.h || (data.hsl && data.hsl.h) || oldHue || 0;
  // }

  /* --- comment this block to fix #109, may cause #25 again --- */
  // when the hsv.v is less than 0.0164 (base on test)
  // because of possible loss of precision
  // the result of hue and saturation would be miscalculated
  // if (hsv.v < 0.0164) {
  //   hsv.h = data.h || (data.hsv && data.hsv.h) || 0
  //   hsv.s = data.s || (data.hsv && data.hsv.s) || 0
  // }

  // if (hsl.l < 0.01) {
  //   hsl.h = data.h || (data.hsl && data.hsl.h) || 0
  //   hsl.s = data.s || (data.hsl && data.hsl.s) || 0
  // }
  /* ------ */

  return {
    hsl,
    hex: color.toHexString().toUpperCase(),
    hex8: color.toHex8String().toUpperCase(),
    rgba: color.toRgb(),
    hsv,
    oldHue: oldHue || color.getAlpha(),
    // source: data.source,
    a: color.getAlpha(),
  };
}
import { defineComponent } from "vue";
export default defineComponent({
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: ["modelValue"],
  data() {
    return {
      val: _colorChange(this.modelValue),
      oldHue: 0,
    };
  },
  computed: {
    colors: {
      get() {
        return this.val;
      },
      set(newVal: DataType) {
        this.val = newVal;
        this.$emit("update:modelValue", this.getModel());
      },
    },
  },
  watch: {
    modelValue(newVal) {
      let o = newVal;
      if (o.indexOf("rgba") > -1) {
        const os = o.replace("rgba(", "").replace(")", "").replace(/\s/g, "").split(",");
        o = {
          r: os[0],
          g: os[1],
          b: os[2],
          a: os[3]
        }
      }
      this.val = _colorChange(o);

    },
  },
  methods: {
    colorChange(data: ColorInput, oldHue: number) {
      this.oldHue = this.colors.hsl.h;
      this.colors = _colorChange(data, oldHue || this.oldHue);
      this.$emit('change', this.colors)
    },
    isValidHex(hex: string) {
      return tinycolor(hex).isValid();
    },
    getModel() {
      const rgba = this.val.rgba
      return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
    },
    // simpleCheckForValidColor(data) {
    //   const keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
    //   let checked = 0;
    //   let passed = 0;

    //   for (let i = 0; i < keysToCheck.length; i++) {
    //     const letter = keysToCheck[i];
    //     if (data[letter]) {
    //       checked++;
    //       if (!isNaN(data[letter])) {
    //         passed++;
    //       }
    //     }
    //   }

    //   if (checked === passed) {
    //     return data;
    //   }
    // },
    paletteUpperCase(palette: Array<string>) {
      return palette.map((c) => c.toUpperCase());
    },
    isTransparent(color: ColorInput) {
      return tinycolor(color).getAlpha() === 0;
    },
  },
});
