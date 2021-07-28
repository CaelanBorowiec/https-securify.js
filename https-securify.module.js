const securify = function(elems) {
  console.log(elems)

  for (var i = 0; i < elems.length; i++) {
    let elem = elems[i];
    switch (elem.nodeName) {
      case 'LINK':
        let href = elem.href;
        if (href.split(':')[0] == "http")
          elem.href = href.replace("http", "https");
        break;
      case 'SCRIPT':
        console.log(elem)
        if (!elem.attributes.hasOwnProperty('src'))
          break;
        let src = elem.attributes.src.value;
        if (src.split(':')[0] == "http")
          console.log(src)
        break;
      default:
        console.log(elem)
    }

  }

}
if (window.location.protocol == "https:") {
  // securify(document.getElementsByTagName('link'));
  securify(document.getElementsByTagName('script'));
}
