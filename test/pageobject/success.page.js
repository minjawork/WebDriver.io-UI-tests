import Page from './page';

class SuccessPage extends Page {
  constructor () {
    super('./success.html');
  }

  get successfullString () { return $('//b[@id="info"]'); }
  get loginSuccess () { return $('#info'); }
}

export default new SuccessPage();
