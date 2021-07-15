function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  const coreText = {
    0: "Our customers are the sole arbiter of the value of our products and services. We strive to meet unmet needs and serve the underserved.",
    1: "Rapid change is the only constant in the digital age of ours. We embrace change, celebrate it, and always strive to be a thought leader that influences it.",
    2: "We are in a constant race to success while grappling with rapidly shifting forces. We move faster, better, and with more urgency each day.",
    3: "Our work is our commitment. We commit to our values, institution, customers, and partners. We commit to each other. Above all, we commit to doing the best we can and being the best we are.",
    4: "We have traveled a long way from our humble beginning and yet, we never lose our humility in our continual quest for greater heights."
  };
  
  new Vue({
    el: "#app",
    data() {
      return {
        coreCount: 5,
        currentKey: 0,
        isTransforming: false,
        coreText
      };
    },
    methods: {
      async handleSlider(key) {
        if (key === this.currentKey) return;
        this.isTransforming = true;
        await delay(400);
        this.isTransforming = false;
        if (key < 0) {
          this.currentKey = this.coreCount - 1;
        } else if (key >= this.coreCount) {
          this.currentKey = 0;
        } else {
          this.currentKey = key;
        }
      },
      goPrev() {
        this.handleSlider(this.currentKey - 1);
      },
      goNext() {
        this.handleSlider(this.currentKey + 1);
      }
    }
  });
  