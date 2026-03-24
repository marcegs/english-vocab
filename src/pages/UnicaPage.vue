<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
    <div class="max-w-2xl mx-auto">
      <router-link 
        to="/" 
        class="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </router-link>

      <div v-if="loading" class="flex items-center justify-center min-h-[400px]">
        <div class="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div v-else-if="words.length > 0" class="space-y-8">
        <div class="flex justify-center mb-4">
          <span class="px-3 py-1 bg-slate-700/50 text-slate-400 text-sm rounded-full">
            {{ currentIndex + 1 }} / {{ words.length }}
          </span>
        </div>

        <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 space-y-6">
          <h2 class="text-4xl md:text-5xl font-bold text-white text-center">
            {{ currentWord.word }}
          </h2>
          
          <div class="space-y-4">
            <div>
              <span class="text-indigo-400 text-sm font-medium uppercase tracking-wide">Description</span>
              <p class="text-slate-300 mt-1 text-lg">{{ currentWord.description }}</p>
            </div>
            
            <div>
              <span class="text-indigo-400 text-sm font-medium uppercase tracking-wide">Use Case</span>
              <p class="text-slate-300 mt-1 text-lg italic">"{{ currentWord.useCase }}"</p>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <button 
            @click="prevWord"
            :disabled="currentIndex === 0"
            class="px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <button 
            @click="nextWord"
            :disabled="currentIndex === words.length - 1"
            class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-all duration-200 flex items-center gap-2"
          >
            Next
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div class="flex justify-center pt-4">
          <div class="flex gap-1.5">
            <button 
              v-for="(_, index) in words" 
              :key="index"
              @click="goToWord(index)"
              :class="[
                'w-2 h-2 rounded-full transition-all duration-200',
                index === currentIndex ? 'bg-indigo-500 w-4' : 'bg-slate-600 hover:bg-slate-500'
              ]"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchWords } from '../data/words.js'

const words = ref([])
const currentIndex = ref(0)
const loading = ref(true)

const currentWord = computed(() => words.value[currentIndex.value])

const nextWord = () => {
  if (currentIndex.value < words.value.length - 1) {
    currentIndex.value++
  }
}

const prevWord = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToWord = (index) => {
  currentIndex.value = index
}

onMounted(async () => {
  const result = await fetchWords()
  words.value = result.words
  loading.value = false
})
</script>
