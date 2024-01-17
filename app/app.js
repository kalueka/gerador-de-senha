const inputSenha = document.querySelector('#input-tamanho');
const button = document.querySelector('#button');

const sizeSenha = document.querySelector('#tamanho-senha');
const showPassword = document.querySelector('#show-password');

const containerPassword = document.querySelector('#container-password');


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.!";
let novaSenha = "";

sizeSenha.innerHTML = inputSenha.value; //apresenha o tamanho da senha

inputSenha.oninput = function () { //actualiza o tamanho dos caracteres ao usar o [range];
    sizeSenha.innerHTML = this.value;
};

function geraSenha() {
    let senhaGerada = "";

    for (let i = 0, tempTamanhoSenha = charset.length; i < inputSenha.value; i++) {
        senhaGerada += charset.charAt(Math.floor(Math.random() * tempTamanhoSenha));
    }

    containerPassword.classList.remove('hide');
    showPassword.innerHTML = senhaGerada;
    novaSenha = senhaGerada;
}

async function copySenha() {
    alert('Senha copiada com sucesso!');
    try{
        await navigator.clipboard.writeText(novaSenha);
    }catch(error) {
        console.log(error)
    }
}

button.addEventListener('click', () => {
    geraSenha();
});

containerPassword.addEventListener('click', () => {
    copySenha();
});
