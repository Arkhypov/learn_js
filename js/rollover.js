/**
 * Created with JetBrains WebStorm.
 * User: R_O_Y
 * Date: 07.03.14
 * Time: 10:29
 * To change this template use File | Settings | File Templates.
 */
 window.onload = rollover;

function rollover(){
    var img = document.getElementById('roll');
    img.onmouseover = function() {this.src = './img/wave.png'};
    img.onmousedown = function() {this.src = './img/straight.png'};
    img.onmouseout = function() {this.src = './img/compressed.png'};
    img.onmouseup = function() {this.src = './img/wave.png'};
}