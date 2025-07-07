<template>
  <div class="foot">
  <!-- Pulsante per tornare in cima -->
  <div class="back-to-top">
    <a href="#">↑ BACK TO TOP</a>
  </div>

  <!--Footer-->
  <footer class="footer">
    <div class="footer-content">
      <NuxtLink to="/" class="footer-logo">
        <img src="/logo.png" alt="Yoga Center Logo" />
        <span>YOGA <span class="highlight">CENTER</span></span>
      </NuxtLink>
      <nav class="footer-nav">
        <NuxtLink to="/services" class="foot-nav">Our Services</NuxtLink>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
        <NuxtLink to="/classes">Our Classes</NuxtLink>
      </nav>
      <div class="social-icons">
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-pinterest-p"></i>
      </div>
    </div>
    <p class="copyright">© 2025 Scamozzi. All Rights Reserved.</p>
  </footer>
  </div>
</template>

<style scoped>
.foot {
  font-family: 'Arial', sans-serif;
  color: #4b2e83;
}

.back-to-top {
  text-align: center;
  padding: 2rem;
}

.back-to-top a {
  color: #9024af;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
}
/* CSS per .footer */
.footer {
  background: #6c3483;
  color: white;
  padding: 2rem;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-logo img {
  width: 30px;
  margin-right: 0.5rem;
}

.highlight {
  color: #e24392;
}

.footer-nav a {
  margin: 0 1rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
}

.social-icons i {
  margin: 0 0.5rem;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
