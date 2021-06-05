class ProfileManager {
	google() {
		return new User("denis")
	}

	github() {
		return new Developer()
	}

	bot(token) {
		return new bot()
	}
}