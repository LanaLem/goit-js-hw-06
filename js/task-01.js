const refs = {
    categories: document.querySelector("#categories"),
    item: document.querySelectorAll(".item"),
}

function countCategories(element) {
    console.log(`Number of categories: ${element.children.length}`);
};

function itemCount(element) {
    element.forEach(item => {
        console.log(item.firstElementChild.innerText);
        console.log(item.lastElementChild.children.length)
    }
    )
}

countCategories(refs.categories);
itemCount(refs.item)