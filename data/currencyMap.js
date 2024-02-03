export const currencyCodes = {
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  EUR: "Euro",
  GBP: "British Pound",
  HKD: "Hong Kong Dollar",
  HRK: "Croatian Kuna",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli Shekel",
  INR: "Indian Rupee",
  ISK: "Icelandic Krona",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  RON: "Romanian Leu",
  RUB: "Russian Ruble",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  USD: "US Dollar",
  ZAR: "South African Rand",
};

export const currencyConversion = {
  AUD: 0.0183511043,
  BGN: 0.0216587993,
  BRL: 0.0593115955,
  CAD: 0.0161472193,
  CHF: 0.0103480126,
  CNY: 0.0865991276,
  CZK: 0.2753126533,
  DKK: 0.0826996473,
  EUR: 0.0110939817,
  GBP: 0.0094657111,
  HKD: 0.0943206236,
  HRK: 0.084705789,
  HUF: 4.2472338228,
  IDR: 189.9360972683,
  ILS: 0.0439376113,
  INR: 1,
  ISK: 1.6401342671,
  JPY: 1.7669837945,
  KRW: 16.013440969,
  MXN: 0.2059775843,
  MYR: 0.0570196366,
  NOK: 0.1258507513,
  NZD: 0.019632148,
  PHP: 0.6764247428,
  PLN: 0.0478747315,
  RON: 0.0551428309,
  RUB: 1.0906904491,
  SEK: 0.1252430432,
  SGD: 0.0161135588,
  THB: 0.4259425338,
  TRY: 0.3672469674,
  USD: 0.0120648378,
  ZAR: 0.2241345663,
};

export function getFullCurrencyName(code) {
  return currencyCodes[code];
}
