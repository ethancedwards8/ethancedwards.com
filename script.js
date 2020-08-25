/**
* You can find the full License at https://ethancedwars.com/LICENSE
* @source: https://ethancedwards.com/script.js
*
* @licstart	The following is the entire license notice for the
*  JavaScript code in this page.
*
* Copyright (C) 2020  Ethan Carter Edwards
*
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, ONLY.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program; if not, write to the Free Software
* Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*
* @licend The above is the entire license notice
* for the JavaScript code in this page.
*/
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
