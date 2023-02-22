let PlanComponent = {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    // component registered localy
    'plan-component': PlanComponent
  },
  data() {
    return {
      // plans array is a list of names used by plan-template and component plan is passing this names as props name
      plans: ["The Single", "The Curious", "The Addict"],
    };
  },
};

new Vue({
  el: "#app",
  components: {
    PlanPickerComponent: PlanPickerComponent
  }
});
