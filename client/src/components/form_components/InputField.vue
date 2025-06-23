<template>
  <input
    :placeholder="placeholder"
    v-model="inputValue"
    class="w-full px-4 py-2 rounded-md text-secondary placeholder:text-[#bababa] dark:bg-[#464646] dark:text-white dark:placeholder:text-[#ccc] outline-none"
  />
</template>

<script>
export default {
  name: 'InputField',
  props: {
    modelValue: String,
    placeholder: String,
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      },
    },
  },
}
</script>
