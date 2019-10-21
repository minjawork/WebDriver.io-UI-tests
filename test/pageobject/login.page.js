import Page from './page';

class LoginPage extends Page {
  constructor () {
    super('./login.html');
  }

  get username () { return $('#username'); }
  get pass () { return $('#password'); }
  get button () { return $('#submit'); }
  get successfullString () { return $('//b[@id="info"]'); }
}
export default new LoginPage();
