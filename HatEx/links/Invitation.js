class InvitationLink {
	constructor(link, api) {
		link = link.split("|")
		let chat = link[0]
		let id = link[1]
		console.log(chat, id)
		this.chat = new PublicChatLink(chat, api)
		this.id = id
		this.databaseLink = api.database.ref("public chats/" + this.chat.uid + "/" + this.chat.chatid + "/invite/" + id)
	}

	id
	chat
	databaseLink
}