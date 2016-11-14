import fs from 'fs'

export default () => {
    return fs.readFileSync('movies.csv')
        .toString()
        .trim()
        .split(',');
};
