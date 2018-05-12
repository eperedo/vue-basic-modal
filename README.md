# Vue Basic Modal

> A basic modal made with vove, I mean with luve... VUE and LOVE!

[Demo on jsbin](https://jsbin.com/bekogarazu/1/edit?html,js,output)

### Usage

1.  Install

```bash
npm install vue-basic-modal
```

or using UMD

```html
<script src="https://unpkg.com/vue-basic-modal/dist/vue-basic-modal.umd.min.js"></script>
```

2.  Add the css file somewhere in your application

```html
<link rel="stylsheet" href="https://unpkg.com/vue-basic-modal/dist/basic-modal.css"></link>
```

3.  And finally the component!

```html
<template>
  <div>
    <button type="button" @click="state = !state">Show Modal</button>
    <basic-modal :state="state">
      I am a Modal
    </basic-modal>
  </div>
</template>

<script>
import basicModal from 'vue-basic-modal';

export default {
  name: 'my-comp',
  data: () => {
    return {
      state: true,
    };
  },
  components: {
    basicModal: basicModal,
    // basicModal: window['basic-modal'], if you are using UMD version
  },
};
</script>
```

### Build component

```bash
npm run component
```
