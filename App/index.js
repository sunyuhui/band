const Koa = require('koa');
const Router = require('koa-router');

class APP {
	constructor(props) {
		this.app = new Koa();
		this.router = new Router();
	}
	init() {

	}
	start(port) {
		let app = this.app;
		let router = this.router;
		app.listen(port);
	}
}

module.exports = ()=>{
	return new APP();
}