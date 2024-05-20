//перевірка чи підключений файл
console.log('Програмно перевірили чи працює консоль')

//Отримання елементу з ідентифікатором
let itemsDiv = document.getElementById('items');

//перевірка чи знайшли елемент
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv);
    //вивід значень
    console.log('Поле classList: ', itemsDiv.classList)
    console.log('Поле id: ', itemsDiv.id)
    console.log('Поле  clientWight: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // //Додавання тексту в блок
    // itemsDiv.innerText = 'Програмно доданий текст';
    // itemsDiv.innerText += 'Другий програмно доданий текст';
    // //додавання коду в скрипти
    // itemsDiv.innerHTML += '<h1>Програмно доданий текст</h1>';

//     //Додавання відформатованого HTML коду в блок
//     for(let i = 0; i< 10; i++){
//         itemsDiv.innerHTML += '<div class = "item"></div>'
//     }
// } else {
//     //вивід повідомлення що блок товарів не знайдено
//     console.log('Блок не знайдено');
}

//Створення масиву
let itemsArray = [
    {
        title: "Мотокоса 43",
        image: "img/img-3.png",
        priseNormal: 5499,
        priseDiscount: 4497,
        priseCoupon: 4395,
        lapka: 6,
        pb: 8,
    },
    {
        title: "Електричний тример 110",
        image: "https://rebiner.ua/media/catalog/product/cache/d7cfe7d50445e7d0b720212a2e24da17/r/g/rgt850.jpg",
        priseNormal: 5499,
        priseDiscount: 4497,
        priseCoupon: 4395,
        lapka: 6,
        pb: 8,
    },
    {
        title: "Електрична газонокосарка 32",
        image: "img/img-3.png",
        priseNormal: 5499,
        priseDiscount: 4497,
        priseCoupon: 4395,
        lapka: 6,
        pb: 8,
    },
    {
        title: "Акумуляторний обприскувач 12 N",
        image: "img/img-3.png",
        priseNormal: 5499,
        priseDiscount: 4497,
        priseCoupon: 4395,
        lapka: 6,
        pb: 8,
    },

]

if (itemsDiv) {
    itemsArray.forEach((item, index) =>{
        itemsDiv.innerHTML += 
        `
        <div class = "item">
        <div class="item-title">${item.title}</div>
              
        <div class="item-image">
        <img src="${item.image}" alt="Мотокоса">
        </div>
        
        <div class="parts-pay">
            <div><img src="https://proger.com.ua/upload/webp_cache/iblock/099/t86mp7yql1f8xfeihmxoewgg624f2sc7/lapka.webp" alt="mono">${item.lapka}</div>
            <div><img src="img/img-2.png" alt="pie">${item.pb}</div>
        </div>
        
        <div class="price">
          <div><span>${item.priseNormal}</span><sup>грн</sup></div>
          <div><span>${item.priseDiscount}</span><sup>грн</sup></div>
        </div>
        
        <div class="price bonus">
          <div>Ціна за купоном</div>
          <div><span>${item.priseCoupon}</span><sup>грн</sup></div>
        </div> 

        `
    })
}
else {
    console.log('Блок не знайдено');
}


itemsArray = itemsArray.sort()
//Виведення масиву у консоль
console.log (itemsArray)
for(let i = 0; i < itemsArray.lenght; i++) {
    console.log (i + "-й елемент:", itemsArray[i])
}




// Вчителі

// {
//     firstName:"Віталій",
//     lastName:"Шатківський",
//     age:"43",
//     subject:"Інформатика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
// },
// {
//     firstName:"Анжела",
//     lastName:"Лознюк",
//     age:"18",
//     subject:"Українська мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
// },
// {
//     firstName:"Наталія",
//     lastName:"Зинюк",
//     age:"18",
//     subject:"Хімія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
// },
// {
//     firstName:"Олена",
//     lastName:"Геча",
//     age:"18",
//     subject:"Історія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
// },
// {
//     firstName:"Наталія",
//     lastName:"Кучер",
//     age:"18",
//     subject:"Фізика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
// },
// {
//     firstName:"Вікторія",
//     lastName:"Нелипович",
//     age:"18",
//     subject:"Математика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
// },


{/* <div class="item-title">${item.title}</div>
              
<div class="item-image"></div>
    <img src="${item.image}" alt="Мотокоса">

<div class="parts-pay">
    <div><img src="https://proger.com.ua/upload/webp_cache/iblock/099/t86mp7yql1f8xfeihmxoewgg624f2sc7/lapka.webp" alt="mono">${item.lapka}</div>
    <div><img src="img/img-2.png" alt="pie">${item.pb}</div>
</div>

<div class="prise">
  <div><span>${item.priseNormal}</span><sup>грн</sup></div>
  <div><span>${item.priseDiscount}</span><sup>грн</sup></div>
</div>

<div class="prise bonus">
  <div>Ціна за купоном</div>
  <div><span>${item.priseCoupon}</span><sup>грн</sup></div>
</div> */}
