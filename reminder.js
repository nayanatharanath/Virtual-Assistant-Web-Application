const text = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addBtn = document.getElementById("addedBtn")
const removeBtn = document.getElementById("deletedBtn")
const list = document.getElementById("list")

const listContent = []

function render(){
    let htmlStr = ""
    listContent.forEach((item)=>{
        htmlStr=htmlStr+`
        <div class="item">
          <div>
          <p>Content：${item.text}</p>
          <p>Date-Time：${item.date} ${item.time}</p>
        </div>
      </div>
    `
    })
    
    list.innerHTML = htmlStr
}

addBtn.addEventListener('click', ()=>{
    listContent.push({
        text:text.value,
        date:date.value,
        time:time.value
    })
    render()
})

removeBtn.addEventListener('click',()=>{
    listContent.pop()
    render()
})

