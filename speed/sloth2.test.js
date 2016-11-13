import { pokeSloth } from './sloth';

test('Sloth2 should respond', () => {
    return pokeSloth('Sloth2')
        .then(reply => expect(reply).toBe('Hey, I am Sloth2'));
})
