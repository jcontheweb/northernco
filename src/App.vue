<template>
  <div class="font-merriweather" id="app">
    <div class="flex flex-col items-center justify-center min-h-screen bg-brand-black px-4">
      <InternshipForm />
    </div>
  </div>
</template>

<script>
import InternshipForm from '@/components/InternshipForm'
export default {
  components: { InternshipForm }
}
</script>