(function () {
	'use strict';
	var item, customtabs = {
		movies: [
			{ name: "Series", id: "series", enabled: false, },
			{ name: "Movies", id: "videos", enabled: true, },
			{ name: "Suggestions", id: "suggestions", enabled: true, },
			{ name: "Trailers", id: "trailers", enabled: false, },
			{ name: "Photos", id: "photos", enabled: false, },
			{ name: "Album Artists", id: "albumartists", enabled: false, },
			{ name: "Artists", id: "artists", enabled: false, },
			{ name: "Playlists", id: "playlists", enabled: true, },
			{ name: "Collections", id: "collections", enabled: true, },
			{ name: "Genres", id: "genres", enabled: true, },
			{ name: "Tags", id: "tags", enabled: true, },
			{ name: "Favorites", id: "favorites", enabled: true, },
			{ name: "Folders", id: "folders", enabled: true, },
		],
		tvshows: [
			{ name: "Series", id: "series", enabled: true, },
			{ name: "Suggestions", id: "suggestions", enabled: false, },
			{ name: "Upcoming", id: "upcoming", enabled: false, },
			{ name: "Favorites", id: "favorites", enabled: true, },
			{ name: "Collections", id: "collections", enabled: false, },
			{ name: "Genres", id: "genres", enabled: true, },
			{ name: "Tags", id: "tags", enabled: true, },
			{ name: "Networks", id: "studios", enabled: false, },
			{ name: "Episodes", id: "episodes", enabled: true, },
			{ name: "Folders", id: "folders", enabled: true, },
		],
		homevideos: [
			{ name: "Series", id: "series", enabled: false, },
			{ name: "Videos", id: "videos", enabled: true, },
			{ name: "Suggestions", id: "suggestions", enabled: false, },
			{ name: "Trailers", id: "trailers", enabled: false, },
			{ name: "Photos", id: "photos", enabled: true, },
			{ name: "Album Artists", id: "albumartists", enabled: false, },
			{ name: "Artists", id: "artists", enabled: false, },
			{ name: "Playlists", id: "playlists", enabled: false, },
			{ name: "Collections", id: "collections", enabled: false, },
			{ name: "Genres", id: "genres", enabled: false, },
			{ name: "Tags", id: "tags", enabled: false, },
			{ name: "Favorites", id: "favorites", enabled: false, },
			{ name: "Folders", id: "folders", enabled: true, },
		],
		music: [
			{ name: "Suggestions", id: "suggestions", enabled: false, },
			{ name: "Albums", id: "albums", enabled: true, },
			{ name: "Album Artists", id: "albumartists", enabled: true, },
			{ name: "Artists", id: "artists", enabled: true, },
			{ name: "Composers", id: "composers", enabled: false, },
			{ name: "Playlists", id: "playlists", enabled: true, },
			{ name: "Genres", id: "genres", enabled: false, },
			{ name: "Songs", id: "songs", enabled: true, },
			{ name: "Tags", id: "tags", enabled: false, },
			{ name: "Folders", id: "folders", enabled: true, },
		],
	};
	document.addEventListener("viewbeforeshow", function (e) {
		if (e.detail.path === "/videos" || e.detail.path === "/music" || e.detail.path === "/tv") {
			if (!e.detail.isRestored) {
				const mutation = new MutationObserver(async function () {
					item = e.target.controller?.item
					if (item) {
						mutation.disconnect();
						// !ApiClient.isMinServerVersion("4.8.0.60") && (customtabs.tvshows = customtabs.tvshows.filter(function (tab) { return tab.id !== "tags" }));
						let embytabs = document.querySelectorAll(".headerMiddle .main-tab-button");
						if (item.CollectionType === 'tvshows') {
							if (embytabs.length === 8) {
								customtabs.tvshows = customtabs.tvshows.filter(function (tab) { return tab.id !== "collections" && tab.id !== "tags" })
							} else if (embytabs.length === 9) {
								customtabs.tvshows = customtabs.tvshows.filter(function (tab) { return tab.id !== "tags" })
							}
						}
						let optionstab = customtabs[item.CollectionType];
						if (optionstab) {
							e.target.controller._tabs = optionstab;
							for (let i = 0; i < embytabs.length; i++) {
								if (!optionstab[i].enabled) {
									embytabs[i].classList.add("hide");
								} else if (optionstab[i].name) {
									embytabs[i].textContent = optionstab[i].name;
								}

							}
						};
					}
				});
				mutation.observe(document.body, {
					childList: true,
					characterData: true,
					subtree: true,
				});
			} else {
				item = e.target.controller?.item;
			}
		}
	});
})()