export default {
  props: {
    error: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event.target.value);
    },
    // validEmail(email) {
    //   const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return regex.test(email);
    // }
  },
};
