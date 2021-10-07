// Project-3
console.log('news website in ajax');


// 07cf7fac35024a73a9088284cdcfa55e
let apiKey = '07cf7fac35024a73a9088284cdcfa55e';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=nl&category=technology&apiKey=07cf7fac35024a73a9088284cdcfa55e', true);

xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index){
            newsHtml += `<div class="card">
                    <div class="card-header" id="heading${index}">
                         <h2 class="mb-0">
                   <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                          aria-expanded="false" aria-controls="collapse${index}">
                         <b>Breaking News ${index + 1}:</b> ${element["title"]}
                        </button>
                         </h2>
             </div>
          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
              <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
           </div>
            </div>`;
        
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log('site unavailable');
    }
}


xhr.send();

