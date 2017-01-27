angular.module('App')
.factory('UserService', UserService);

function UserService() {

  users = [
    {
      id: 1,
      username: "Dityzxrm",
      age: 28,
      gender: "female",
      photo: "../static/img/woman1.jpg",
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
    },
    {
      id: 2,
      username: "PurrfectBabe82",
      age: 32,
      gender: "female",
      photo: "../static/img/woman3.jpg",
        cats: [
          {name: "Oreo", img: "../static/img/cat_01.png"},
          {name: "Ruger", img: "../static/img/cat_01.png"},
          {name: "Malibu", img: "../static/img/cat_01.png"},
          {name: "Curious", img: "../static/img/cat_01.png"},
          {name: "Treat", img: "../static/img/cat_01.png"},
          {name: "Lala", img: "../static/img/cat_01.png"},
        ],
    },
    {
      id: 3,
      username: "Lexecenti",
      age: 23,
      gender: "female",
      photo: "../static/img/woman2.jpg",
        cats: [
          {name: "RZA", img: "../static/img/cat_01.png"},
          {name: "GZA", img: "../static/img/cat_01.png"},
          {name: "Method Man", img: "../static/img/cat_01.png"},
          {name: "Inspectah Deck", img: "../static/img/cat_01.png"},
          {name: "Ol' Dirty Bastard", img: "../static/img/cat_01.png"},
          {name: "Mastah Killah", img: "../static/img/cat_01.png"},
          {name: "Raekwon", img: "../static/img/cat_01.png"},
          {name: "Ghostface", img: "../static/img/cat_01.png"},
          {name: "U-God", img: "../static/img/cat_01.png"},
        ],
    },
    {
      id: 4,
      username: "Cuddlysist",
      age: 31,
      gender: "male",
      photo: "../static/img/male2.jpg",
        cats: [
          {name: "Vortex", img: "../static/img/cat_01.png"},
          {name: "Master", img: "../static/img/cat_01.png"},
          {name: "Dot", img: "../static/img/cat_01.png"},
          {name: "Armani", img: "../static/img/cat_01.png"},
          {name: "Juan", img: "../static/img/cat_01.png"},
        ],
    },
    {
      id: 5,
      username: "MonWanna",
      age: 40,
      gender: "male",
      photo: "../static/img/male1.jpg",
        cats: [
          {name: "Tucker", img: "../static/img/cat_01.png"},
          {name: "Midnight", img: "../static/img/cat_01.png"},
          {name: "Skippy", img: "../static/img/cat_01.png"}
        ],
    },
    {
      id: 6,
      username: "CrazyCatLady",
      age: 33,
      gender: "female",
      photo: "../static/img/woman4.jpg",
        cats: [
          {name: "Stoli", img: "../static/img/cat_01.png"},
          {name: "Pretzel", img: "../static/img/cat_01.png"},
          {name: "Finch", img: "../static/img/cat_01.png"},
          {name: "Nano", img: "../static/img/cat_01.png"},
          {name: "Payton", img: "../static/img/cat_01.png"},
          {name: "Brew", img: "../static/img/cat_01.png"},
          {name: "Claudia", img: "../static/img/cat_01.png"},
          {name: "Wisdom", img: "../static/img/cat_01.png"},
          {name: "Marco", img: "../static/img/cat_01.png"},
          {name: "Keg", img: "../static/img/cat_01.png"},
          {name: "Troy", img: "../static/img/cat_01.png"},
          {name: "Kelso", img: "../static/img/cat_01.png"},
          {name: "Buddha", img: "../static/img/cat_01.png"},
          {name: "Typo", img: "../static/img/cat_01.png"},
          {name: "Jag", img: "../static/img/cat_01.png"},
        ],
    },
    {
      id: 7,
      username: "NicerChik",
      age: 21,
      gender: "female",
      photo: "../static/img/woman7.jpg",
        cats: [
        {name: "Chaos", img: "../static/img/cat_01.png"},
        {name: "Socks", img: "../static/img/cat_01.png"},
        {name: "Manson", img: "../static/img/cat_01.png"},
        {name: "Kip", img: "../static/img/cat_01.png"},
        {name: "Trapper", img: "../static/img/cat_01.png"},
        {name: "Wayne", img: "../static/img/cat_01.png"},
        {name: "Dream", img: "../static/img/cat_01.png"},
        {name: "Ford", img: "../static/img/cat_01.png"},
        {name: "Riddle", img: "../static/img/cat_01.png"},
        {name: "Tamera", img: "../static/img/cat_01.png"},
        {name: "Huey", img: "../static/img/cat_01.png"},
        ],
    },
    {
      id: 8,
      username: "Boomion",
      age: 35,
      gender: "male",
      photo: "../static/img/male3.jpg",
        cats: [
          {name: "LeBron", img: "../static/img/cat_01.png"},
          {name: "Bosh", img: "../static/img/cat_01.png"},
          {name: "Wade", img: "../static/img/cat_01.png"}
        ],
    },
    {
      id: 9,
      username: "BeastBeastBurnt",
      age: 29,
      gender: "male",
      photo: "../static/img/male4.jpg",
        cats: [
          {name: "Catalie Portman", img: "../static/img/cat_01.png"},
          {name: "Neil Catrick Harris", img: "../static/img/cat_01.png"},
          {name: "Cat Blanchette", img: "../static/img/cat_01.png"},
          {name: "Uma Purrman", img: "../static/img/cat_01.png"},
          {name: "Cat King Cole", img: "../static/img/cat_01.png"}
        ],
    },
    {
      id: 10,
      username: "HotSpecial",
      age: 23,
      gender: "female",
      photo: "../static/img/woman6.jpg",
        cats: [
          {name: "Fluffy", img: "../static/img/cat_01.png"},
          {name: "Pip", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"},
          {name: "Fester", img: "../static/img/cat_01.png"}
        ],
    },
    {
      id: 11,
      username: "Amasishi",
      age: 44,
      gender: "male",
      photo: "../static/img/male5.jpg",
        cats: [
          {name: "Vixen", img: "../static/img/cat_01.png"},
          {name: "Kimbo", img: "../static/img/cat_01.png"},
          {name: "Hendrix", img: "../static/img/cat_01.png"},
          {name: "Zim", img: "../static/img/cat_01.png"},
          {name: "Omelette", img: "../static/img/cat_01.png"},
          {name: "Sunshine", img: "../static/img/cat_01.png"},
          {name: "Rapunzel", img: "../static/img/cat_01.png"},
        ],
    },
    {
      id: 12,
      username: "Measusa",
      age: 31,
      gender: "female",
      photo: "../static/img/woman5.jpg",
        cats: [
          {name: "Trixy", img: "../static/img/cat_01.png"},
          {name: "Squeek", img: "../static/img/cat_01.png"},
          {name: "Flinstone", img: "../static/img/cat_01.png"},
          {name: "Greco", img: "../static/img/cat_01.png"},
        ],
    },
  ]

  return users;
}

UserService.$inject = [];