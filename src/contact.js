
function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123 456 789';

    const address = document.createElement('p');
    address.textContent = 'Cluj-Napoca, Calea Motilor, nr. 58';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);

    return contact;
}

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;