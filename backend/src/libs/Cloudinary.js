const cloudinary = require('cloudinary').v2

class Cloudinary {
	constructor() {
		this.cloudinary = cloudinary
		this.cloudinary.config({
			cloud_name: process.env.CLOUD_NAME,
			api_key: process.env.API_KEY,
			api_secret: process.env.API_SECRET,
		})
	}

	async upload(file, path) {
		return new Promise((resolve, reject) => {
			this.cloudinary.uploader.upload(file, { folder: path }, (err, url) => {
				if (err) return reject(err)
			
				return resolve(url)
			})
		})
	}
}

module.exports = new Cloudinary()
