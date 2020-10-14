<template>
  <div class="button" :disabled="disabled" :class="btnStyle">{{ text }}</div>
</template>

<script>
export default {
  name: "StandardButton",
  props: {
    text: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style lang="scss">
.button {
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 1.5em;

  &.primary {
    color: white;
    background-color: #f62079;
    border: 0;

    &:hover:not([disabled]):not(.md-raised) {
      color: white;
      background-color: darken(#f62079, 20%);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #7f858c;
    }
  }

  &.secondary {
    color: white;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid white;

    &:hover:not([disabled]):not(.md-raised) {
      color: #f62079;
      background-color: white;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #7f858c;
    }
  }
}
</style>
