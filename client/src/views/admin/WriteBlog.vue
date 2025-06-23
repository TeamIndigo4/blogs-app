<template>
  <div class="p-6 max-w-4xl mx-auto space-y-4">
    <!-- Title -->
    <InputField v-model="title" placeholder="Enter blog title..." />

    <!-- Category -->
    <Dropdown v-model="selectedCategory" :options="categoryOptions" />

    <!-- Editor -->
    <BlogEditor v-model="content" />

    <!-- Submit -->
    <button
      class="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      @click="submitBlog"
    >
      Publish Blog
    </button>
  </div>
</template>

<script>
import InputField from "../../components/form_components/InputField.vue";
import Dropdown from "../../components/form_components/Dropdown.vue";
import BlogEditor from "../../components/blogs_component/BlogEditor.vue";
import { parseHtmlToBlocks } from "../../utils/htmlToVue";

export default {
  components: {
    InputField,
    Dropdown,
    BlogEditor,
  },
  data() {
    return {
      title: "",
      selectedCategory: "",
      content: "",
      categoryOptions: [
        { label: "Cloud", value: "cloud" },
        { label: "AI/ML", value: "aiml" },
        { label: "DBMS", value: "dbms" },
        { label: "Operating System", value: "os" },
      ],
    };
  },
  methods: {
    submitBlog() {
      const structuredContent = parseHtmlToBlocks(this.content);
      const blogData = {
        title: this.title,
        category: this.selectedCategory,
        content: structuredContent,
        createdAt: new Date().toLocaleDateString("en-GB"),
      };
      console.log("🚀 Blog Submitted:", blogData);
    },
  },
};
</script>
