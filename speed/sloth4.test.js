import { pokeSloth } from './sloth';

test('Sloth4 should respond', () => {
    return pokeSloth('Sloth4')
        .then(reply => expect(reply).toBe('Hey, I am Sloth4'));
})
