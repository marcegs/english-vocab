<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
    <div class="text-center space-y-12">
      <div class="space-y-4">
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight">
          English <span class="text-indigo-400">Vocab</span>
        </h1>
        <p class="text-slate-400 text-lg max-w-md mx-auto">
          Expand your vocabulary with curated words and practical examples
        </p>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link 
          to="/unica" 
          class="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          Unica
        </router-link>
        <router-link 
          to="/lista" 
          class="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-all duration-200 hover:scale-105 border border-slate-600"
        >
          Lista
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
