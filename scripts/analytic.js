let ant = document.createElement("script")
ant.setAttribute("async", "async");
//ant.setAttribute("defer", "defer");
ant.setAttribute("data-website-id", "90251831-4846-464e-9e2f-092feb7b37e8" )
ant.setAttribute("src", "https://umami-123.herokuapp.com/umami.js")
document.getElementsByTagName("head")[0].appendChild(ant)



let ant2 = document.createElement("script")
//ant2.setAttribute("defer", "defer");
ant2.setAttribute("src","https://netlyic.herokuapp.com/ingress/2051d9f1-a81a-45ec-8900-aa19693a93cf/script.js")
document.getElementsByTagName("body")[0].appendChild(ant2)

let ant2_noscript = document.createElement("no-script")
let image = document.createElement("img")
image.src = "https://netlyic.herokuapp.com/ingress/2051d9f1-a81a-45ec-8900-aa19693a93cf/pixel.gif"
ant2_noscript.appendChild(image)
document.getElementsByTagName("body")[0].appendChild(ant2_noscript)