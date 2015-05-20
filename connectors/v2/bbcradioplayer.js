'use strict';

/* global Connector */
var nowPlayingSelector = '#now-playing .playlister';

Connector.playerSelector = '.programme-details-wrapper';

Connector.artistSelector = nowPlayingSelector+' .track .artist';

Connector.trackSelector = nowPlayingSelector+' .track .title';

Connector.getUniqueID = function() {
	return $(".context-panel-body #data-uid").text();
};

// Data provided seems to round up to next minute
Connector.getDuration = function () {
	return $("#data-end").text() - $("#data-start").text();
};

// In preparation for merge of PR#607 (https://github.com/david-sabata/web-scrobbler/pull/607)
Connector.getTrackArt = function() {
	return $('.radioplayer .playlister.playlister-expanded > img').attr('src');
};
