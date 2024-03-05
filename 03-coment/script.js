const containerComments = document.getElementById("comments");
const btn = document.getElementById("btn");
const btnClean = document.getElementById("btn-clean");

//events
btn.addEventListener("click", showCardRandom);
btnClean.addEventListener("click", () => {
    containerComments.innerHTML = "";
});

//scripting
function showCardRandom() {

    clearHtml();

    const randomData = data[Math.floor(Math.random() * data.length)];
    const { name, img, post, friends } = randomData;
    const { img1, name1, img2, name2, img3, name3 } = friends;

    const divContainer = document.createElement("div");
    divContainer.classList.add("h-[360px]", "w-[360px]", "rounded-2xl", "bg-white", "px-8", "py-10", "text-center", "shadow-md", "transition", "hover:scale-105");

    const divImg = document.createElement("div");

    const imgMain = document.createElement("img");
    imgMain.classList.add("mx-auto", "h-[120px]", "w-[120px]", "rounded-full", "object-cover");
    imgMain.src = img;
    imgMain.alt = name;

    const h2 = document.createElement("h2");
    h2.classList.add("mt-8", "text-2xl", "font-bold");
    h2.id = "name";
    h2.textContent = name;

    const p = document.createElement("p");
    p.classList.add("mt-1", "text-sm", "font-light", "text-neutral-500");
    p.id = "post";
    p.textContent = post;

    const divFriends = document.createElement("div");
    divFriends.classList.add("flex", "justify-around");

    const divFriendOne = document.createElement("div");
    divFriendOne.classList.add("flex", "flex-col", "items-center");

    const imgFriendOne = document.createElement("img");
    imgFriendOne.classList.add("mt-2", "h-12", "w-12", "rounded-full", "object-cover");
    imgFriendOne.src = img1;
    imgFriendOne.alt = name1;

    const nameFriendOne = document.createElement("p");
    nameFriendOne.classList.add("mt-1", "text-sm");
    nameFriendOne.id = "name-1";
    nameFriendOne.textContent = name1;

    const divFriendTwo = document.createElement("div");
    divFriendOne.classList.add("flex", "flex-col", "items-center");

    const imgFriendTwo = document.createElement("img");
    imgFriendTwo.classList.add("mt-2", "h-12", "w-12", "rounded-full", "object-cover");
    imgFriendTwo.src = img2;
    imgFriendTwo.alt = name2;

    const nameFriendTwo = document.createElement("p");
    nameFriendTwo.classList.add("mt-1", "text-sm");
    nameFriendTwo.id = "name-2";
    nameFriendTwo.textContent = name2;

    const divFriendThree = document.createElement("div");
    divFriendOne.classList.add("flex", "flex-col", "items-center");

    const imgFriendThree = document.createElement("img");
    imgFriendThree.classList.add("mt-2", "h-12", "w-12", "rounded-full", "object-cover");
    imgFriendThree.src = img3;
    imgFriendThree.alt = name3;

    const nameFriendThree = document.createElement("p");
    nameFriendThree.classList.add("mt-1", "text-sm");
    nameFriendThree.id = "name-3";
    nameFriendThree.textContent = name3;

    divImg.appendChild(imgMain);
    divImg.appendChild(h2);
    divImg.appendChild(p);

    divFriendOne.appendChild(imgFriendOne);
    divFriendOne.appendChild(nameFriendOne);
    divFriendTwo.appendChild(imgFriendTwo);
    divFriendTwo.appendChild(nameFriendTwo);
    divFriendThree.appendChild(imgFriendThree);
    divFriendThree.appendChild(nameFriendThree);

    divFriends.appendChild(divFriendOne);
    divFriends.appendChild(divFriendTwo);
    divFriends.appendChild(divFriendThree);
    divContainer.appendChild(divImg);
    divContainer.appendChild(divFriends);

    containerComments.appendChild(divContainer);
}

function clearHtml() {
    while (containerComments.firstChild) {
        containerComments.removeChild(containerComments.firstChild);
    }
}