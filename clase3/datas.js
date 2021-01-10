const clients = [
  { id: 1, ci: '86620855', name: 'HECTOR ACUÑA BOLAÑOS' },//0
  { id: 2, ci: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ' },//1
  { id: 3, ci: '73826497', name: 'ANDRES NADAL MOLINA' },//2
  { id: 4, ci: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ' },//3
  { id: 5, ci: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS' },//4
  { id: 6, ci: '99804238', name: 'MOHAMED FERRE SAMPER' }//5
];

const accounts = [
  { clientId: 6, bankId: 1, balance: 15000 },
  { clientId: 1, bankId: 3, balance: 18000 },
  { clientId: 5, bankId: 3, balance: 135000 },
  { clientId: 2, bankId: 2, balance: 5600 },
  { clientId: 3, bankId: 1, balance: 23000 },
  { clientId: 5, bankId: 2, balance: 15000 },
  { clientId: 3, bankId: 3, balance: 45900 },
  { clientId: 2, bankId: 3, balance: 19000 },
  { clientId: 4, bankId: 3, balance: 51000 },
  { clientId: 5, bankId: 1, balance: 89000 },
  { clientId: 1, bankId: 2, balance: 1600 },
  { clientId: 5, bankId: 3, balance: 37500 },
  { clientId: 6, bankId: 1, balance: 19200 },
  { clientId: 2, bankId: 3, balance: 10000 },
  { clientId: 3, bankId: 2, balance: 5400 },
  { clientId: 3, bankId: 1, balance: 9000 },
  { clientId: 4, bankId: 3, balance: 13500 },
  { clientId: 2, bankId: 1, balance: 38200 },
  { clientId: 5, bankId: 2, balance: 17000 },
  { clientId: 1, bankId: 3, balance: 1000 },
  { clientId: 5, bankId: 2, balance: 600 },
  { clientId: 6, bankId: 1, balance: 16200 },
  { clientId: 2, bankId: 2, balance: 10000 }
]
const banks = [
  { id: 1, name: 'Union' },
  { id: 2, name: 'Mercantil' },
  { id: 3, name: 'Sol' }
];
//map= recorrer el array y retorna un array
console.log(clients.map(({ id }) => id))

//forEach recorre los elementos del array.
console.log("--------forEach-------------")
clients.forEach(({ id }) => console.log(id))
//find busca un objeto y si lo encuentra lo retorna, si no lo encuentra retorna undefined===null
console.log("--------find-------------")
let search_client_for_id = 5;
let search_client_for_ci = "94020190"
let client = clients.find(client => client.ci === search_client_for_ci && client.id === search_client_for_id)
//
console.log(client)
//findIndex busca un objeto y si lo encuentra retorna el indice en el que se encuentra, si no lo encuentra retorna -1
console.log("--------findIndex-------------")
let search_client_for_id_in_index = 5;
let search_client_for_ci_in_index = "8662085532323"
let indice = clients.findIndex(client => client.ci === search_client_for_ci_in_index)
console.log(indice)
//filter recorre el array buscando coincidencias y retorna un array
console.log("--------fiLter-------------")
let ci_client = "73826497"
let client_s = clients.find(client => client.ci === ci_client)
let filter_for_clientId = client_s.id
let filter_for_bankId = 3
let resp = accounts.filter(account => account.clientId === filter_for_clientId)
console.log("filtro por cliente", resp)
let resp2 = accounts.filter(account => account.clientId === filter_for_clientId && account.bankId === 3)
console.log("filtro por cliente y banco", resp2)
//concat verifica el tipo los tipos de dato y los concatena segun resultados
console.log("--------concat-------------")
let _1 = [1, 2, 3];
let _2 = [4, 5, 6];
let _3 = _1.concat(_2);
console.log(_3)
let new_bank = {
  id: 4,
  name: "Prodem"
}
let _concat = banks.concat(new_bank);
console.log("concat", _concat);
console.log("bank", banks);
//push agrega un objeto al final de nuestro array
console.log("--------push-------------")
let new_client = { id: 7, ci: '83729129', name: 'PERCY MONTERO MARTINEZ' }
clients.push(new_client)
console.log(clients)
//pop
console.log("--------pop-------------")
clients.pop()
console.log(clients)
//reduce recorre el array y retorna un solo resultado
console.log("--------reduce-------------")
let sum_total_balances = accounts.reduce((acumulador, { balance }) => acumulador + balance, 0);
console.log("suma total:", sum_total_balances)
let mayor = accounts.reduce((acumulador, { balance }) => (acumulador > balance ? acumulador : balance), 0);//Math.max(acumulador, balance)
console.log("el mayor:", mayor)
//splice
console.log("--------splice-------------")
let id_client = 3
let indiceClient = clients.findIndex(client => client.id === id_client)
let client_edit = { id: 3, ci: '73826497-1k', name: 'ANDRES NADAL MOLINA' }
clients.splice(indiceClient, 1, client_edit);
console.log(clients)
//reverse
console.log("--------reverse-------------")
let reverse = clients.reverse();
console.log(reverse);
//includes
console.log("--------includes-------------")
let search_id = 9;
console.log(clients.map(client => client.id).includes(search_id))
//sort
console.log("--------sort-------------")
let ordenado = clients.sort((primer, second) => {
  if (primer.name > second.name) {
    return 1
  }
  else {
    return -1
  }
})
console.log(ordenado)
let num = [6, 30, 1, 15, 300]
num.sort((a, b) => a - b)
console.log(num)