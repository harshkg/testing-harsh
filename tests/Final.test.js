import assert from 'assert';

before(()=>{
    // browser.url('http://localhost:8080/bot');
    browser.url('https://staging.cense.ai/bot/login');
});
after(()=>{
  browser.pause(2000);
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
        // input.setValue('Abcd@123')
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
  it('Add Role',()=>{
    const myButton = $('#add_role_btn')
    myButton.click();
    browser.pause(2000)
    const myButton1 = $('#portal_user_radio')
    myButton1.click();
    browser.pause(2000)
    const myButton2 = $('#add_role_text')
    myButton2.setValue('Testing Role');
    browser.pause(2000)
    const myButton3 = $('button*=Save & Close')
    myButton3.click();
    browser.pause(6000)
  });
  it('Edit Role',()=>{
    const myButton = $('#edit_role_id')
    myButton.click();
    browser.pause(2000)
    const myButton1 = $('#add_role_text')
    myButton1.setValue('Testing Role 2.0');
    browser.pause(2000)
    const myButton2 = $('button*=Save & Close')
    myButton2.click();
    browser.pause(2000)
  });
});

//Add User
describe('Add User', () => {
    it('User Management Opened', () => {
        const myButton = $('a*=User Management')
        myButton.click();
        browser.pause(1000)
    });
    it('Opening Add User', () => {
      const myButton = $('a=Add User')
      myButton.click();
      browser.pause(2000)
  });
    it('Search for User Type', () => {
      const input = $('#search_bar');
      input.setValue('Substancial User')
      browser.pause(1000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
  })
  // search for correct ans
  //add , delete , edit
  it('Add User',()=>{
    const myButton = $('#add_user_btn')
    myButton.click();
    browser.pause(2000)
    const selectBox = $('#select_role_name');
    selectBox.click();
    selectBox.selectByIndex(1);
    browser.pause(2000)
    const myButton2 = $$('input')[$$('input').length-2]
    myButton2.setValue('Testing@gmail.com');
    browser.pause(2000)
    const value = $('#form_password');
    value.setValue('Avsn@123');
    const save = $('button*=Save & Close');
    save.click();
    browser.pause(6000)
  });
  it('User Management Opened', () => {
    const myButton = $('a*=User Management')
    myButton.click();
    browser.pause(1000)
});
it('Opening Add User', () => {
  const myButton = $('a=Add User')
  myButton.click();
  browser.pause(2000)
});
//   it('Delete User', () => {
//     const myButton = $('#single_delete_user_id')
//     myButton.click();
//     const yButton = $('button=Yes, delete it!')
//     yButton.click();
//     browser.pause(2000)
//     })
});
// describe('Delete Role', () => {
//     it('User Management Opened', () => {
//         const myButton = $('a*=User Management')
//         myButton.click();
//         browser.pause(1000)
//     });
//     it('Opening add Role', () => {
//       const myButton = $('a*=Add Role')
//       myButton.click();
//       browser.pause(2000)
//   });
//   it('Delete Role', () => {
//     const myButton = $('#single_delete_role_id')
//     myButton.click();
//     const yButton = $('button=Yes, delete!!')
//     yButton.click();
//     browser.pause(2000)
//     })
// });

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
});

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
      // input.setValue('create_case')
      browser.pause(2000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
    })
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
      browser.pause(4000)
    });

    it('Check Testing Intent', () => {
      const value = $$('td')[1].getText()
      assert.equal(value,'Testing Intent')
      browser.pause(2000)
    })

    it('Edit Testing Intent', () => {
      const myButton = $('#edit_intent_icn')
      myButton.click();
      browser.pause(1000)
      const input = $('#enter_intent_id');
      input.setValue('Testing Intent 2.0 new')
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

//   it('Delete Testing Intent', () => {
//       const myButton = $('#single_delete_intent_id')
//       myButton.click();
//       const yButton = $('button=Yes, delete it!')
//       yButton.click();
//       browser.pause(2000)
//   })

//   it('click ok',()=>{
//     const myButton = $('button=OK')
//     myButton.click();
//     browser.pause(4000)
//   });
});


