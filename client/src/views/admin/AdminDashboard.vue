<script>
import Dropdown from "../../components/form_components/Dropdown.vue";
import Searchbox from "../../components/form_components/Searchbox.vue";
import BlogCard from "../../components/blogs_component/BlogCard.vue";
import BaseButton from "../../components/form_components/BaseButton.vue";
export default {
  components: {
    Dropdown,
    Searchbox,
    BlogCard,
    BaseButton,
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
  methods:{
    goToWrite(){
        this.$router.push("/admin/write")
    }
  }
};
</script>

<template>
  <div class="w-[88%] mx-auto h-full">
    <div id="content-container" class="relative flex flex-col py-6 h-full">
      <!-- Sticky Header -->
      <header class="flex justify-between items-center sticky top-0 z-10">
        <h2 class="dark:text-white font-semibold text-xl">
          All Blogs ({{ blogs.length }})
        </h2>
        <!-- Tools section -->
        <div class="hidden md:flex items-center gap-x-3">
          <Searchbox />
          <Dropdown v-model="selected" :options="dropdownOptions" />
          <BaseButton text="New Blog" size="md" variant="primary" @click="goToWrite"/>
        </div>

        <!-- Mobile Menu -->
        <div class="relative md:hidden">
          <button @click="showMenu = !showMenu" class="dark:text-white text-2xl">
            ⋯
          </button>

          <div
            v-if="showMenu"
            class="absolute right-0 mt-2 dark:bg-[#333] p-3 rounded shadow-md z-20 flex flex-col gap-3 w-60"
          >
            <Searchbox />
            <Dropdown v-model="selected" :options="dropdownOptions" />
            <BaseButton text="New Blog" size="md" variant="primary" />
          </div>
        </div>
      </header>

      <!-- Scrollable main content -->
      <main class="overflow-y-auto mt-6 flex gap-4 flex-wrap no-scrollbar">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </main>
    </div>
  </div>
</template>