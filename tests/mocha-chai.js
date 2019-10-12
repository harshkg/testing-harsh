import assert from 'assert';
before(()=>{
    browser.url('http://localhost:8080/bot/login');
});
describe('Test HomePage', () => {
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
    })
    it('Enter the password field and hit Login', () => {
        const input = $('#form_password');
        input.setValue('Avsn@#12')
    })
    it('Hit the login button', () => {
        const myButton = $('button*=Log In')
        myButton.click()
        browser.pause(10000)
      })
})
describe('Dashboard Page functions', () => {
  browser.waitUntil(() => {
    return $$('h4')[0].getText() === 'ChatBot Request - Response'
  }, 5000, 'expected text to be different after 5s');

    it('Does the login page load at first', () => {
      const value = $$('h4')[0].getText()
      assert.equal(value,'ChatBot Request - Response')
      browser.pause(1000)
  });
    it('User Management Opened', () => {
      const myButton = $('#User_Management')
      myButton.click();
      browser.pause(1000)
  });
});
describe('Add Role', () => {
    it('Opening add Role', () => {
      const myButton = $('a*=Add Role')
      myButton.click();
      browser.pause(2000)
  });
    it('Search for User Type', () => {
      const input = $('#search_bar');
      input.setValue('medical')
      browser.pause(1000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
  })
});
describe('Add User', () => {
    it('Opening Add User', () => {
      const myButton = $('a*=Add User')
      myButton.click();
      browser.pause(2000)
  });
    it('Search for User Type', () => {
      const input = $('#search_bar');
      input.setValue('medical')
      browser.pause(1000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
  })
});
describe('Permissions', () => {
  it('Opening add Role', () => {
    const myButton = $('a*=Add User')
    myButton.click();
    browser.pause(2000)
});
  it('Search for User Type', () => {
    const input = $('#search_bar');
    input.setValue('medical')
    browser.pause(1000)
    const myButton = $('#search_btn')
    myButton.click();
    browser.pause(2000)
})
});