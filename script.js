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
'Газонокосарка 43',
'Електричний тример 110',
'Електрична газонокосарка 23',
'Акумуляторний оприскувач 12 N',
'Газонокосарка 430',
'Електричний тример 130',
'Електрична газонокосарка 320',
'Акумуляторний оприскувач 12 E'
]

if (itemsDiv) {
    itemsArray.forEach((item, index) =>{
        itemsDiv.innerHTML += 
        `
        <div class = "item">
        <h2>Товар №${index += 1}</h2>
        <p>${item}</p>
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
