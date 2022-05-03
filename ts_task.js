var users = [
    {
        id: '3s94ac9asdads1ede80022812s',
        index: 1,
        isActive: true,
        balance: '$3,341.99',
        picture: 'https://avatars.dicebear.com/api/human/a.svg',
        age: 35,
        eyeColor: 'grey',
        name: {
            first: 'Chuck',
            last: 'Norrys'
        },
        email: 'chuck-chuck@norrys.hey',
        phone: '+19211111294',
        address: '715 Guider Avenue, Century, New Mexico, 2049',
        registered: 'Tuesday, April 26, 2016 8:06 AM',
        latitude: 2.333593,
        longitude: 16.127554,
        tags: ['cupidatat', 'proident', 'eiusmod', 'cillum', 'exercitation'],
        range: [0, 2, 3, 4, 9],
        friends: [],
        favoriteFruit: 'orange'
    },
    {
        id: '5e91ac98757a1ede800228ab',
        index: 0,
        isActive: false,
        balance: '$2,342.30',
        picture: 'https://avatars.dicebear.com/api/human/a.svg',
        age: 17,
        name: {
            first: 'Curtis',
            last: 'Greene'
        },
        email: 'curtis.greene@zaj.ca',
        phone: '',
        registered: 'Tuesday, April 26, 2016 8:06 AM',
        latitude: '6.357193',
        longitude: -18.177552,
        tags: ['mollit', 'in', 'eu', 'exercitation', 'fugiat'],
        range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        friends: [
            {
                _id: '5e91ac98dee76a88eaeb1081',
                name: {
                    first: 'Nikki',
                    last: 'Lowe'
                },
                picture: 'https://avatars.dicebear.com/api/human/b.svg',
                index: 1
            },
            {
                _id: '5e91ac98757a1ede800228ab',
                name: {
                    first: 'Curtis',
                    last: 'Greene'
                },
                picture: 'https://avatars.dicebear.com/api/human/a.svg',
                index: 0
            },
            {
                _id: '5e91ac988069b104f1dac976',
                name: {
                    first: 'Henry',
                    last: 'Stewart'
                },
                picture: 'https://avatars.dicebear.com/api/human/e.svg',
                index: 5
            },
        ]
    },
];
var getFullname = function (user) {
    if (!user.name) {
        return null;
    }
    return "".concat(user.name.first, " ").concat(user.name.last);
};
var hasFriendWithId = function (user, id) {
    return user.friends.findIndex(function (friend) { return friend._id === id; }) !== -1;
};
var countActiveUser = function (users) {
    return users.reduce(function (result, user) {
        return user.isActive ? result + 1 : result;
    }, 0);
};
// Написать функцию которая принимает список всех пользователей и возвращает список тех, кому больше 18-ти лет
// function getUser(users:Obj3) {
//   let arrNewUsers: User[] = [];  
//   for (let i = 0; i < users.length; i++) {
//     let { age } = users[i];
//      if (age > 18) {
//       arrNewUsers.push(users[i])
//      }
//   }
//   return arrNewUsers;
// }
// getUser(users);
// console.log(users);
var usersOver18 = users.filter((function (user) { return user.age > 18; }));
console.log(usersOver18);
