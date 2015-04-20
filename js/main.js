$(document).ready(function () {
    
    //Specify Random Moods
    var time_random = Math.floor((Math.random() * 20));
    var mood_random = Math.floor((Math.random() * 10));
    var flow_random = Math.floor((Math.random() * 5));
    var warmth_random = Math.floor((Math.random() * 4));
    
    //Initiate Mood Selectors
    $( ".mood-element-line_time" ).slider({step:5, value:time_random*5});
    $( ".mood-element-line_mood" ).slider({step:10, value:mood_random*10});
    $( ".mood-element-line_flow" ).slider({step:20, value:flow_random*20});
    $( ".mood-element-line_warmth" ).slider({step:25, value:warmth_random*25});
    
    //Initiate Jukebox Player
    $("#mmp_player").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "http://jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
			});
		},
		swfPath: "js/jplayer",
		supplied: "m4a, oga",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});
    
});