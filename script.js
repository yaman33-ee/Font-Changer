const text=document.querySelector(".content");
function changefontsize(e)
{
  text.style.fontSize=e.target.value;
}
function changefonttype(e)
{ 
  console.log()
  text.style.fontFamily=e.target.value;
}



document.querySelector("#fonts-size").addEventListener('change',changefontsize )

document.querySelector("#fonts").addEventListener('change',changefonttype)