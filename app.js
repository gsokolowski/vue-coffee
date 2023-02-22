Vue.component("plan-picker-component", {
    template: "#plan-picker-template",
    data() {
        return {
            // plans array is a list of names used by plan-template and component plan is passing this names as props name
            plans: ["The Single", "The Curious", "The Addict"]
        }
      },    
})

// componnet plan-component
// contains template #plan-template which is defined in index.html
Vue.component("plan-component", {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});

new Vue({
  el: "#app",
});
