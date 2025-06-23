<template>
  <div class="bg-white rounded-md border max-h-[400px] h-full flex flex-col">
    <!-- Toolbar (fixed) -->
    <div class="editor-toolbar sticky top-0 z-10 bg-red-400">
      <!-- Quill automatically injects toolbar here using `toolbar` option -->
    </div>

    <!-- Editor (scrollable) -->
    <div class="editor-content flex-1 overflow-y-auto no-scrollbar">
      <quill-editor
        v-model:content="content"
        content-type="html"
        theme="snow"
        toolbar="full"
        class="border-none h-full"
      />
    </div>
  </div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default {
  name: 'BlogEditor',
  components: { QuillEditor },
  props: {
    modelValue: String,
  },
  computed: {
    content: {
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

<style scoped>
/* Fix toolbar position */
.ql-toolbar.ql-snow {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

/* Optional: remove inner scrollbar on toolbar if it appears */
.ql-toolbar::-webkit-scrollbar {
  display: none;
}
</style>
