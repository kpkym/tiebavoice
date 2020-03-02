let content = "";
fetch(location.href, {"headers":
            {
                "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
                "Host": "tieba.baidu.com",
                "Cache-Control": "no-cache",
                "Accept-Encoding": "gzip, deflate, br"
            }
        })
    .then(e => e.text())
    .then(e => content = e);

console.log(content);
