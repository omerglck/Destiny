/*
1.adım:HTML den buttonu çekiyoruz.
2.adım:HTML den navigasyon alanını çekiyoruz.
3.adım:Buttona tıkladığımız anda çektiğimiz navigasyon alanına yeni bir class ekle ve bu class ın ismi toggle olsun.Tekrar tıklanıldığında class ı çıkarır.
*/


const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('toggle');
})

// Videoları ekrana geldiği anda oynatması için gereki kodlar
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    });
    videos.forEach((video) => {
      observer.observe(video);
    });
  });
