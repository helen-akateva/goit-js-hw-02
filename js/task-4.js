function getShippingCost(country) {
  let res = null;
  switch (country) {
    case 'China':
      res = 100;
      break;
    case 'Chile':
      res = 250;
      break;
    case 'Australia':
      res = 170;
      break;
    case 'Jamaica':
      res = 120;
      break;

    default:
      return 'Sorry, there is no delivery to your country';
  }
  return `Shipping to ${country} will cost ${res} credits`;
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
