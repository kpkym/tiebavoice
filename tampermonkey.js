async function getMobileData(){
    let mobileHTML = document.createElement("html");
    let pcData;
    let mobileData;
    mobileHTML.innerHTML = await fetch("http://localhost:14623" + location.pathname).then(e => e.text());
    mobileData = mobileHTML.querySelectorAll("li[tid] .list_main");
    pcData = document.querySelectorAll("[data-field] .d_post_content_main");

    if (pcData.length !== mobileData.length){
        alert("PC跟移动端楼层不一致")
    }

    mobileData.forEach((e, index) => {
        if (e.querySelector(".content .j_voice_wrap")){
            let newNode = document.createElement("html");
            newNode.innerHTML = `<audio src="${e.querySelector(".content .j_voice_wrap").dataset.url}" controls="controls"></audio>`
            let voiceEle = pcData[index].querySelector(".p_content .voice_player a");            
            voiceEle.parentElement.replaceChild(newNode, voiceEle);
        }
        if (e.querySelector(".j_floor_panel .j_voice_wrap")){
            let newNode = document.createElement("html");
            newNode.innerHTML = `<audio src="${e.querySelector(".j_floor_panel .j_voice_wrap").dataset.url}" controls="controls"></audio>`
            
            let btn = document.createElement("button");
            btn.appendChild(document.createTextNode("替换楼中楼语音条"));
            btn.addEventListener("click", () => {
                let voiceEle = pcData[index].querySelector(".core_reply .voice_player_inner");
                voiceEle.parentElement.replaceChild(newNode, voiceEle);
            });
            pcData[index].querySelector(".p_content").appendChild(btn);
        }
    });

    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("替换楼中楼语音条"));
    btn.addEventListener("click", () => funcList.forEach(e => e()));
    document.querySelector("#pager_go6").parentElement.append(btn);
}

getMobileData();


// 显示移动端隐藏数据
// document.querySelectorAll(".class_hide_flag").forEach(e=>e.classList.remove("class_hide_flag"));
