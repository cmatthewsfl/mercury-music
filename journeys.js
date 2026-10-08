// Journey definitions are separate from YouTube playlists. A journey may be empty until real music is selected.
window.MERCURY_JOURNEYS = [
 {id:"days-passage",kind:"day",title:"The Day's Passage",stages:["ignition","morning","midday","second-wind","homeward","after-hours"],playlistIds:[],status:"building"},
 {id:"change-state",kind:"transition",title:"Change My State",stages:["starting-state","bridge","destination"],playlistIds:[],status:"building"},
 {id:"undefined",kind:"discovery",title:"The Undefined",stages:[],playlistIds:[],status:"open"}
];
// Add a new journey without altering existing ones. Keep observation separate from inference.
