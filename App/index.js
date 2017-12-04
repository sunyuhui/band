const Koa = require('koa');

class APP {
	constructor(props) {
		this.app = new Koa();
	}
	init() {

	}
	start(port) {
		let app = this.app;
		app.use((ctx)=>{
			ctx.body = 'sunyuhui';
		})
		app.listen(port);
	}
}

module.exports = ()=>{
	return new APP();
}