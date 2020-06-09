let homepage = require("../Pages/Homepage");
describe("demo calculator tests", function () {
  it("addition test", function () {
    homepage.get("https://juliemr.github.io/protractor-demo/");

    homepage.enterFirst("4");

    homepage.enterSecond("2");

    homepage.clickgo();

    homepage.verify("6");

    browser.sleep(3000);
  });

  it("subtraction test", function () {
    homepage.get("https://juliemr.github.io/protractor-demo/");

    homepage.enterFirst("4");

    homepage.enterSecond("2");

    homepage.clickgo();

    homepage.verify("1");

    browser.sleep(3000);
  });
});
