class PrivateChatLink {
	constructor(link, api) {
		this.uid1 = link.slice(0, 28)
		this.uid2 = link.slice(28)
		this.databaseLink1 = api.database.ref("private chats/" + this.uid1 + " | " + this.uid2)
		this.databaseLink2 = api.database.ref("private chats/" + this.uid2 + " | " + this.uid1)
		this.storeLink1 = api.store.collection("private chats").doc(this.uid1 + " | " + this.uid2)
		this.storeLink2 = api.store.collection("private chats").doc(this.uid2 + " | " + this.uid1)
	}

	uid1
	uid2
	databaseLink1
	databaseLink2
	storeLink1
	storeLink2
}
