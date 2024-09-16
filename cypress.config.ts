import { defineConfig } from "cypress";

export default defineConfig({
  env:{
    USER: "68763",
    PASSWORD:"Soylaleche2708"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
