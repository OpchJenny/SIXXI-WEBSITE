// use for dessert suggestion menu search bar
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions2.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            if(data == "Buttermilk Pancakes" || data == "Dutch Baby Pancake" || data == "Trail Mix Pancakes")
            {
                return data = `<li><a style="text-decoration:none; color: inherit;" href="Pancakes/${data}.html"> ${data}</a></li>`;
            }
            else if(data == "Baileys Chocolate Bundt Cake" || data == "Banana Walnut Cake" || data == "Joanna’s Lemon Olive Oil Cake")
            {
                return data = `<li><a style="text-decoration:none; color: inherit;" href="Cake/${data}.html"> ${data}</a></li>`;
            }
            if(data == "Cookie Brittle" || data == "Crinkle Cookies with Peppermint Cream" || data == "Salty Dark and Milk Chocolate Skillet Cookie")
            {
                return data = `<li><a style="text-decoration:none; color: inherit;" href="Cookie/${data}.html"> ${data}</a></li>`;
            }
            if(data == "Coconut Cream Popsicles With Vanilla Bean And Malibu Rum" || data == "Salted Caramel Apple Sundae" || data == "Vegan Mint Chip Ice Cream")
            {
                return data = `<li><a style="text-decoration:none; color: inherit;" href="Ice Cream/${data}.html"> ${data}</a></li>`;
            }
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}