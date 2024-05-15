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
    firstName:"Віталій",
    lastName:"Шатківський",
    age:"43",
    subject:"Інформатика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
    url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
},
{
    firstName:"Анжела",
    lastName:"Лознюк",
    age:"18",
    subject:"Українська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
},
{
    firstName:"Наталія",
    lastName:"Зинюк",
    age:"18",
    subject:"Хімія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
},
{
    firstName:"Олена",
    lastName:"Геча",
    age:"18",
    subject:"Історія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
},
{
    firstName:"Наталія",
    lastName:"Кучер",
    age:"18",
    subject:"Фізика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
},
{
    firstName:"Вікторія",
    lastName:"Нелипович",
    age:"18",
    subject:"Математика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
    url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
},
]

if (itemsDiv) {
    itemsArray.forEach((item, index) =>{
        itemsDiv.innerHTML += 
        `
        <div class = "item">
        <h2>Викладач ${index += 1} з ${itemsArray.length}</h2>
        <p>${item.firstName} ${item.lastName}</p>
        <p>Вік: ${item.age}</p>
        <p>Викладає: ${item.subject}</p>
        <p><img src = "${item.photo}" class="item-image"></p>
        <p><a href = "${item.url}" target="_blank">Профіль</p>
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
