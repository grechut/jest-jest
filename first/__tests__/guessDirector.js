const guessDirector = require('../guessDirector');

describe("guessDirector", () => {
    it('Francis Ford Coppola is the director of Godfather', () => {
        expect(guessDirector('Godfather', 'Francis Ford Coppola')).toBe(true);
    })

    it('Francis Ford Coppola is not the director of Killer', () => {
        expect(guessDirector('Killer', 'Francis Ford Coppola')).toBe(false);
    })
})
