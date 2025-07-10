<template>
    <Header />
  <section id="services-top" class="services-hero">
    <Backbutton />
    <p class="services-subtitle">• WE PROVIDED TO YOU •</p>
    <h1 class="services-title">
      OUR <span class="highlight">SERVICES</span>
    </h1>
  </section>

  <section class="services-content">
    <nav class="breadcrumb">
      <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink>
      <span class="dash">—</span> <a href="#services-top" class="current">OUR SERVICES</a>
    </nav>

    <div class="section-header">
      <p class="services-subtitle">• WHAT WE DO •</p>
      <h2 class="services-title">
        OUR <span class="highlight">SERVICES</span>
      </h2>
    </div>

    <div class="category-buttons">
      <button class="category-btn">
        <img src="/icons/indoor.svg" alt="Indoor Yoga" />
        INDOOR YOGA
      </button>
      <button class="category-btn active">
        <img src="/icons/all-yoga.svg" alt="All Yoga Classes" />
        ALL YOGA CLASSES
      </button>
      <button class="category-btn">
        <img src="/icons/outdoor.svg" alt="Outdoor Yoga" />
        OUTDOOR YOGA
      </button>
    </div>

    <div class="yoga-content">
      <div class="yoga-image"></div>
      <div class="yoga-info">
        <h3><img src="/icons/yoga-icon.svg" alt="" /> LET’S DO YOGA</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <ul class="yoga-list">
          <li><img src="/icons/star.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><img src="/icons/star.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><img src="/icons/star.svg" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Sezione scelta del piano di pagamento -->
  <section class="choose-plan-services">
  <p class="plan-subtitle">CHOOSE YOUR PLAN</p>
  <h2 class="plan-title">FIND YOUR <span class="highlight">BEST FIT</span></h2>
  <p class="plan-description">
    Choose the plan that suits your lifestyle and commitment level. All plans include access to classes, instructors, and facilities.
  </p>

  <div class="plans">
    <div class="plan-card standard">
      <h3>STANDARD</h3>
      <p class="price">€39 <span>/MO</span></p>
      <ul>
        <li>Limited Training Hours</li>
        <li>No Cancel Anytime</li>
        <li>No Hidden Fees</li>
        <li>No Ancillaries Access</li>
      </ul>
      <button class="btn-disabled">GET STARTED</button>
    </div>

    <div class="plan-card premium">
      <div class="label">POPULAR</div>
      <h3>PREMIUM</h3>
      <p class="price">€59 <span>/MO</span></p>
      <ul>
        <li>Unlimited Training Hours</li>
        <li>Cancel Anytime</li>
        <li>No Hidden Fees</li>
        <li>Ancillaries Access</li>
      </ul>
      <button class="btn-pink">GET STARTED</button>
    </div>
  </div>
</section>

<!-- Sezione delle recensioni degli utenti -->
<section class="testimonials">
  <div class="section-header">
    <p class="services-subtitle">• OUR CUSTOMERS SAY •</p>
    <h2 class="services-title">
      WHAT <span class="highlight">PEOPLE THINK</span>
    </h2>
  </div>

  <div class="testimonial-grid">
    <div class="testimonial-card">
      <p class="quote">“Amazing experience! I feel more centered and at peace every session.”</p>
      <div class="author">
        <img src="/user1.png" alt="User 1" />
        <span>JULIA ROBERTS</span>
      </div>
    </div>
    <div class="testimonial-card">
      <p class="quote">“The teachers are truly professional and compassionate.”</p>
      <div class="author">
        <img src="/user2.png" alt="User 2" />
        <span>MICHAEL KING</span>
      </div>
    </div>
    <div class="testimonial-card">
      <p class="quote">“I love the outdoor sessions and flexibility of the plans. Highly recommended!”</p>
      <div class="author">
        <img src="/user3.png" alt="User 3" />
        <span>LAURA FIELDS</span>
      </div>
    </div>
  </div>
</section>

  <Footer />
</template>

<script setup>
// Qui posso inserire fetch dinamici da Supabase in futuro
</script>

<style scoped>
.services-hero {
  background-color: #e7d5ee;
  padding: 5rem 2rem 3rem;
  text-align: center;
}

.services-subtitle {
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #7e3f98;
  margin-bottom: 1rem;
}

.services-title {
  font-size: 2.5rem;
  font-weight: 300;
  color: #000;
}

.highlight {
  color: #e26aa5;
  font-weight: 500;
}

.breadcrumb {
  margin: 2rem auto;
  text-align: left;
  max-width: 1000px;
  font-size: 0.85rem;
  color: #333;
}

.breadcrumb .current {
  color: #7e3f98;
  font-weight: bold;
  text-decoration: underline;
}

.breadcrumb .dash {
  margin: 0 0.5rem;
  font-weight: bold;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.category-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.category-btn {
  background-color: #f5effa;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  color: #7e3f98;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.category-btn.active {
  background-color: #7e3f98;
  color: white;
  position: relative;
}

.category-btn.active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #7e3f98;
}

.yoga-content {
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: flex-start;
}

.yoga-image {
  width: 300px;
  height: 280px;
  background-color: #ccc;
}

.yoga-info {
  flex: 1;
}

.yoga-info h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #7e3f98;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.yoga-info p {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.yoga-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.yoga-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  color: #333;
}

.choose-plan-services {
  background: #fdf9ff;
  text-align: center;
  padding: 4rem 2rem;
}

.plan-subtitle {
  color: #6c3483;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.plan-title {
  font-size: 2.2rem;
  margin: 1rem 0;
}

.plan-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #777;
}

.plans {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.plan-card {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  position: relative;
  text-align: left;
}

.plan-card h3 {
  font-size: 1.2rem;
  color: #7d3c98;
}

.price {
  font-size: 2rem;
  color: #e24392;
  margin: 1rem 0;
}

.price span {
  font-size: 1rem;
  color: #999;
}

.plan-card ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  color: #555;
}

.plan-card ul li {
  margin-bottom: 0.5rem;
}

.btn-disabled {
  background-color: #eee;
  color: #555;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 1rem;
}

.plan-card.premium {
  background: #9024af;
  color: white;
}

.plan-card.premium ul li {
  color: white;
}

.plan-card.premium .btn-pink {
  background: white;
  color: #9024af;
  cursor: pointer;
}

.label {
  position: absolute;
  top: -12px;
  left: 12px;
  background: #ffccf2;
  color: #9024af;
  padding: 0.25rem 0.75rem;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 12px;
}

.testimonials {
  background-color: #f5e6fa;
  padding: 4rem 2rem;
  text-align: center;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto 0;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.quote {
  font-style: italic;
  color: #555;
  margin-bottom: 1.5rem;
}

.author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-weight: bold;
  color: #9024af;
}

.author img {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  object-fit: cover;
}
</style>