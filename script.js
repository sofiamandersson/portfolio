		function lightBox (){
				
				this.render = function(di){
					var winW = window.innerWidth;
					var winH = window.innerHeight;
					var dioverlay = document.getElementById ('dioverlay');
					var dibox = document.getElementById('dibox');
					dioverlay.style.display = "block";
					dioverlay.style.height = winH+"px";
					dibox.style.left = (winW/2) - (750 * 0.5)+"px";
					dibox.style.top = "70px";
					dibox.style.display = "block";
					document.getElementById('diboxbody').innerHTML = di;
					document.getElementById('diboxfoot').innerHTML = '<button onclick="Alert.ok();">Let\'s see more!</button>';
				}
				
				this.ok = function (){
					document.getElementById('dibox').style.display = "none";
					document.getElementById('dioverlay').style.display = "none";
				}
				
			}
			
			var Alert = new lightBox();
			
			function openLightBox (project){
				Alert.render(document.getElementById(project).innerHTML);
			};


function hoverSpotify (){
    document.getElementById('link').style.background = "#2FD565";
};

function outSpotify (){
    document.getElementById('link').style.background = "#fff";
};

function hoverInstagram (){
    document.getElementById('link').style.background = "#CEC3AF";
};

function outInstagram(){
    document.getElementById('link').style.background = "#fff";
};

function hoverGithub (){
    document.getElementById('link').style.background = "#632E7D";
};

function outGithub(){
    document.getElementById('link').style.background = "#fff";
};

function hoverLinkedin (){
    document.getElementById('link').style.background = "#0077B5";
};

function outLinkedin (){
    document.getElementById('link').style.background = "#fff";
};

function hoverMail (){
    document.getElementById('link').style.background = "grey";
};

function outMail (){
    document.getElementById('link').style.background = "#fff";
};
			
				
			