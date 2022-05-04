// userId: D5psSVAkNWPhReliPnnFPuFGoex1
export function seedDatabse(firebase) {
  const tables = [
    {
      id: 1,
      first_name: 'Vasiliy321',
      last_name: 'StrotherssonSeconds',
      email: 'test@gmail.com',
      gender: 'Male',
      ip_address: '245.19.132.246',
    },
    {
      id: 2,
      first_name: 'Linnell',
      last_name: 'Shortan23',
      email: 'lshortan1@ucoz.com',
      gender: 'Female',
      ip_address: '28.139.95.157',
    },
    {
      id: 3,
      first_name: 'Sallahadinh',
      last_name: 'Sonschein',
      email: 'ssonschein2@opensource.org',
      gender: 'Female',
      ip_address: '108.78.109.31',
    },
    {
      id: 4,
      first_name: 'Cori2nd',
      last_name: 'Junkin',
      email: 'cjunkin3Change1@sourceforge.net',
      gender: 'Female',
      ip_address: '205.25.30.176',
    },
    {
      id: 5,
      first_name: 'Alick',
      last_name: 'Topping30',
      email: 'atopping4@smh.com.au',
      gender: 'Male',
      ip_address: '95.6.218.254',
    },
    {
      id: 6,
      first_name: 'Dennison',
      last_name: 'Coxhell',
      email: 'dcoxhell5@over-blog.com',
      gender: 'Male',
      ip_address: '140.251.57.64',
    },
    {
      id: 7,
      first_name: 'Marice',
      last_name: 'Como',
      email: 'mcomo6@google.cn',
      gender: 'Female',
      ip_address: '80.16.165.39',
    },
    {
      id: 8,
      first_name: 'Ariel',
      last_name: 'Spadotto',
      email: 'aspadotto7@chronoengine.com',
      gender: 'Female',
      ip_address: '27.221.234.212',
    },
    {
      id: 9,
      first_name: 'Stanton',
      last_name: 'Yegorchenkov',
      email: 'syegorchenkov8@uiuc.edu',
      gender: 'Male',
      ip_address: '244.235.156.116',
    },
    {
      id: 10,
      first_name: 'Ignacius',
      last_name: 'Hulland',
      email: 'ihulland9@goo.gl',
      gender: 'Male',
      ip_address: '140.170.95.178',
    },
    {
      id: 11,
      first_name: 'test',
      last_name: 'test',
      email: 'test',
      gender: 'test',
      ip_address: 'test',
    },
    {
      id: 12,
      first_name: 'test2',
      last_name: 'test2',
      email: 'test2',
      gender: 'test2',
      ip_address: 'test2',
    },
    {
      id: 18,
      first_name: 'Alexsander',
      last_name: 'Mikhyalov',
      email: 'mik@gmail.com',
      gender: 'male',
      ip_address: 'lol',
    },
    {
      id: 19,
      first_name: 'test12',
      last_name: 'test12',
      email: 'test1',
      gender: 'test1',
      ip_address: 'est123123',
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < tables.length; k++) {
    firebase.firestore().collection('table').add(tables[k]);
  }

  // eslint-disable-next-line prefer-const
  //   for (let i = 1; i <= 10; ++i) {
  //     try {
  //       for (let username = 1; username <= 10; ++username) {
  //         firebase
  //           .firestore()
  //           .collection('todos')
  //           .doc('todoList')
  //           .set({
  //             username: i,
  //             toDosId: i,
  //             userId: '1',
  //             titleOfToDo: 'CreateApp',
  //             toDosArray: [
  //               {
  //                 title: '2nd',
  //                 toDo: 'Get 2nd todo',
  //               },
  //               {
  //                 title: '3d',
  //                 toDo: 'Get 3d todo',
  //               },
  //             ],
  //             imageSrc: `/images/users/${username}/${i}.jpg`,
  //             dateCreated: Date.now(),
  //           });
  //       }
  //       console.log('data seed was successful');
  //     } catch (error) {
  //       console.log(error, ' fetch database was failed');
  //     }
  //   }
}
