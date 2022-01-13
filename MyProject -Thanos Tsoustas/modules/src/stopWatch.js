// Named export

export class StopWatch {
	constructor() {
		this.watchRunning = false;
		this.interval = 0;

		this.duration = 0;
	}

	start() {
		if (this.watchRunning) {
			return console.error('watch is already running');
		}
		this.watchRunning = true;
		console.log('duration starts at: ', this.duration, 's');

		this.interval = setInterval(() => (this.duration += 1), 1000);
	}

	stop() {
		if (!this.watchRunning) {
			return console.error("watch isn't running");
		}
		this.watchRunning = false;

		clearInterval(this.interval);

		console.log('duration stops at: ', this.duration, 's');
	}

	reset() {
		if (this.watchRunning) {
			this.stop();
		}
		this.duration = 0;
		console.log('Reset clock');
	}
}

export let sw = new StopWatch();

// Another way for named exports

// export { sw };
