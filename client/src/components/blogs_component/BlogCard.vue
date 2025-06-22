<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
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
  <div class="max-w-[19.5rem] bg-[#333] rounded-xl shadow-md overflow-hidden">
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

      <h2 class="mt-3 text-xl font-bold text-white">{{ blog.title }}</h2>
      <p class="mt-1 text-sm text-[#ccc] leading-snug">
        {{ blog.content }}
      </p>

      <!-- Footer -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <!-- <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="author"
            class="w-8 h-8 rounded-full"
          /> -->
          <div class="text-sm">
            <p class="text-[#eee] font-medium">Published At</p>
            <p class="text-gray-500 text-xs">{{ blog.createdAt }}</p>
          </div>
        </div>

        <a href="#" class="text-gray-400 hover:text-black">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>