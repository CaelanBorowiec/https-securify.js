const config = { childList: true, subtree: true };

const securify = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      let elem = mutation.addedNodes[i];

      switch (elem.nodeName) {
        case 'A':
        case 'LINK':
          let href = elem.href;
          if (href.split(':')[0] == "http")
            elem.href = href.replace("http", "https");
          break;
        case 'IMG':
        case 'SCRIPT':
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
  const observer = new MutationObserver(securify);
  observer.observe(document, config);
}
