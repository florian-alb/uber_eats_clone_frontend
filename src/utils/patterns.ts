export const patterns = {
    last_name: /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\-]*$/,
    first_name: /^[A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\-]*$/,
    email: /^\S+@\S+$/i,
    phone: /^[0-9]*$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    product_name:  /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9 .,!?;:'À-ÖØ-öø-ÿàáâãäåæçèéêëìíîïðñòóôõöùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝÞßŒœ-]{3,}$/,
    product_description: /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9 .,!?;:'À-ÖØ-öø-ÿàáâãäåæçèéêëìíîïðñòóôõöùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝÞßŒœ-]{3,}$/,
    product_price: /^\d{1,},?\d{0,2}$|^\d{1,}\.?\d{0,2}$/
};