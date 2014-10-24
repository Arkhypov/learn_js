/**
 * Created with JetBrains WebStorm.
 * User: R_O_Y
 * Date: 06.03.14
 * Time: 23:22
 * To change this template use File | Settings | File Templates.
 */

  function handler (){
    alert('You click on link!')
}

//window.onload = initLinks;


window.onload =addLink();


    function addLink(){
    document.getElementById('add').onclick = add;
    document.getElementById('delete').onclick = deleteNode;
}


//adding links

function addNode(beforeIndex){
        beforeIndex = typeof beforeIndex == 'undefined' ? false: beforeIndex;
        var url = document.getElementById('newUrl').value;
        var link = document.createElement('a');
        var br = document.createElement('br');
        var href = document.createAttribute('href');
        var text = document.createTextNode(url);

        var container=document.getElementById('links');
        var existLinks = container.getElementsByTagName('a');

    href.nodeValue = url;

    link.appendChild(text);
    link.setAttributeNode(href);
    document.getElementById('links').appendChild(link);
    document.getElementById('links').appendChild(br);

    return true;
}

function deleteNode(){
     var container = document.getElementById('links');
     var existLinks = container.getElementsByTagName('a');

    if (existLinks.length <= 0){
        alert('there are no more links there!');
        return false;
    }

    var linkToRemove = existLinks.item(5);
    container.removeChild(linkToRemove);
    return true;
}

function add (){
    if (document.getElementById('links').getElementsByTagName('a'.length == 0)){
        addNode();
        return true;
    }
    var beforeIndex = parseInt(promt('after what link input newLink?'),10);
    beforeIndex ? addNode(beforeIndex) : addNode();
    return true;
}

function dell (){
   var dellIndex = parseInt(promt('what link delete?'),10);
    dellIndex ? deleteNode(dellIndex) : deleteNode();
    return true;
}

//function initLinks
/*
function initLinks() {
    var links = document.getElementsByTagName('a');
    for (var i=0; i< links.length; i++){
        if (links.item(i).href.toLowerCase().indexOf('http://' + document.domain) !=0)
        links.item(i).onclick = linkClick;
    }
}

function linkClick(){

    if (confirm('Are you sure leave this page?'))
        return false;


    return true;
}
*/

