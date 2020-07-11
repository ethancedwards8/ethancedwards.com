let quoteID = document.getElementById("quote")
let authorID = document.getElementById("quoteAuthor")

let quotes = [
    "Once you start thinking more about where you want to be than about making the best product, you're screwed.",
    "Arguing that you don\'t care about privacy because you have nothing to hide is no different than saying you don\'t care about free speech because you have nothing to say." ,
    "An idiot admires complexity, a genius admires simplicity.",
    "The best way to predict the future is to create it.",
    "Privacy matters; privacy is what allows us to determine who we are and who we want to be.",
    "Those that can, do. Those that can\'t, complain.",
    "Creativity can be a social contribution, but only in so so far as society is free to use the results."
]
let authors = [
    "- Linus Torvalds",
    "- Edward Snowden",
    "- Terry A. Davis",
    "- Peter Drucker",
    "- Edward Snowden",
    "- Linus Torvalds",
    "- Richard Stallman"
]

function getRandNum(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
number = getRandNum(quotes.length)

quoteID.innerText = `"${quotes[number]}"`
authorID.innerText = authors[number]