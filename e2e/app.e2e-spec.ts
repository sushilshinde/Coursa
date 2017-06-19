import { CoursaPage } from './app.po';

describe('coursa App', () => {
  let page: CoursaPage;

  beforeEach(() => {
    page = new CoursaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
