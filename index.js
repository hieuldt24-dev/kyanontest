// function groupUsersByAge(users) {
//     const result = {}
//     users.forEach(user => {
//         if (!result[user.age]) {
//             result[user.age] = [];
//         }
//         result[user.age].push(user.name);
//     })
//     return result;
// }
function groupUsersByAge(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.age]) {
            acc[user.age] = [];
        }
        acc[user.age].push(user.name);
        return acc;
    }, {});
}

const users = [
    { name: "A", age: 20 },
    { name: "B", age: 21 },
    { name: "C", age: 20 }
];

console.log(groupUsersByAge(users));
