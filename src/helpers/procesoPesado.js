
export const procesoPesado = (interaciones) => {

    for(let i = 0; i <= interaciones; i++) {
        console.log('Iteración:', i);
    }

    return `${ interaciones } iteraciones realizadas`;

};