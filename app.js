const lightbox=document.querySelector('.lightbox');
if(lightbox){
  const picture=lightbox.querySelector('img');
  document.querySelectorAll('.zoom').forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();picture.src=link.href;picture.alt=link.querySelector('img').alt;
    lightbox.querySelector('p').textContent=picture.alt;lightbox.showModal();document.body.style.overflow='hidden';
  }));
  lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());
  lightbox.addEventListener('close',()=>{document.body.style.overflow='';picture.removeAttribute('src')});
  lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
}
