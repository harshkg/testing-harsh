// const assert = require('assert');
import assert from 'assert';

describe('Test HomePage', () => {

    before(()=>{
        browser.url('https://staging.cense.ai');
    });
    it('should have the right title', () => {
        const title = browser.getTitle();
        assert.equal(title, 'Cense AI');
        browser.pause(1000);
    });

    it('Does the login page load at first', () => {
        const value = $$('h2')[0].getText()
        assert.equal(value,'Welcome Back!')
        browser.pause(1000)
    });

    it('Enter the username field and hit Login', () => {
        const input = $('#login_username');
        input.setValue('avsnalawade123@gmail.com')
        browser.pause(4000)
    })
    
    it('Enter the password field and hit Login', () => {
        const input = $('#form_password');
        input.setValue('Avsn@#12')
        browser.pause(4000)
    })

    it('Hit the login button', () => {
        const myButton = $('button*=Log In')
        myButton.click()
        browser.pause(3000)
      })
});