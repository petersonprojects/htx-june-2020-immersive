


function createAnchor(url, text, style) {
    var anchor = document.createElement('a');
    anchor.setAttribute('class', style);
    anchor.setAttribute('href', href);
    anchor.textContent = text;

    return anchor;
}

function buildNavBar(navBGColor, anchorList) {
    // navbar  (attached to main container)

    var nav = document.createElement('nav');

    var navStyle = 'background-color: ' + navBGColor;

    nav.setAttribute('class', 'navbar navbar-expand navbar-dark p-4');
    nav.setAttribute('style', navStyle)

    // inner nav div 

    var navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'nav navbar-nav h3');

    for (var i = 0; i < anchorList.length; i++) {

        

        navDiv.appendChild(anchorList[i]);
    }

    nav.appendChild(navDiv);


}

