$(document).ready(function () {

    $('div[class="overlay overlay-bg"] li a').each(function()
    {
        var  result=$(this).text();
        $('div[class="form-select"] select ').wrapInner("<option>+result+</option>")
    });
});