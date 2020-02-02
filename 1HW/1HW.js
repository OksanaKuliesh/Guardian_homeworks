const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;

let maxPrice = Math.max(price1, price2, price3);
console.log('Максимальное значение: ' + maxPrice);

let minPrice = Math.min(price1, price2, price3);
console.log('Минимальное значение: ' + minPrice);

let sumPrice = price1 + price2 + price3;
console.log('Сумма значений: ' + sumPrice);


let intPrice1 = Math.floor(price1);
let intPrice2 = Math.trunc(price2);
let intPrice3 = Math.trunc(price3);
let intPricesArr = [intPrice1, intPrice2, intPrice3];
console.log('Целые значения: ' + intPricesArr);

let intSum = intPrice1 + intPrice2 + intPrice3;
console.log('Сумма целых: ' + intSum);

let roundIntSum = Math.ceil(intSum * 10 / 1000) * 100;
console.log ('Округленная сумма целых: ' + roundIntSum);

let isEven = intSum % 2;
if (isEven === 1)
  console.log(intSum + ' нечетное число');
else if (isEven === 0)
  console.log(intSum + ' четное число');


let booleanIsEven = (intSum%2) === 0;
console.log(booleanIsEven);

const clientsMoney = 500;
let cashBack = (clientsMoney - sumPrice).toFixed(2);
console.log('Ваша сдача: ' + cashBack + ' грн');

let averagePrice = (sumPrice/3).toFixed(2);
console.log('Среднее значение: ' + averagePrice);

let randDiscount = Math.random();
let discountedPrice = (price2 - randDiscount).toFixed(2);
console.log(`Congratulations! We have a discount for you! 
             Your old price was: ${price2} 
             Your new price is: ${discountedPrice}`);

let lostAdvantage = (price2/2 - randDiscount).toFixed(2);
console.log('Упущенная выгода: ' + lostAdvantage);

console.log(`Advanced:
Максимальная цена: ${maxPrice}
Минимальная цена: ${minPrice}
Сумма цен: ${sumPrice}
Целые цены: ${intPricesArr}
Сумма целых цен: ${intSum}
Сума округленная до сотен: ${roundIntSum}
Четное или не четное?: ${intSum} - четное
Четное?: ${booleanIsEven}
Ваша сдача из 500 грн: ${cashBack}
Средняя цена: ${averagePrice}
Скидка: ${randDiscount}
Цена со скидкой: ${discountedPrice}
Упущенная выгода: ${lostAdvantage}
`)
