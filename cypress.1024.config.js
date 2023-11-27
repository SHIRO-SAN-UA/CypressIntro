const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
    baseUrl: "https://demo.realworld.io/#/",
    reporter: "mochawesome",
    viewportWidth: 1024,
    viewportHeight: 768
}
});  