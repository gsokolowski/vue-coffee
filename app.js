// componnet plan-component
// contains template #plan-template which is defined in index.html
//
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
  data: {
    // plans array is a list of names used by plan-template and component plan is passing this names as props name
    plans: ["The Single", "The Curious", "The Addict"],
  },
});
