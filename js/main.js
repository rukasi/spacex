var instance = new vidbg('.video', {
    mp4: 'img/world.mp4', // URL or relative path to MP4 video
    webm: 'img/world.webm', // URL or relative path to webm video
    poster: 'img/poster.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  });

AOS.init();

var rellax = new Rellax('.rocket');

if(document.body.clientWidth < 576) {
  rellax.destroy();
}
