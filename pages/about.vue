<template>
  <div>
    <Header />

    <!-- Sezione principale -->
    <section class="about-hero">
      <Backbutton />
      <p class="about-label">• KNOW ABOUT YOGA <span class="highlight">CENTER</span> •</p>
      <h1 class="about-title">ABOUT US</h1>
    </section>

    <!-- Breadcrumbs e contenuto -->
    <section class="about-content">
      <div class="breadcrumb">
        <NuxtLink to="/" class="home-link">HOME</NuxtLink> <span class="dash">—</span>
        <a href="#about-top" class="current">ABOUT US</a>
      </div>

      <div class="about-main">
        <img src="/public/YogaCenter.png" alt="Yoga Room" class="about-image" />

        <div class="about-text">
          <p class="section-subtitle">• ABOUT OUR MISSION •</p>
          <h2 class="welcome-text">HI, WELCOME TO <span class="highlight">YOGA CENTER</span></h2>
          <p class="mission-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
          </p>

          <div class="about-stats">
            <div class="stat"><img src="/icons/quality.svg" /><p>YOGA ROOMS<br><strong>35</strong></p></div>
            <div class="stat"><img src="/icons/quality.svg" /><p>CLASSES<br><strong>12</strong></p></div>
            <div class="stat"><img src="/icons/quality.svg" /><p>EVENTS<br><strong>20</strong></p></div>
            <div class="stat"><img src="/icons/quality.svg" /><p>TEACHERS<br><strong>38</strong></p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione del Viaggio di Crescita del sito -->
    <section class="growth-journey py-20 text-center bg-[#f9ebf9]">
      <p class="text-sm tracking-wide text-purple-700 mb-2">• ABOUT TIMELINE •</p>
      <h2 class="text-4xl font-light mb-12">
        OUR GROWTH <span class="text-pink-500 font-medium">JOURNEY</span>
      </h2>

      <div class="mb-10">
        <img src="/icons/heart-icon.svg" alt="Heart Icon" class="mx-auto mb-2" />
        <p class="text-lg font-semibold">2018</p>
        <p class="text-purple-700 font-medium">CUSTOMER & QUALITY IMPROVEMENT</p>
        <p class="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
      </div>

      <div class="timeline-line flex justify-between items-center w-[80%] mx-auto mt-12">
        <div class="text-center w-1/3">
          <img src="/icons/calendar-icon.svg" alt="Start Icon" class="mx-auto mb-2" />
          <p class="text-sm">2011</p>
          <p class="font-semibold">OUR JOURNEY START</p>
          <p class="text-xs text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
        </div>

        <div class="w-[2px] h-[1px] bg-gray-300 relative flex-1">
          <div class="w-4 h-4 bg-purple-600 rounded-full absolute left-1/2 top-[-6px] transform -translate-x-1/2"></div>
        </div>

        <div class="text-center w-1/3">
          <img src="/icons/trophy-icon.svg" alt="Glory Icon" class="mx-auto mb-2" />
          <p class="text-sm">2025</p>
          <p class="font-semibold">THE GLORY LASTS</p>
          <p class="text-xs text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
        </div>
      </div>
    </section>

    <!-- Sezione degli Argomenti più Popolari -->
<section class="faq-section">
  <p class="faq-subtitle">• COMMON QUESTIONS •</p>
  <h2 class="faq-title">
    MOST <span class="highlight">POPULAR TOPICS</span>
  </h2>

  <div class="faq-grid">
    <div>
      <FAQItem
        question="What Classes Do You Have?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQItem 
        question="What Types Of Yoga Do You Teach?" 
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQItem 
        question="What Is Meditation?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQItem
        question="How To Learn More About Your Course?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
    <div>
      <FAQItem
        question="What Are The Benefits Of Yoga?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQItem
        question="Can I Have A Meal Before Yoga?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQItem
        question="How Often Should I Practice Yoga?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FAQItem
        question="What Is The Best Time To Do Yoga?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  </div>
</section>

    <Footer />
  </div>
</template>

<script setup>
/* Usando <script setup>, l'importazione di header e footer
avviene automaticamente (file presenti in components/)
grazie all’auto-import di Nuxt 3, quindi si può anche non
scrivere l'import, ma per completezza viene inserito */
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
</script>

<style scoped>
/* SEZIONE PRINCIPALE */
.about-hero {
  background-color: #f2dff7;
  text-align: center;
  padding: 60px 20px;
}
.about-label {
  font-size: 0.9rem;
  color: #7c4dff;
}
.about-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #a000a0;
}

/* BREADCRUMB E CONTENUTO */
.about-content {
  background: white;
  padding: 40px 20px;
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
/*.bold {
  font-weight: bold;
  text-decoration: underline;
}*/
.about-main {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}
.about-image {
  flex: 1;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.about-text {
  flex: 1;
  min-width: 300px;
}
.section-subtitle {
  color: #a379e3;
  font-weight: bold;
}
.welcome-text {
  font-size: 1.8rem;
  margin: 15px 0;
}
.mission-text {
  margin-bottom: 25px;
  color: #555;
}
.about-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
}
.stat {
  display: flex;
  align-items: center;
  gap: 10px;
}
.stat img {
  width: 30px;
  height: 30px;
}

.growth-journey {
  background: #f9ebf9;
  padding: 5rem 2rem;
  text-align: center;
}

.growth-journey h2 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
}

.growth-journey span {
  color: #e91e63;
  font-weight: 500;
}

.timeline-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 3rem auto 0;
}

/*.timeline-line .w-1/3{
  width: 33%;
}*/

.timeline-line .circle {
  width: 16px;
  height: 16px;
  background-color: #8e44ad;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.faq-section {
  background-color: #fff;
  padding: 5rem 2rem;
  text-align: center;
}

.faq-subtitle {
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #7e3f98;
  margin-bottom: 1rem;
}

.faq-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  color: #000;
}

.faq-title .highlight {
  color: #e26aa5;
  font-weight: 500;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
}
</style>
