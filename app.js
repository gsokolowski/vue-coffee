let PlanComponent = {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      required: true,
    },
    selectedPlan: {
        type: String
    },
  },
  computed: {
    isSelected() {
      // this bit is only for seclectig form input field to know whcih one
      return this.name === this.selectedPlan
    }
  },
  methods: {
    select() {
      this.selected = true;
      console.log("selected", this.name);
      this.$emit('select', this.name); // when select on plan is cliced we emit custom event called select 
      // and pass event data (as payload) this.name of plan so parent knows 
      // which plan was selected 
      // then in the parent (index.html /plan-component) we listen fore select event to happen and when it
      // happens we call the selectPlan method on PlanPickerComponent
    }
  },
};

let PlanPickerComponent = {
  template: "#plan-picker-template",
  components: {
    // component registered localy
    "plan-component": PlanComponent,
  },
  data() {
    return {
      // plans array is a list of names used by plan-template and component plan is passing this names as props name
      plans: ["The Single", "The Curious", "The Addict"],
      // reset selected plans before user will select new one
      selectedPlan: null
    };
  },
  methods: {
    selectPlan(plan) {
        // which plan user has selected
        this.selectedPlan = plan
        console.log("selected plan: ", this.selectedPlan);
    }
  }
};

new Vue({
  el: "#app",
  components: {
    PlanPickerComponent: PlanPickerComponent,
  },
});
