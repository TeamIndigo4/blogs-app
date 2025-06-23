<template>
  <button
    @click="$emit('click')"
    :class="[
      'rounded-md font-medium transition-all duration-200 whitespace-nowrap',
      'min-w-fit',
      variant === 'primary' ? 'bg-primary text-white' : 'bg-gray-200 text-black',
      size === 'sm' ? 'px-3 py-1 text-sm' :
      size === 'lg' ? 'px-6 py-3 text-lg' :
      'px-6 py-2 text-base'
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name:"BaseButton",
  props: {
    text: { type: String, required: true },
    size: { type: String, default: 'base' }, // sm, base, lg
    variant: { type: String, default: 'primary' }, // primary, secondary, etc.
  },
};
</script>
