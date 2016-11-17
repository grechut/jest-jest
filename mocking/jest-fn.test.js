test('Demo jest.fn(). Extra spying features.', () => {
    const someFunc = jest.fn((actor) => `${actor} is good`);

    expect(someFunc('Brad Pitt')).toBe('Brad Pitt is good');
    expect(someFunc).toHaveBeenLastCalledWith('Brad Pitt');
})