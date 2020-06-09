let homepage = function () {
  let firstno = element(by.model("first"));
  let secondno = element(by.model("second"));
  let gobutton = element(by.id("gobutton"));

  this.get = function (url) {
    browser.get(url);
  };

  this.enterFirst = function (firstnumber) {
    firstno.sendKeys(firstnumber);
  };

  this.enterSecond = function (secondnumber) {
    secondno.sendKeys(secondnumber);
  };

  this.clickgo = function (firstnumber) {
    gobutton.click();
  };

  this.verify = function (result) {
    let output = element(by.className("ng-binding"));
    expect(output.getText()).toEqual("6");
  };
};

module.exports = new homepage();
