window.SexBot = (function() {
	var sentenceStarters = [
				"I'm really happy",
				"I'm so pumped about the fact",
				"It strikes me as quite cool",
				"Wow! Awesome",
				"It's pretty radical"];
	var sentenceStarterIndex = 0;
	function SexBot() {
	}
	var getSentenceEnder = function(userResponse) {
		var sentenceEnder = userResponse.replace(/[^A-Za-z0-9 ]/g, '').toLowerCase();
		sentenceEnder = " "+sentenceEnder+" ";
		sentenceEnder = sentenceEnder.replace(" wanna ", " want to ");
		sentenceEnder = sentenceEnder.replace(" i want to ", " ");
		sentenceEnder = sentenceEnder.replace(/ you | your | me | my /gi, function(matched) {
			var map = {
				' you ':' me ',
			      	' your ':' my ',
			      	' me ':' you ',
			      	' my ':' your '
			};
			return map[matched];
		});
		sentenceEnder = sentenceEnder.trim().toUpperCase();
		return sentenceEnder;
	}
	SexBot.prototype.getMessage = function(userResponse) {
		if (!!userResponse) {
			var sentenceStarter = sentenceStarters[sentenceStarterIndex % sentenceStarters.length];
			sentenceStarterIndex += 1;
			var sentenceEnder = getSentenceEnder(userResponse);
			return sentenceStarter + " that you want to "+sentenceEnder+". <br> Anything else you want to do?";
		} else {
			return "Hi, I'm SexBot. My creators have used cutting edge machine learning techniques to make me the smuttiest chatbot this side of silicon valley. I don't hold on to any of our chats, so feel free to go as crazy as you want. Only one rule: dont fall in love ;).<br><br> So, <span class='bold'>what do you want to do?</span>"		}
	}
	return SexBot;
})();
