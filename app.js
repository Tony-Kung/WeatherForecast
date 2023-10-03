const app = Vue.createApp({
  data() {
    return {
      api_key: "4473c22efc0bb4b7f1b39402fdb98ccc",
      url_base: "https://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&unit=metric&APPID=${this.api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    //date time
    dateTime() {
      var today = new Date().toISOString().slice(0, 10);
      return today;
    },
  },
});
const vm = app.mount("#app");
