<template>
  <div class="py-6 h-full overflow-auto w-[88%] mx-auto space-y-4 no-scrollbar">
    <!-- Title -->
    <InputField v-model="title" placeholder="Enter blog title..." />

    <!-- Category -->
    <Dropdown v-model="selectedCategory" :options="categoryOptions" />

    <!-- Editor -->
    <BlogEditor v-model="content" />

    <!-- Submit -->
    <BaseButton size="md" text="Publish" variant="primary" @click="submitBlog" />
  </div>
</template>

<script>
import InputField from "../../components/form_components/InputField.vue";
import Dropdown from "../../components/form_components/Dropdown.vue";
import BlogEditor from "../../components/blogs_component/BlogEditor.vue";
import { parseHtmlToBlocks } from "../../utils/htmlToVue";
import BaseButton from '../../components/form_components/BaseButton.vue';

export default {
  components: {
    InputField,
    Dropdown,
    BlogEditor,
    BaseButton,
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
