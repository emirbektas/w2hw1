// Girilen sayinin asal olup olmadigini bulma.

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(`${numbers[i]} is prime!`);
    } else {
      console.log(`${numbers[i]} is not prime!`);
    }
  }
}

// findPrime(2, 7, 15, 27, 37);

//Girilen sayinin arkadas sayi olup olmadigini bulma.

const isFriend = (number1, number2) => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      total1 = total1 + i;
    }
  }
  for (let i = 1; i < number2; i++) {
    if (number2 % i == 0) {
      total2 += i;
    }
  }

  if (total1 == number2 && total2 == number1) {
    console.log(number1 + " ve " + number2 + " arkadas sayilar!");
  } else {
    console.log(number1 + " ve " + number2 + " arkadas sayi degiller!");
  }
};

// isFriend(220, 284);

// 1000'e kadar olan Mukemmel Sayilar.

const perfectNumber = () => {
  let total = 0;
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        total += j;
      }
    }
    if (i == total) {
      console.log(i + " bir mukemmel sayi!");
    }
    total = 0;
  }
};

// perfectNumber();

// 1000'e kadar olan Asal Sayilar
const primeToThousand = () => {
  for (let i = 1; i < 1000; i++) {
    let asal = true;
    if (i > 1) {
      if (i == 2) {
        console.log(i + " bir asal sayi!");
      } else {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            asal = false;
          }
        }
        if (asal) {
          console.log(i + " bir asal sayi!");
        }
      }
    }
  }
};

// primeToThousand();
