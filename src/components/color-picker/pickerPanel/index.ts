import { render, h } from "vue";
import { hasOwn } from "@vue/shared";
import Main from "./main.vue";
import type { ComponentPublicInstance } from "vue";

const messageInstance = new Map<
  ComponentPublicInstance<{ doClose: () => void }>, // marking doClose as function
  {
    options: any;
    // callback: Callback
    resolve: (res: any) => void;
    reject: (reason?: any) => void;
  }
>();

const initInstance = (container: HTMLElement, props?: Options) => {
  const vnode = h(Main, props);
  render(vnode, container);
  container.firstElementChild &&
    document.body.appendChild(container.firstElementChild);
  return vnode.component;
};

const genContainer = () => {
  return document.createElement("div");
};
type fun = () => void;
interface Prop {
  [prop: string]: boolean | HTMLElement | fun;
  visible: boolean;
  pickerDom: HTMLElement;
  doClose: fun;
}
const MessageBox = (options?: Options): ComponentPublicInstance<Prop> => {
  const container = genContainer();

  const instance = initInstance(container, options);
  const vm = (instance && instance.proxy) as ComponentPublicInstance<Prop>;
  if (vm) {
    for (const prop in options) {
      if (hasOwn(options, prop) && !hasOwn(vm.$props, prop)) {
        vm[prop as string] = options[prop];
      }
    }

    // change visibility after everything is settled
    vm.doClose = () => {
      vm.visible = false;
      setTimeout(() => {
        render(null, container);
        messageInstance.delete(vm);
      });
    };
    setTimeout(() => {
      vm.visible = true;
    });
  }
  return vm;
};
interface Options {
  type?: string; //"image" | "video" | "music"
  pickerDom: HTMLElement;
  success: (color: string) => void;
}
// function MessageBox(options?: Options): Promise<{ value: string }> {
//     return new Promise((resolve, reject) => {
//         const vm = showMessage(options)

//     })
// }
export default MessageBox;
