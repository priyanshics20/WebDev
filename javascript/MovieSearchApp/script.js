const form = document.querySelector('form');
const list = document.getElementById('list');
function getMovies(searchText) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`; 
    axios.get(url).then((res) => {

        for (let item of res.data) {
            if (item.show.image) {
                // console.log(item.show.image.medium);
                const img = document.createElement('img');
                img.src = item.show.image.medium;
                img.style.margin = '10px';
                list.append(img);
            }

        }

        // console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('form submitted');
    const inpText = form.elements[0].value;
    getMovies(inpText);
    form.elements[0].value = "";
});
