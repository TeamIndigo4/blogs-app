<template>
  <div class="relative inline-block w-full">
    <!-- Dropdown Trigger Button -->
    <button
      @click="toggleDropdown"
      class="w-full px-4 py-2.5 bg-[#464646] text-white rounded-lg shadow text-left placeholder:text-[#eee] text-sm"
    >
      {{ selectedLabel }}
      <span class="float-right" v-if="isOpen">▲</span>
      <span class="float-right" v-else>▼</span>
    </button>

    <!-- Dropdown List -->
    <ul
      v-if="isOpen"
      class="absolute z-50 w-full mt-1 bg-[#2e2e2e] text-white border border-[#444] rounded-lg shadow max-h-60 overflow-auto"
    >
      <li
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
        class="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer text-sm"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      required: true,
      // [{ label: "Option 1", value: "opt1" }, ...]
    },
    modelValue: {
      type: [String, Number, Object],
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    selectedLabel() {
      const selected = this.options.find(
        (option) => option.value === this.modelValue
      );
      return selected ? selected.label : "Select a domain";
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.$emit("update:modelValue", option.value);
      this.isOpen = false;
    },
  },
};
</script>

