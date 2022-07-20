// constante que se refere a API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

// função criada para pegar as informações da API
const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        return json.webpurl;
    }catch (e) {
        console.log(e.message)
    }
};

// constante que carregar a imagem
    const loading = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};


catBtn.addEventListener('click', loading);

loading();
