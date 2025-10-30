{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];
    // John, Pete, Mary
    let names = users.map((item) => {
        return item['name']
    })
    console.log(names);
}


{
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];

    let usersMapped = users.map((item) => {
        return {
            fullName: item['name'] + item['surname'],
            id: item['id']
        }
    })

    /*
    usersMapped = [
      { fullName: "John Smith", id: 1 },
      { fullName: "Pete Hunt", id: 2 },
      { fullName: "Mary Key", id: 3 }
    ]
    */

    console.log(usersMapped[0].id) // 1
    console.log(usersMapped[0].fullName) // John Smith
}

{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];
    function sortByAge(arr) {
        return arr.sort((a, b) => {
            return a['age'] - b['age']
        })
    }
    sortByAge(arr);

    // now: [john, mary, pete]
    console.log(arr[0].name); // John
    console.log(arr[1].name); // Mary
    console.log(arr[2].name); // Pete
}

{
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];
    function getAverageAge(user) {
        return user.reduce((total, curUser) => {
            return total += curUser.age
        }, 0) / arr.length
    }
    console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
}

{
    let users = [
        { id: 'john', name: "John Smith", age: 20 },
        { id: 'ann', name: "Ann Smith", age: 24 },
        { id: 'pete', name: "Pete Peterson", age: 31 },
    ];
    function groupById(users) {
        return users.reduce((obj, cur) => {
            obj[cur.id] = cur
            return obj

        }, {})
    }
    // function groupById(users) {
    //     return users.map((user) => {
    //         return {
    //             [user.id]: user
    //         }
    //     })
    // }

    // function groupById(users) {
    //     let result = {}
    //     for (const user of users) {
    //         result[user.id] = user
    //     }
    //     return result
    // }

    let usersById = groupById(users);
    console.log(usersById);

    /*
    usersById = {
      john: {id: 'john', name: "John Smith", age: 20},
      ann: {id: 'ann', name: "Ann Smith", age: 24},
      pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
    */
}