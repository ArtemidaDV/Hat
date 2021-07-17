class PrivateChat extends IChat {
	constructor(user1, user2) {
		this.user1 = user1
		this.user2 = user2
	}

	user1
	user2

	asObject() {
		return {
			"name": this.name,
			"pictureURL": this.pictureURL,
			"inviteLinks": this.inviteLinks,
			"banned": this.banned
		}
	}
} 
