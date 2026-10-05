const items = document.querySelectorAll("li");

// Вивести кожен елемент у консоль
for (const item of items) {
    console.log(item);
}

// Загальна кількість елементів
console.log("Кількість елементів:", items.length);

// Витягнути текст у масив
const texts = [];

for (const item of items) {
    texts.push(item.textContent.trim());
}

console.log("Масив текстів:", texts);