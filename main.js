"use strict";


function Product(name, price) {
    this.name = name;
    this.price = price;
}

let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000),
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000)
];
console.log(products)

const checkboxItem = document.querySelectorAll('.product')
const selectedResult = document.getElementById('selectedResult')
const price = document.getElementById('price')

let selectedProducts = [];
let totalPrice = 0;


checkboxItem.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => updateSelection(index))
});

// 선택 업데이트 함수
function updateSelection(index) {
    const checkbox = checkboxItem[index]
    const product = products[index]

    if (checkbox.checked) {
        selectedProducts.push(product)
    } else {
        selectedProducts = selectedProducts.filter(p => p !== product)
    }

    updateResult();
}

// 결과표시
function updateResult() {
    selectedResult.innerHTML = selectedProducts.map(product =>
        `<li>${product.name} - ${product.price}원</li>`
    ).join('')
    totalPrice=0
    for (let i = 0; i < selectedProducts.length; i++) {
        totalPrice += selectedProducts[i].price
    }
    price.textContent = `총 가격: ${totalPrice}원`
}

// 결제하기
function pay() {
    if (selectedProducts.length === 0) {
        alert('결제할 상품을 선택해야 합니다')
       
    } else {
        console.log(totalPrice)
        let childWindow = window.open('child.html', '_blank', 'width=500, height=500,left=100,right=100')
        childWindow.onload = function () {
            childWindow.GototalPrice(totalPrice)
        }

   }


 
}









// //가격 업데이트
// var totalPrice=0
// function updateResult() {
//     let checkNode = document.querySelectorAll('input[id="product"]:checked')
//     let selectedList = ''
//     let priceList = ''
//     checkNode.forEach((item) => {
//         selectedList += `<li>${item.value}</li>`
//         priceList = item.value.split('-')
//         let priceL = parseInt(priceList[1])
//         totalPrice += priceL
//     })
//     selectedResult.innerHTML = selectedList
//     price.innerHTML =`총액: ${totalPrice}`
// }

// document.querySelectorAll('input[id="product"]').forEach(checkbox => {
//     checkbox.addEventListener('change', updateResult)
// })

// //결제
// function pay() {
//     if (price.innerHTML.length === 0) {
//         console.log(totalPrice)
//         alert('결제할 상품을 선태해야 합니다')
//     } else {
//         window.open('child.html','_blank','width=500, height=500,left=100,right=100')
//     }
// }