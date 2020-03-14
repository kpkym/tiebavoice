let isPlaying;

// 如果不是第一页则不运行
if(location.search.split(/[?=]/).indexOf("pn") > -1
                && Number(location.search.split(/[?=]/)[location.search.split(/[?=]/).indexOf("pn")+1]) > 1){
    return;
}

let clickAudio = (ele) => {
    let newNode = document.createElement("div");
    newNode.innerHTML = `<audio src="${ele.dataset.url}" controls="controls" autoplay></audio>`;

    ele.appendChild(newNode, newNode.querySelector("div"));

    if (isPlaying != null){
        isPlaying.parentElement.removeChild(isPlaying);
    }
    isPlaying = newNode;
}

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
            let voiceEleParent = pcData[index].querySelector(".p_content .voice_player a").parentElement;
            
            voiceEleParent.dataset.url = e.querySelector(".content .j_voice_wrap").dataset.url;
            voiceEleParent.firstElementChild.style.backgroundColor = "lightgreen";
            voiceEleParent.addEventListener("click", () => clickAudio(voiceEleParent));

        }
        if (e.querySelector(".j_floor_panel .j_voice_wrap")){
            let btn = document.createElement("button");
            btn.appendChild(document.createTextNode("替换楼中楼语音条"));
            btn.addEventListener("click", () => {
                let voiceEleParent = pcData[index].querySelector(".core_reply .voice_player_inner").parentElement;
                voiceEleParent.dataset.url = e.querySelector(".j_floor_panel .j_voice_wrap").dataset.url;
                voiceEleParent.firstElementChild.style.backgroundColor = "lightgreen";
                voiceEleParent.addEventListener("click", () => clickAudio(voiceEleParent));
                btn.parentElement.removeChild(btn);
            });
            pcData[index].querySelector(".p_content").appendChild(btn);
        }
    });
}

getMobileData();


// 显示移动端隐藏数据
// document.querySelectorAll(".class_hide_flag").forEach(e=>e.classList.remove("class_hide_flag"));
