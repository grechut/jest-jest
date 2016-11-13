export function pokeSloth(name) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`Hey, I am ${name}`),
            3000
        );
    });
}
