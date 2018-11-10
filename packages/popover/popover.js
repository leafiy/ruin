import popoverTemplate from "./popover.vue";
import Vue from "vue";
const PopoverConstructor = Vue.extend(popoverTemplate);

import nanoid from "nanoid";

const instances = [];
const Popover = function(options) {
  let { trigger } = options;
  if (!trigger) {
    return;
  }

  if (!trigger.dataset.popoverId) {
    trigger.dataset.popoverId = nanoid();
  }

  if (instances.includes(trigger.dataset.popoverId)) {
    return;
  } else {
    options.show = true;
    const instance = new PopoverConstructor({
      el: document.createElement("div"),
      propsData: options
    });
    instance.show = true;
    instance.$mount();
    let el = instance.$el;
    document.body.appendChild(el);
    instances.push(trigger.dataset.popoverId);
  }
};

export default Popover;
