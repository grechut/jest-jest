import { pokeSloth } from './sloth';

test('Sloth1 should respond', () => {
    return pokeSloth('Sloth1')
        .then(reply => expect(reply).toBe('Hey, I am Sloth1'));
})
