const fs = jest.genMockFromModule('fs');

fs.readFileSync = (fileName) => {
    return new Buffer("Batman,Spiderman");
};

export default fs;
