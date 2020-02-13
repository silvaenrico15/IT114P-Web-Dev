var slider_content = document.getElementById('box');

var image = ['CAS','CCIS','CMET','ETYCB','MITL'];
var i = image.length;

function nextImage()
{
    if (i<image.length)
    {
        i = i + 1;
    }
    else
    {
        i = 1;
    }
    slider_content.innerHTML = "<img src=/images/"+image[i-1]+".png>";

}

function prevImage()
{
    if (i<image.length + 1 && i > 1)
    {
        i = i - 1;
    }
    else
    {
        i = image.length;
    }
    slider_content.innerHTML = "<img src=/images/"+image[i-1]+".png>";
}

//setInterval(nextImage, 1000);
