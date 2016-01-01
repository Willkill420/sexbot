function main() {
	var s = new SexBot();
	var history = document.getElementById('history');
	var input = document.getElementById('input');
	var submit = document.getElementById('submit');

	history.innerHTML = history.innerHTML + "<span class='sexbot'><span class='name'>"+"SexBot: </span>"+s.getMessage()+"</span><br><br>";

	submit.onclick = function() {
		var message = input.value;
		input.value = "";
		history.innerHTML = history.innerHTML + "<span class='name'>"+"User: </span>"+message+"<br><br>";
		submit.setAttribute("disabled","disabled");
		setTimeout(function() {
			history.innerHTML = history.innerHTML + "<span class='sexbot'><span class='name'>"+"SexBot: </span>"+s.getMessage(message)+"</span><br><br>";
			submit.removeAttribute("disabled");
		}, 1000)
	}
}





main();
