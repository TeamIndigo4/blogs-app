<script>
import AdminHeader from "../components/common_components/AdminHeader.vue";

export default {
  components: {
    AdminHeader,
  },
  methods: {
    handleLogout() {
      console.log("Logged out");
    },
  },
};
</script>

<template>
  <main class="h-screen bg-[#eeeeee] dark:bg-[#1e1e1e]">
    <admin-header
      :name="'Amrik Bhadra'"
      :email="'amrik@example.com'"
      :logout="handleLogout"
    />

    <div class="flex h-[90%]">
      <router-view/>
    </div>
  </main>
</template>
