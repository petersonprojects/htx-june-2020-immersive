

function createAnchor(url, text, style) {

    var anchor = document.createElement('a');
    anchor.setAttribute('class', style);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor;
}

function createRowCol(colorBG, colSize, content)
{
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    var bg = 'background-color: ' + colorBG;
    row.setAttribute('style', bg);
    row.innerHTML="<div class=\"col-"+colSize +"\">"+content +"</div>";
    return row;
}

function buildNavBar(navBGColor, anchorList) {

    // navbar  (attached to main container)

    var nav = document.createElement('nav');
    var bg = 'background-color: ' + navBGColor;

    nav.setAttribute('class', 'navbar navbar-expand navbar-dark p-4');
    nav.setAttribute('style', bg)

    // inner nav div 

    var navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'nav navbar-nav h3');

    for (var index = 0; index < anchorList.length; index++) {
        navDiv.appendChild(anchorList[index]);
    }

    nav.append(navDiv);

    return nav;
}



