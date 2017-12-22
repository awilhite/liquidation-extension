console.log(document.querySelectorAll("table"));

var tables = document.querySelectorAll("table");

const UPC_STRING = "UPC";
const RETAIL_STRING = "Retail Price";
const TOTAL_STRING = "Total Retail Price";

var retail_index, upc_index, total_index;

var thresh;

chrome.storage.sync.get(['thresh'], function(items) {
      thresh = items.thresh || 80;
	  console.log(thresh);
	  parseTable();
});

function parseTable()
{
	if (tables.length > 1)
	{
		var list = [];
		var trs = tables[1].querySelectorAll("tr");
		
		var tds = trs[0].querySelectorAll("td");
		
		tds.forEach(function(td)
		{
			if (td.includes(RETAIL_STRING))
			{
				
			}
		});
		
		trs.forEach(function(tr) {
			var tds = tr.querySelectorAll("td");
			var description = tds[0].innerText;
			var retail = tds[RETAIL_INDEX].innerText.replace('$', '');
			
			console.log(description, ": ", tds[UPC_INDEX].innerText);
			
			console.log(parseInt(retail));
			
			if (parseInt(retail) > thresh)
			{
				console.log("pushed");
				var url = "http://www.amazon.com/s?url=search-alias%3Daps&field-keywords="+description;
				list.push(url);
			}
		});
		
		chrome.runtime.sendMessage({list: list}, function(response) {
		  console.log(response);
		});
	}
}