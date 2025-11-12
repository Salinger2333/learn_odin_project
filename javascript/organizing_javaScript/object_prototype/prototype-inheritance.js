// {
//     let animal = {
//         jumps: null
//     };
//     let rabbit = {
//         __proto__: animal,
//         jumps: true
//     };

//     alert(rabbit.jumps); // ?☑️ (1)true

//     delete rabbit.jumps;

//     alert(rabbit.jumps); // ?☑️ (2)null

//     delete animal.jumps;

//     alert(rabbit.jumps); // ?❎ (3)null / undifined, there’s no such property any more.
// }

// {
//     let head = {
//         glasses: 1
//     };

//     let table = {
//         pen: 3,
//         __proto__: head
//     };

//     let bed = {
//         sheet: 1,
//         pillow: 2,
//         __proto__: table
//     };

//     let pockets = {
//         money: 2000,
//         __proto__: bed
//     };

//     console.time('pockets BeachMark')
//     for (let i = 0; i <= 50000; i++) {
//         console.log(pockets.glasses);
//     }
//     console.timeEnd('pockets BeachMark')
//     console.time('head BeachMark')
//     for (let i = 0; i <= 50000; i++) {
//         console.log(head.glasses);
//     }
//     console.timeEnd('head BeachMark')
//     ❎results shows there's no diff between head.glasses and pockets.glasses
//      engines will remember where the property is and reuse it
// }

{
    let hamster = {

        eat(food) {
            // this.stomach.push(food);
            this.stomach = [food]
        }
    };

    let speedy = {
        __proto__: hamster
    };

    let lazy = {
        __proto__: hamster
    };

    // This one found the food
    speedy.eat("apple");
    console.log(speedy.stomach); // apple

    // This one also has it, why? fix please.
    console.log(lazy.stomach); // apple
}