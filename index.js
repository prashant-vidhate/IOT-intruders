var Gpio = require('onoff').Gpio,
pir = new Gpio(17, 'in', 'both');

var player = require('play-sound')(opts = {})

console.log("Running pir sensor");
pir.watch(function(err, value) {
	if (err) exit();
	if(value==1){
		player.play('./alert.mp3', function(err){
		  if (err) throw err
		})
		console.log('Intruder detected');
	}
});
  
