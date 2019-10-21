import LoginPage from '../pageobject/login.page';
import SuccessPage from '../pageobject/success.page';
import FailPage from '../pageobject/fail.page';
import { username, password, invalidUsername, invalidPassword } from '../credentials/credentials';
import { expect } from 'chai';

describe('Login test cases', function () {
  beforeEach(function () {
    browser.url('./');
  });

  it('Login with valid username and password', function () {
    LoginPage.username.click();
    LoginPage.username.setValue(username);
    LoginPage.pass.click();
    LoginPage.pass.setValue(password);
    LoginPage.button.click();

    expect(SuccessPage.successfullString.getText()).to.equal('Login Successfull');
    expect(browser.getUrl()).to.equal('http://qa-test-dev.s3-website-eu-west-1.amazonaws.com/success.html');
  });

  it('Login with valid username, invalid password', function () {
    LoginPage.username.click();
    LoginPage.username.setValue(username);
    LoginPage.pass.click();
    LoginPage.pass.setValue(invalidPassword);
    LoginPage.button.click();

    expect(FailPage.unsuccessfullString.getText()).to.equal('Login failed.');
    expect(browser.getUrl()).to.equal('http://qa-test-dev.s3-website-eu-west-1.amazonaws.com/fail.html');
  });

  it('Login with invalid username, valid password', function () {
    LoginPage.username.click();
    LoginPage.username.setValue(invalidUsername);
    LoginPage.pass.click();
    LoginPage.pass.setValue(password);
    LoginPage.button.click();

    expect(FailPage.unsuccessfullString.getText()).to.equal('Login failed.');
    expect(browser.getUrl()).to.equal('http://qa-test-dev.s3-website-eu-west-1.amazonaws.com/fail.html');
  });

  it('Login with invalid username, invalid password', function () {
    LoginPage.username.click();
    LoginPage.username.setValue(invalidUsername);
    LoginPage.pass.click();
    LoginPage.pass.setValue(invalidPassword);
    LoginPage.button.click();

    expect(FailPage.unsuccessfullString.getText()).to.equal('Login failed.');
    expect(browser.getUrl()).to.equal('http://qa-test-dev.s3-website-eu-west-1.amazonaws.com/fail.html');
  });

  it('Login with no username, no password', function () {
    LoginPage.username.click();
    LoginPage.pass.click();
    LoginPage.button.click();

    expect(FailPage.unsuccessfullString.getText()).to.equal('Login failed.');
    expect(browser.getUrl()).to.equal('http://qa-test-dev.s3-website-eu-west-1.amazonaws.com/fail.html');
  });
});
