<template>
  <header class="h-[10%] flex items-center bg-white dark:bg-[#1d1d1d] shadow-sm border-b border-b-[#eeeeee4b]">
    <div id="header-content" class="w-[88%] mx-auto flex items-center justify-between">
      <router-link to="/admin">
        <h1 class="text-[#333] dark:text-gray-200 text-xl font-bold">BlogsHub</h1>
      </router-link>

      <!-- Profile Section -->
      <div class="relative flex flex-col sm:flex-row gap-2 sm:gap-4 items-end sm:items-center">
        <div class="flex items-center gap-3">
          <span class="h-10 w-10 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold">
            {{ getInitials(name) }}
          </span>
          <div class="hidden sm:flex flex-col">
            <p class="font-semibold text-[#333] dark:text-gray-200 text-sm">{{ name }}</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ email }}</p>
          </div>
          <button @click="toggleOptions" class="dark:text-white">
            <span v-if="showOptions">▲</span>
            <span v-else>▼</span>
          </button>
        </div>

        <!-- Dropdown -->
        <div
          v-if="showOptions"
          class="absolute top-full mt-3 right-0 w-48 bg-white dark:bg-[#2e2e2e] border dark:border-[#484848] rounded-md shadow-lg z-50 p-3 flex flex-col gap-y-3"
        >
          <button @click="toggleTheme" class="text-sm text-left hover:text-primary dark:text-white">
            Toggle Theme
          </button>

          <button
            @click="logoutHandler"
            class="bg-primary hover:bg-primary text-white text-sm px-3 py-2 rounded flex items-center gap-2"
          >
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AdminHeader',
  props: {
    name: {
      type: String,
      default: 'John Doe'
    },
    email: {
      type: String,
      default: 'john.doe@example.com'
    },
    logout: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      showOptions: false
    }
  },
  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions
    },
    logoutHandler() {
      this.logout()
      this.$router.push('/login')
    },
    toggleTheme() {
      document.documentElement.classList.toggle('dark')
    },
    getInitials(name) {
      if (!name) return '??'
      const words = name.trim().split(' ')
      return words.length >= 2
        ? words[0][0].toUpperCase() + words[1][0].toUpperCase()
        : words[0][0].toUpperCase()
    }
  }
}
</script>
