<template>
  <div class="max-w-5xl w-full">
    <h2 class="text-white font-sans text-6xl uppercase font-bold leading-none">
      internship signup form
      <span class="block w-64 h-3 bg-brand-red my-10"></span>
    </h2>
    <Form @submitted="submitted = true" v-if="!submitted" />
    <FormSuccessResponse v-else />
  </div>
</template>

<script>
import Form from "@/components/Form";
import FormSuccessResponse from "@/components/FormSuccessResponse";
export default {
  components: {
    Form,
    FormSuccessResponse
  },
  data() {
    return { submitted: false };
  }
};
</script>