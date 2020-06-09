let homepage = require("../Pages/Homepage");
describe("demo calculator tests", function () {
  it("addition test", function () {
    homepage.get("https://juliemr.github.io/protractor-demo/");

    homepage.enterFirst("2");

    homepage.enterSecond("4");

    homepage.clickgo();

    homepage.verify("6");

    browser.sleep(3000);
  });
});
