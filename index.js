const RPC = require('discord-rpc');

const rpc = new RPC.Client({
	transport: 'ipc'
});

rpc.on( 'ready', ()=>{

	rpc.setActivity({
		 details: 'Hey, I\'m programming a Godot game!!',
		 state: 'Editing file main.gd',
		 startTimestamp: new Date(),
		 largeImageKey: 'icon-godot-512',
		 largeImageText: 'large text here',
		 smallImageKey: 'editing-icon',
		 smallImageText: 'small text here!',

		 // OS BOTÕES SÃO OPCIONAIS...
/*
		 buttons: [{
		 	label: 'Button 1',
		 	url: 'https://google.com/'
		 },{
		 	label: 'Button 2',
		 	url: 'https://youtube.com/'
		 }]
	});
*/
	console.log('RPC is running...');
});


rpc.login({
	clientId: '1018508099566444568'
});