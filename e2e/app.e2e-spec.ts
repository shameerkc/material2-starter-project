import { Material2StarterProjectPage } from './app.po';

describe('material2-starter-project App', function() {
  let page: Material2StarterProjectPage;

  beforeEach(() => {
    page = new Material2StarterProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
