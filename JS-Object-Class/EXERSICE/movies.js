function manageMovies(input) {
    const movies = [];

    function addMovie(movieName) {
        movies.push({ name: movieName });
    }

    function addDirector(movieName, director) {
        const movie = movies.find(m => m.name === movieName);
        if (movie) {
            movie.director = director;
        }
    }

    function addDate(movieName, date) {
        const movie = movies.find(m => m.name === movieName);
        if (movie) {
            movie.date = date;
        }
    }

    function printValidMovies() {
        const validMovies = movies.filter(movie => movie.name && movie.director && movie.date);
        validMovies.forEach(movie => {
            console.log(JSON.stringify(movie));
        });
    }

    input.forEach(command => {
        const tokens = command.split(' ');

        if (tokens[0] === 'addMovie') {
            const movieName = tokens.slice(1).join(' ');
            addMovie(movieName);
        } else {
            const movieName = tokens[0];
            const action = tokens[1];
            const info = tokens.slice(2).join(' ');

            if (action === 'directedBy') {
                addDirector(movieName, info);
            } else if (action === 'onDate') {
                addDate(movieName, info);
            }
        }
    });

    printValidMovies();
}


function movies(stringsArray) {

    let movieObjs = [];

    function movieNameExists(string) {
        let movieNames = movieObjs.map(element => element.name);
        return (movieNames.some((name) => string.includes(name)));
    }

    function createMovie(string) {
        return {
            name: string.slice(9),
        };
    }

    function addDirector(string) {
        const commandIndex = string.indexOf("directedBy");
        let director = string.slice(commandIndex + 11);
        let movieName = string.slice(0, commandIndex - 1);
        movieObjs.map((movie) => {
            if (movie.name === movieName) movie.director = director;
        });
    }

    function addDate(string) {
        const commandIndex = string.indexOf("onDate");
        let date = string.slice(commandIndex + 7);
        let movieName = string.slice(0, commandIndex - 1);
        movieObjs.map((movie) => {
            if (movie.name === movieName) movie.date = date;
        });
    }

    function printMovie() {
        movieObjs.map((movie) => {
            if (Object.keys(movie).length === 3) console.log(JSON.stringify(movie));
        })
    }

    for (let string of stringsArray) {

        if (string.startsWith("addMovie")) movieObjs.push(createMovie(string));
        else if (movieNameExists(string)) {
            if (string.includes("directedBy")) addDirector(string);
            else if (string.includes("onDate")) addDate(string);
        }
    }
    printMovie()
}

function movies(actions) {
    const movies = {};
    const actionsDict = {
        'addMovie': (x, y) => {
            movies[x] = {'name': x}
        },
        'directedBy': (x, y) => {
            movies.hasOwnProperty(x) ? movies[x]['director'] = y : null
        },
        'onDate': (x, y) => {
            movies.hasOwnProperty(x) ? movies[x]['date'] = y : null
        }
    };

    for (let actionData of actions) {
        let splitCommand = undefined
        let movieIndex = 0

        if (actionData.includes('addMovie')) {
            splitCommand = 'addMovie '
            movieIndex = 1
        } else if (actionData.includes('directedBy')) {
            splitCommand = ' directedBy '
        } else {
            splitCommand = ' onDate '
        }

        actionData = actionData.split(splitCommand)
        splitCommand = splitCommand.trim()

        actionsDict[splitCommand](actionData[movieIndex], actionData[1])
    }

    for (const movie in movies) {
        const itemsAmount = Object.values(movies[movie]).length
        if (itemsAmount === 3) {
            console.log(JSON.stringify(movies[movie]))
        }
    }
}

movies([
'addMovie The Avengers',
'addMovie Superman',
'The Avengers directedBy Anthony Russo',
'The Avengers onDate 30.07.2010',
'Captain America onDate 30.07.2010',
'Captain America directedBy Joe Russo'
])