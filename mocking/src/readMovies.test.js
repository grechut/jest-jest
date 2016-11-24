import readMovies from './readMovies';

// jest.mock('./readMovies');
// jest.mock('fs');

test('reading movies from file should succeed', () => {
    expect(readMovies('movies.csv')).toEqual(
        ['Batman', 'Spiderman']
    );
    // expect(readMovies).toHaveBeenCalled();
});

// jest.mock('fs');
// import fs from 'fs';

// test('fs module was mocked', () => {
    // expect(
    //     jest.isMockFunction(fs.createReadStream)
    // ).toBeTruthy()
    
    // expect(
    //     fs.createReadStream()
    // ).toBeUndefined();
// });


