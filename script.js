/* @license magnet:magnet:?xt=urn:btih:cf05388f2679ee054f2beb29a391d25f4e673ac3&dn=gpl-2.0.txt GPL-v2-or-Later */
let quoteID = document.getElementById("quote")
let authorID = document.getElementById("quoteAuthor")

let quotes = [
    "Once you start thinking more about where you want to be than about making the best product, you're screwed.",
    "Arguing that you don\'t care about privacy because you have nothing to hide is no different than saying you don\'t care about free speech because you have nothing to say.",
    "An idiot admires complexity, a genius admires simplicity.",
    "The best way to predict the future is to create it.",
    "Privacy matters; privacy is what allows us to determine who we are and who we want to be.",
    "Those that can, do. Those that can\'t, complain.",
    "Creativity can be a social contribution, but only in so so far as society is free to use the results.",
    "To give anything less than your best is to sacrifice the gift.",
    "Fear is an indicator of moving in the right direction."
]
let authors = [
    "- Linus Torvalds",
    "- Edward Snowden",
    "- Terry A. Davis",
    "- Peter Drucker",
    "- Edward Snowden",
    "- Linus Torvalds",
    "- Richard Stallman",
    "- Steve Prefontaine",
    "- Grant Cardone"
]

function getRandNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
number = getRandNum(quotes.length)

quoteID.innerText = `"${quotes[number]}"`
authorID.innerText = authors[number]
/* @license-end */
