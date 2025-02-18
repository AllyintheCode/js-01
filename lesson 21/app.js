const name = prompt("adin nedi agacan?")
const money = Number(prompt("yetim ne qeder pulun var?"))
console.log(money);
if (money === 6000) {
  console.log(`${name} bizden bidene 07 qazandin`);
} else if (money > 6000 && money <= 9000) {
  console.log(`${name} ${money} manata sene avara stili bi dene rio`);
} else if (money > 9000 && money <= 15000) {
  console.log(`${name} ${money} manata bizden 4 fara qazandin`);
} else if (money > 15000 && money <= 25000) {
  console.log(`${name} ${money} manata qedesh sene bi dene RR`);
} else if (money > 25000 && money <= 30000) {
  console.log(`${name} sene ${money} manata f10 dusur brat`);
}
else if (money < 6000 && money === 0) {
  console.log(`${name} pulun yoxdu tessufki sene masin yoxdu`);
}
else {
  console.log(`${name} agziva geleni yazma ay qaas`);
}
