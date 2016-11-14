import readMovies from './readMovies';

// jest.mock('./readMovies');
jest.mock('fs');

test('reading movies from file should succeed', () => {
    return expect(readMovies()).toEqual(
        ['Batman', 'Spiderman']
    );
})
