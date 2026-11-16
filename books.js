const books=[
 {"t": "Gratitude Journal", "s": "gratitude-journal", "img": "covers/gratitude-journal.jpg", "p": "White Falcon Publishing", "u": "https://store.whitefalconpublishing.com/collections/latest-books/products/gratitude-journal"},
 {"t": "My Diary of Dreams", "s": "my-diary-of-dreams", "img": "covers/my-diary-of-dreams.jpg", "p": "White Falcon Publishing", "u": "https://store.whitefalconpublishing.com/products/my-diary-of-dreams"},
 {"t": "It Works", "s": "it-works", "img": "covers/it-works.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/it-works/"},
 {"t": "Daily Planner", "s": "daily-planner", "img": "covers/daily-planner.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/daily-planner/"},
 {"t": "Travel Gratitude Journal", "s": "travel-gratitude-journal", "img": "covers/travel-gratitude-journal.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/travel-gratitude-journal/"},
 {"t": "My Top 10 Goals Journal", "s": "my-top-10-goals-journal", "img": "covers/my-top-10-goals-journal.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/my-top-10-goals-journal/"},
 {"t": "Letters to God: Hello God, It's Me", "s": "letters-to-god", "img": "covers/letters-to-god.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/letters-to-god-hello-god-its-me/"},
 {"t": "5 Year Memory Journal", "s": "5-year-memory-journal", "img": "covers/5-year-memory-journal.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/5-year-memory-journal/"},
 {"t": "Magnificent Outcome", "s": "magnificent-outcome", "img": "covers/magnificent-outcome.jpg", "p": "Literature Chronicle", "u": "https://literaturechronicle.com/product/magnificent-outcome/"}
];
function renderBooks(id,list){
  const g=document.getElementById(id);
  list.forEach(b=>{
    const alt=b.t.replace(/"/g,'&quot;');
    const a=document.createElement('article');a.className='card';
    a.innerHTML='<div class="cover"><img src="'+b.img+'" alt="'+alt+' cover" loading="lazy"></div>'
      +'<h2>'+b.t+'</h2><small>'+b.p+'</small>'
      +'<a class="btn" href="'+b.u+'" target="_blank" rel="noopener">Buy Now</a>';
    g.appendChild(a);
  });
}
document.querySelectorAll('.yr').forEach(e=>e.textContent=new Date().getFullYear());
