class ChannelLink {
	constructor(link, api) {
		this.uid = link.slice(0, 28)
		this.chid = link.slice(28)
		this.databaseLink = api.database.ref("channels/" + this.uid + this.chid)
	}

	uid
	chid
	databaseLink
}
