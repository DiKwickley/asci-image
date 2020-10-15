console.log("Starting image.js")

var Jimp = require('jimp');
var fs = require('fs');


characters = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\\|()1{}[]?-_+~<>i!lI;:,"^`\'.'.split('')

let imgChar = ''
let height
let width

Jimp.read('img4.JPG')
	.then(image => {

	 image.resize(Jimp.AUTO, 1500)
	 height = image.bitmap.height
   	 width = image.bitmap.width
   	 let pixel = 5
   	image.greyscale()
	image.pixelate(pixel, 0, 0, width, height );

	// image.color([{apply:'darken', params: [20]}])
	image.write('test.JPG')

	fileName = 'test.html'

	var style = `
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<div id="text-img" style="text-align: center; line-height: .8; font-family: monospace;">`

	fs.writeFileSync(fileName, style);
	let drawChar = ''
	let maxX, maxY;
	if(height > width){
		maxX = height
		maxY = width
	} else {
		maxX = width
		maxY = height
	}
	for(let x=0; x<height; x+=pixel){

		for(let y=0; y<width; y+=pixel){
			let rgb = Jimp.intToRGBA(image.getPixelColor(y, x))
			let value = 0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b//
			// console.log('value: ', value)
			// console.log(parseInt(value*69/255))
			drawChar += characters[parseInt(value*69/255)].replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
						   return '&#'+i.charCodeAt(0)+';';
						});
			
		}
		drawChar += '<br />'
		console.log(`${x*100/maxX}%`)
		// process.stdout.write(`${x*100/maxX}%`)

	}
	drawChar += '</div>'
	fs.appendFile(fileName, ` ${drawChar} `, (err) => {
				if(err)
					console.log(err)
					console.log('done')
	});
	console.log('done')
	

	return image.write('test.jpg')

	

	

  })
  .catch(err => {
    console.error(err);
  });




