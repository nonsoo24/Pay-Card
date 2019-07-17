# PayCard

A credit card validation App

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Web browser
internet connection
```

### Installing


```
Fork and download
```

And

```
open in browser
```


## Validation tests
Validate card expiry date

```
date entry must be in MM/YY format

date must not be less than present date
```

Detect Card Type

```
Checks if card is master or visa using the first number entered
where 4 = visa card
      5 = Mastercard

```

Validate card number [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm/)

```
Validates the credit card number using the Luhn Algorithm

Card number inputs must be 16 digits

Each input has a max length of 4

Card number input must not contain alphanumeric characters

```

Validate Name input

```
Name input must be in the format - Name Surname

Each name must not be less than 3 characters

Name input must not contain AlphaNumeric
```

Display cart total

```
This function will be called with the data from the random API and it will display the total payment bill.
```

Format money to local currency
```
It takes an amount and a buyerCountry parameter. It uses these parameters to format the user's bill as a proper currency.

```

## Built With

* [RandomAPI](https://randomapi.com/api/006b08a801d82d0c9824dcfdfdfa3b3c) - for fecthing the price, quantity and country
* [HTML5](https://maven.apache.org/) - Markup
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - for styling
* [Bootstrap](https://getbootstrap.com/) - for styling
* [Javascript](http://es6-features.org/)  - scripting



## Acknowledgments

* Google
* Andela
* Pluralsight

## Click [here](https://pay-card-validation.herokuapp.com/) to view project.

