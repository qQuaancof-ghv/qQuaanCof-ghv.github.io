const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const checkEmail = new RegExp(regex);

document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('from-email').value;

    if (email === '') {
        document.querySelector('.error').textContent = 'Hãy nhập Email để xác thực';
    } else {
        if (checkEmail.test(email)) {
            document.getElementById('from-email').classList.add('d-none');
            document.querySelector('.error').textContent = '';
            document.getElementById('personal-info-items').classList.remove('d-none');
            document.getElementById('btn-submit').classList.add('d-none');
        } else {
            document.querySelector('.error').textContent = 'Email không đúng định dạng';
        }
    }
});


function handleOnMouseOver(element) {
    const viewMore = element.querySelector('.more');
    viewMore.style.display = 'inline-block';
}

function handleOnMouseOut(element) {
    const viewMore = element.querySelector('.more');
    viewMore.style.display = 'none';
}

function more(id) {
    document.getElementById(id).classList.remove('d-lg-none');
    document.getElementById(id).classList.add('d-block');
    document.getElementById(`${id}-overlay`).classList.remove('d-lg-none');
    document.getElementById(`${id}-overlay`).classList.add('d-lg-none');
    document.getElementById(`${id}-view-less`).classList.remove('d-none');
    document.getElementById(`${id}-view-less`).classList.add('d-block');
}

function less(id) {
    document.getElementById(id).classList.add('d-lg-none');
    document.getElementById(id).classList.remove('d-block');
    document.getElementById(`${id}-overlay`).classList.add('d-lg-none');
    document.getElementById(`${id}-overlay`).classList.remove('d-lg-none');
    document.getElementById(`${id}-view-less`).classList.add('d-none');
    document.getElementById(`${id}-view-less`).classList.remove('d-block');
}