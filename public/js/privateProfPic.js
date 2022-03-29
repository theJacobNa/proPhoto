// GENERAL JAVASCRIPT WEBSITE
// Trigger Modal to edit Profile Picture
let profilePic = document.getElementById("profilePic");
profilePic.addEventListener("click", function () {
	setModalContent();
});

// Trigger Modal to edit Profile Info
let profileInfo = document.getElementById("editProfileInfo");
profileInfo.addEventListener("click", function () {
	setModalProfileInfo();
});

// Trigger Modal to edit Picture
let editPic = document.querySelectorAll(".editPic");
for (let i = 0; i < editPic.length; i++) {
	editPic[i].addEventListener("click", function () {
		setModalEditPic();
	});
}

// Trigger accordion effect on Photos
let arrowDowns = document.querySelectorAll(".sectionHeader");
console.log(arrowDowns);
for (let i = 0; i < arrowDowns.length; i++) {
	arrowDowns[i].addEventListener("click", function () {
		this.lastElementChild.classList.toggle("rotate");

		let sectionPhotos = this.nextElementSibling;
		if (sectionPhotos.style.maxHeight) {
			sectionPhotos.style.maxHeight = null;
		} else {
			sectionPhotos.style.maxHeight = sectionPhotos.scrollHeight + "px";
		}
	});
}
