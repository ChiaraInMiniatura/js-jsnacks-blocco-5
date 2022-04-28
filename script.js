// Jsnack 1
// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const arrayZucchine = [
  {
    nome: "Zucchina nera",
    grammi: 50,
    cm: 30,
  },
  {
    nome: "Zucchino romanesco",
    grammi: 70,
    cm: 25,
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
    cm: 22,
  },
  {
    nome: "Zucchina friulana",
    grammi: 47,
    cm: 33,
  },
  {
    nome: "Zucchina Crookneck",
    grammi: 42,
    cm: 30,
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

console.log(arrayZucchine);

sommaPeso();

// funzione per sommare i grammi

function sommaPeso(){
  
  let pesoTotZucchine= 0;

  for (let i in arrayZucchine) {
  
    const peso = arrayZucchine[i].grammi;
    
    pesoTotZucchine += peso;
  
  }
  
  console.log("peso tot zucchine grammi: ",pesoTotZucchine);
}

