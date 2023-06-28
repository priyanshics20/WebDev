const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');

btn.addEventListener('click', ()=>{
    const val = inp.value;
    const li = document.createElement('li');

    if (val === "") {
        alert("Please Enter Something");
        return;
    }

    li.innerText = val;

    li.addEventListener('click', () => {
        li.remove();
    })

    list.append(li);
    inp.value = "";

})