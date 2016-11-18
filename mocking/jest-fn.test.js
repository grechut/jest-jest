test('Demo jest.fn(). Extra spying features.', () => {
    const someFunc = jest.fn();

    expect(someFunc()).toBe(undefined);
    expect(someFunc).toBeCalled();

    const someOtherFunc = jest.fn((actor) => `${actor} is good`);

    expect(someOtherFunc('Brad Pitt')).toBe('Brad Pitt is good');
    expect(someOtherFunc).toHaveBeenLastCalledWith('Brad Pitt');
})