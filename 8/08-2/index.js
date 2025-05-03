const users = [
  ['Alice',25, true],
  ['Bob',30, false],
  ['Charlie',22, true],
  ['David',27, true],
  ['Eve',20, false],
  ['Liza',30, true],
  ['Helga',26, true],
]

console.log(users);


const oldSpotrUsers = users.filter(user => user[1]>25 && user[2]===true);

oldSpotrUsers.sort((a,b)=>a[1]-b[1])


const onlyNames = oldSpotrUsers.map(user=>user[0])

console.log(onlyNames);
