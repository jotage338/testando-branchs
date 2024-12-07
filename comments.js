const arr = ['banana', 'maçã', 'uva']

function algo(array){
    array.forEach(fruit => {
        console.log(fruit)
    });
    return array
}

console.log(algo(arr))