
export const formatMoney = (amount, locale='fil-PH') => {
    let currency = "";

    if (locale === "fil-PH") {
        currency ='PHP';
    }
  const formattedAmount = new Intl.NumberFormat(
        locale, 
        { style: 'currency', currency: currency}
    ).format(amount);
    return formattedAmount
}