angular.module('App')
.component('browseList', {
  templateUrl: 'app/components/browseList.html',
  controller: browseListCtrl,
  controllerAs: 'browseList'
});

function browseListCtrl($http, BrowseService) {
  var browseList = this;

  browseList.users = [
    {
      username: "Dityzxrm",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "BrilliantBabe",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "Lexecenti",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "Cuddlysist",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "MonWanna",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "CrazyCatLady",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "NicerChik",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "Boomion",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "BeastBeastBurnt",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "HotSpecial",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "Amasishi",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
    {
      username: "Measusa",
      age: 30,
      gender: "female",
      photo: "woman1.jpg",
      pets: {
        cats: [
          {name: "Fluffy", img: ""},
          {name: "Pip", img: ""},
          {name: "Fester", img: ""}
        ],
        dogs: [
          {name: "Nacho", img: ""}
        ]
      },
    },
  ]

}