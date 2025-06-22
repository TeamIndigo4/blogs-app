<script setup>
</script>

<template>
  <div class="h-screen overflow-hidden bg-[#222]">
    <router-view></router-view>
  </div>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #333;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
  border: 2px solid #333;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>


