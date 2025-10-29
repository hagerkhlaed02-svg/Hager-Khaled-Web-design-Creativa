// var x = 10
// var y = 20
// var z = x += 3
// console.log(z)
// // var p = prompt('enter your job');
// // (p == "designer") ? console.log('valid job') : console.log('invalid job')
// // console.log(typeof x == "number")
// k = 5
// k += 10
// console.log(k)
// k--
// console.log(k)
// console.log(y == x)
// console.log(y != x)

// var m = (x > 0 || y > 0)
// console.log(m)

// var p= prompt ('enter your core');

// if(p<100){
//     console.log("invalid score")
// }
// else if( p<=90){
//      console.log (" invalid score")
//     }

// else if (p<=80) {
//     console.log("b")
// }

// else if (p <= 70)
// {
//     console.log("d")
// }
// else
// {
//     console.log("f")
// }



function numberOfUsers() {
  return 4;}

console.log(numberOfUsers());

function addUser(name, id, balance) {
  return {
    name: name,
    id: id,
    balance: balance
  };
}

console.log(addUser("Menna", 1, 4500));

let users = [
  { id: 1, name: "Menna", balance: 5000 },
  { id: 2, name: "Omar", balance: 3000 }
];

function editUserBalanceById(id, newBalance) {
  for (let user of users) {
    if (user.id === id) {
      user.balance = newBalance;
      return user;
    }
  }
  return "User not found";
}

console.log(editUserBalanceById(1, 7000));

 let user= [
   { id: 1, name: "Menna", balance: 5000 },
   { id: 2, name: "rahma", balance: 3000 },
   { id: 3, name: "youmna", balance: 4000 }
 ];

 function deleteUserById(id) {
   const index = users.findIndex(user => user.id === id);
   if (index !== -1) {
     users.splice(index, 1);
     return "User deleted";
   }
   return "User not found";
 }

 console.log(deleteUserById(2));
 console.log(users);
