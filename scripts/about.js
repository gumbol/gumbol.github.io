


let about = document.getElementsByClassName("author-info");


about[0].children[1].innerHTML = 
'Hi my name is <a href="../about.html"> Tarik</a>, I\'m a technology '
+ 'hobbiest since <b>2001</b> and an occasional writer. This is my spot ' +
 'on the web for my projects, tutorials, and things i learned over the years.';



//if(about[0].children[i] == "a")
//about[0].children[i].innerHTML= "";
/*about[0].children[2].innerHTML= ' <a class="coffee-btn"' +
'href="https://ko-fi.com/tyah2" target="_blank"' + 
'rel="noreferrer">Buy me a coffee </a>'*/


//@analytic code test section
//====@@Umami analytics
let umami_script = document.createElement("script");
umami_script.async = "async";
umami_script.defer = "defer";
umami_script.setAttribute("data-website-id", "90251831-4846-464e-9e2f-092feb7b37e8");
umami_script.src = "localhost:3000/umami.js"
document.getElementsByTagName("head")[0].appendChild(umami_script)

//====@Shynet analytics
let shynet_script = document.createElement("script")
//shynet.defer = "defer";
shynet_script.src = "localhost:/script.js";
document.getElementsByTagName("body")[0].appendChild(shynet_script);

let shynet_noscript = document.createElement("no-script")
let image = document.createElement("img")
image.src = "localhost:/pixel.gif";
shynet_noscript.appendChild(image)
document.getElementsByTagName("body")[0].appendChild(shynet_noscript)


//@END TEST SECTION


/*

//==== Umami analytics
let umami_script = document.createElement("script");
umami_script.async = "async";
umami_script.defer = "defer";
umami_script.setAttribute("data-website-id", "90251831-4846-464e-9e2f-092feb7b37e8");
umami_script.src = "https://umami-123.herokuapp.com/umami.js"
document.getElementsByTagName("head")[0].appendChild(umami_script)

//END

//==== Shynet analytics
let shynet_script = document.createElement("script")
//shynet.defer = "defer";
shynet_script.src = "https://netlyic.herokuapp.com/ingress/2051d9f1-a81a-45ec-8900-aa19693a93cf/script.js";
document.getElementsByTagName("body")[0].appendChild(shynet_script);

let shynet_noscript = document.createElement("no-script")
let image = document.createElement("img")
image.src = "https://netlyic.herokuapp.com/ingress/2051d9f1-a81a-45ec-8900-aa19693a93cf/pixel.gif";
shynet_noscript.appendChild(image)
document.getElementsByTagName("body")[0].appendChild(shynet_noscript)*/