const price1 = 15.678;
const price2 = 123.965;
const price3 = 90.2345;

const maxPrice = Math.max(price1, price2, price3);
console.log('Максимальное значение: ' + maxPrice);

const minPrice = Math.min(price1, price2, price3);
console.log('Минимальное значение: ' + minPrice);

const sumPrice = price1 + price2 + price3;
console.log('Сумма значений: ' + sumPrice);


const intPrice1 = Math.floor(price1);
const intPrice2 = Math.trunc(price2);
const intPrice3 = Math.trunc(price3);
const intPricesArr = [intPrice1, intPrice2, intPrice3];
console.log('Целые значения: ' + intPricesArr);

const intSum = intPrice1 + intPrice2 + intPrice3;
console.log('Сумма целых: ' + intSum);

const roundIntSum = Math.ceil(intSum * 10 / 1000) * 100;
console.log ('Округленная сумма целых: ' + roundIntSum);

let isEven = intSum % 2;
if (isEven === 1)
  console.log(intSum + ' нечетное число');
else if (isEven === 0)
  console.log(intSum + ' четное число');


const booleanIsEven = (intSum%2) === 0;
console.log(booleanIsEven);

const clientsMoney = 500;
const cashBack = (clientsMoney - sumPrice).toFixed(2);
console.log('Ваша сдача: ' + cashBack + ' грн');

const averagePrice = (sumPrice/3).toFixed(2);
console.log('Среднее значение: ' + averagePrice);

const randDiscount = Math.random();
const discountedPrice = (price2 - randDiscount).toFixed(2);
console.log(`Congratulations! We have a discount for you! 
             Your old price was: ${price2} 
             Your new price is: ${discountedPrice}`);

const lostAdvantage = ((sumPrice/2) - (sumPrice * randDiscount)).toFixed(2);
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
