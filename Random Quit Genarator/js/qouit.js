

document.getElementById('qouit-genarator').addEventListener('click',function(){
    const genaratQuote = () => {
        let displayQouit = document.getElementById('display-qouit');
        fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(date => displayQouit.innerText = date.quote)
    }
    genaratQuote()
})



