import Page from './page';

class FailPage extends Page {
  constructor () {
    super('./fail.html');
  }

  get unsuccessfullString () { return $('//b[@id="info"]'); }
  get goBack () { return $('//a[@href="login.html"]'); }
}
export default new FailPage();
