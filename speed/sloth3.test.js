import { pokeSloth } from './sloth';

test('Sloth3 should respond', () => {
    return pokeSloth('Sloth3')
        .then(reply => expect(reply).toBe('Hey, I am Sloth3'));
})
