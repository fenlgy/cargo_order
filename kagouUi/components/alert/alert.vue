<template>
  <div :class="classes">
    <IAlert :showIcon='showIcon' :type="type" :closable="closable" :banner="banner">
      <slot></slot>
    </IAlert>
  </div>
</template>


<script>
  import { Alert as IAlert } from 'iview'
  const prefixCls = 'alert'

  const {...IAlertProps} = IAlert.props

  export default {
    name: 'go-alert',
    components: {IAlert},
    props: {
      inline: {
        type: Boolean,
        default: false
      },
      ...IAlertProps
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [prefixCls + '--inline']: this.inline
          }
        ]
      }
    }
  }

</script>
