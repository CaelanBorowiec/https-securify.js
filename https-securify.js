const securify = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    // For each element added to the DOM:
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      let elem = mutation.addedNodes[i];
      // Check to see what it is, and modify appropriately
      switch (elem.nodeName) {
        case 'A':
        case 'LINK':
          // A and LINK tags both use the href property, so they can be handled the same
          let href = elem.href;
          if (href.split(':')[0] == "http")
            elem.href = href.replace("http", "https");
          break;
        case 'IMG':
        case 'SCRIPT':
          // Likewise IMG and SCRIPT tags both use the SRC prop
          if (!elem.attributes.hasOwnProperty('src'))
            break;
          let src = elem.attributes.src.value;
          if (src.split(':')[0] == "http")
            elem.src = src.replace("http", "https");
          break;
      }
    }
  }
};

if (window.location.protocol == "https:") {
  // If we're running on a https page, create a MutationObserver and pass any DOM changes to the document to securify()
  new MutationObserver(securify).observe(document, { childList: true, subtree: true });
}
