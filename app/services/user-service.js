angular.module('App')
.factory('UserService', UserService);

function UserService($http) {
  var userList = this;

  userList.users = [
    {
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

UserService.$inject = ['$http'];