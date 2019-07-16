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
