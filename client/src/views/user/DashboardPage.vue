<script>
import Dropdown from "../../components/form_components/Dropdown.vue";
import Searchbox from "../../components/form_components/Searchbox.vue";
import BlogCard from "../../components/blogs_component/BlogCard.vue";

export default {
  components: {
    Dropdown,
    Searchbox,
    BlogCard,
  },
  data() {
    return {
      selected: null,
      showMenu: false,
      dropdownOptions: [
        { label: "Cloud", value: "cloud" },
        { label: "Operating System", value: "os" },
        { label: "DBMS", value: "dbms" },
        { label: "AI/ML", value: "aiml" },
      ],
    };
  },

  computed: {
    blogs() {
      return this.$store.getters.getBlogs;
    },
  },
};
</script>

<template>
  <div
    id="cover-pic-div"
    class="relative bg-white h-[35%] w-full overflow-hidden"
  >
    <!-- Background Image -->
    <img
      src="../../assets/blog_bg.jpg"
      alt="cover image"
      class="w-full h-full object-cover"
    />

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
    >
      <h1 class="text-white text-7xl font-bold">Our Blogs</h1>
    </div>
  </div>

  <div id="content-container" class="h-[65%] relative flex flex-col py-3 px-10">
    <!-- Sticky Header -->
    <header
      class="flex justify-between items-center sticky top-0 z-10 bg-[#222] py-4"
    >
      <h2 class="text-white font-semibold text-xl">
        All Blogs ({{ blogs.length }})
      </h2>
      <!-- Tools section -->
      <div class="hidden md:flex items-center gap-x-3">
        <Searchbox />
        <Dropdown v-model="selected" :options="dropdownOptions" />
      </div>

      <!-- Mobile Menu -->
      <div class="relative md:hidden">
        <button @click="showMenu = !showMenu" class="text-white text-2xl">
          ⋯
        </button>

        <div
          v-if="showMenu"
          class="absolute right-0 mt-2 bg-[#333] p-3 rounded shadow-md z-20 flex flex-col gap-3 w-60"
        >
          <Searchbox />
          <Dropdown v-model="selected" :options="dropdownOptions" />
        </div>
      </div>
    </header>

    <!-- Scrollable main content -->
    <main
      class="overflow-y-auto flex-1 mt-3 flex justify-center gap-4 flex-wrap custom-scrollbar"
    >
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </main>
  </div>
</template>
