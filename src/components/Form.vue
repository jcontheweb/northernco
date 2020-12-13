<template>
  <form @submit.prevent>
    <p
      class="text-white md:text-xl"
    >Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.</p>

    <div class="md:flex justify-between items-end md:space-x-5 mt-10 md:mt-16">
      <FormInput v-model="form.email" :error="errors.email" @input="errors.email = null"></FormInput>
      <FormSelect class="mt-4 md:mt-0" v-model="form.interest" :error="errors.interest" @input="errors.interest = null">
        <option disabled selected>Your interests</option>
        <option v-for="(interest, index) in interests" :key="index" :value="interest">{{ interest }}</option>
      </FormSelect>
    </div>

    <button
      @click="submit"
      :disabled="loading"
      :class="{'cursor-not-allowed' : loading}"
      class="focus:shadow-outline focus:outline-none md:text-xl bg-brand-red text-white py-4 w-full mt-6 md:mt-8 rounded font-bold"
    >{{ loading ? 'Submitting...' : 'Sign Up Now' }}</button>
  </form>
</template>

<script>
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
// import axios from "axios";
export default {
  components: {
    FormInput,
    FormSelect
  },
  data() {
    return {
      submitted: false,
      loading: false,
      form: {
        email: "",
        interest: ""
      },
      errors: {
        email: null,
        interest: null
      }
    };
  },
  methods: {
    async submit() {
      if (this.validate()) {
        try {
          this.loading = true;
          // await axios.post("http://localhost:3002/api/form");
          setTimeout(() => {
            this.loading = false;
            this.$emit("submitted");
          }, 2000);
        } catch (e) {
          console.error(e);
          this.loading = false;
        }
      }
    },

    validate() {
      const { form } = this;

      if (!form.email) {
        this.errors.email = "Please enter an email address.";
        return;
      }
      if (!this.validateEmail(form.email)) {
        this.errors.email = "Please enter a valid email address.";
        return;
      }

      if (!form.interest) {
        this.errors.interest = "Please select an interest.";
        return;
      }

      return true;
    },

    validateEmail(email) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }
  },
  computed: {
    interests() {
      return [
        "Project Management",
        "Web-Development",
        "Graphic Design",
        "Digital Marketing"
      ];
    }
  }
};
</script>