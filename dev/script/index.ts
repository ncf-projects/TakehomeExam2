const quotes = [
    "Do I have to?", "Bad alias, I know.",
    "One day it'll be named.", "I hate pineapples",
    "Penguin's Suck.", "SW1wcmVzc2l2ZSE=", "¿sᴉɥʇ pɐǝɹ noʎ uɐƆ"
];

window.addEventListener("load", () => {
    const quote = document.getElementById("quote");
    if (!quote) return;

    // Pick a random quote from 'quotes'
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = `- "${randomQuote}"`;
})