// createConnection()
//   .then(async connection => {
//     console.log('Inserting a new user into the database...');

//     // const category = new Category();
//     // category.title = 'Kids';
//     // category.description = 'my kids';

//     // const ellie = await Person.create(
//     //   {
//     //     firstName: 'Ellie',
//     //     lastName: 'Sooter',
//     //     description: 'this is a example'
//     //   },
//     //   connection
//     // );

//     // const event = Object.assign(new Event(), {
//     //   title: 'hardware store',
//     //   description: 'trip to hardware store',
//     //   people: [ellie]
//     // });

//     // await connection.manager.save(event);

//     // const user = new User();
//     // user.firstName = 'Timber';
//     // user.lastName = 'Saw';
//     // user.age = 25;
//     // await connection.manager.save(user);
//     // console.log('Saved a new user with id: ' + user.id);

//     // console.log('Loading users from the database...');
//     const events = await connection.manager.find(Event);
//     console.log('Loaded events: ', await events[0].people);

//     // console.log('Here you can setup and run express/koa/any other framework.');
//   })
//   .catch(error => console.log(error));
