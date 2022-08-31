const searchBtn = () => {

    let searchbar = ""
    searchbar = document.getElementById("searchbar");
    tempword = searchbar.value.trim() //gets rid of leading and trailing spaces

    // replaces space between words with "+" for api query
    let keywords = tempword.replaceAll(" ", "+")

    //if user does not enter a keyword, don't fetch the api and show error msg
    if(keywords === "") {
        document.getElementById("errmsg").classList.remove("hidden")
    }
    else {
        document.getElementById("searchbar").value=""
        document.getElementById("errmsg").classList.add("hidden")
        fetch(`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=${keywords}`)
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (data) => {
                //storage variables
                let html = ""
                let thumbnail = ""
                let vidID = ""
                let vidTitle = ""
                let avatar = ""
                let profileName = ""
                let views = ""
                let numResult = data.list.length

                //loops through the number of returned arrays
                for(let i = 0; i < numResult; i++){
                    //assigns the value of the arrays to the variables
                    thumbnail = data.list[i].thumbnail_360_url
                    vidID = data.list[i].id
                    vidTitle = data.list[i].title
                    avatar = data.list[i]["owner.avatar_80_url"]
                    profileName = data.list[i]["owner.username"]
                    views = data.list[i].views_total
                    //gets the date uploaded
                    let date = new Date(data.list[i].created_time * 1000).toLocaleDateString("en-us")

                    // if the strings are too long to fit inside grid, they get sliced
                    if(vidTitle.length > 100){
                        vidTitle = vidTitle.slice(0, 100) + "..."
                    }
                    if(profileName.length > 30){
                        profileName = profileName.slice(0, 30) + "..."
                    }
                    // adds the following string to the variable html
                    html += `
                        <div class="vid">
                            <div>
                                <img src="${thumbnail}" alt="thumbnail" class="image">
                            </div>

                            <div>
                                <a class="title" href="https://www.dailymotion.com/video/${vidID}" target="_blank">${vidTitle}</a>

                                <div class="userinfo">
                                    <div>
                                        <img src="${avatar}" alt="avatar" class="avatar">
                                    </div>
                                    <div>
                                        <p>${profileName}</p>
                                    </div>
                                </div>
                                <p class="vidinfo">Date Posted: ${date} | Views: ${views}</p>
                            </div>
                        </div>
                    `
                }
                document.querySelector(".videos").innerHTML = html
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }
        )
    }
    
}

document.getElementById("searchbtn").addEventListener("click", searchBtn);