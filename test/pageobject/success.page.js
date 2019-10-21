import Page from './page';

class SuccessPage extends Page {
  constructor () {
    super('./success.html');
  }

  get successfullString () { return $('//b[@id="info"]'); }
}

export default new SuccessPage();
