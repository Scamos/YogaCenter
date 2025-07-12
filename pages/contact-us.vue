<template>
  <div class="contact-page">
    <Header />
    <!-- Hero Section -->
    <section class="contact-hero">
      <Backbutton />
      <p class="subtitle">• MEET US •</p>
      <h1 class="title">CONTACT <span class="highlight">US</span></h1>
    </section>

    <!-- Breadcrumb -->
     <section class="classes-content">
    <nav class="breadcrumb">
      <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink>
      <span class="dash">–</span>
      <a href="#classes-top" class="current">CONTACT US</a>
    </nav>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="contact-left">
        <div class="placeholder-image"></div>
        <div class="contact-info">
          <div class="info-block">
            <i class="fas fa-phone-alt"></i>
            <div>
              <p class="label">PHONE</p>
              <p>+0123456789</p>
            </div>
          </div>
          <div class="info-block">
            <i class="fas fa-envelope"></i>
            <div>
              <p class="label">EMAIL</p>
              <p>info@yogacenter</p>
            </div>
          </div>
          <div class="info-block">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <p class="label">ADDRESS</p>
              <p>401 Broadway, 24th Floor, New York, 10013</p>
            </div>
          </div>
          <div class="info-block">
            <i class="fas fa-headset"></i>
            <div>
              <p class="label">SUPPORT</p>
              <p>info@yogacenter</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-right">
        <p class="subtitle">• LET’S HAVE A TALK •</p>
        <h2 class="contact-title">GET IN <span class="highlight">TOUCH</span> WITH US</h2>

        <form @submit.prevent="submitForm">
          <div class="row">
            <input type="text" placeholder="FIRST NAME" v-model="form.firstName" required />
            <input type="text" placeholder="LAST NAME" v-model="form.lastName" required />
          </div>
          <div class="row">
            <input type="text" placeholder="PHONE NUMBER" v-model="form.phone" />
            <input type="email" placeholder="EMAIL" v-model="form.email" required />
          </div>
          <textarea rows="5" placeholder="MESSAGE" v-model="form.message" required></textarea>
          <button type="submit" class="btn-send">SEND A MESSAGE</button>
        </form>
      </div>
    </section>

    <Footer />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
})

function submitForm() {
  console.log('Form Submitted:', form.value)
  alert('Message sent successfully!')
}
</script>

<style scoped>
.contact-page {
  font-family: 'Arial', sans-serif;
  color: #4b2e83;
}

/* Hero */
.contact-hero {
  background: #ecdaf6;
  text-align: center;
  padding: 4rem 2rem 2rem;
}

.contact-hero .subtitle {
  color: #7e57c2;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 0.9rem;
}

.contact-hero .title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
}

.highlight {
  color: #e24392;
}

/* Breadcrumb */
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

/* Content Grid */
.contact-content {
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 2rem;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-left,
.contact-right {
  flex: 1 1 400px;
}

/* Left Side */
.placeholder-image {
  background-color: #ccc;
  width: 100%;
  height: 250px;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.contact-info .info-block {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-block i {
  font-size: 1.4rem;
  color: #9024af;
}

.info-block .label {
  font-weight: bold;
  font-size: 0.85rem;
  color: #999;
}

/* Right Side */
.contact-right .subtitle {
  color: #9024af;
  font-weight: 500;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.contact-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.row {
  display: flex;
  gap: 1rem;
}

.row input {
  flex: 1;
}

input,
textarea {
  border: 1px solid #ddd;
  padding: 0.75rem;
  font-size: 0.9rem;
  border-radius: 4px;
  width: 100%;
}

.btn-send {
  background: none;
  color: #e24392;
  border: none;
  text-align: right;
  font-weight: bold;
  cursor: pointer;
  padding-top: 1rem;
  font-size: 1rem;
  border-bottom: 2px solid #e24392;
  width: fit-content;
  align-self: flex-end;
}

.btn-send:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}
</style>
