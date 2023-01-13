firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		var email = user.email;
	}else{
		window.location.href="index.html";
	}
});