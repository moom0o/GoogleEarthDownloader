//Link collector :) - Save links that can be used to download images to text file.
const config = require('./config.json')
let quality = config["quality"] // Set your quality, higher number will mean images are more zoomed in, thus using much more space. Math problem for amount of images is (quality^2)(quality^2)=number of 256x256 images
// For example, using quality 3, you will have 81 256x256 pixel images total. (3^2)*(3^2)=81


let i = 1
for (i = 1; i <= getMax(quality); i++) {
    let ii = 1
    for (ii = 1; ii <= getMax(quality); ii++) {
        const fs = require('fs')
        fs.appendFileSync("links.txt", `https://khms1.google.com/kh/v=923?x=${i}&y=${ii}&z=${quality}` + '\n');
        //console.log(`https://khms1.google.com/kh/{v=923?x=${i}&y=${ii}&z=${quality}}`)
    }
}

function getMax(quality) {
    return Math.pow(quality, 2);
}