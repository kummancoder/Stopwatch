var h1 = document.querySelector('h1');
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');

var int;
start.addEventListener('click', function()
{
    var cnt = 0;
    clearInterval(int);
    int = setInterval(function()
    {
        h1.textContent = cnt++;
    },1000)
})
stop.addEventListener('click', function()
{
    clearInterval(int);
})