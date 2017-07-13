<style lang="less">
  @import "styles/index";
</style>

<template>
  <div :class="classes">
    <div class="panel__header" v-if="title">
      <div class="panel__title" v-if="title">{{title}}</div>
      <div class="panel__fn">
        <slot name="fn"></slot>
      </div>
    </div>
    <div class="panel__body">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  const prefixCls = 'panel'

  export default {
    name: 'panel',
    props: {
      title: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      transparent: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            ['panel--' + this.size]: this.size,
            ['panel--transparent']: this.transparent
          }
        ]
      }
    }
  }

</script>
