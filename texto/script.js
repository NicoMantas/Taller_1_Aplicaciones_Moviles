const t=document.getElementById("texto"),
c=document.getElementById("contador")
t.addEventListener("input",()=>c.textContent=t.value.length)
