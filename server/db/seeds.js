//list of json movies we can use for seeds the database
use movies;
db.dropDatabase();


db.users.insertMany([
    {
        userName:"Joe Bloggs",
        wins:3,
        played:20
    },
    {
        userName:"Sara Cox",
        wins:5,
        played:10
    },
    {
        userName:"SpongeBob Squarepants",
        wins:4,
        played:5
    },
    {
        userName:"Jamie Lang",
        wins:4,
        played:55
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
}

])
