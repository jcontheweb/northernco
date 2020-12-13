<template>
  <div class="w-full">
    <span v-if="error" class="text-right block text-white text-xs mb-1">{{ error }}</span>
    <input
      :class="error ? 'border-brand-red' : 'border-transparent'"
      class="border-2 focus:outline-none focus:shadow-outline text-brand-black h-16 p-5 transition-all duration-200 w-full italic placeholder-brand-gray"
      placeholder="Your Email Address*"
      @input="handleInput"
    />
  </div>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin]
};
</script>