var Jimp = require('jimp');
var fs = require('fs');

characters = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\\|()1{}[]?-_+~<>i!lI;:,"^`\'.'.split('')

console.log(characters)
console.log(characters.length)


new Jimp(200, 200,'#FFFFFF', (err, image) => {
  	
  	Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
  		console.log('writing')
  		for(let x=0; x<5; x+=15)
  			image.print(font, 0 + x, 10, 'Hello world! 123');

  		image.write('textimg.PNG')
	});
	  	
});

// Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {

// 		console.log('writing')

// 	  	new Jimp(height, width,'#FFFFFF', (err, image) => {

// 	  		let charCount = 0
// 	  		for(let x=0; x<height; x+=1){
// 	  			for(let y=0; y<width; y+=1){

// 	  				image.print(font, 10, 10, imgChar[charCount]);
// 	  				charCount += 1
	  				
// 	  			}
// 	  		}
// 	  		image.write('textimg.PNG')		

// 		});
// 		console.log('done writing')

// 	});