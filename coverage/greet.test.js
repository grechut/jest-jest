import greet from './greet';

test("Greeting Foo should say 'Hello Foo'", () => {
    expect(greet("Foo")).toBe("Hello Foo");
});
