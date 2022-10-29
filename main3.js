// let div = document.createElement("div");
// div.style.width = "250px";
// div.style.height = "250px";
// div.style.backgroundColor = "green";
// div.style.position = "absolute";
// div.style.top = "35%";
// div.style.left = "40%";
// document.body.style.color = "black";
// document.body.prepend(div);

// function rand(max) {
//     return Math.floor(Math.random() * max);
// }

// div.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = `rgb(${rand(256)}, ${rand(
//         256
//     )}, ${rand(256)})`;
// });

// TODO 3. Создать селект у которого будет 2 пункта(картинка, блок),
// если пользователь выбирает картинку(запросить ссылку на картинку, а также размер), если блок(запросить цвет фона блока и размер), после получения данных добавить элементы на страницу

// const selectElement = document.querySelector(".selected");
// selectElement.addEventListener("change", (event) => {
//   if (event.target.value == "askDiv") {
//     let color = prompt("What kind of color you want?");
//     let width = prompt("enter width");
//     let height = prompt("enter heigth");
//     document.body.innerHTML += `<div style= 'width: ${width}px; height: ${height}px; background-color: ${color}'></div>`;
//   } else if (event.target.value == "askImg") {
//     let ask = prompt("put your url");
//     let width = prompt("enter width");
//     document.body.innerHTML += `<img src= "${ask}" width ="${width}">`;
//   }
// });

// TODO 4. Реализовать переключатель светлая тема(цвет фона белый, цвет текста черный)
///темная тема(цвет фона черный, цвет текста белый)(использовать заранее заготовленные классы в css)

// let div = document.querySelector("div");
// let btn = document.querySelector(".btn");
// let p = document.querySelector("p");

// btn.addEventListener("click", function () {
//   document.body.style.backgroundColor = "black";
//   p.style.color = "white";
//   btn.addEventListener("click", function () {
//     document.body.style.backgroundColor = "white";
//     p.style.color = "black";
//   });
// });

// let main = document.querySelector(".main");
// let btn = document.querySelector("#clicks");

// btn.addEventListener("click", () => {
//     main.classList.toggle("svet");
//     btn.classList.toggle("btb");
// });

// TODO 5. Дан массив следующего вида: [
//     {title: 'Samsung', color: 'green', price: 500},
//     {title: 'Apple', color: 'red', price: 800},
//     {title: 'Xiaomi', color: 'yellow', price: 230},
//     {title: 'LG', color: 'black', price: 450},
//     {title: 'Sony', color: 'blue', price: 680}
// ], задача: вывести все товары на страницу в любом удобном виде, затем добавить инпут и реализовать систему 'живого поиска',
//то есть пользователь вводит название товара и система сразу подбирает совпадения(регистр игнорировать)

// let info = [
//   { title: "Samsung", color: "green", price: 500 },
//   { title: "Apple", color: "red", price: 800 },
//   { title: "Xiaomi", color: "yellow", price: 230 },
//   { title: "LG", color: "black", price: 450 },
//   { title: "Sony", color: "blue", price: 680 },
// ];
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let table = document.querySelector("table");
// info.forEach((a) => {
//   table.innerHTML += `
//     <tr>
//    <td> ${a.title}</td>
//    <td> ${a.color}</td>
//    <td> ${a.price}</td></tr>`;
//   inp.addEventListener("input", (e) => {
//     let div = document.querySelector("div");
//     div.innerHTML = "";
//     let filter = info.filter((a) => {
//       return a.title.toLowerCase().includes(e.target.value.toLowerCase());
//     });
//     filter.forEach((item) => {
//       div.innerHTML += `<p>${item.title} ${item.color} ${item.price}</p>`;
//     });
//   });
// });

// TODO 6.1. Дан массив с продуктами,
//let db = [
//     {
//         title: 'Samsung S10',
//         category: 'electronics',
//         price: 700,
//         desc: 'Super phone for your life!',
//         img: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png'
//     },
//     {
//         title: 'iPhone 13 Pro',
//         category: 'electronics',
//         price: 1100,
//         desc: 'One of the most powerful cameras!',
//         img: 'https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg'
//     },
//     {
//         title: 'Apple',
//         category: 'fruits',
//         price: 2,
//         desc: 'Healthy fruit that is used in many dishes and desserts.',
//         img: 'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg'
//     },
//     {
//         title: 'Orange',
//         category: 'fruits',
//         price: 7,
//         desc: 'Fruit for one of the most popular types of juice.',
//         img: 'https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg'
//     },
//     {
//         title: 'Audi R8',
//         category: 'cars',
//         price: 98000,
//         desc: 'A sports car that can reach tremendous speed.',
//         img: 'https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg'
//     }
// ], задача: отобразить все подукты на странице используя карточки из бутстрапа

// 6.2. Продолжаем предыдущий таск, добавить на страницу селект в котором будут категории продуктов, при нажатии на определенную категорию,
//должны остаться товары только выбранной категории

// 6.3. Продолжаем предыдущий таск, добавить функционал поиска, должен быть инпут с кнопкой 'Найти товар', по нажатию на кнопку,
// должны остаться только товары, которые удовлетворяют условиям поиска(должен происходить поиск по названию товара, точное совпадение)

let db = [
  {
    title: "Samsung S10",
    category: "electronics",
    price: 700,
    desc: "Super phone for your life!",
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
  },
  {
    title: "iPhone 13 Pro",
    category: "electronics",
    price: 1100,
    desc: "One of the most powerful cameras!",
    img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
  },
  {
    title: "Apple",
    category: "fruits",
    price: 2,
    desc: "Healthy fruit that is used in many dishes and desserts.",
    img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
  },
  {
    title: "Orange",
    category: "fruits",
    price: 7,
    desc: "Fruit for one of the most popular types of juice.",
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
  },
  {
    title: "Audi R8",
    category: "cars",
    price: 98000,
    desc: "A sports car that can reach tremendous speed.",
    img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
  },
];

let carouselItem = document.querySelector(".carousel-item");
const selectElement = document.querySelector("#selected");

let text = document.querySelector(".text");

db.forEach((a) => {
  carouselItem.innerHTML += `<img  class="m-1 border border-2 rounded border-dark"
    width="15%"
    alt="..." src = ${a.img}> `;
});
carouselItem.innerHTML += `<input type="text" name="" id="" class="form-control" />
<button class="btn btn-dark rounded-pill">Поиск</button>`;
let inp = document.querySelector("input");
inp.addEventListener("input", (e) => {
  text.innerHTML = "";
  let filter = db.filter((a) => {
    return (
      a.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      a.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
  });
  filter.forEach((item) => {
    text.innerHTML += `<p>${item.title} ${item.category} ${item.price} ${item.desc} <img class = "m-1 border border-2 rounded border-dark"
    width="15%" src = ${item.img}></p>`;
  });
});
selectElement.addEventListener("change", (e) => {
  text.innerHTML = "";
  db.forEach((item) => {
    if (e.target.value == item.category) {
      text.innerHTML += `<p class = 'text-decoration-underline' width = "15%">${item.title} ${item.category} ${item.price} ${item.desc} <img class = "m-1 border border-2 rounded border-dark"
            width="15%" src = ${item.img}></p>`;
    }
  });
});
