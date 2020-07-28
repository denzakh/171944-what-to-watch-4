// http://www.omdbapi.com/?i=tt0068646&apikey=2adb833d

const films = [{
  Title: `The Godfather`,
  Year: `1972`,
  Rated: `R`,
  Released: `24 Mar 1972`,
  Runtime: `175 min`,
  Genre: `Crime, Drama`,
  Director: `Francis Ford Coppola`,
  Writer: `Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)`,
  Actors: `Marlon Brando, Al Pacino, James Caan, Richard S. Castellano`,
  Plot: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
  Language: `English, Italian, Latin`,
  Country: `USA`,
  Awards: `Won 3 Oscars. Another 26 wins & 30 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg`,
  bg: `img/gf-bg.jpg`,
  bgcolor: `#dbd5c3`,
  avatar: `https://theotherboard.com/forum/uploads/profile/photo-1692.png`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `9.2/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `98%`
    },
    {
      Source: `Metacritic`,
      Value: `100/100`
    }
  ],
  Metascore: `100`,
  imdbRating: `9.2`,
  imdbVotes: `1,546,461`,
  imdbID: `tt0068646`,
  Type: `movie`,
  DVD: `09 Oct 2001`,
  BoxOffice: `N/A`,
  Production: `Paramount Pictures`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `Knives Out`,
  Year: `2019`,
  Rated: `PG-13`,
  Released: `27 Nov 2019`,
  Runtime: `130 min`,
  Genre: `Comedy, Crime, Drama, Mystery, Thriller`,
  Director: `Rian Johnson`,
  Writer: `Rian Johnson`,
  Actors: `Daniel Craig, Chris Evans, Ana de Armas, Jamie Lee Curtis`,
  Plot: `A detective investigates the death of a patriarch of an eccentric, combative family.`,
  Language: `English, Spanish, Hindi`,
  Country: `USA`,
  Awards: `Nominated for 1 Oscar. Another 45 wins & 93 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg`,
  bg: `https://medias.spotern.com/spots/w1280/212/212025-1562323728.jpg`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `7.9/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `97%`
    },
    {
      Source: `Metacritic`,
      Value: `82/100`
    }
  ],
  Metascore: `82`,
  imdbRating: `7.9`,
  imdbVotes: `311,763`,
  imdbID: `tt8946378`,
  Type: `movie`,
  DVD: `12 Jun 2020`,
  BoxOffice: `N/A`,
  Production: `Lionsgate`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `Parasite`,
  Year: `2019`,
  Rated: `R`,
  Released: `08 Nov 2019`,
  Runtime: `132 min`,
  Genre: `Comedy, Drama, Thriller`,
  Director: `Bong Joon Ho`,
  Writer: `Bong Joon Ho (story), Bong Joon Ho (screenplay), Jin Won Han (screenplay)`,
  Actors: `Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo, Woo-sik Choi`,
  Plot: `Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.`,
  Language: `Korean, English`,
  Country: `South Korea`,
  Awards: `Won 4 Oscars. Another 263 wins & 227 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg`,
  bg: `https://nsa40.casimages.com/img/2020/01/05/200105073142404267.jpg`,
  bgcolor: `#b9efdb`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `8.6/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `99%`
    },
    {
      Source: `Metacritic`,
      Value: `96/100`
    }
  ],
  Metascore: `96`,
  imdbRating: `8.6`,
  imdbVotes: `427,890`,
  imdbID: `tt6751668`,
  Type: `movie`,
  DVD: `14 Jan 2020`,
  BoxOffice: `N/A`,
  Production: `NEON`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `The Shawshank Redemption`,
  Year: `1994`,
  Rated: `R`,
  Released: `14 Oct 1994`,
  Runtime: `142 min`,
  Genre: `Drama`,
  Director: `Frank Darabont`,
  Writer: `Stephen King (short story \`Rita Hayworth and Shawshank Redemption\`), Frank Darabont (screenplay)`,
  Actors: `Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler`,
  Plot: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
  Language: `English`,
  Country: `USA`,
  Awards: `Nominated for 7 Oscars. Another 21 wins & 35 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`,
  bg: `https://www.cleveland.com/resizer/XKj4l4Bx9gbozxq2TA7aaz6ltT0=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/TWX4SKO5SNBO5II6NH73F6F2YE.JPG`,
  bgcolor: `#fed1b4`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `9.3/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `90%`
    },
    {
      Source: `Metacritic`,
      Value: `80/100`
    }
  ],
  Metascore: `80`,
  imdbRating: `9.3`,
  imdbVotes: `2,251,007`,
  imdbID: `tt0111161`,
  Type: `movie`,
  DVD: `27 Jan 1998`,
  BoxOffice: `N/A`,
  Production: `Columbia Pictures`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `Avengers: Endgame`,
  Year: `2019`,
  Rated: `PG-13`,
  Released: `26 Apr 2019`,
  Runtime: `181 min`,
  Genre: `Action, Adventure, Drama, Sci-Fi`,
  Director: `Anthony Russo, Joe Russo`,
  Writer: `Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora & Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)`,
  Actors: `Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth`,
  Plot: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.`,
  Language: `English, Japanese, Xhosa, German`,
  Country: `USA`,
  Awards: `Nominated for 1 Oscar. Another 64 wins & 104 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `8.4/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `94%`
    },
    {
      Source: `Metacritic`,
      Value: `78/100`
    }
  ],
  Metascore: `78`,
  imdbRating: `8.4`,
  imdbVotes: `716,526`,
  imdbID: `tt4154796`,
  Type: `movie`,
  DVD: `30 Jul 2019`,
  BoxOffice: `N/A`,
  Production: `Marvel Studios`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `Inception`,
  Year: `2010`,
  Rated: `PG-13`,
  Released: `16 Jul 2010`,
  Runtime: `148 min`,
  Genre: `Action, Adventure, Sci-Fi, Thriller`,
  Director: `Christopher Nolan`,
  Writer: `Christopher Nolan`,
  Actors: `Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy`,
  Plot: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`,
  Language: `English, Japanese, French`,
  Country: `USA, UK`,
  Awards: `Won 4 Oscars. Another 152 wins & 217 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `8.8/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `87%`
    },
    {
      Source: `Metacritic`,
      Value: `74/100`
    }
  ],
  Metascore: `74`,
  imdbRating: `8.8`,
  imdbVotes: `1,968,969`,
  imdbID: `tt1375666`,
  Type: `movie`,
  DVD: `07 Dec 2010`,
  BoxOffice: `$292,568,851`,
  Production: `Warner Bros. Pictures`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `Once Upon a Time... in Hollywood`,
  Year: `2019`,
  Rated: `R`,
  Released: `26 Jul 2019`,
  Runtime: `161 min`,
  Genre: `Comedy, Drama`,
  Director: `Quentin Tarantino`,
  Writer: `Quentin Tarantino`,
  Actors: `Leonardo DiCaprio, Brad Pitt, Margot Robbie, Emile Hirsch`,
  Plot: `A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.`,
  Language: `English, German, Italian, Spanish`,
  Country: `USA, UK, China`,
  Awards: `Won 2 Oscars. Another 126 wins & 342 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `7.7/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `85%`
    },
    {
      Source: `Metacritic`,
      Value: `83/100`
    }
  ],
  Metascore: `83`,
  imdbRating: `7.7`,
  imdbVotes: `462,778`,
  imdbID: `tt7131622`,
  Type: `movie`,
  DVD: `22 Nov 2019`,
  BoxOffice: `N/A`,
  Production: `Columbia Pictures`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
},
{
  Title: `Interstellar`,
  Year: `2014`,
  Rated: `PG-13`,
  Released: `07 Nov 2014`,
  Runtime: `169 min`,
  Genre: `Adventure, Drama, Sci-Fi, Thriller`,
  Director: `Christopher Nolan`,
  Writer: `Jonathan Nolan, Christopher Nolan`,
  Actors: `Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow`,
  Plot: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
  Language: `English`,
  Country: `USA, UK, Canada`,
  Awards: `Won 1 Oscar. Another 43 wins & 147 nominations.`,
  Poster: `https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg`,
  Ratings: [
    {
      Source: `Internet Movie Database`,
      Value: `8.6/10`
    },
    {
      Source: `Rotten Tomatoes`,
      Value: `72%`
    },
    {
      Source: `Metacritic`,
      Value: `74/100`
    }
  ],
  Metascore: `74`,
  imdbRating: `8.6`,
  imdbVotes: `1,424,440`,
  imdbID: `tt0816692`,
  Type: `movie`,
  DVD: `31 Mar 2015`,
  BoxOffice: `$158,737,441`,
  Production: `Paramount Pictures`,
  Website: `N/A`,
  Response: `True`,
  href: `/`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
}];

let getGenreList = (genreStr) => {
  let genreArr = genreStr.split(`, `);
  return genreArr;
}

let getFilm = (filmSrc) => {
  return {
    title: filmSrc.Title,
    year: filmSrc.Year,
    genre: filmSrc.Genre,
    genreList: getGenreList(filmSrc.Genre),
    director: filmSrc.Director,
    actors: filmSrc.Actors,
    plot: filmSrc.Plot,
    poster: filmSrc.Poster,
    imdbRating: filmSrc.imdbRating,
    imdbVotes: filmSrc.imdbVotes,
    bg: filmSrc.bg,
    bgcolor: filmSrc.bgcolor,
    avatar: filmSrc.avatar,
    href: filmSrc.href,
    src: filmSrc.src,
    runtime: filmSrc.Runtime
  };
};

let adaptiveFilms = films.map((item)=>{
  return getFilm(item);
});

export default adaptiveFilms;
