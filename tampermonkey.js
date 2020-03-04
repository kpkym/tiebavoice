async function getMobileData(){
    let mobileHTML = document.createElement("html");
    let pcData;
    let mobileData;
    mobileHTML.innerHTML = await fetch("http://localhost:14623" + location.pathname).then(e => e.text());
    pcData = document.querySelectorAll(".voice_player_inner")
    mobileData = mobileHTML.querySelectorAll(".j_voice_wrap")

    if (pcData.length !== mobileData.length){
        alert("PC跟移动端语音条数据不一致，可能是因为楼中楼")
    }

    pcData.forEach((e, index) => {
        let newNode = document.createElement("html");
        newNode.innerHTML = `<audio src="${mobileData[index].dataset["url"]}" controls="controls"></audio>`
        e.parentElement.replaceChild(newNode, e);
    });
};

getMobileData();

// 显示移动端隐藏数据
// document.querySelectorAll(".class_hide_flag").forEach(e=>e.classList.remove("class_hide_flag"));
