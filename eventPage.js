chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) 
{
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
				
	chrome.windows.create({url: request.list});
	
    sendResponse({farewell: "goodbye"});
});