// PIRMA
console.log("Pirma uzduotis--------");

let firstName = "Vaidas";
let lastName = "Šipelis";
let birthYear = 1993;
let thisYear = new Date().getFullYear();

console.log(
  `Aš esu ${firstName} ${lastName}. Man yra ${thisYear - birthYear} metai.`
);

// Antra

console.log("Antra uzduotis--------");
let a = Math.random() * 4;
let b = Math.random() * 4;

if (a === 0 || b === 0) {
  console.log(`dalinti nulio negalima`);
} else if (a > b && b !== 0) {
  console.log((a / b).toFixed(2));
} else if (b > a && a !== 0) {
  console.log((b / a).toFixed(2));
}

// Trecia

console.log("Trecia uzduotis--------");

let c = Math.round(Math.random() * 25);
let d = Math.round(Math.random() * 25);
let e = Math.round(Math.random() * 25);

if (c === d || d === e || c === e) {
  console.log(`Nera vidurines reiksmes, nes dvi ar daugiau reiksmiu vienodos`);
} else if ((d < c && e > c) || (d > c && e < c)) {
  console.log(` si kart c ${c}`);
} else if ((c < d && e > d) || (c > d && e < d)) {
  console.log(`si kart d ${d}`);
} else if ((c < e && d > e) || (c > e && d < e)) {
  console.log(`si kart e ${e}`);
}
console.log(c);
console.log(d);
console.log(e);

// if (c !== d && d !== e && c !== e) {
//     if(){}

//     if(){}

//     if(){}
// }else{
//   console.log(`Nera vidurines reiksmes, nes dvi ar daugiau reiksmiu vienodos`);
// }

// Ketvirta

console.log(`Ketvirta----------`);

let f = Math.round(Math.random() * 10);
let g = Math.round(Math.random() * 10);
let h = Math.round(Math.random() * 10);
if (f + g <= h || f + h <= g || g + h <= f) {
  console.log("Negali susidaryti trikampis");
} else console.log("Gali susidaryti trikampis");

console.log(f, g, h);

// Penkta

console.log(`Penkta------------`);

let m = Math.round(Math.random() * 2);
let j = Math.round(Math.random() * 2);
let k = Math.round(Math.random() * 2);
let l = Math.round(Math.random() * 2);

// let array = [m, j, k, l];
// console.log(array);

let nuliai = 0;
let vienetai = 0;
let dvejetai = 0;

// for (let i = 0; i <= array.length; i++) {
//   if (array[i] === 0) {
//     nuliai++;
//   }
//   if (array[i] === 1) {
//     vienetai++;
//   }
//   if (array[i] === 2) {
//     dvejetai++;
//   }
// }

if (m === 0) {
  nuliai++;
} else if (m === 1) {
  vienetai++;
} else if (m === 2) {
  dvejetai++;
}

if (j === 0) {
  nuliai++;
} else if (j === 1) {
  vienetai++;
} else if (j === 2) {
  dvejetai++;
}
if (k === 0) {
  nuliai++;
} else if (k === 1) {
  vienetai++;
} else if (k === 2) {
  dvejetai++;
}
if (l === 0) {
  nuliai++;
} else if (l === 1) {
  vienetai++;
} else if (l === 2) {
  dvejetai++;
}

console.log(
  `Nuliu yra ${nuliai}, vienetu yra ${vienetai}, dvejetu yra ${dvejetai}`
);

// Sesta

console.log(`Sesta-------------`);

let one = Math.round(Math.random() * (10 - -10) + -10);
let two = Math.round(Math.random() * (10 - -10) + -10);
let three = Math.round(Math.random() * (10 - -10) + -10);
console.log(one, two, three);

if (one > 0) {
  console.log(`{${one}}`);
}
if (one < 0) {
  console.log(`[${one}]`);
}
if (one === 0) console.log(`(${one})`);

if (two > 0) {
  console.log(`{${two}}`);
}
if (two < 0) {
  console.log(`[${two}]`);
}
if (two === 0) console.log(`(${two})`);

