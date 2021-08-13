const { getLastDemoUserOrThrow, addUser } = require('./data/database.js');

module.exports = {
  Query: {
   // demoUser: (_, __, { database }) => database.getLastDemoUserOrThrow(),
   demoUser: (_, __, ___) => getLastDemoUserOrThrow(),
  },
  Mutation: {
    // addUser: (_, {
    //   username,
    //   password,
    //   email,
    //   gender,
    //   pizzaTopping,
    //   age,
    // }, { database }) => database.addUser(username, password, email, gender, pizzaTopping, age),
    addUser: (_, { input }, ___) => {
      return addUser(input);
    },
  },
};

// mutation AddUser {
//   addUser(username: "asdf", password: "asdf", email: "asdf@asdf", gender: "NON_BINARY", pizzaTopping: "HAWAIIAN", age: 1) {
//       username
//   }
// }
// query DemoUser {
//   demoUser {
//     username
//     password
//     email
//     gender
//     pizzaTopping
//     age
//   }
// }
// "eslintConfig": {
//   "extends": "react-app"
// },
