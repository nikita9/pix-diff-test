import {$, browser} from "protractor";

describe('Pix-Diff', () => {
    const tag = 'google-logo';

    browser.ignoreSynchronization = true;

    beforeAll(async () => {
        //beforeEach(() => {
        // browser.pixdiff = new PixDiff(
        // //   {
        // //     basePath: './',
        // //     diffPath: './',
        // //     //width: 1024,
        // //     //height: 800
        // // }
        // );
        //});


        await browser.get('https://www.google.com.ua/');
        await browser.pixdiff.saveRegion($('#hplogo'), tag);
    });

    it('should get canvas dimensions correctly', async () => {

        //browser.waitForAngular(false);

      await expect(browser.pixdiff.checkRegion($('#hplogo'), tag)).toBeTruthy();

        // browser.get('http://www.w3schools.com/html/html5_canvas.asp');
        // browser.pixdiff.saveRegion($('#myCanvas'), tag);
        //
        // expect(browser.pixdiff.checkRegion($('#myCanvas'), tag)).toPass();
    });
});