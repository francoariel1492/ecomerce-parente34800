export const FetchData = (URL) => {
    setTimeout(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data));
    },1000)

}


