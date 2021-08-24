let script = document.createElement("script")
script.setAttribute("async", "async");
//ant.setAttribute("defer", "defer");
script.setAttribute("data-website-id", "90251831-4846-464e-9e2f-092feb7b37e8" )
script.setAttribute("src", "https://umami-123.herokuapp.com/umami.js")
document.getElementsByTagName("head")[0].appendChild(script)



let script2 = document.createElement("script")
//script2.setAttribute("defer", "defer");
script2.setAttribute("src","https://netlyic.herokuapp.com/ingress/2051d9f1-a81a-45ec-8900-aa19693a93cf/script.js")
document.getElementsByTagName("body")[0].appendChild(script2)

let no_script = document.createElement("no-script")
let image = document.createElement("img")
image.src = "https://netlyic.herokuapp.com/ingress/2051d9f1-a81a-45ec-8900-aa19693a93cf/pixel.gif"
no_script.appendChild(image)
document.getElementsByTagName("body")[0].appendChild(no_script)