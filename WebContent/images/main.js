	var active = null;
	var currentSport = null;
	function toggle(myid) {	 	
		if (active != null) {
		 	if (active != currentSport) {
			 	if (active != myid) {
					document.getElementById("navbar_selector_"+active).className = "navbar_1";
				}
			}
		} 
		if (active != myid) {
		 	if (myid != currentSport) {
			 	if (myid != null) {
					document.getElementById("navbar_selector_"+myid).className = "navbar_2";
				}
				active = myid;
			}
		}
	}
	
	function setCurrentSport(sport) {
		currentSport = sport;
		document.getElementById("navbar_selector_"+sport).className = "navbar_2";
	}
	
	var countDown = null;
	function hideDropDown() {
		document.getElementById('navbar_dropdown').style.display='none';
	}
	function resetCountdown(setNew) {
		if (countDown != null) {
			clearTimeout(countDown);
		}
		if (!setNew) {
			document.getElementById('navbar_dropdown').style.display='block';
			countDown = setTimeout("hideDropDown()",1000);
		}
	}

	currentTab = null;	
	selectedTab = null;
	function tab_over(el) {
		if (currentTab != null) {
		 	if (currentTab.id != selectedTab.id) {
				currentTab.className = "tab";
			}
		}			
		currentTab = el;
		currentTab.className = "tab_over";
	}

	function tab_out(el) {
		if (currentTab != null) {
		 	if (currentTab != selectedTab) {
				currentTab.className = "tab";
			}
		}			
	}
	
	function setFavourite(favId,favType,objId) {
	 	var el = document.getElementById(favId);
	 	el.src = "./gfx/favourite_on.gif";
	 	el.onclick = function() { eval("removeFavourite('"+favType+"','"+objId+"');"); }
	}
	
	var setFavs = new Array;
	setFavs['t'] = new Array;
	setFavs['c'] = new Array;
	function showFavourites() {
		var imgs = document.getElementsByTagName("img");
		var ids = "";
		for (var id in imgs) {
		 	if (imgs[id].id) {
				if (imgs[id].id.substring(0,3) == "fav") {
					imgs[id].style.display = "inline";
					var fav = imgs[id].id;
					var favItems = fav.split("_");
					if (favItems[1] == "team") {
						if (setFavs['t'][favItems[2]] == "1") {
							setFavourite(fav,favItems[1],favItems[2]);
						}
					} else if (favItems[1] == "competition") {
						if (setFavs['c'][favItems[2]] == "1") {
							setFavourite(fav,favItems[1],favItems[2]);
						}
					}
				}
			}
		}
	}