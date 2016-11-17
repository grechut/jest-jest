import readMovies from './readMovies';

jest.mock('./readMovies');
// jest.mock('fs');
// import fs from 'fs';
// console.log('FS', fs);
// console.log('fs.createReadStream', fs.createReadStream())

test('reading movies from file should succeed', () => {
    return expect(readMovies('movies.csv')).toEqual(
        ['Batman', 'Spiderman']
    );
})


