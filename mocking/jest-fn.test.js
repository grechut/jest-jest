test('Demo jest.fn(). Extra spying features.', () => {
    const someFunc = jest.fn((actor) => `${actor} is good`);

    expect(someFunc('Brad Pitt')).toBe('Brad Pitt is good');

    console.log('someFunc calls:\n\n', someFunc.mock);
})