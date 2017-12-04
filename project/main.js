const App = require('../App')();

App.app.use((ctx)=>{
			ctx.body = 'sunyuhuissss';
		})

App.start(3000);

console.log('listening on 3000');