describe('Open Data Inputs', () => {
  it('Open', () => {
      const myButton = $('a=Data Inputs')
      myButton.click();
      browser.pause(2000);
  });
});

//Open Response & Intent
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
    const myButton = $('#res_add_quesn_btn')
    myButton.click();
    browser.pause(4000)
    const input = $('.ql-editor');
    input.setValue('Testing Response and Intent')
    browser.pause(2000)
    // const selectBox = $('#res_n_int_intent');
    // selectBox.selectByAttribute('value', 'send_denials');
    // const selectBoxs = $('#res_n_int_source');
    // selectBoxs.selectByAttribute('value', 'send_denials');
    browser.pause(2000)
  })
  it('save new intent',()=>{
    const myButton = $('#res_n_int_save')
    myButton.click();
    browser.pause(6000)
  });
  it('Check Testing Intent', () => {
    const value = $$('td')[1].getText()
    assert.equal(value,'Testing Response and Intent')
    browser.pause(2000)
  })
  it('Edit Testing Intent', () => {
    const myButton = $('#edit_quesn_btn')
    myButton.click();
    browser.pause(2000)
    const input = $('.ql-editor');
    input.setValue('Testing Response and Intent 2.0 new')
    browser.pause(2000)
  })
  it('save edited intent',()=>{
    const myButton = $('#res_n_int_save')
    myButton.click();
    browser.pause(4000)
  });
  // it('Delete Testing Intent', () => {
  //     const myButton = $('#single_delete_question_id')
  //     myButton.click();
  //     const yButton = $('button=Yes, delete!!')
  //     yButton.click();
  //     browser.pause(2000)
  // })
  // it('click ok',()=>{
  //   const myButton = $('button=OK')
  //   myButton.click();
  //   browser.pause(2000)
  // });
});

describe('Open Data Inputs', () => {
  it('Open', () => {
      const myButton = $('a=Data Inputs')
      myButton.click();
      browser.pause(2000);
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
      // input.setValue('where')
      browser.pause(1000)
      const myButton = $('#search_btn')
      myButton.click();
      browser.pause(2000)
  })
  // search for correct ans
  //add , delete , edit
  it('Add Response and Intent', () => {
    const myButton = $('#add_quesn_btn')
    myButton.click();
    browser.pause(4000)
    const input = $('#add_question_question');
    input.setValue('Testing Question')
    browser.pause(2000)
  })
  it('save new intent',()=>{
    const myButton = $('#add_quesn_save')
    myButton.click();
    browser.pause(6000)
  });
  it('click ok',()=>{
    const myButton = $('button=OK')
    myButton.click();
    browser.pause(2000)
  });
  it('Check Testing Intent', () => {
    const value = $$('td')[1].getText()
    assert.equal(value,'Testing Question')
    browser.pause(2000)
  })
  it('Edit Testing Intent', () => {
    const myButton = $('#edit_quesn_btn')
    myButton.click();
    browser.pause(2000)
    const input = $('#add_question_question');
    input.setValue('Testing Question 2.0 new')
    browser.pause(2000)
  })
  it('save edited intent',()=>{
    const myButton = $('#add_quesn_save')
    myButton.click();
    browser.pause(4000)
  });
  it('click ok',()=>{
    const myButton = $('button=OK')
    myButton.click();
    browser.pause(2000)
  });
  // it('Delete Testing Intent', () => {
  //     const myButton = $('#single_delete_question_id')
  //     myButton.click();
  //     const yButton = $('button=Yes, delete!!')
  //     yButton.click();
  //     browser.pause(2000)
  // })
  // it('click ok',()=>{
  //   const myButton = $('button=OK')
  //   myButton.click();
  //   browser.pause(2000)
  // });
});


