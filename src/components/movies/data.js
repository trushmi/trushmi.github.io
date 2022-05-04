const data = [
  {
    title: "Breaking Bad",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVlZDhiYmItOTYyNi00YjU3LTllYWEtZjgwOTY3NDcwOWJmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "9.5",
    runtime: 49,
  },
  {
    title: "Game of Thrones",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY176_CR0,0,128,176_AL_.jpg",
    imDbRating: "9.3",
    runtime: 57,
  },
  {
    title: "The Sopranos",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
    imDbRating: "9.2",
    runtime: 55,
  },
  {
    title: "Attack on Titan",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "9.1",
    runtime: 24,
  },
  {
    title: "The Office",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "9.0",
  },
  {
    title: "1883",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDZkZDdkMjYtMGI3Yi00MmVkLTkzZjQtMGI0NGViNzIzNjhjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.9",
  },
  {
    title: "Seinfeld",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
    imDbRating: "8.9",
  },
  {
    title: "Friends",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.9",
  },
  {
    title: "It's Always Sunny in Philadelphia",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzg3ODVjZTYtZTAyNC00MzVjLTk3NmUtMGI4ZjZmNGQ1NmY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.9",
  },
  {
    title: "Better Call Saul",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxOGM0NzItM2E0OS00YWYzLWEzNzUtODUzZTBjM2I4MTZkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "Peaky Blinders",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "Yellowstone",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjhkNWM1NTQtODI4NS00NzllLTg1ODAtYjg3N2QxZjc3ZjRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY176_CR0,0,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "Ted Lasso",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDVmODUzNmEtMGMxZC00NWUzLTkxMTAtMDM5OTQzMWE0ZDM3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "Succession",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY176_CR6,0,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "The Mandalorian",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "Black Mirror",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.8",
  },
  {
    title: "Severance",
    image:
      "https://m.media-amazon.com/images/M/MV5BOThjMjc4NDUtNmIyOC00MzhmLWIxNjQtMDlkOTlmNzA0NDJlXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.7",
  },
  {
    title: "Stranger Things",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.7",
  },
  {
    title: "This Is Us",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzYxYWY3YzctZjRiNS00MTViLTk5OTYtZDEyNzAwNGE5ODY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.7",
  },
  {
    title: "The Boys",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.7",
  },
  {
    title: "The Marvelous Mrs. Maisel",
    image:
      "https://m.media-amazon.com/images/M/MV5BMzk2ZmFhNjMtOWM2YS00MGU4LTk3ODMtY2Q2MjU2ODA0MDg4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.7",
  },
  {
    title: "Downton Abbey",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2U1NmIwYzgtNjFkOS00YWUxLTg0YTMtZmE5NTA3YjRmY2NlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX128_CR0,1,128,176_AL_.jpg",
    imDbRating: "8.7",
  },
  {
    title: "Atlanta",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTNiYmVjNjktZDhhNy00NGQ0LTg0YzYtYWVlMTVjMTQyMDU5XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.6",
  },
  {
    title: "Pachinko",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjJjZWEyOTMtYjVkYi00MjY0LTk4OTEtMWUwMDE4NWYyODg5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.6",
  },
  {
    title: "Doctor Who",
    image:
      "https://m.media-amazon.com/images/M/MV5BZWJhYjFmZDEtNTVlYy00NGExLWJhZWItNTAxODY5YTc3MDFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,1,128,176_AL_.jpg",
    imDbRating: "8.6",
  },
  {
    title: "Westworld",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.6",
  },
  {
    title: "Shameless",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDgxNjQ2MjMtMjk2Yi00M2Q2LWI0ZDktOGM1NWI5YWUzMjk4XkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.6",
  },
  {
    title: "The Last Kingdom",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
  {
    title: "Ozark",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
  {
    title: "Vikings",
    image:
      "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
  {
    title: "Julia",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTgyY2JhOTgtZjc2Ni00NWFiLWFhY2EtNzQxOGRmMDU5MTYxXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
  {
    title: "Supernatural",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
  {
    title: "Modern Family",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
  {
    title: "Suits",
    image:
      "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX128_CR0,3,128,176_AL_.jpg",
    imDbRating: "8.5",
  },
];

export default data;
