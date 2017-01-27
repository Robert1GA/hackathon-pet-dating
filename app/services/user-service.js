angular.module('App')
.factory('UserService', UserService);

function UserService() {
  function getUser(id) {
    for (var i = 0; i < users.length; i++) {
      // use == to allow string numbers to be equal with actual numbers.
      if (users[i].id == id) {
        return users[i];
      }
    }
  }

  var users = [
    {
      id: 1,
      username: "Dityzxrm",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 2,
      username: "PurrfectBabe82",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 3,
      username: "Lexecenti",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 4,
      username: "Cuddlysist",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 5,
      username: "MonWanna",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 6,
      username: "CrazyCatLady",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 7,
      username: "NicerChik",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 8,
      username: "Boomion",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 9,
      username: "BeastBeastBurnt",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 10,
      username: "HotSpecial",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 11,
      username: "Amasishi",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
    {
      id: 12,
      username: "Measusa",
      age: 30,
      gender: "female",
      photo: "../static/img/woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
        dogs: [
          {name: "Nacho", img: "../static/img/cat_01.png"}
        ]
      },
    },
  ]

  return {
    users: users,
    getUser: getUser
  };
}

UserService.$inject = [];
