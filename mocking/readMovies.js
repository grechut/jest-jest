import fs from 'fs'

export default (fileName) => {
    return fs.readFileSync(fileName)
        .toString()
        .trim()
        .split(',');
};
