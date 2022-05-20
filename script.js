"use strict";

// selecting DOM element
const btnEl = document.querySelector("button");
const adviceNoEl = document.querySelector("span");
const adviceParaEl = document.querySelector(".advice-paragraph");

// ASYNC function to get quote from API

const getQuote = async function () {
  const resAdvice = await fetch("https://api.adviceslip.com/advice");
  const newAdvice = await resAdvice.json();

  adviceNoEl.textContent = newAdvice.slip.id;
  adviceParaEl.textContent = newAdvice.slip.advice;
};

// calling first time implicitely so that html element wont remain empty
getQuote();

// EVENT-LISTENER ON BUTTON

btnEl.addEventListener("click", getQuote);
