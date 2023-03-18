const issues = document.getElementById('issues_list');
const heading = document.getElementById('heading')
let currPage=1;

function fetchissues(number){
    fetch(`https://api.github.com/repositories/1296269/issues?page=${number}&per_page=5`)
    .then(res=>res.json())
    .then(data=>{
        issues.innerHTML='';

        data.forEach(element => {
            const issueName = element.title;
            const li = document.createElement('li');
            li.innerHTML = issueName;
            issues.appendChild(li);
        });

    })
    
}

fetchissues(currPage);


//Load next page on issue

document.getElementById('load_prev').addEventListener('click',()=>{
    if(currPage>1){
    currPage--;
    heading.innerHTML = `Page Number ${currPage}`;
    }
    fetchissues(currPage);

})

//Load prev page on issue

document.getElementById('load_next').addEventListener('click',()=>{
    currPage++;
    heading.innerHTML= `Page Number ${currPage}`;
    fetchissues(currPage);

})
