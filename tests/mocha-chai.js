import assert from 'assert';

before(()=>{
    browser.url('https://staging.cense.ai');
});
//login
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

//Menu 1 Dashboard and User Management
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

//Add Role
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
  // search for correct ans
  //add , delete , edit
});

//Add User
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
  // search for correct ans
  //add , delete , edit
});

//Permissions
describe('Permissions', () => {
  it('Opening Permissions', () => {
    const myButton = $('a*=Permissions')
    myButton.click();
    browser.pause(2000)
  });
    it('Search for User Permisson', () => {
      const input = $('#search_bar');
      input.setValue('medical')
      browser.pause(1000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
  })
  // search for correct ans
  //add , delete , edit
  //close User Management Menu
  // const myButton1 = $('#User_Management')
  // myButton1.doubleClick();
});

//Menu 2 Data Inputs and Add Intent
describe('Data Inputs', () => {
  //Open Data Inputs
  // const myButton1 = $('#Data_Inputs')
  // myButton1.click();
  it('Opening Add Intents', () => {
    const myButton = $('a*=Add Intents')
    myButton.click();
    browser.pause(2000)
  });
    it('Search for Intents', () => {
      const input = $('#search_bar');
      input.setValue('medical')
      browser.pause(1000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
  })
  // search for correct ans
  //add , delete , edit
});

//Response & Intent
describe('Response & Intent', () => {
  it('Opening Response & Intent', () => {
    const myButton = $('a*=Response & Intent')
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
  // search for correct ans
  //add , delete , edit
});

//Add Questions
describe('Add Questions', () => {
  it('Opening Add Questions', () => {
    const myButton = $('a*=Add Questions')
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
  // search for correct ans
  //add , delete , edit
});

//Add Tasks
describe('Add Tasks', () => {
  it('Opening Add Tasks', () => {
    const myButton = $('a*=Add Tasks')
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
  // search for correct ans
  //add , delete , edit
  //close  Data Inputs
  // const myButton1 = $('#Data_Inputs')
  // myButton1.doubleClick();
});

//Menu 3 End User Response and Unanswered Questions
describe('Unanswered Questions', () => {
  //Open End User Response
  // const myButton1 = $('#End_User_Response')
  // myButton1.click();
  it('Opening Unanswered Questions', () => {
    const myButton = $('a*=Unanswered Questions')
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
  // search for correct ans
  //add , delete , edit
});

//Task Responses
describe('Task Responses', () => {
  it('Opening Task Responses', () => {
    const myButton = $('a*=Task Responses')
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

//Menu 4 Apps and Scheduler
describe('Scheduler', () => {
  it('Opening Scheduler', () => {
    const myButton = $('a*=Scheduler')
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

//Tickets
describe('TTickets', () => {
  it('Opening Tickets', () => {
    const myButton = $('a*=Tickets')
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