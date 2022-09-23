let form=document.getElementById('form');
form.addEventListener('submit',pankaj);
function pankaj(e)
{
    e.preventDefault();
    let nam=document.getElementById('name').value;
    let pass=document.getElementById('password').value;
    let object={
        nam,
        pass
    }
    localStorage.setItem(object.pass,JSON.stringify(object));
   console.log(JSON.stringify(object));
   showUser(object); // new functiom
}
// show all the item detail when submit the button
function showUser(event)
{
    let parentNode=document.getElementById('list');
    let child= `<li> ${event.nam} ${event.pass}</li>`
    parentNode.innerHTML=parentNode.innerHTML + child;
}

