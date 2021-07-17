const firestore = firebase.firestore();
const auth = firebase.auth();

const githubButton = document.getElementById("github");
const googleButton = document.getElementById("google");

signInWithGithub = () => {
    var githubProvider = new firebase.auth.GithubAuthProvider();

    auth.signInWithPopup(githubProvider).then((result) => {
        var user = result.user;
        var docRef = firestore.collection("users").doc(user.uid);
        docRef.get().then((doc) => {
            if (!doc.exists) {
                firestore.collection("users").doc(user.uid).set({
                    blacklist: [], channels: [], name: user.email,
                    pictureURL: "", root: [],
                    type: "dev", usrroot: [], wall: []
                });
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }).catch((error) => {
        console.error(error);
    });
}

signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider).then((result) => {
        var user = result.user;
        var docRef = firestore.collection("users").doc(user.uid);
        docRef.get().then((doc) => {
            if (!doc.exists) {
                firestore.collection("users").doc(user.uid).set({
                    blacklist: [], channels: [], name: user.displayName,
                    pictureURL: "", root: [],
                    type: "user", usrroot: [], wall: []
                });
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }).catch(error => {
        console.error(error);
    })
}

githubButton.addEventListener('click', signInWithGithub);
googleButton.addEventListener('click', signInWithGoogle);