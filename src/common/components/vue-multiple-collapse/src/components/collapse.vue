<template>
  <div class="vm-collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'VmCollapse',

    componentName: 'VmCollapse',

    props: {
      accordion: Boolean,
      transform: Boolean,
      closable: Boolean,
      remain: {
        type: Number,
        default: 0
      },
      value: {
        type: [Array, String, Number],
        default () {
          return []
        }
      }
    },

    data () {
      return {
        activeNames: [].concat(this.value)
      }
    },

    watch: {
      value (value) {
        this.activeNames = [].concat(value)
      }
    },

    methods: {
      setActiveNames (activeNames) {
        activeNames = [].concat(activeNames)
        let value = this.accordion ? activeNames[0] : activeNames
        this.activeNames = activeNames
        this.$emit('input', value)
        this.$emit('change', value)
      },
      handleItemClick (item) {
        if (this.accordion) {
          this.setActiveNames(
            (this.activeNames[0] || this.activeNames[0] === 0)
            && this.activeNames[0] === item.name
              ? '' : item.name
          )
        } else {
          let activeNames = this.activeNames.slice(0)
          let index = activeNames.indexOf(item.name)

          if (index > -1) {
            activeNames.splice(index, 1)
          } else {
            activeNames.push(item.name)
            if (
              this.remain
              && activeNames.length > this.remain
            ) {
              activeNames.shift()
            }
          }
          this.setActiveNames(activeNames)
        }
      }
    },

    created () {
      this.$on('item-click', this.handleItemClick)
    }
  }
</script>
