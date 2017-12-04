const Koa = require('koa');

class APP {
	constructor(props) {
		this.app = new Koa();
	}
	init() {

	}
	start(port) {
		let app = this.app;
		
		app.listen(port);
	}
}

module.exports = ()=>{
	return new APP();
}