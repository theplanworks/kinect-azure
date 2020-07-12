class KinectDummy {
	constructor() {}

	static init() {}

	static openPlayback(path, playback_handle) {
		return 0;
	}

	static startPlayback(options) {
		return 0;
	}

	static stopPlayback() {}

	static resume() {
		return 0;
	}

	static pause() {
		return 0;
	}

	static seek(time) {
		return 0;
	}

	static time() {
		return 0;
	}

	static duration() {
		return 0;
	}

	static open() {
		return 0;
	}

	static close() {
		return 0;
	}

	static startCameras(options) {
		return 0;
	}

	static createTracker(options) {
		return 0;
	}

	static startListening(cb) {
		return 0;
	}

	static stopListening(cb) {
		cb();
	}

	static destroyTracker() {
		return 0;
	}

	static stopCameras() {
		return 0;
	}

	static startRecording(outputPath) {
		return 0;
	}

	static stopRecording() {
		return 0;
	}

	static setColorControl(options) {
		return 0;
	}
}

module.exports = KinectDummy;
