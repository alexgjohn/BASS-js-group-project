//list of json movies we can use for seeds the database
use movies;
db.dropDatabase();


db.users.insertMany([
    {
        "userName":"Joe Bloggs",
        "wins":3,
        "played":20
    },
    {
        "userName":"Sara Cox",
        "wins":5,
        "played":10
    },
    {
        "userName":"SpongeBob Squarepants",
        "wins":4,
        "played":5
    }

])

db.random_movies.insertMany([

{
"adult": false,
"backdrop_path": "/zg4xwfdZG3zJwUVbRS0b0JBgh7Z.jpg",
"belongs_to_collection": null,
"budget": 0,
"genres": [
{
"id": 37,
"name": "Western"
}
],
"homepage": "",
"id": 464059,
"imdb_id": "tt0011133",
"original_language": "en",
"original_title": "Drag Harlan",
"overview": "William Farnum is Drag Harlan, a tough cowboy vigilante. After learning about a gold mine from a dying man, he seeks his daughter (Jackie Saunders) as well as the gold. He falls in love with her, but the same gang that shot the old man is after the gold.",
"popularity": 0.6,
"poster_path": "/joztG65Ar3zCWGZt71KlnhIPkQS.jpg",
"production_companies": [],
"production_countries": [],
"release_date": "1920-10-24",
"revenue": 0,
"runtime": 64,
"spoken_languages": [],
"status": "Released",
"tagline": "",
"title": "Drag Harlan",
"video": false,
"vote_average": 0,
"vote_count": 0
},
{
    "adult": false,
    "backdrop_path": "/xoq1jDwxEL6vE73nm4FFEAznbJS.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 14,
    "name": "Fantasy"
    }
    ],
    "homepage": "",
    "id": 233088,
    "imdb_id": "tt0194248",
    "original_language": "it",
    "original_title": "Pinocchio",
    "overview": "Carpenter Geppetto carves a block of wood into a puppet and names him Pinocchio. As soon as his feet have been made, Pinocchio runs out the door and a series of adventures begins.",
    "popularity": 0.757,
    "poster_path": "/ozWbSweEOCWxqKk8UAekOEDn9NK.jpg",
    "production_companies": [
    {
    "id": 12624,
    "logo_path": null,
    "name": "Società Italiana Cines",
    "origin_country": "IT"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "IT",
    "name": "Italy"
    }
    ],
    "release_date": "1911-12-04",
    "revenue": 0,
    "runtime": 50,
    "spoken_languages": [
    {
    "english_name": "No Language",
    "iso_639_1": "xx",
    "name": "No Language"
    }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Pinocchio",
    "video": false,
    "vote_average": 5.6,
    "vote_count": 11
},

{
    "adult": false,
    "backdrop_path": "/9CrxBQmVK6IxeaWK1tz5CF3YrPQ.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 53,
    "name": "Thriller"
    },
    {
    "id": 27,
    "name": "Horror"
    }
    ],
    "homepage": "",
    "id": 398588,
    "imdb_id": "tt5039994",
    "original_language": "en",
    "original_title": "Dismissed",
    "overview": "A straight-edged teacher finds trouble when an honors student is willing to do anything to get an A.",
    "popularity": 6.374,
    "poster_path": "/rMVslLnNSDkIPDnOmPr2CTaqd3J.jpg",
    "production_companies": [
    {
    "id": 27857,
    "logo_path": null,
    "name": "Making Film",
    "origin_country": ""
    },
    {
    "id": 18609,
    "logo_path": "/cYhbt3q231mWEkiMn3WPLCcXXl9.png",
    "name": "BoulderLight Pictures",
    "origin_country": "US"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "2017-10-08",
    "revenue": 0,
    "runtime": 87,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "He would kill for a good grade.",
    "title": "Dismissed",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 249
},
{
    "adult": false,
    "backdrop_path": "/43oduu4qhXLkpRk0SVRP0FcWvFA.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 53,
    "name": "Thriller"
    },
    {
    "id": 9648,
    "name": "Mystery"
    },
    {
    "id": 27,
    "name": "Horror"
    }
    ],
    "homepage": "",
    "id": 178146,
    "imdb_id": "tt2183152",
    "original_language": "en",
    "original_title": "The Lady Vanishes",
    "overview": "Young socialite Iris Carr befriends an older woman while traveling solo by train. When Iris wakes from a nap, the woman is gone and other passengers claim she never existed.",
    "popularity": 4.087,
    "poster_path": "/AuLuO1pEy8yAYTIROv0uH6cuXa9.jpg",
    "production_companies": [
    {
    "id": 9217,
    "logo_path": null,
    "name": "Pioneer Pictures",
    "origin_country": "HU"
    },
    {
    "id": 3324,
    "logo_path": "/dqT3yOTlfJRmtvk52Ccd1O6dZ0A.png",
    "name": "BBC",
    "origin_country": "GB"
    },
    {
    "id": 24790,
    "logo_path": "/hXkXnEb2eofddcX7C1Oms81ERAZ.png",
    "name": "Masterpiece",
    "origin_country": "US"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "GB",
    "name": "United Kingdom"
    }
    ],
    "release_date": "2013-03-17",
    "revenue": 0,
    "runtime": 86,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "Is anything what it seems?",
    "title": "The Lady Vanishes",
    "video": false,
    "vote_average": 6.297,
    "vote_count": 37
},
{
    "adult": false,
    "backdrop_path": "/1RZjVMX39rkqzCq7s2E0qR8JJr5.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 18,
    "name": "Drama"
    },
    {
    "id": 10752,
    "name": "War"
    }
    ],
    "homepage": "http://www.dayonefilm.com/",
    "id": 335026,
    "imdb_id": "tt4122886",
    "original_language": "en",
    "original_title": "Day One",
    "overview": "On her first day in Afghanistan, an interpreter for the US Army is forced to deliver the child of an enemy bomb-maker.",
    "popularity": 2.095,
    "poster_path": "/t6Sznf9V1J6sxUa0Ugd6WvDJh1v.jpg",
    "production_companies": [
    {
    "id": 12226,
    "logo_path": "/5PJ3JaGTCvF7CjbjQ7bivae2cHJ.png",
    "name": "American Film Institute (AFI)",
    "origin_country": "US"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "2015-02-27",
    "revenue": 0,
    "runtime": 25,
    "spoken_languages": [],
    "status": "Released",
    "tagline": "Two feuding worlds. One woman's voice.",
    "title": "Day One",
    "video": false,
    "vote_average": 6.1,
    "vote_count": 19
},
{
    "adult": false,
    "backdrop_path": "/z4HAfXdcODZg3irn21RR4Sf78RC.jpg",
    "belongs_to_collection": null,
    "budget": 10000000,
    "genres": [
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 28,
    "name": "Action"
    }
    ],
    "homepage": "http://lionsgateathome.com/contract-to-kill",
    "id": 423627,
    "imdb_id": "tt5470222",
    "original_language": "en",
    "original_title": "Contract to Kill",
    "overview": "Harmon is a CIA/DEA enforcer investigating Arab terrorists captured in Mexico. With his team--seductive FBI agent Zara and spy-drone pilot Sharp--he flies to Istanbul and uncovers a brutal plot: Islamic extremists plan to use Sonora drug-smuggling routes to bring deadly weapons, and leaders, into the U.S. To prevent an attack on America, Harmon must turn these two savage forces against one another before his time--and his luck--run out.",
    "popularity": 6.102,
    "poster_path": "/lSkgRQDzLYzvu0ygiVnLNyKI55z.jpg",
    "production_companies": [
    {
    "id": 87009,
    "logo_path": null,
    "name": "Actionhouse Pictures",
    "origin_country": ""
    },
    {
    "id": 80713,
    "logo_path": "/7pcqQVviN7Uao9B1h850ek65EPJ.png",
    "name": "Daro Film Distribution",
    "origin_country": "MC"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "RO",
    "name": "Romania"
    }
    ],
    "release_date": "2016-12-09",
    "revenue": 0,
    "runtime": 90,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    },
    {
    "english_name": "Russian",
    "iso_639_1": "ru",
    "name": "Pусский"
    },
    {
    "english_name": "French",
    "iso_639_1": "fr",
    "name": "Français"
    }
    ],
    "status": "Released",
    "tagline": "War has no borders.",
    "title": "Contract to Kill",
    "video": false,
    "vote_average": 4.772,
    "vote_count": 57
},
{
    "adult": false,
    "backdrop_path": null,
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 80,
    "name": "Crime"
    },
    {
    "id": 9648,
    "name": "Mystery"
    },
    {
    "id": 53,
    "name": "Thriller"
    }
    ],
    "homepage": "",
    "id": 326651,
    "imdb_id": "tt2947064",
    "original_language": "en",
    "original_title": "Chasing Gold",
    "overview": "Alone after losing his family in a car accident, a retiring police commander attempts to help a daughter he never knew escape heroin addiction and a past that endangers her, while investigating his best friend's murder.",
    "popularity": 1.27,
    "poster_path": "/wH3aVUXxWphCGu6WkAAA5BcxQT0.jpg",
    "production_companies": [],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "2016-04-15",
    "revenue": 0,
    "runtime": 90,
    "spoken_languages": [],
    "status": "Released",
    "tagline": "Find the gold, save the girl.",
    "title": "Chasing Gold",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
},
{
    "adult": false,
    "backdrop_path": null,
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 28,
    "name": "Action"
    },
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 18,
    "name": "Drama"
    },
    {
    "id": 53,
    "name": "Thriller"
    }
    ],
    "homepage": "",
    "id": 26217,
    "imdb_id": "tt1174037",
    "original_language": "en",
    "original_title": "The Informant",
    "overview": "McInnes plays a suburban dad who works as a police informant for a federal investigative agency. The character’s background is shrouded in mystery, with intelligence officers seeking to uncover the truth about his past by working with him.",
    "popularity": 1.252,
    "poster_path": "/vQHfBhgwhu51GLUIqD5c5V1P6ya.jpg",
    "production_companies": [
    {
    "id": 4467,
    "logo_path": "/l22NNXVbJWLQBYyhaQMZasdtSub.png",
    "name": "Screentime",
    "origin_country": "AU"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "AU",
    "name": "Australia"
    }
    ],
    "release_date": "2008-11-14",
    "revenue": 0,
    "runtime": 85,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "",
    "title": "The Informant",
    "video": false,
    "vote_average": 4,
    "vote_count": 1
},
{
    "adult": false,
    "backdrop_path": null,
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 18,
    "name": "Drama"
    }
    ],
    "homepage": "",
    "id": 101358,
    "imdb_id": "tt0279240",
    "original_language": "en",
    "original_title": "A Mother's Testimony",
    "overview": "An ex-convict's mother's worst suspicions about her son are confirmed when he is implicated in a murder",
    "popularity": 1.151,
    "poster_path": "/ccOD2bHpdqclmCGwXu9PzlXBaLO.jpg",
    "production_companies": [],
    "production_countries": [],
    "release_date": "2001-03-06",
    "revenue": 0,
    "runtime": 92,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "",
    "title": "A Mother's Testimony",
    "video": false,
    "vote_average": 5.5,
    "vote_count": 2
},
{
    "adult": false,
    "backdrop_path": "/hE6Jh9FJiBrakHcT3vmWxM0GVpv.jpg",
    "belongs_to_collection": null,
    "budget": 40000000,
    "genres": [
    {
    "id": 28,
    "name": "Action"
    },
    {
    "id": 53,
    "name": "Thriller"
    }
    ],
    "homepage": "https://www.hunterkiller.movie",
    "id": 399402,
    "imdb_id": "tt1846589",
    "original_language": "en",
    "original_title": "Hunter Killer",
    "overview": "Captain Glass of the USS Arkansas discovers that a coup d'état is taking place in Russia, so he and his crew join an elite group working on the ground to prevent a war.",
    "popularity": 28.304,
    "poster_path": "/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg",
    "production_companies": [
    {
    "id": 333,
    "logo_path": "/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png",
    "name": "Original Film",
    "origin_country": "US"
    },
    {
    "id": 103331,
    "logo_path": "/nxkmGpo1Ym74DkBzNtoMz5cl6DJ.png",
    "name": "G-BASE",
    "origin_country": "US"
    },
    {
    "id": 1020,
    "logo_path": "/kuUIHNwMec4dwOLghDhhZJzHZTd.png",
    "name": "Millennium Films",
    "origin_country": "US"
    },
    {
    "id": 112334,
    "logo_path": null,
    "name": "Hunter Killer Productions",
    "origin_country": ""
    },
    {
    "id": 112335,
    "logo_path": null,
    "name": "Hishow Entertainment",
    "origin_country": "CN"
    },
    {
    "id": 20011,
    "logo_path": null,
    "name": "SprocketHeads",
    "origin_country": ""
    },
    {
    "id": 100033,
    "logo_path": "/74LDJbOFdya1ijNT11uh0mM5eg0.png",
    "name": "Tucker Tooley Entertainment",
    "origin_country": "US"
    },
    {
    "id": 114531,
    "logo_path": null,
    "name": "Summit Premiere",
    "origin_country": ""
    },
    {
    "id": 1632,
    "logo_path": "/cisLn1YAUuptXVBa0xjq7ST9cH0.png",
    "name": "Lionsgate",
    "origin_country": "US"
    },
    {
    "id": 342,
    "logo_path": null,
    "name": "Davis Films",
    "origin_country": "FR"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "CN",
    "name": "China"
    },
    {
    "iso_3166_1": "FR",
    "name": "France"
    },
    {
    "iso_3166_1": "GB",
    "name": "United Kingdom"
    },
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "2018-10-19",
    "revenue": 31672678,
    "runtime": 121,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    },
    {
    "english_name": "Russian",
    "iso_639_1": "ru",
    "name": "Pусский"
    }
    ],
    "status": "Released",
    "tagline": "Courage runs deep",
    "title": "Hunter Killer",
    "video": false,
    "vote_average": 6.847,
    "vote_count": 1888
},
{
    "adult": false,
    "backdrop_path": null,
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 35,
    "name": "Comedy"
    },
    {
    "id": 10749,
    "name": "Romance"
    }
    ],
    "homepage": "",
    "id": 386158,
    "imdb_id": "tt4893328",
    "original_language": "en",
    "original_title": "Stock Option",
    "overview": "A down-on-his-luck stock broker becomes homeless and takes refuge in front of an office building where a famous print model works. After he heroically rescues her from a robbery attempt one night, she takes him home as an act of gratitude",
    "popularity": 2.505,
    "poster_path": "/uwEFmBvGeT76hdfli1uPhXHc4Hi.jpg",
    "production_companies": [],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "2015-11-07",
    "revenue": 0,
    "runtime": 80,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "The one man she never expected is the one man she can't live without.",
    "title": "Stock Option",
    "video": true,
    "vote_average": 1,
    "vote_count": 1
},
{
    "adult": false,
    "backdrop_path": "/aGUDa9N7bTy6nTgjNFbPSAOWa0H.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 18,
    "name": "Drama"
    }
    ],
    "homepage": "",
    "id": 490706,
    "imdb_id": "tt0035585",
    "original_language": "en",
    "original_title": "Young America",
    "overview": "Young America is a 1942 American drama film directed by Louis King and written by Samuel G. Engel. The film stars Jane Withers, Jane Darwell, Lynne Roberts, Robert Cornell, William Tracy and Roman Bohnen. The film was released on February 6, 1942, by 20th Century Fox.",
    "popularity": 0.725,
    "poster_path": "/9SpAseeZH5XRmiXoXDzLdQhhd4H.jpg",
    "production_companies": [
    {
    "id": 25,
    "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
    "name": "20th Century Fox",
    "origin_country": "US"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "1942-02-06",
    "revenue": 0,
    "runtime": 73,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Young America",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
},
{
    "adult": false,
    "backdrop_path": "/y0ia08NoQ1VgK1rWoG6rIZyA5Rn.jpg",
    "belongs_to_collection": null,
    "budget": 0,
    "genres": [
    {
    "id": 80,
    "name": "Crime"
    }
    ],
    "homepage": "",
    "id": 286225,
    "imdb_id": "tt0020801",
    "original_language": "en",
    "original_title": "The Czar of Broadway",
    "overview": "Mort Bradley, New York political boss and underworld czar, controls not only the city's most popular nightclub but also much of the press; however, the managing editor of the Times is determined to expose him. Jay Grant, a San Francisco reporter, is assigned to investigate Mort, who believes Jay to be a country boy and is delighted to see him fall in love with Connie Colton, of whom Mort has tired. Dismayed to learn that Jay is a reporter, Mort plans to have his gunman, Francis, kill him, but both Mort and Francis are shot by rival gangsters. Jay, believing that Mort will recover, rushes to the newspaper with an exposé, but while writing it he learns of Mort's death and decides their friendship would not permit him to submit the story. He leaves his paper and embarks on a new life with Connie.",
    "popularity": 0.6,
    "poster_path": "/pM0nAXD9brN7qwsVC3WbgeHid9U.jpg",
    "production_companies": [
    {
    "id": 33,
    "logo_path": "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
    "name": "Universal Pictures",
    "origin_country": "US"
    }
    ],
    "production_countries": [
    {
    "iso_3166_1": "US",
    "name": "United States of America"
    }
    ],
    "release_date": "1930-05-25",
    "revenue": 0,
    "runtime": 79,
    "spoken_languages": [
    {
    "english_name": "English",
    "iso_639_1": "en",
    "name": "English"
    }
    ],
    "status": "Released",
    "tagline": "AS THRILLING AS THE WAIL OF A POLICE SIREN!",
    "title": "The Czar of Broadway",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
}

])
