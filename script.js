// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndroid);
document.getElementById("apple").addEventListener("click", changeToApple);

function changeToAndroid() {
    // Change the 'Android vs Apple' image to the Android Logo in the images folder
    document.querySelector("img").src = "images/Android-Logo.jpg";

    // Change the 'Explore the Debate' link so that the link says 'Android Home'
    const debateLink = document.querySelector(".bottom a");
    debateLink.textContent = "Android Home";

    // Change the 'Explore the Debate' link so that the background color is #a4c93b
    debateLink.style.backgroundColor = "#a4c93b";

    // Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/'
    debateLink.href = "https://www.android.com/";

    // Change the background color of the html to #a4c93b
    document.getElementById("the-html").style.backgroundColor = "#a4c93b";

    // Change the base font-family to 'Roboto', sans-serif
    document.body.style.fontFamily = "'Roboto', sans-serif";

    // Add the class 'active' to the Android button
    document.getElementById("android").classList.add("active");

    // Remove the class 'active' from the Apple button
    document.getElementById("apple").classList.remove("active");
}

function changeToApple() {
    // Change the 'Android vs Apple' image to the Apple Logo in the images folder
    document.querySelector("img").src = "images/Apple-Logo.jpg";

    // Change the 'Explore the Debate' link so that the link says 'Apple Home'
    const debateLink = document.querySelector(".bottom a");
    debateLink.textContent = "Apple Home";

    // Change the 'Explore the Debate' link so that the background color is #b6bcca
    debateLink.style.backgroundColor = "#b6bcca";

    // Change the 'Explore the Debate' link so that the href is now 'https://www.apple.com/'
    debateLink.href = "https://www.apple.com/";

    // Change the background color of the body to #b6bcca
    document.getElementById("the-html").style.backgroundColor = "#b6bcca";

    // Change the base font family to 'Brygada 1918', serif
    document.body.style.fontFamily = "'Brygada 1918', serif";

    // Add the class 'active' to the Apple button
    document.getElementById("apple").classList.add("active");

    // Remove the class 'active' from the Android button
    document.getElementById("android").classList.remove("active");
}