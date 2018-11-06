
const quotes = [ "Together we can change the world, just one random act of kindness at a time. Ron Hall", "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you. Princess Diana",
"You cannot shake hands with a clenched fist. Indira Gandhi",
"Learning never exhausts the mind. Leonardo da Vinci",
 "All that we see or seem is but a dream within a dream. Poe"
];

function random (){
	return quotes[Math.floor(Math.random() * quotes.length)];
}

const randomQuotes = random;

module.exports = {randomQuotes,
};
