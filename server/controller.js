module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
                          'A dubious friend may be an enemy in camouflage.',
                          'A faithful friend is a strong defense.',
                          'A friend asks only for your time not your money.',
                          'A friend is a present you give yourself.'];

        // Choose random Fortune
        let fortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[fortuneIndex]

        res.status(200).send(randomFortune);
    },

    getFact: (req, res) => {
        const facts = ['Human DNA can stretch to the Moon and back',
                          'Light travels at a speed of apporximately 299,792 kilometers per second',
                          'Quantum entanglement is a phenomenon where two particles become connected in such a way that the state of one particle is instantly correlated with the state of the other, regardless of the distance between them',
                          'The human brain is the most energy-consuming organ.',
                          'The human body contains trillions of microbes.'];

        // Choose random Fortune
        let factIndex = Math.floor(Math.random() * facts.length);
        let randomFact = facts[factIndex]

        res.status(200).send(randomFact);
    },

    getAffirmation: (req, res) => {
        const affirmations = ['I am capable of achieving great things and I have the power to turn my       dreams into reality.',
                          'I embrace challenges as opportunities for growth and trust in my ability to overcome them.',
                          'I am deserving of love, happiness, and success, and I attract positive experiences into my life.',
                          'I have the strength and resilience to overcome any obstacles that come my way.',
                          'Today, I choose to focus on the present moment, to be grateful for what I have, and to embrace the beauty of life.'];

        // Choose random Fortune
        let affirmationIndex = Math.floor(Math.random() * affirmations.length);
        let randomAffirmation = affirmations[affirmationIndex]

        res.status(200).send(randomAffirmation);
    },

    getQuote: (req, res) => {
        const quotes = ['"The difference between the impossible and the possible lies in a persons determination." - Tommy Lasorda',
                          '"The more difficult the victory, the greater the happiness in winning." - Pele',
                          '"Champions keep playing until they get it right." - Billie Jean King',
                          '"You miss 100% of the shots you do not take." - Wayne Gretzky',
                          '"Pain is temporary. Quitting lasts forever." - Lance Armstrong'];

        // Choose random Quote
        let quoteIndex = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[quoteIndex]

        res.status(200).send(randomQuote);
    },

}