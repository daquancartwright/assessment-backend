const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const factBtn = document.getElementById("factButton")
const affirmationBtn = document.getElementById("affirmationButton")
const quoteBtn = document.getElementById("quoteButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFact = () => {
    axios.get("http://localhost:4000/api/fact/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getAffirmation = () => {
    axios.get("http://localhost:4000/api/affirmation/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
factBtn.addEventListener('click', getFact)
affirmationBtn.addEventListener('click', getAffirmation)
quoteBtn.addEventListener('click', getQuote)
