let helloWorldPopup;
WA.onInit().then(() => {
    console.log('Current player name: ', WA.player.name);
	WA.chat.sendChatMessage('Herzlich willkommen! ', 'Admin');
	
	
	
	// Open the popup when we enter a given zone
	helloWorldPopup = WA.room.onEnterLayer("eingang").subscribe(() => {
		WA.controls.disablePlayerControls();
		WA.ui.openPopup("popupStart", 'Die roten Flächen sind Meeting Flächen!', [{
			label: "schliessen",
			className: "primary",
			callback: (popup) => {
				WA.controls.restorePlayerControls();
				// Close the popup when the "Close" button is pressed.
				popup.close();
			}
		}]);
	});

	// Close the popup when we leave the zone.
	WA.room.onLeaveLayer("eingang").subscribe(() => {
		helloWorldPopup.close();
	});
});