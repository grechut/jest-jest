const DIRECTORS = {
    'Godfather': 'Francis Ford Coppola',
    'Kiler': 'Juliusz Machulski',
    'Batman': 'Tim Burton'
}

module.exports = function (movie, answer) {
    return DIRECTORS[movie] === answer;
}