describe('Open Data Inputs', () => {
  it('Open', () => {
      const myButton = $('a=Data Inputs')
      myButton.click();
      browser.pause(2000);
  });
});

//   //Add Tasks
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
        input.keys('Enter');
        browser.pause(2000)
    })
    // search for correct ans
    //add , delete , edit
    // it('Add Task', () => {
    //   const myButton = $('#add_task_btn')
    //   myButton.click();
    //   browser.pause(4000)
    //   // const input = $('#task_name_id');
    //   // input.setValue('Testing Task')
    //   // browser.pause(2000)
    //   // const myButton1 = $('span*=Select option');
    //   // myButton1.click();
    //   // const input1 = $('#select_role_name')
    //   // input1.setValue('add')
    //   // input1.keys('Enter');
    //   // browser.pause(2000)
    //   const value = $$('input')[$$('input').length-1]
    //   value.setValue('Testing Question1');
    //   browser.pause(2000);
    //   const button1 = $('a*=Add Question');
    //   button1.click();
    //   browser.pause(2000);
    //   // const value1 = $$('input')[$$('input').length-1]
    //   // value1.setValue('Testing Question2');
    //   // browser.pause(2000);
    //   // const button2 = $('button*=Save');
    //   // button2.click();
    //   // browser.pause(2000);
    // })
    // it('Check Testing Intent', () => {
    //   const value = $$('td')[1].getText()
    //   assert.equal(value,'Testing Task')
    //   browser.pause(2000)
    // })
    // it('Edit Testing Intent', () => {
    //   // const myButton = $('#edit_quesn_btn')
    //   // myButton.click();
    //   browser.pause(2000)
    //   const input = $('#task_name_id');
    //   input.setValue('Testing Task 2.0 new')
    //   browser.pause(2000)
    // })
    // it('save edited intent',()=>{
    //   const myButton = $('button*=Save')
    //   myButton.click();
    //   browser.pause(4000)
    // });
    // it('click ok',()=>{
    //   const myButton = $('button=OK')
    //   myButton.click();
    //   browser.pause(2000)
    // });
    // it('Delete Testing Intent', () => {
    //   const myButton = $('#single_delete_task_id')
    //   myButton.click();
    //   // const yButton = $('button=Yes, delete it!')
    //   // yButton.click();
    //   browser.pause(2000)
    // })
    // it('click ok',()=>{
    //   const myButton = $('button=OK')
    //   myButton.click();
    //   browser.pause(2000)
    // });
  });


describe('Open End User Response', () => {
  it('Open', () => {
      const myButton = $('a=End User Response')
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

describe('Open End User Response', () => {
  it('Open', () => {
      const myButton = $('a=End User Response')
      myButton.click();
      browser.pause(2000);
  });
});

describe('Chat History', () => {
  it('Opening Chat History', () => {
      const myButton = $('a*=Chat History')
      myButton.click();
      browser.pause(2000)
    });
  it('Open chat for Amit in Chat History', () => {
      const myButton = $('a*=View Chat History')
      myButton.click();
      browser.pause(2000)
      const user = $$('h5')[0].getText();
      // assert.equal(user,'avsnalawade123@gmail.com');
      assert.equal(user,':  ');
      browser.pause(4000);
  })
});

describe('Open Apps', () => {
  it('Open', () => {
      const myButton = $('a*=Apps')
      myButton.click();
      browser.pause(2000);
  });
});

describe('Chat History', () => {
  it('Opening Chat History', () => {
      const myButton = $('a*=Tickets')
      myButton.click();
      browser.pause(2000)
    });
  it('Open createdby for Tickets', () => {
      const selectBox = $('#select_created_by')
      selectBox.selectByIndex(4);
      selectBox.pause(2000)
      const user = $$('td')[3].getText();
      assert.equal(user,'Amit Gaonkar');
      browser.pause(4000);
  })
});