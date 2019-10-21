import Page from './page';

class LoginPage extends Page {
  constructor () {
    super('./login.html');
  }

  get username () { return $('#username'); }
  get pass () { return $('#password'); }
  get button () { return $('#submit'); }
  get successfullString () { return $('//b[@id="info"]'); }
  get h2LoginPage () { return $('//h2[.="Test Automation Login Page"]'); }
  get info () { return $('.valid'); }
}
export default new LoginPage();
