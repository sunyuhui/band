import koa from 'koa';

class APP {
	constructor(props) {
		this.app = new koa();
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

const project = new APP();
console.log('project测试', project)
project.start(3000);

export default project;
// module.exports = project;