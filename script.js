
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

function myFunction (){
    document.getElementById('lov').style.backgroundImage = "url('images/facebook-(kopia).png')";
};

function myFunction2 (){
    document.getElementById('lov').style.backgroundImage = "none";
};
			
				
			