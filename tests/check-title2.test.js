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
      const myButton = $('a=Add User')
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
    const myButton = $('a=Permissions')
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
});


//Close User Management Menu
describe('Close User Management', () => {
    it('Close', () => {
        const myButton = $('a*=User Management')
        myButton.doubleClick();
        browser.pause(2000)
  });
});

describe('Open Data Inputs', () => {
    it('Open', () => {
        const myButton = $('a=Data Inputs')
        myButton.click();
        browser.pause(2000);
  });
});

//Open Add Intent
describe('Data Inputs', () => {
    it('Opening Add Intents', () => {
      const myButton = $('a=Add Intents')
      myButton.click();
      browser.pause(2000)
    });
    it('Search for Intents', () => {
      const input = $('#search_bar');
      input.setValue('support_email')
      browser.pause(2000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
    })
    // search for correct ans
    //add , delete , edit
    //add
    it('Add Testing Intent', () => {
      const myButton = $('#add_intent_btn')
      myButton.click();
      browser.pause(2000)
      const input = $('#enter_intent_id');
      input.setValue('Testing Intent')
      browser.pause(1000)
    })
    it('save new intent',()=>{
      const myButton = $('#save_intent')
      myButton.click();
      browser.pause(2000)
    });
    it('click ok',()=>{
      const myButton = $('button=OK')
      myButton.click();
      browser.pause(2000)
    });

    it('Check Testing Intent', () => {
      const value = $$('td')[1].getText()
      assert.equal(value,'Testing Intent')
      browser.pause(1000)
    })

    it('Edit Testing Intent', () => {
      const myButton = $('#edit_intent_icn')
      myButton.click();
      const value = $('#enter_intent_id').getText()
      const input = $('#enter_intent_id');
      input.setValue(value + '2.0 new')
      browser.pause(1000)
    })
    it('save edited intent',()=>{
      const myButton = $('#save_intent')
      myButton.click();
      browser.pause(2000)
    });
    it('click ok',()=>{
      const myButton = $('button=OK')
      myButton.click();
      browser.pause(2000)
    });

  it('Delete Testing Intent', () => {
      const myButton = $('#single_delete_intent_id')
      myButton.click();
      const yButton = $('button=Yes, delete it!')
      yButton.click();
      browser.pause(2000)
  })

  it('click ok',()=>{
    const myButton = $('button=OK')
    myButton.click();
    browser.pause(2000)
  });
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
        input.setValue('report')
        browser.pause(2000)
        const myButton = $('#search_btn')
        myButton.click();
        browser.pause(2000)
    })
    // search for correct ans
    //add , delete , edit
    it('Add Response and Intent', () => {
      const myButton = $('#editor')
      myButton.click();
      browser.pause(2000)
      const input = $('#enter_intent_id');
      input.setValue('Testing Response and Intent')
      browser.pause(1000)
      const selectBox = $('#res_n_int_intent');
      const value = selectBox.getValue();
      selectBox.selectByAttribute('value', 'send_denials');
      browser.pause(2000)
    })
    //res_n_int_intent
    it('save new response intent',()=>{
      const myButton = $('#save_intent')
      myButton.click();
      browser.pause(2000)
    });
    it('click ok',()=>{
      const myButton = $('button=OK')
      myButton.click();
      browser.pause(2000)
    });
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
        input.setValue('i want')
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
        input.setValue('call')
        browser.pause(1000)
        const myButton = $('#search_btn')
        myButton.click();
        browser.pause(2000)
    })
    // search for correct ans
    //add , delete , edit
  });

  describe('Close a*=Data Inputs', () => {
    it('Close', () => {
        const myButton = $('a*=Data Inputs')
        myButton.doubleClick();
        browser.pause(2000)
  });
});

//Menu End User Response and Unasnwered Questions
describe('Open Data Inputs', () => {
    it('Open End User Response', () => {
        const myButton = $('a*=End User Response')
        myButton.click();
        browser.pause(2000);
  });
});

describe('Unanswered Questions', () => {
    it('Opening Unanswered Questions', () => {
        const myButton = $('a*=Unanswered Questions')
        myButton.click();
        browser.pause(2000)
      });
    it('Search for Unanswered Questions', () => {
        const input = $('#search_bar');
        input.setValue('where')
        browser.pause(1000)
        const myButton = $('#search_btn')
        myButton.click();
        browser.pause(2000)
    })
  });

  describe('Chat History', () => {
    it('Opening Chat History', () => {
      const myButton = $('a*=Chat History')
      myButton.click();
      browser.pause(2000)
    });
      it('Search for User Type', () => {
        const input = $('#search_bar');
        input.setValue('download the manifest')
        browser.pause(1000)
        const myButton = $('#search_btn')
        myButton.click();
        browser.pause(2000);
        console.log(myButton);
        console.log('sefsf');
    })
        console.log('sefsf');
  });