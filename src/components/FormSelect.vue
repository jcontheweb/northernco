<template>
  <div class="w-full">
    <span v-if="error" class="text-right block text-white text-xs mb-1">{{ error }}</span>
    <select
      @input="handleInput"
      :class="error ? 'border-brand-red' : 'border-transparent'"
      class="appearance-none focus:outline-none border-2 focus:shadow-outline h-16 text-brand-black p-5 w-full italic"
    >
      <slot />
    </select>
  </div>
</template>

<script>
import InputMixin from "@/mixins/InputMixin";
export default {
  mixins: [InputMixin]
};
</script>

<style scoped>
select {
  background-repeat: no-repeat;
  background-size: 0.5em auto;
  background-position: right 20px center;
  background-image: url("data:image/svg+xml;charset=utf-8, \
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'> \
      <polygon points='0,0 60,0 30,40' style='fill:black;'/> \
    </svg>");
}
</style>