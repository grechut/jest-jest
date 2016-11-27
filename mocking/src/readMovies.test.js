jest.mock('./readMovies');
jest.mock('fs');

import readMovies from './readMovies';
import fs from 'fs';

test('reading movies from file should succeed', () => {
    expect(readMovies('hero_movies.csv')).toEqual(
        ['Batman', 'Spiderman']
    );
    expect(readMovies).toHaveBeenCalled();
});


test('fs module was mocked', () => {
    expect(
        jest.isMockFunction(fs.createReadStream)
    ).toBeTruthy()
    
    expect(
        fs.createReadStream()
    ).toBeUndefined();
});


