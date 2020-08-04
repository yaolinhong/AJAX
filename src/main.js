getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css"); //只用前两个参数
    request.onload = () => {
        console.log('成功了')
        //填写style内容
        style.innerHTML = request.response
        //响应内容插到头里，标签插入head
        document.head.appendChild(style)
        //respnse放在后面了-.-结果导致response为空

    };
    request.onerror = () => {
        console.log('失败了')

    };
    request.send()
    //创建style标签
    const style = document.createElement('style')
    //请求JS
};
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/js2.js"); //只用前两个参数
    request.onload = () => {

        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)

    };
    request.onerror = () => {
        console.log('失败了')

    };
    request.send()


};
//请求html
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/html.html"); //只用前两个参数
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)

    };
    request.onerror = () => {
        console.log('失败了')

    };
    request.send()

};
//请求XML
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/XML.xml"); //只用前两个参数
    request.onreadystatechange = () => {
        //下载完成，成功是2XX；失败是4XX，5XX
        //判断是否成功加载（而不是404）,状态码2开头的都表示成功
        if (request.readyState === 4 && request.status === 200) {
            const dom1 = request.responseXML;
            const text = dom1.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send()
};
//请求JSON
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/json.json"); //只用前两个参数
    request.onreadystatechange = () => {
        //下载完成，成功是2XX；失败是4XX，5XX
        //判断是否成功加载（而不是404）,状态码2开头的都表示成功
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            console.log(object)；
        }
    };
    request.send()
};