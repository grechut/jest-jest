const fs = jest.genMockFromModule('fs');

fs.readFileSync = (file) => {
    return new Buffer("Batman,Spiderman");
};

export default fs;
