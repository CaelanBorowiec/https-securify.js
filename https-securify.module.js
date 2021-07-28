const securify = function(elems) {
  console.log(elems)

  for (var i = 0; i < elems.length; i++) {
    let elem = elems[i];
    switch (elem.nodeName) {
      case 'A':
      case 'LINK':
        let href = elem.href;
        if (href.split(':')[0] == "http")
          elem.href = href.replace("http", "https");
        break;
      case 'IMG':
      case 'SCRIPT':
        // TODO: find a way to handle $(document).ready scripts failing
        if (!elem.attributes.hasOwnProperty('src'))
          break;
        let src = elem.attributes.src.value;
        if (src.split(':')[0] == "http")
          elem.attributes.src.value = src.replace("http", "https");
        break;
      default:
        console.log(elem)
    }

  }

}
if (window.location.protocol == "https:") {
  securify(document.getElementsByTagName('link'));
  securify(document.getElementsByTagName('script'));
  securify(document.getElementsByTagName('img'));
  securify(document.getElementsByTagName('a'));
}
