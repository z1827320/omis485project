window.onload = function () {
    var classes = $("classes");
    var h2_elements = classes.getElementsByTagName("h2");

    var headingNode;
    for (var i = 0; i < h2_elements.length; i++ ) {
        headingNode = h2_elements[i];

        //attach event handler
        headingNode.onclick = function () {
            var h2 = this; //h2 is current headingNode
            if (h2.hasAtrribute("class")) {
                h2.removeAttribute("class");
            }
            else {
                h2.setAttribute("class", "minus");
            }
            if (h2.nextElementSibling.hasAttribute("class")) {
                h2.nextElementSibling.removeAttribute("class");
            }
            else {
                h2.nextElementSibling.setAttribute("class", "open");
            }
        }
    }
}

var $ = function (id) {
    return document.getElementById(id);
}