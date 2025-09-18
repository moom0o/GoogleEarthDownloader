//Link collector :) - Save links that can be used to download images to text file.
const config = require('./config.json')
const fs = require("fs");
let quality = config["quality"] // Set your quality, higher number will mean images are more zoomed in, thus using much more space. Math problem for amount of images is (2^quality)(2^quality)=number of 256x256 images
// For example, using quality 3, you will have 64 256x256 pixel images total. (2^3)*(2^3)=64


let i
let apiInt = 0
console.log(`Starting link generation... Selected Quality: ${quality} - ${getMax(quality)*getMax(quality)} total images to be downloaded`)
let links = ""
for (i = 1; i <= getMax(quality); i++) {
    let ii = 1
    for (ii = 1; ii <= getMax(quality); ii++) {
        links = links + `https://khms${apiInt}.google.com/kh/v=1001?x=${i}&y=${ii}&z=${quality}` + '\n'
        // MUCH SLOWER Use only if ram is an issue
        // fs.appendFileSync("links.txt", `https://khms${apiInt}.google.com/kh/v=1001?x=${i}&y=${ii}&z=${quality}` + '\n');
        apiInt++;
        if(apiInt > 3){
            apiInt = 0
        }
    }
}
fs.writeFileSync("links.txt", links)


function getMax(quality) {
    return Math.pow(2, quality);
}