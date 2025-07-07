<template>
  <div class="faq-item" @click="toggle">
    <div class="faq-question">
      <h3>{{ question }}</h3>
      <span class="faq-icon">{{ isOpen ? '▴' : '▾' }}</span>
    </div>
    <transition name="fade">
      <p v-if="isOpen && answer" class="faq-answer">
        {{ answer }}
      </p>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  question: String,
  answer: String,
})

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #7e3f98;
  font-weight: 300;
}

.faq-question h3 {
  font-size: 1rem;
  margin: 0;
}

.faq-icon {
  font-size: 1.2rem;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.faq-question:hover .faq-icon {
  transform: scale(1.1);
}

.faq-answer {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>