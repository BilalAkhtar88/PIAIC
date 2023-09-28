// converter.ts
import chalk from 'chalk';
import { exchangeRates } from './currency.js';
export function convertCurrency(amount, fromCurrency, toCurrency) {
    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];
    if (fromRate !== undefined && toRate !== undefined) {
        return (amount / fromRate) * toRate;
    }
    else {
        throw new Error('Invalid currency codes.'); //Very rare chances of occurence, as we are selecting from drop down menu
    }
}
export async function printConversionResult(amount, fromCurrency, toCurrency, convertedAmount) {
    console.log(chalk.green.bold.underline('\nCurrency Converter\n'));
    console.log("Converting ", chalk.bold.blueBright(`${amount} ${fromCurrency} `), `to ${toCurrency} ...`);
    console.log(chalk.greenBright.bold.underline('\nResult:'), chalk.yellow.bold(` ${convertedAmount.toFixed(2)} ${toCurrency}s\n`));
}
