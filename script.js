// Kelas data
  const allClassNames = ["PILATES","YOGA","MEDITATION","STRETCHING","SPINNING","AEROBIC","HIIT","BODY COMBAT","ZUMBA","HIP-HOP","K-POP","JAZZ","SQUAT","PUSH UP","DEADLIFT","SHOULDER PRESS" ];
  const iconMap = { "PILATES":"fas fa-hand-peace","YOGA":"fas fa-praying-hands","MEDITATION":"fas fa-brain","STRETCHING":"fas fa-shoe-prints","SPEED WORKOUTS":"fas fa-bolt","HIIT":"fas fa-fire","BODY COMBAT":"fas fa-fist-raised","CYCLING":"fas fa-bicycle","ZUMBA":"fas fa-music","HIP HOP":"fas fa-compact-disc","K-POP":"fas fa-microphone-alt","JAZZ":"fas fa-guitar","GYMNASTICS":"fas fa-hand-holding-heart","TRADITIONAL CARDIO":"fas fa-heartbeat","STRENGTH":"fas fa-weight-hanging","HIGH INTENSITY INTERVAL (HIIT)":"fas fa-burn","CALISTHENICS":"fas fa-running","KICKBOXING":"fas fa-fist-raised","SPIN CLASS":"fas fa-biking",};
  function getIcon(c){ return iconMap[c] || "fas fa-person-walking"; }
  function renderClasses(){ const g=document.getElementById('classList'); if(g){ let html=''; allClassNames.forEach(c=>{ html+=`<div class="class-card"><i class="${getIcon(c)}"></i><span>${c}</span></div>`; }); g.innerHTML=html; } }
  renderClasses();

// Mobile toggle
  const mobileBtn=document.getElementById('mobile-menu'), navLinks=document.getElementById('nav-links');
  if(mobileBtn) mobileBtn.addEventListener('click',()=>navLinks.classList.toggle('active'));
  document.querySelectorAll('.nav-links a').forEach(l=>l.addEventListener('click',()=>navLinks.classList.remove('active')));

// Form kontak
  const cForm=document.getElementById('contactForm'), fb=document.getElementById('formFeedback');
  if(cForm) cForm.addEventListener('submit',function(e){ e.preventDefault(); const n=document.getElementById('nameInput').value.trim(), em=document.getElementById('emailInput').value.trim(), msg=document.getElementById('msgInput').value.trim(); if(!n||!em||!msg){ fb.innerHTML="⚠️ Semua bidang harus diisi!"; fb.style.color="#e63946"; return; } if(!em.includes('@')){ fb.innerHTML="📧 Email valid diperlukan."; fb.style.color="#e63946"; return; } fb.style.color="#4caf50"; fb.innerHTML=`✅ Terima kasih ${n}! Tim kami akan merespon ke ${em}. STAY STRONG 💪`; cForm.reset(); setTimeout(()=>fb.innerHTML="",5000); });

// Tombol membership
  document.querySelectorAll('.btn-membership').forEach(btn=>{ btn.addEventListener('click',(e)=>{ const card=btn.closest('.card'); let paket=""; if(card.classList.contains('daily')) paket="Paket Harian"; else if(card.classList.contains('monthly')) paket="Paket Bulanan"; else if(card.classList.contains('three-months')) paket="Paket 3 Bulan"; else if(card.classList.contains('yearly')) paket="Paket Tahunan"; alert(`✨ Anda memilih ${paket}. Hubungi resepsionis untuk pendaftaran lebih lanjut. 🔥`); }); });
  const konsultasiBtn=document.getElementById('contactBtnMembership'); if(konsultasiBtn) konsultasiBtn.addEventListener('click',()=>{ alert("📞 Hubungi kami di 0838-1911-0353 atau kunjungi gym kami untuk konsultasi gratis!"); });

// Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{ a.addEventListener('click',function(e){ const h=this.getAttribute('href'); if(h==="#"||!h) return; const t=document.querySelector(h); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }); });

  window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

  setTimeout(() => {
      preloader.style.display = "none";
    }, 500);

  }, 1500);
  });


  window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);

  }, 1500);
  });


  window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 450);

  }, 1500);
  });

// SCROLL ANIMATION HANYA SAAT SCROLL KE BAWAH
  const hiddenElements = document.querySelectorAll(
  '.feature-card, .kelas-utama-card, .class-card, .card, .info-card, .contact-form, .contact-info'
  );

  hiddenElements.forEach(el => {
  el.classList.add('hidden');
  });

  let lastScrollTop = 0;

  const observer = new IntersectionObserver((entries) => {

  let currentScroll =
  window.pageYOffset || document.documentElement.scrollTop;

  entries.forEach(entry => {

// HANYA SAAT SCROLL KE BAWAH
    if (currentScroll > lastScrollTop) {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    }

// SAAT ELEMENT KELUAR LAYAR KE BAWAH
    if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
      entry.target.classList.remove('show');
    }

  });

  lastScrollTop = currentScroll;

  }, {
  threshold: 0.15
  });

  hiddenElements.forEach(el => observer.observe(el));

// ACTIVE NAVBAR SECTION
  const sections = document.querySelectorAll("section");
  const navLinksActive = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
  const sectionTop = section.offsetTop - 150;
  const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight) {

      current = section.getAttribute("id");
    }
  });

// FIX SECTION TERAKHIR (CONTACT)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
    current = "contact";
  }

  navLinksActive.forEach(link => {
  link.classList.remove("active-link");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active-link");
    }
  });

});

// KEMBALI KE HALAMAN PALING ATAS SAAT REFRESH
  window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  };

  window.onload = function () {
  window.scrollTo(0, 0);
 };