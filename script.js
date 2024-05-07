//перевірка чи підключений файл
console.log('Програмно перевірили чи працює консоль')

//Отримання елементу з ідентифікатором
let itemsDiv = document.getElementById('items');

//перевірки чи знайшли елемент
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv);
    //вивід значень
    console.log('Поле classList: ', itemsDiv.classList)
    console.log('Поле id: ', itemsDiv.id)
    console.log('Поле  clientWight: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    //Додавання тексту в блок
    itemsDiv.innerText = 'Програмно доданий текст';
    itemsDiv.innerText += 'Другий програмно доданий текст';
    //додавання коду в скрипти
    itemsDiv.innerHTML += '<h1>Програмно доданий текст</h1>';

    //Додавання відформатованого HTML коду в блок
    for(let i = 0; i< 10; i++){
        itemsDiv.innerHTML += '<div class = "item"></div>'
    }
} else {
    //вивід повідомлення що блок товарів не знайдено
    console.log('Перевір код товарів');
}