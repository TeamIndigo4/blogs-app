<script>
import BaseButton from "../form_components/BaseButton.vue"
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  components:{
    BaseButton
  },

  methods: {
    getCategoryColor(category) {
      switch (category) {
        case "cloud":
          return "text-pink-600 bg-pink-600/30 border-pink-600";
        case "aiml":
          return "text-green-500 bg-green-500/30 border-green-500";
        case "os":
          return "text-yellow-400 bg-yellow-400/20 border-yellow-400";
        case "dbms":
          return "text-cyan-400 bg-cyan-400/20 border-cyan-400";
        default:
          return "text-white bg-gray-500/20 border-gray-500";
      }
    },

    getCategoryValue(category) {
      switch (category) {
        case "cloud":
          return "Cloud";
        case "aiml":
          return "AI/ML";
        case "os":
          return "Operating System";
        case "dbms":
          return "DBMS";
        default:
          return "Miscellaneous";
      }
    },
  },
};
</script>

<template>
  <div class="max-w-[20rem] bg-white dark:bg-[#333] rounded-xl shadow-sm overflow-hidden">
    <!-- Image -->
    <img
      src="../../assets/blog_bg.jpg"
      alt="blog banner"
      class="w-full h-40 object-cover"
    />

    <!-- Content -->
    <div class="p-4">
      <span
        class="text-sm flex items-center justify-center w-fit border px-3 py-1 rounded-full font-semibold"
        :class="getCategoryColor(blog.category)"
        >{{ getCategoryValue(blog.category) }}</span
      >

      <h2 class="mt-3 text-xl font-bold text-[#222] dark:text-white">{{ blog.title }}</h2>
      <p class="mt-1 text-sm text-[#969696] dark:text-[#ccc]">
        {{ blog.content }}
      </p>

      <!-- Footer -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="text-sm">
            <p class="text-[#333] dark:text-[#eee] font-medium">Published At</p>
            <p class="text-[#969696] dark:text-gray-500 text-sm">{{ blog.createdAt }}</p>
          </div>
        </div>

        <BaseButton text="Read" size="md" variant="primary" />
      </div>
    </div>
  </div>
</template>