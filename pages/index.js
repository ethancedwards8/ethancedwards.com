import React from 'react';

import Navbar from '../components/header.js';

import Link from 'next/link';

// really need to redo this...
let quotes = [
    "Once you start thinking more about where you want to be than about making the best product, you're screwed.",
    "Arguing that you don\'t care about privacy because you have nothing to hide is no different than saying you don\'t care about free speech because you have nothing to say.",
    "An idiot admires complexity, a genius admires simplicity.",
    "The best way to predict the future is to create it.",
    "Privacy matters; privacy is what allows us to determine who we are and who we want to be.",
    "Those that can, do. Those that can\'t, complain.",
    "Creativity can be a social contribution, but only in so so far as society is free to use the results.",
    "To give anything less than your best is to sacrifice the gift.",
    "Fear is an indicator of moving in the right direction.",
    "The Grind is not Glamorous.",
    "Failing to plan is planning to fail.",
    "The Curse of Knowledge: when we are given knowledge, it is impossible to imagine what it's like to LACK that knowledge."
];
let authors = [
    "- Linus Torvalds",
    "- Edward Snowden",
    "- Terry A. Davis",
    "- Peter Drucker",
    "- Edward Snowden",
    "- Linus Torvalds",
    "- Richard Stallman",
    "- Steve Prefontaine",
    "- Grant Cardone",
    "- Casey Neistat",
    "- Alan Lakein",
    "- Chip Heath"
];

function getRandNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let number = getRandNum(quotes.length);

export default function Home() {
    return (
        <div className="App">

          <h1>Welcome to my website! Visit the about page for more information about me.</h1>
          <p>This site is a work in progress, visit again to see it updated!</p>

          <hgroup>
            <h1 id="quote">"{quotes[number]}"</h1>
            <h2 id="author">{authors[number]}</h2>
          </hgroup>

        </div>
    );
}
