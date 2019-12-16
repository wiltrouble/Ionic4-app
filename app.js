const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#buttonSave');
const buttonClear = document.querySelector('#buttonClear');
const productList = document.querySelector('#product-list')
const totalOutput = document.querySelector('#total');

let total = 0;

const createNewProduct = (name, price) => {
    const ionCard = document.createElement('ion-card');
    const newProductItem = document.createElement('ion-card-content');
    newProductItem.textContent = name + ': $' + price;
    ionCard.appendChild(newProductItem);
    productList.appendChild(ionCard);
};

const clearInputs = () => {
    productName.value = '';
    productPrice.value = '';
}

const presentAlert = () => {
    const alert = document.createElement('ion-alert')
    alert.header = 'Invalid Data';
    alert.subHeader = 'Please verigy your inputs'
    alert.message = 'Inconrrect Name or Price'
    alert.buttons = ['ok'];

    document.body.appendChild(alert);
    return alert.present();
}

const isEmpty = str => !str.trim().length;

buttonSave.addEventListener('click', () => {
    const name = productName.value;
    const price = productPrice.value;

    if (isEmpty(name) || price<=0 || isEmpty(price)) {
        presentAlert();
        return;
    }

    createNewProduct(name, price);
    total += +price;
    totalOutput.textContent = total;
    clearInputs();
})

buttonClear.addEventListener('click', clearInputs);