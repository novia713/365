chrome.contextMenus.create({
    "title": "Buscar '%s' en Google Maps",
    "contexts": ["selection"],
    "onclick" : function(info){
      //console.log(info.selectionText);
      var searchstring = info.selectionText;
      chrome.tabs.create({url: "http://maps.google.com/maps?q=" + searchstring})
    }
});
