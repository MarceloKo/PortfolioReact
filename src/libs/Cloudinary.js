const cloudinary = require('cloudinary').v2

class Cloudinary {
	constructor() {
		this.cloudinary = cloudinary
		this.cloudinary.config({
			cloud_name: 'marceloko',
			api_key: '983947416576537',
			api_secret: 'oej6UYpQZ5JF3TfUS9UHkG8i9T8',
		})
	}

	async upload(file, fileName, path) {
		console.log('chamo')
		return new Promise((resolve, reject) => {
			this.cloudinary.uploader.upload(file, { folder: path }, (err, url) => {
				if (err) return reject(err)
			
				return resolve(url)
			})
		})
	}
}

module.exports = new Cloudinary()
