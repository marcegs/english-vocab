<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
    <div class="max-w-4xl mx-auto">
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </router-link>

      <h1 class="text-3xl font-bold text-white mb-8">All Words</h1>

      <div v-if="loading" class="flex items-center justify-center py-20">
        <div class="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div v-else class="grid gap-4 md:grid-cols-2">
        <div 
          v-for="(word, index) in words" 
          :key="index"
          class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-200"
        >
          <h3 class="text-2xl font-bold text-white mb-3">{{ word.word }}</h3>
          
          <div class="space-y-3">
            <div>
              <span class="text-indigo-400 text-xs font-medium uppercase tracking-wide">Description</span>
              <p class="text-slate-300 text-sm mt-1">{{ word.description }}</p>
            </div>
            
            <div>
              <span class="text-indigo-400 text-xs font-medium uppercase tracking-wide">Use Case</span>
              <p class="text-slate-400 text-sm mt-1 italic">"{{ word.useCase }}"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchWords } from '../data/words.js'

const words = ref([])
const loading = ref(true)

onMounted(async () => {
  const result = await fetchWords()
  words.value = result.words
  loading.value = false
})
</script>
