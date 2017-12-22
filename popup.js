
var input = document.querySelector("input");

input.addEventListener('input', function(){
	var thresh = this.value;
	console.log(thresh);
	
	chrome.storage.sync.set({'thresh': thresh}, function() {
      console.log('Settings saved');
    });
});