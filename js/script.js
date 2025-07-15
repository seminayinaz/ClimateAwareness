document.addEventListener('DOMContentLoaded', function() {
  // Aktif sekme yönetimi
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Scroll sonrası aktif sekme güncelleme
  const sections = document.querySelectorAll('.guide-card');
  const navItems = document.querySelectorAll('.term-nav .nav-link');
  
  function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  }
  
  // Sayfa yüklendiğinde ve scroll olduğunda çalıştır
  window.addEventListener('load', updateActiveNav);
  window.addEventListener('scroll', updateActiveNav);
  
  // Düzgün scroll davranışı
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault(); // Formun normal submit işlemini engeller
    
// SweetAlert2 kütüphanesi ile popup
Swal.fire({
    title: 'Başarılı!',
    text: 'Mesajınız başarıyla gönderildi.',
    icon: 'success',
    confirmButtonText: 'Tamam',
    confirmButtonColor: '#2ecc71'
  }).then(() => {
    // Popup kapatıldığında formu temizle
    this.reset();
  });
});