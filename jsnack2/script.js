// Jsnack 2
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const arrayZucchine = [
  {
    nome: "Zucchina nera",
    grammi: 50,
    cm: 30,
  },
  {
    nome: "Zucchino romanesco",
    grammi: 70,
    cm: 10,
  },
  {
    nome: "Zucchino fiorentino",
    grammi: 45,
    cm: 32,
  },
  {
    nome: "Zucchina napoleta",
    grammi: 60,
    cm: 46,
  },
  {
    nome: "Zucchina trombetta",
    grammi: 50,
    cm: 35,
  },
  {
    nome: "Zucchina gialla",
    grammi: 40,
    cm: 12,
  },
  {
    nome: "Zucchina friulana",
    grammi: 47,
    cm: 33,
  },
  {
    nome: "Zucchina Crookneck",
    grammi: 42,
    cm: 14,
  },
  {
    nome: "Zucchina pâtisson",
    grammi: 70,
    cm: 40,
  },
  {
    nome: "Zucchina classica",
    grammi: 80,
    cm: 40,
  },
];

console.log(arrayZucchine)

// divido le zucchine in 2 Array
zucchineCorte = [];
zucchineLunghe = [];

for (let i in arrayZucchine) {
  
  if( arrayZucchine[i]["cm"] > 15){
    zucchineLunghe.push(arrayZucchine[i]);
  }else{
    zucchineCorte.push(arrayZucchine[i]);
  }

}
console.log("z-lunghe", zucchineLunghe);
console.log("z-corte", zucchineCorte);

// chiamo le funzioni

sommaPeso( zucchineCorte);
sommaPeso( zucchineLunghe);

// funzione somma Peso zucchine

function sommaPeso( nomeArray){
  
  let pesoTotZucchine= 0;

  for (let i in nomeArray) {
  
    const peso = nomeArray[i].grammi;
    
    pesoTotZucchine += peso;
  
  }
  
  console.log(nomeArray, "peso tot grammi: ",pesoTotZucchine);
}
