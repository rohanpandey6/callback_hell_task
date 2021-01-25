var div = document.getElementById('main')
var p_element = document.createElement('p')
var node = document.createTextNode("HAPPY INDEPENDENCE DAY!!");
p_element.appendChild(node); 



setTimeout(()=>{
    div.innerHTML='10'
    setTimeout(()=>{
        div.innerHTML='9'
        setTimeout(()=>{
            div.innerHTML='8'
            setTimeout(()=>{
                div.innerHTML='7'
                setTimeout(()=>{
                    div.innerHTML='6'
                    setTimeout(()=>{
                        div.innerHTML='5'
                        setTimeout(()=>{
                            div.innerHTML='4'
                            setTimeout(()=>{
                                div.innerHTML='3'
                                setTimeout(()=>{
                                    div.innerHTML='2'
                                    setTimeout(()=>{
                                        div.innerHTML='1'
                                        setTimeout(()=>{
                                            div.innerHTML = ''
                                            div.append(p_element)

											div.style.backgroundImage = 'linear-gradient(to right, orange , white, green)';
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
})