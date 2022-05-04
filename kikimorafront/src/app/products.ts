export interface Product {
  id: number;
  categoryid: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  link: string;
  rating: number;
  likes: number;
}

export const products = [
  {
    id: 1,
    categoryid: 2,
    name: 'Candino D-Light',
    price: 59.99,
    description:
      'Часы принадежат коллекции D-Light. Это настоящие женские часы. Материал корпуса часов — сталь. В этих часах используется минеральное стекло. Водозащита этой модели 30 м.',
    photo: 'https://www.consul.ru/files/products/c4258_1.430x510w.jpg?989ebe449307a1d080c0596afeaa90be',
    link: 'https://www.consul.ru/products/candino-c42581',
    rating: 4.7,
    likes: 0,
  },
  {
    id: 2,
    categoryid: 3,
    name: 'CASIO MTS-110L-1A',
    price: 299.0,
    description:
      'Бренд Casio Тип механизма Кварцевый Пол Мужские Диаметр циферблата (мм)46мм Тип браслета/ремешка Кожаный ремень СтеклоМинеральное Материал корпусаНержавеющая сталь ВодозащитаWR50',
    photo: 'https://time4u.kz/upload/resize_cache/iblock/1cb/570_570_1/1cb06e9d66889be84971f076cfa1e0b3.jpeg',
    link: 'https://time4u.kz/product/casio-mts-110l-1a/',
    rating: 4.8,
    likes: 0,
  },
  {
    id: 3,
    categoryid: 3,
    name: 'CASIO MTS-110L-1A',
    price: 299.0,
    description:
      'Бренд Casio Тип механизма Кварцевый Пол Мужские Диаметр циферблата (мм)46мм Тип браслета/ремешка Кожаный ремень СтеклоМинеральное Материал корпусаНержавеющая сталь ВодозащитаWR50',
    photo: 'https://time4u.kz/upload/resize_cache/iblock/1cb/570_570_1/1cb06e9d66889be84971f076cfa1e0b3.jpeg',
    link: 'https://time4u.kz/product/casio-mts-110l-1a/',
    rating: 4.8,
    likes: 0,
  },
  {
    id: 4,
    categoryid: 1,
    name: 'Tissot mens Classic Dream Stainless Steel Dress Watch Brown T1294101601300',
    price: 30.0,
    description:
    'These modern yet classic timepieces provide sophistication and a timeless design suitable both formally or casually as an everyday wear. With an array of options, there is a model to suit everyone.',
    photo: 'https://m.media-amazon.com/images/I/61ZFSTzo+tL._AC_UX679_.jpg',
    link: 'https://www.amazon.com/Tissot-Classic-Dream-Stainless-T1294101601300/dp/B08JVKPD1H/ref=sr_1_7?adgrpid=80997910305&gclid=CjwKCAjwsJ6TBhAIEiwAfl4TWE7jruZJW35XThAQozJwJEvNyV8KbnNY0MlYVRBB18aHOvhEGAt-hhoC0p8QAvD_BwE&hvadid=585505092875&hvdev=c&hvlocphy=9063099&hvnetw=g&hvqmt=b&hvrand=7614549031149244600&hvtargid=kwd-298288484873&hydadcr=14532_13392476&keywords=tissot+mens&qid=1651042308&sr=8-7',
    rating: 4.4,
    likes: 0,
  },
  {
    id: 5,
    categoryid: 1,
    name: 'Tissot Heritage Visodate Swiss Quartz Watch with Stainless Steel Strap, Gray, 20 ',
    price: 49.99,
    description:
      'Back in the 1950s, Tissot celebrated its centenary with a series of innovations â€“ one of which was the integration of a date function to the automatic mechanism in a watch called Visodate',
    photo: 'https://m.media-amazon.com/images/I/71X34D0-0TL._AC_UX679_.jpg',
    link: 'https://www.amazon.com/Tissot-Mens-Heritage-Visodate-T1184101105700/dp/B07J1PFX5X/ref=sr_1_3?crid=E8IX37PWTLJU&keywords=tissot&qid=1651042753&sprefix=tissot+%2Caps%2C456&sr=8-3',
    rating: 4.8,
    likes: 0,
  },
  {
    id: 6,
    categoryid: 2,
    name: 'Candino D-Light',
    price: 59.99,
    description:
      'Часы принадежат коллекции D-Light. Это настоящие женские часы. Материал корпуса часов — сталь. В этих часах используется минеральное стекло. Водозащита этой модели 30 м.',
    photo: 'https://www.consul.ru/files/products/c4258_1.430x510w.jpg?989ebe449307a1d080c0596afeaa90be',
    link: 'https://www.consul.ru/products/candino-c42581',
    rating: 4.7,
    likes: 0,
  },
  {
    id: 7,
    categoryid: 3,
    name: 'CASIO MTS-110L-1A',
    price: 299.0,
    description:
      'Бренд Casio Тип механизма Кварцевый Пол Мужские Диаметр циферблата (мм)46мм Тип браслета/ремешка Кожаный ремень СтеклоМинеральное Материал корпусаНержавеющая сталь ВодозащитаWR50',
    photo: 'https://time4u.kz/upload/resize_cache/iblock/1cb/570_570_1/1cb06e9d66889be84971f076cfa1e0b3.jpeg',
    link: 'https://time4u.kz/product/casio-mts-110l-1a/',
    rating: 4.8,
    likes: 0,
  },
  {
    id: 8,
    categoryid: 3,
    name: 'CASIO MTS-110L-1A',
    price: 299.0,
    description:
      'Бренд Casio Тип механизма Кварцевый Пол Мужские Диаметр циферблата (мм)46мм Тип браслета/ремешка Кожаный ремень СтеклоМинеральное Материал корпусаНержавеющая сталь ВодозащитаWR50',
    photo: 'https://time4u.kz/upload/resize_cache/iblock/1cb/570_570_1/1cb06e9d66889be84971f076cfa1e0b3.jpeg',
    link: 'https://time4u.kz/product/casio-mts-110l-1a/',
    rating: 4.8,
    likes: 0,
  },
  {
    id: 9,
    categoryid: 1,
    name: 'Tissot mens Gentleman Stainless Steel Dress Watch Grey',
    price: 30.0,
    description:
    'The Tissot Gentleman is a multi-purpose watch, both ergonomic and elegant in any circumstance. It is equally suitable for wearing in a business environment, where conventional dress codes apply, as at the weekend, when it adapts easily to leisure activities. As part of the life of a modern, active man, the Tissot Gentleman becomes the perfect companion for every day, every occasion and every style.',
    photo: 'https://m.media-amazon.com/images/I/61oOtOCPJZL._AC_UX679_.jpg',
    link: 'https://www.amazon.com/Tissot-Gentleman-Swiss-Quartz-Stainless/dp/B07XLN21H6/ref=sr_1_8?crid=E8IX37PWTLJU&keywords=tissot&qid=1651043116&sprefix=tissot+%2Caps%2C456&sr=8-8',
    rating: 4.4,
    likes: 0,
  },
  {
    id: 10,
    categoryid: 1,
    name: 'TISSOT GENTLEMAN',
    price: 49.99,
    description:
    'The Tissot Gentleman watch is the perfect daily accessory for the active and modern man. A classically elegant timepiece that is suitable with any look.The Tissot Gentleman comes in three dials (black, blue and silver), all adorned with polished and satinated hour markers, hour and minutes hands, ultra-thin second hand for precision and a date window.',
    photo: 'https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/1/T127.410.16.031.01_R_1.png?im=Resize=(850,850),aspect=fill;Crop=(0,0,850,850),gravity=Center',
    link: 'https://www.tissotwatches.com/en-en/t1274101603101.html',
    rating: 4.8,
    likes: 0,
  },
  {
    id: 11,
    categoryid: 1,
    name: 'TISSOT LE LOCLE POWERMATIC',
    price: 499.99,
    description:
      'An automatic watch is powered by the energy of the person who wears it. Wrist movement enables the mechanism to run. The Powermatic 80 movement boasts 80 hours of power reserve, which is enough to continue telling time accurately even if the watch is not worn for three days.',
    photo: 'https://www.tissotwatches.com/media/catalog/product/cache/aaadd316e453df5b08f7f4246fad1a9c/T/0/T006.407.11.043.00_R_1.png?im=Resize=(850,850),aspect=fill;Crop=(0,0,850,850),gravity=Center',
    link: 'https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09MVZSW5V/ref=sr_1_1?crid=1G7DL6OK9S9AD&keywords=samsung&qid=1647099322&sprefix=samsun%2Caps%2C334&sr=8-1&th=1',
    rating: 3.6,
    likes: 0,
  },
  {
    id: 12,
    categoryid: 4,
    name: 'Submariner pre-owned',
    price: 5999.99,
    description:
      'Круглый корпус, автоматический механизм, регулируемый браслет со звеньями, застежка на зажиме, заостренные стрелки, знаковая линза Cyclops, тахиметр и водонепроницаемость до 100 метров/10 АТМ. Цвет: зеленый. К этому товару прилагается сертификат подлинности. На этот товар распространяется годовая гарантия от бутика.',
    photo: 'https://cdn-images.farfetch-contents.com/16/66/02/86/16660286_32804520_1000.jpg',
    link: 'https://www.farfetch.com/kz/shopping/men/rolex-submariner-pre-owned-40-2020-item-16660286.aspx?size=17&storeid=13139&utm_source=google&utm_medium=cpc&utm_campaign=9106823926&utm_keywordid=&utm_term=&utm_content=91683009293&pid=google&af_channel=search&c=9106823926&af_c_id=9106823926&af_siteid=&af_keywords=pla-301908214503&af_adset_id=91683009293&af_ad_id=414159235628&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOWuYHKms4m6duOuJeEYpdcWCxnw9F9YyBD6OyN5phClxRXKdlc1FwIaAh3DEALw_wcB',
    rating: 3.6,
    likes: 0,
  },
  {
    id: 13,
    categoryid: 4,
    name: 'Submariner pre-owned',
    price: 5999.99,
    description:
      'Круглый корпус, автоматический механизм, регулируемый браслет со звеньями, застежка на зажиме, заостренные стрелки, знаковая линза Cyclops, тахиметр и водонепроницаемость до 100 метров/10 АТМ. Цвет: зеленый. К этому товару прилагается сертификат подлинности. На этот товар распространяется годовая гарантия от бутика.',
    photo: 'https://cdn-images.farfetch-contents.com/16/66/02/86/16660286_32804520_1000.jpg',
    link: 'https://www.farfetch.com/kz/shopping/men/rolex-submariner-pre-owned-40-2020-item-16660286.aspx?size=17&storeid=13139&utm_source=google&utm_medium=cpc&utm_campaign=9106823926&utm_keywordid=&utm_term=&utm_content=91683009293&pid=google&af_channel=search&c=9106823926&af_c_id=9106823926&af_siteid=&af_keywords=pla-301908214503&af_adset_id=91683009293&af_ad_id=414159235628&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOWuYHKms4m6duOuJeEYpdcWCxnw9F9YyBD6OyN5phClxRXKdlc1FwIaAh3DEALw_wcB',
    rating: 3.6,
    likes: 0,
  },
  {
    id: 14,
    categoryid: 4,
    name: 'Submariner pre-owned',
    price: 5999.99,
    description:
      'Круглый корпус, автоматический механизм, регулируемый браслет со звеньями, застежка на зажиме, заостренные стрелки, знаковая линза Cyclops, тахиметр и водонепроницаемость до 100 метров/10 АТМ. Цвет: зеленый. К этому товару прилагается сертификат подлинности. На этот товар распространяется годовая гарантия от бутика.',
    photo: 'https://cdn-images.farfetch-contents.com/16/66/02/86/16660286_32804520_1000.jpg',
    link: 'https://www.farfetch.com/kz/shopping/men/rolex-submariner-pre-owned-40-2020-item-16660286.aspx?size=17&storeid=13139&utm_source=google&utm_medium=cpc&utm_campaign=9106823926&utm_keywordid=&utm_term=&utm_content=91683009293&pid=google&af_channel=search&c=9106823926&af_c_id=9106823926&af_siteid=&af_keywords=pla-301908214503&af_adset_id=91683009293&af_ad_id=414159235628&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOWuYHKms4m6duOuJeEYpdcWCxnw9F9YyBD6OyN5phClxRXKdlc1FwIaAh3DEALw_wcB',
    rating: 3.6,
    likes: 0,
  },
  {
    id: 15,
    categoryid: 4,
    name: 'Submariner pre-owned',
    price: 5999.99,
    description:
      'Круглый корпус, автоматический механизм, регулируемый браслет со звеньями, застежка на зажиме, заостренные стрелки, знаковая линза Cyclops, тахиметр и водонепроницаемость до 100 метров/10 АТМ. Цвет: зеленый. К этому товару прилагается сертификат подлинности. На этот товар распространяется годовая гарантия от бутика.',
    photo: 'https://cdn-images.farfetch-contents.com/16/66/02/86/16660286_32804520_1000.jpg',
    link: 'https://www.farfetch.com/kz/shopping/men/rolex-submariner-pre-owned-40-2020-item-16660286.aspx?size=17&storeid=13139&utm_source=google&utm_medium=cpc&utm_campaign=9106823926&utm_keywordid=&utm_term=&utm_content=91683009293&pid=google&af_channel=search&c=9106823926&af_c_id=9106823926&af_siteid=&af_keywords=pla-301908214503&af_adset_id=91683009293&af_ad_id=414159235628&af_sub1=&af_click_lookback=7d&is_retargeting=true&gclid=Cj0KCQjw06OTBhC_ARIsAAU1yOWuYHKms4m6duOuJeEYpdcWCxnw9F9YyBD6OyN5phClxRXKdlc1FwIaAh3DEALw_wcB',
    rating: 3.6,
    likes: 0,
  },
  {
    id: 16,
    categoryid: 2,
    name: 'Candino D-Light',
    price: 59.99,
    description:
      'Часы принадежат коллекции D-Light. Это настоящие женские часы. Материал корпуса часов — сталь. В этих часах используется минеральное стекло. Водозащита этой модели 30 м.',
    photo: 'https://www.consul.ru/files/products/c4258_1.430x510w.jpg?989ebe449307a1d080c0596afeaa90be',
    link: 'https://www.consul.ru/products/candino-c42581',
    rating: 4.7,
    likes: 0,
  },
  {
    id: 17,
    categoryid: 3,
    name: 'CASIO MTS-110L-1A',
    price: 299.0,
    description:
      'Бренд Casio Тип механизма Кварцевый Пол Мужские Диаметр циферблата (мм)46мм Тип браслета/ремешка Кожаный ремень СтеклоМинеральное Материал корпусаНержавеющая сталь ВодозащитаWR50',
    photo: 'https://time4u.kz/upload/resize_cache/iblock/1cb/570_570_1/1cb06e9d66889be84971f076cfa1e0b3.jpeg',
    link: 'https://time4u.kz/product/casio-mts-110l-1a/',
    rating: 4.8,
    likes: 0,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
