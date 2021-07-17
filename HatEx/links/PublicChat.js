class PublicChatLink {
	constructor(link, api) {
		this.uid = link.slice(0, 28)
		this.chatid = link.slice(28)
		this.databaseLink = api.database.ref("public chats/" + this.uid + "/" + this.chatid)
		this.storeLink = api.store.collection("publicchats").doc(this.uid + this.chatid)
	}

	uid
	chatid
	databaseLink
	storeLink
}
