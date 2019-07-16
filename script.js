const supportedCards = {
    visa: 'img\visa.png',
    mastercard: 'img\mastercard.png'

  };

  const countries = [{
      code: "US",
      currency: "USD",
      country: 'United States'
    },
    {
      code: "NG",
      currency: "NGN",
      country: 'Nigeria'
    },
    {
      code: 'KE',
      currency: 'KES',
      country: 'Kenya'
    },
    {
      code: 'UG',
      currency: 'UGX',
      country: 'Uganda'
    },
    {
      code: 'RW',
      currency: 'RWF',
      country: 'Rwanda'
    },
    {
      code: 'TZ',
      currency: 'TZS',
      country: 'Tanzania'
    },
    {
      code: 'ZA',
      currency: 'ZAR',
      country: 'South Africa'
    },
    {
      code: 'CM',
      currency: 'XAF',
      country: 'Cameroon'
    },
    {
      code: 'GH',
      currency: 'GHS',
      country: 'Ghana'
    }
  ];
  
const appState = {}
const ccDigitDiv = document.querySelector('[data-cc-digits]') // selects all card number inputs

// formats currency
const formatAsMoney = (amount, buyerCountry) => {

  const item = countries.find((data) => {
    return data.country === buyerCountry;
  });
  if (item) {
    return amount.toLocaleString(`en-${item.code}`, {
      style: 'currency',
      currency: item.currency
    });
  } else {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
};

const flagIfInvalid = (field, isValid) => {
    if (isValid && field.hasAttribute('class'))
      field.classList.remove('is-invalid');
    else
      field.setAttribute('class', 'is-invalid');

  }
  const expiryDateFormatIsValid = (target) => {
    const mm = target.value.split('/')[0];
    const yy = target.value.split('/')[1];
    return /(0?[1-9]|1[012])/.test(mm) && /\d{2}$/.test(yy);
  };

  const detectCardType = ({
    target
  }) => {
    //target is the first of the input field
    const firstNumber = target.value.charAt(0);
    const dataCreditDiv = document.querySelector('[data-credit-card]');
    let stringValue = ""
    const dataTypeImg = document.querySelector('img[data-card-type]')
  
    if (firstNumber == 4) {
      dataCreditDiv.classList.add('is-visa')
      stringValue = 'is-visa'
      dataTypeImg.src = supportedCards.visa
      return stringValue;
  
    } else if (firstNumber == 5) {
      stringValue = "is-mastercard"
      dataTypeImg.src = supportedCards.mastercard
      dataCreditDiv.classList.add('is-mastercard');
      return stringValue;
    } else {
      dataCreditDiv.classList.remove('is-visa');
      dataCreditDiv.classList.remove('is-mastercard');
      dataTypeImg.src = 'https://placehold.it/120x60.png?text=Card';
      return stringValue;
    }
  };
  
  const validateCardHolderName = ({
    target
  }) => {
    let cardHolderName = target.value.split(' ');
    if (cardHolderName.length === 2) {
      let name = cardHolderName[0];
      let surname = cardHolderName[1];
      if (name.length >= 3 && surname.length >= 3) {
        flagIfInvalid(target, true)
        return true;
      } else {
        flagIfInvalid(target, false)
        return false;
      }
    } else {
      flagIfInvalid(target, false)
      return false;
    }
  }
  
  const validateCardExpiryDate = ({
    target
  }) => {
    const m = target.value.split('/')[0];
    const y = target.value.split('/')[1];
    const date = new Date(`${m}/01/${y}`);
    if (expiryDateFormatIsValid(target) && date > new Date()) {
      flagIfInvalid(target, true);
      return true;
    } else {
      flagIfInvalid(target, false);
      return false;
    }
  };
  
  const validateWithLuhn = (digits) => {
    let sum = 0;
    const digitsAreValid = digits.every((item) => {
      return !isNaN(Number.parseInt(item));
    });
    if (digitsAreValid && digits.length === 16) {
      const reversed = digits.reverse();
      reversed.forEach((item, index) => {
        if (index % 2 > 0) {
          const doubled = Number.parseInt(item) * 2;
          if (doubled > 9) {
            sum += (doubled - 9);
          } else {
            sum += doubled;
          }
        } else {
          sum += Number.parseInt(item);
        }
      });
      // console.log(sum);
      return (sum % 10) === 0;
    } else {
      return false;
    }
  };
  const validateCardNumber = () => {
    const digits = document.querySelector('[data-cc-digits]');
    // console.log(digits.childNodes);
    const data = [];
    Array.from(digits.childNodes).forEach((item) => {
      if (item.value) {
        const strItem = item.value.toString();
        for (let i = 0; i < strItem.length; i++) {
          const charItem = strItem.charAt(i);
          data.push(charItem);
        }
      }
    });
    if (validateWithLuhn(data)) {
      if (digits.classList.contains('is-invalid')) {
        flagIfInvalid(digits, true);
      }
      return true;
    } else {
      flagIfInvalid(digits, false);
      return false;
    }
  };
