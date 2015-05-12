
$(document).ready(function () {
    

    //Specify Random Moods
    var time_random = Math.floor((Math.random() * 20));
    var mood_random = Math.floor((Math.random() * 10));
    var flow_random = Math.floor((Math.random() * 5));
    var warmth_random = Math.floor((Math.random() * 4));
    
    //Initiate Mood Selectors
    $(".mood-element-line_time").slider({step:5, value:time_random*5});
    $(".mood-element-line_mood").slider({step:10, value:mood_random*10});
    $(".mood-element-line_flow").slider({step:20, value:flow_random*20});
    $(".mood-element-line_warmth").slider({step:25, value:warmth_random*25});
    
    var mTime = $(".mood-element-line_time").slider("value");
    var mMood = $(".mood-element-line_mood").slider("value");
    var mFlow = $(".mood-element-line_flow").slider("value");
    var mWarmth = $(".mood-element-line_warmth").slider("value");
    
    //Sonnglist Json
    var json = [
        {
            "id":"1",
            "name":"Some Girls Are Bigger Than Others",
            "artist":"The Smiths",
            "path":"1.mp3",
            "time":"60",
            "mood":"60",
            "flow":"75",
            "warmth":"75"
        },
        {
            "id":"2",
            "name":"House Of The Rising Sun",
            "artist":"Animals",
            "path":"2.mp3",
            "time":"25",
            "mood":"60",
            "flow":"50",
            "warmth":"50"
        },
        {
            "id":"3",
            "name":"All or Nothing",
            "artist":"Au Revoir Simone",
            "path":"3.mp3",
            "time":"75",
            "mood":"60",
            "flow":"50",
            "warmth":"40"
        },
        {
            "id":"4",
            "name":"Bookends",
            "artist":"Simon & Garfunkel",
            "path":"4.mp3",
            "time":"30",
            "mood":"40",
            "flow":"25",
            "warmth":"25"},
        {
            "id":"5",
            "name":"Billie Jean",
            "artist":"Chris Cornell",
            "path":"5.mp3",
            "time":"80",
            "mood":"40",
            "flow":"35",
            "warmth":"25"
        },
        {
            "id":"6",
            "name":"Symbol Song",
            "artist":"Dredg",
            "path":"6.mp3",
            "time":"80",
            "mood":"40",
            "flow":"50",
            "warmth":"25"
        },
        {
            "id":"7",
            "name":"The Tune",
            "artist":"Wax Tailor",
            "path":"7.mp3",
            "time":"80",
            "mood":"80",
            "flow":"75",
            "warmth":"90"
        },
        {
            "id":"8",
            "name":"She's Got It",
            "artist":"Little Richard",
            "path":"8.mp3",
            "time":"20",
            "mood":"90",
            "flow":"80",
            "warmth":"60"
        },
        {
            "id":"9",
            "name":"Anarchy In The U.K.",
            "artist":"Sex Pistols",
            "path":"9.mp3",
            "time":"40",
            "mood":"80",
            "flow":"75",
            "warmth":"50"
        },
        {
            "id":"10",
            "name":"Lovefool",
            "artist":"The Cardigans",
            "path":"10.mp3",
            "time":"65",
            "mood":"60",
            "flow":"50",
            "warmth":"40"
        },
        {
            "id":"11",
            "name":"Woman Like A Man",
            "artist":"Damien Rice",
            "path":"11.mp3",
            "time":"75",
            "mood":"50",
            "flow":"65",
            "warmth":"40"
        },
        {
            "id":"12",
            "name":"Like A Stone",
            "artist":"Audioslave",
            "path":"12.mp3",
            "time":"70",
            "mood":"50",
            "flow":"60",
            "warmth":"60"
        },
        {
            "id":"13",
            "name":"Stellar",
            "artist":"Incubus",
            "path":"13.mp3",
            "time":"80",
            "mood":"80",
            "flow":"75",
            "warmth":"75"
        },
        {
            "id":"14",
            "name":"Nico",
            "artist":"Acoustic Ladyland",
            "path":"14.mp3",
            "time":"80",
            "mood":"75",
            "flow":"60",
            "warmth":"65"},
        {
            "id":"15",
            "name":"One",
            "artist":"Apocalyptica",
            "path":"15.mp3",
            "time":"70",
            "mood":"60",
            "flow":"60",
            "warmth":"40"
        },
        {
            "id":"16",
            "name":"Wicked Game",
            "artist":"Chris Isaak",
            "path":"16.mp3",
            "time":"40",
            "mood":"35",
            "flow":"20",
            "warmth":"40"
        },
        {
            "id":"17",
            "name":"No Good With Faces",
            "artist":"Jack Johnson",
            "path":"17.mp3",
            "time":"75",
            "mood":"90",
            "flow":"60",
            "warmth":"80"
        },
        {
            "id":"18",
            "name":"Speak",
            "artist":"Godsmack",
            "path":"18.mp3",
            "time":"70",
            "mood":"60",
            "flow":"70",
            "warmth":"70"
        },
        {
            "id":"19",
            "name":"No Ceiling",
            "artist":"Eddie Vedder",
            "path":"19.mp3",
            "time":"75",
            "mood":"25",
            "flow":"30",
            "warmth":"40"
        },
        {
            "id":"20",
            "name":"One More Time",
            "artist":"Daft Punk",
            "path":"20.mp3",
            "time":"70",
            "mood":"80",
            "flow":"65",
            "warmth":"70"
        },
        {
            "id":"21",
            "name":"Elephant Gun",
            "artist":"Beirut",
            "path":"21.mp3",
            "time":"80",
            "mood":"70",
            "flow":"60",
            "warmth":"45"
        },
        {
            "id":"22",
            "name":"Resistance",
            "artist":"Muse",
            "path":"22.mp3",
            "time":"80",
            "mood":"60",
            "flow":"80",
            "warmth":"60"
        },
        {
            "id":"23",
            "name":"Misread",
            "artist":"Kings Of Convenience",
            "path":"23.mp3",
            "time":"80",
            "mood":"50",
            "flow":"80",
            "warmth":"50"
        },
        {
            "id":"24",
            "name":"Free Bird",
            "artist":"Lynyrd Skynyrd",
            "path":"24.mp3",
            "time":"45",
            "mood":"80",
            "flow":"50",
            "warmth":"60"},
        {
            "id":"25",
            "name":"Oh Yeah",
            "artist":"Chickenfoot",
            "path":"25.mp3",
            "time":"80",
            "mood":"90",
            "flow":"80",
            "warmth":"75"
        },
        {
            "id":"26",
            "name":"Would",
            "artist":"Alice in Chains",
            "path":"26.mp3",
            "time":"65",
            "mood":"40",
            "flow":"60",
            "warmth":"60"
        },
        {
            "id":"27",
            "name":"Flying",
            "artist":"Anathema",
            "path":"27.mp3",
            "time":"75",
            "mood":"15",
            "flow":"20",
            "warmth":"20"
        },
        {
            "id":"28",
            "name":"Wasted Generation",
            "artist":"Steel Dragon",
            "path":"28.mp3",
            "time":"60",
            "mood":"90",
            "flow":"90",
            "warmth":"50"
        },
        {
            "id":"29",
            "name":"Yosma",
            "artist":"Kurban",
            "path":"29.mp3",
            "time":"70",
            "mood":"90",
            "flow":"80",
            "warmth":"75"
        },
        {
            "id":"30",
            "name":"White Rabbit",
            "artist":"Jefferson Airplane",
            "path":"30.mp3",
            "time":"50",
            "mood":"60",
            "flow":"30",
            "warmth":"35"
        }
    ];
    
    //Print Songlist
    var printSonglist = function(sTime,sMood,sFlow,sWarmth){
        var songlist = "";
        $.each(json, function(idx, obj) {
            if(obj.time < sTime+40 && obj.time > sTime-40 &&
                obj.mood < sMood+40 && obj.mood > sMood-40 &&
                obj.flow < sFlow+40 && obj.flow > sFlow-40 &&
                obj.warmth < sWarmth+40 && obj.warmth > sWarmth-40){
                
                songlist += "<li><a href='javascript:void(0);' class='playlist-element' rel='"+
                    obj.path+
                    "'>"+
                    obj.name+
                    " - "+
                    obj.artist+
                    "</a></li>";
            }
        });
        $("#jukebox").html(songlist);
    }
    
    printSonglist(mTime,mMood,mFlow,mWarmth);
});

//Initiate Player
$(document).on('click', '.playlist-element', function(){ 
    
    var songPath = "songs/" + $(this).attr('rel');
    var songName = $(this).html();
    
    $("#mmp_player").jPlayer( "destroy" );
    
    $("#mmp_player").jPlayer({
		ready: function (event) {
			$(this).jPlayer("setMedia", {
				title: songName,
				mp3: songPath
			}).jPlayer("play");
		},
		swfPath: "js/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true,
		remainingDuration: true,
		toggleDuration: true
	});
    
}); 

$(document).on('click', '.mood-select', function (e) {
    console.log('this is the click');
    e.preventDefault();
});