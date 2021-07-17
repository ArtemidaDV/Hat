const firebaseConfig = {
	apiKey: "AIzaSyDs5PI98IF1QelnCmBjYT1HvbTEbR4LIik",
	authDomain: "hat-excelsior.firebaseapp.com",
	projectId: "hat-excelsior",
	storageBucket: "hat-excelsior.appspot.com",
	messagingSenderId: "627364525404",
	appId: "1:627364525404:web:65b440bdf36fc460ee3d99",
	measurementId: "G-5ENY3KBW4V",
	databaseURL: "https://hat-excelsior-default-rtdb.firebaseio.com/",
	storageBucket: "hat-excelsior.appspot.com"
};
firebase.initializeApp(firebaseConfig)
firebase.auth()

var user_
const api = new API()
var selfuser
try {
	api.setup()
	api.store.collection("users").doc(firebase.auth().currentUser.uid).get().then((doc) => {
		user_ = doc.data()
		selfuser = loadProfile(user_)
	})
} catch(e) { }


firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		api.update()
		api.store.collection("users").doc(firebase.auth().currentUser.uid).get().then((doc) => {
			user_ = doc.data()
			selfuser = loadProfile(user_)
		})

		if (window.location.pathname.endsWith("auth.html")) {
			window.location.replace("api-test.html")
		}
		// ...
	} else {
		// User is signed out
		// ...
	}
});