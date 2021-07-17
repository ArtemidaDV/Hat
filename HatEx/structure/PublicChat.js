class PublicChat extends IChat {
	constructor(name) {
		super()
		this.name = name
		this.pictureURL = ""
	}

	inviteLinks = []
	banned = []

	asObject() {
		return {
			"name": this.name,
			"pictureURL": this.pictureURL,
			"inviteLinks": this.inviteLinks,
			"banned": this.banned
		}
	}
} 
