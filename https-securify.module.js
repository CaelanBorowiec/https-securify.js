const securify = function(elems) {
  for (var i = 0; i < elems.length; i++) {
    let elem = elems[i];
    switch (elem.nodeName) {
      case 'LINK':
        let href = elem.href;
        if (href.split(':')[0] == "http")
          elem.href = href.replace("http", "https");
        break;
      default:
        console.log(elem)
    }
  }
}
if (window.location.protocol == "https:") {
  securify(document.getElementsByTagName('link'));
}
