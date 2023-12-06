const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const qoutes = [
    "'Trust only movement. Life happens at the level of events, not of words. Trust movement.' - Alfred Adler",
    "'I am not afraid of storms, for I am learning how to sail my ship.' - Louisa May Alcott",
    "'It’s no use going back to yesterday, because I was a different person then.' - Lewis Carroll",
    "'It does not matter how slowly you go as long as you do not stop.' - Confucius",
    "'I have not failed. I've just found 10,000 ways that won't work.' - Thomas A. Edison",
    "'Always do what you are afraid to do.' - Ralph Waldo Emerson",
    "'One ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.' - Johann Wolfgang von Goethe",
    "'The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.' - John Milton",
    "'If we wait for the moment when everything, absolutely everything is ready, we shall never begin.' - Ivan Turgenev",
    "'If you tell the truth, you don't have to remember anything.' - Mark Twain",
    "'Be yourself; everyone else is already taken.' - Oscar Wilde"
]

button.addEventListener("click", function() {
    let randomQuote = qoutes[Math.floor(Math.random() * qoutes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})