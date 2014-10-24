/**
 * Created with JetBrains WebStorm.
 * User: R_O_Y
 * Date: 04.03.14
 * Time: 18:10
 * To change this template use File | Settings | File Templates.
 */

//clock

/*
window.onload = function() {
    initTime();
    initDate();
};
*/

function initDate() {
    var now = new Date();
    var month = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    var dateString = (now.getDate() > 9 ? now.getDate() : '0' + now.getDate()) +
                        '.' +
                          month[now.getMonth()] +
                        '.' +
                        now.getFullYear();
    document.getElementById('Date').innerHTML = '<h1>' + dateString + '</h1>';
}

function initTime() {
    var now = new Date();
    var timeString = (now.getHours() > 9 ? now.getHours() : '0' + now.getHours()) +
                         ':' +
                     (now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes())+
                         ':' +
                     (now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds());

    document.getElementById('Time').innerHTML = '<h1>' + timeString + '</h1>';
    setTimeout(initTime,1000);
  }