if (three > 0) {
  console.log(`{${three}}`);
}
if (three < 0) {
  console.log(`[${three}]`);
}
if (three === 0) console.log(`(${three})`);

// Septinta

console.log(`Septinta--------`);

let zvakiuSkaicius = Math.round(Math.random() * (3000 - 5) + 5);
let kaina;

if (zvakiuSkaicius >= 1000 && zvakiuSkaicius < 2000) {
  console.log(
    `${zvakiuSkaicius} zvakes kainuos ${(kaina =
      zvakiuSkaicius - zvakiuSkaicius * 0.03)} eurus`
  );
} else if (zvakiuSkaicius >= 2000) {
  console.log(
    `${zvakiuSkaicius} zvakes kainuos ${(kaina =
      zvakiuSkaicius - zvakiuSkaicius * 0.04)} eurus`
  );
} else if (zvakiuSkaicius < 1000) {
  console.log(
    `${zvakiuSkaicius} zvakes kainuos ${(kaina = zvakiuSkaicius)} eurus`
  );
}

// Astunta

console.log(`Astunta------------`);

let kint1 = Math.round(Math.random() * 100);
let kint2 = Math.round(Math.random() * 100);
let kint3 = Math.round(Math.random() * 100);

console.log(kint1, kint2, kint3);
console.log(`vidurkis ${Math.round((kint1 + kint2 + kint3) / 3)}`);
if (
  kint1 < 10 &&
  kint1 > 90 &&
  kint2 < 10 &&
  kint2 > 90 &&
  kint3 > 10 &&
  kint3 > 90
) {
  console.log("visi skaiciai neatitinka reikalavimu");
} else if (kint1 < 10 && kint1 > 90 && kint2 < 10 && kint2 > 90) {
  console.log(kint3);
} else if (kint2 < 10 && kint2 > 90 && kint3 < 10 && kint3 > 90) {
  console.log(kint1);
} else if (kint1 < 10 && kint1 > 90 && kint3 < 10 && kint3 > 90) {
  console.log(kint2);
} else if (kint1 < 10 || kint1 > 90) {
  console.log("kitas vidurkis " + (kint2 + kint3) / 2);
} else if (kint2 < 10 || kint2 > 90) {
  console.log("kitas vidurkis " + (kint1 + kint3) / 2);
} else if (kint3 < 10 || kint3 > 90) {
  console.log("kitas vidurkis " + (kint1 + kint2) / 2);
}

// Devinta

console.log(`Devinta---------`);

let hours = Math.round(Math.random() * 24);
let minutes = Math.round(Math.random() * 60);
let seconds = Math.round(Math.random() * 60);
// let hours = 24;
// let minutes = 59;

let additionalSeconds = Math.round(Math.random() * 300);

let currentSeconds = 0;
let aditionalMinutes = 0;
let currentMinutes = 0;
let aditionalHours = 0;
let currentHours = 0;

if (additionalSeconds + seconds < 60) {
  currentSeconds = additionalSeconds + seconds;
  console.log(
    `Dabar yra ${hours} valandos ir ${minutes} minutes ir ${currentSeconds} sekundes`
  );
}
if (additionalSeconds + seconds > 60 && minutes < 60) {
  currentSeconds = (additionalSeconds + seconds) % 60;
  aditionalMinutes = Math.floor((additionalSeconds + seconds) / 60);
  currentMinutes = minutes + aditionalMinutes;
  console.log(
    `Dabar yra ${hours} valandos ir ${currentMinutes} minutes ir ${currentSeconds} sekundes`
  );
  if (currentMinutes >= 60 && hours < 24) {
    currentMinutes = currentMinutes - 60;
    aditionalHours++;
    currentHours = aditionalHours + currentHours;
    console.log(
      `Dabar yra ${currentHours} valandos ir ${currentMinutes} minutes ir ${currentSeconds} sekundes`
    );
  }
  if (currentHours > 24) {
    console.log(
      `KITOS DIENOS dabar yra ${
        hours - 24
      } valandos ${currentMinutes} minutes ir ${currentSeconds} sekundes`
    );
  }
}
