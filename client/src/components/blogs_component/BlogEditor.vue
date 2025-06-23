<!-- src/components/form_components/BlogEditor.vue -->
<template>
  <div class="bg-white rounded-md overflow-hidden">
    <quill-editor
      v-model:content="content"
      content-type="html"
      theme="snow"
      toolbar="full"
      class="min-h-[300px]"
    />
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

