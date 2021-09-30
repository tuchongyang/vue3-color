/**
 * 获取一个dom节点的绝对定位，相对于整个document
 */
interface ReturnType {
  left: number;
  top: number;
}
export function getPosition(dom: HTMLElement): ReturnType {
  let t = dom.offsetTop,
    l = dom.offsetLeft;
  let obj: HTMLElement = dom;
  //从目标元素开始向外遍历，累加top和left值
  while (obj.offsetParent) {
    obj = obj.offsetParent as HTMLElement;
    t += obj.offsetTop;
    l += obj.offsetLeft;
  }
  return {
    left: l,
    top: t,
  };
}
