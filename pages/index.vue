<template> 
  <div class="homepage">
    <!--
    <div class="min-h-screen bg-slate-900 text-white p-5">
    <h1 class="text-4xl font-bold text.cyan-400">Instruments</h1>
    <form @submit.prevent="createInstrument" class="flex gap-2 mt-3">
      <input type="text" v-model="instrumentEmoji" placeholder="Emoji" class="bg-slate-800 p-2 rounded-md text-white">
      <input type="text" v-model="instrumentName" placeholder="Instrument name" class="bg-slate-800 p-2 rounded-md text-white">
      <button type="submit" class="bg-cyan-500 text-white p-2 rounded-md">Add</button>
    </form>
    <ul class="list-disc ml-5 text-xl mt-4">
      <li v-for="instrument in instruments" :key="instrument.id">{{ instrument?.emoji }} {{ instrument.name }}<Icon name="mdi:trashcan" class="cursor-pointer hover:text-red-500" @click="deleteInstrument(instrument.id)"></Icon></li>
    </ul>
  </div>
  -->
    
    <!-- Header -->
    <Header />

    <!-- Sezione principale -->
    <section class="hero">
      <h1>YOGA <span class="highlight">CENTER</span></h1>
      <div class="hero-buttons">
        <button class="btn-primary">JOIN CLASSES</button>
        <button class="btn-secondary">DISCOVER SERVICES</button>
      </div>
    </section>

    <!-- Sezione delle statistiche -->
    <section class="stats">
      <div class="stat">
        <img src="/icons/quality.svg" alt="Quality Icon" />
        <p><strong>100%</strong><br />QUALITY SERVICES</p>
      </div>
      <div class="stat">
        <img src="/icons/experience.svg" alt="Experience Icon" />
        <p><strong>14</strong><br />YEARS OF EXPERIENCE</p>
      </div>
      <div class="stat">
        <img src="/icons/members.svg" alt="Members Icon" />
        <p><strong>350</strong><br />MEMBERS</p>
      </div>
    </section>

    <!-- Sezione About us -->
    <section class="about">
      <h2>WHO ARE WE</h2>
      <h3><span class="highlight">WE HELP</span> PEOPLE <br />IMPROVE THEMSELVES</h3>
      <p>
        We believe that every person has the capacity to change themselves, and we provide the place, the resources and the support needed to help everyone unlock their potential.
      </p>
      <a href="#" class="contact-link">CONTACT US</a>
    </section>

    <!-- Sezione Introduttiva -->
    <section class="who-we-are py-16 text-center">
      <h2 class="section-heading">WHAT DO WE DO?</h2>
      <p class="section-description">
        We believe that every person has the capacity to change themselves, and we provide the place,
        the resources and the support needed to help everyone unlock their potential.
      </p>
      <NuxtLink to="/about" class="learn-more-btn">
        LEARN MORE
      </NuxtLink>
    </section>

    <!-- Highlights -->
    <section class="highlight-classes py-16">
      <h3 class="section-subtitle">YOGA TRENDS</h3>
      <h2 class="section-title">
        BEST HIGHLIGHT <span>CLASSES</span>
      </h2>

      <div class="class-grid">
        <!-- Carta per una Classe -->
        <div v-for="(card, index) in classCards" :key="index" class="class-card">
          <div class="class-image" :style="{ backgroundImage: `url(${card.image_url})` }">
            <span class="tag">{{ card.tag }}</span>
          </div>
          <div class="class-content">
            <div class="meta">
              <span>Teachers: {{ Array.isArray(card.teacher) ? card.teacher.join(', ') : card.teacher }}</span>
              <span>{{ card.date }}</span>
            </div>
            <h4 class="class-title">{{ card.title }}</h4>
            <div class="cta-container">
              <a href="#" class="cta-link">
                {{ card.cta }}<span class="dot">&#8226;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Sezione Classi-->
    <section class="classes-offered">
    <div class="section-header">
      <p class="subtitle">YOU CAN CHOOSE</p>
      <h2 class="title">OFFERING <span>CLASSES</span></h2>
    </div>
    <div class="grid">
      <div v-for="classItem in classes" :key="classItem.id" class="class-card">
        <div :style="{ backgroundImage: `url(${classItem.image_url})` }" class="image"></div>
        <h3>{{ classItem.title }}</h3>
        <p>{{ classItem.description }}</p>
        <div class="meta">
          <p>{{ classItem.time }}</p>
          <p>{{ classItem.date }}</p>
        </div>
        <a href="#" class="btn-outline">{{ classItem.cta }}</a>
      </div>
      <!-- <div class="class-card">
        <div class="image"></div>
        <h3>BODY BALANCE</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
        <div class="meta">
          <p>02:00 PM - 03:30 PM</p>
          <p>Wednesday - Friday</p>
        </div>
        <a href="#" class="btn-pink">JOIN CLASS</a>
      </div>
      <div class="class-card">
        <div class="image"></div>
        <h3>MEDITATION YOGA</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
        <div class="meta">
          <p>08:30 AM - 10:00 AM</p>
          <p>Friday - Sunday</p>
        </div>
        <a href="#" class="btn-outline">JOIN CLASS</a>
      </div>
      -->
      <div class="class-card">
        <div class="image"></div>
        <h3>LEARN MORE?</h3>
        <p>Discover all the Classes!</p>
        <div class="meta">
          <p>Anytime</p>
          <p>Everyday</p>
        </div>
        <a href="#" class="btn-outline">LEARN MORE</a>
      </div>
    </div>
  </section>

  <!--Sezione Insegnanti-->
  <section class="our-teachers">
    <div class="section-header">
      <p class="subtitle">OUR YOGA TEACHERS</p>
      <h2 class="title">IT’S ALL ABOUT <span>THE PEOPLE</span></h2>
    </div>
    
    <div class="teacher-grid">
      <div v-for="(teacher, index) in teachers.slice(0, 3)" :key="teacher.id" class="teacher-card">
        <img :src="teacher.image_url" :alt="`${teacher.name} ${teacher.surname}`" />
        <h4>{{ teacher.name.toUpperCase() }} {{ teacher.surname.toUpperCase() }}</h4>
        <p>{{ teacher.brief_description }}</p>
        <div class="social-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
      
      <div class="teacher-card discover">
        <img src="/public/YogaTeachers.png" alt="Discover all teachers">
        <h4>DISCOVER ALL TEACHERS</h4>
        <a href="#" class="btn-pink">LEARN MORE</a>
      </div>
    </div>
  </section>

  <!-- Sezione di Scelta del Piano (Servizi Offerti) -->
<section class="choose-plan">
  <p class="plan-subtitle">CHOOSE YOUR PLAN</p>
  <h2 class="plan-title">FIND YOUR <span class="highlight">BEST FIT</span></h2>
  <p class="plan-description">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
  </p>
  <p class="learn-center">Join us in our center! <a href="#">LEARN MORE</a></p>

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

<!-- Footer -->
 <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const client = useSupabaseClient()
const classCards = ref([])
const classes = ref([])
const teachers = ref([])

onMounted(async () => {
  const { data, error } = await client
    .from('highlight_classes')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error(error)
    return
  }

  const topThree = data.filter(c => c.tag?.toLowerCase() !== 'learn more').slice(0, 3)
  const learnMoreCard = data.find(c => c.tag?.toLowerCase() === 'learn more')

  // Combina i primi 3 con la card Learn More, se esiste
  classCards.value = learnMoreCard ? [...topThree, learnMoreCard] : topThree
})

onMounted(async () => {
  const { data, error } = await client
    .from('classes')
    .select('*')
    .order('date', { ascending: true })

  if (error) {
    console.error('Errore nel recupero delle classi:', error)
  } else {
    classes.value = data
  }
})

onMounted(async () => {
  const { data, error } = await client
    .from('teachers')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Errore nel recupero degli insegnanti:', error)
  } else {
    teachers.value = data
  }
})

/*
const instruments = ref([])
const instrumentName = ref('')
const instrumentEmoji = ref('')
const createInstrument = async () => {
  const { data, error } = await client.from('instruments').insert({
    name:instrumentName.value,
    emoji:instrumentEmoji.value
  }).select().single()
  instruments.value.push(data)
  if (error) throw error
  instrumentName.value = ''
  instrumentEmoji.value = ''  
}
const deleteInstrument = async (id) => {
  instruments.value = instruments.value.filter(instrument => instrument.id !== id)
  await client.from('instruments').delete().eq('id', id)
}
onMounted(async () => {
  const { data, error } = await client.from('instruments').select()
  instruments.value = data
})
*/
</script>

<style scoped>
/* CSS */

.homepage {
  font-family: 'Arial', sans-serif;
  color: #4b2e83;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2e5f5;
  padding: 1rem 2rem;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.logo img {
  width: 30px;
  margin-right: 0.5rem;
}

.highlight {
  color: #e24392;
}

.nav-links a {
  margin-left: 1rem;
  color: #4b2e83;
  text-decoration: none;
  font-weight: 500;
}

.hero {
  background: #e9cffe;
  text-align: center;
  padding: 4rem 2rem;
}

.hero h1 {
  font-size: 4rem;
}

.hero-buttons {
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
  margin: 0 1rem;
  padding: 0.75rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background-color: #e24392;
  color: white;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #c13c7e;
}

.btn-secondary {
  background-color: transparent;
  color: #4b2e83;
  border: 1px solid #4b2e83;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #4a2e831e;
}

.stats {
  display: flex;
  justify-content: space-around;
  padding: 3rem 1rem;
  background: #fff;
  text-align: center;
}

.stat img {
  width: 40px;
  margin-bottom: 1rem;
}

.about {
  text-align: center;
  padding: 3rem 2rem;
  background: #fdf8ff;
}

.about h2 {
  font-size: 1.25rem;
  color: #a98cc9;
}

.about h3 {
  font-size: 2rem;
  margin: 1rem 0;
}

.about p {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: #666;
}

.contact-link {
  color: #e24392;
  text-decoration: none;
  font-weight: bold;
}

.who-we-are {
  background-color: #f5e6fa;
}
.section-heading {
  color: #e13e8d;
  font-weight: 500;
  font-size: 1.25rem;
  letter-spacing: 1px;
}
.section-description {
  max-width: 600px;
  margin: 1rem auto;
  color: #555;
  font-size: 1rem;
}
.learn-more-btn {
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background: transparent;
  cursor: pointer;
  border-bottom: 2px solid #e13e8d;
  color: #e13e8d;
  font-weight: 500;
  transition: background-color 0.3s;
}
.learn-more-btn:hover {
  background-color: #a187c17b;
}

.highlight-classes {
  background-color: #fff;   
}
.section-subtitle {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: 500;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.5rem;
}
.section-title span {
  color: #9024af;
}

.class-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1000px;
  margin: 3rem auto 0;
}
.class-card {
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.class-image {
  background-color: #d3d3d3;
  height: 180px;
  position: relative;
}
.tag {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: #9024af;
  color: white;
  font-size: 0.75rem;
  padding: 0.2rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
}
.class-content {
  padding: 1rem;
  flex-grow: 1;
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #888;
}
.class-title {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  color: #222;
}
.cta-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}
.cta-link {
  font-size: 0.85rem;
  color: #e13e8d;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.dot {
  font-size: 1.2rem;
  color: #e13e8d;
  line-height: 0;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}
.subtitle {
  color: #9b59b6;
  font-weight: 500;
}
.title {
  font-size: 2rem;
  color: #7d3c98;
}
.title span {
  color: #e91e63;
}
.grid,
.teacher-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  padding: 1rem;
}
.class-card,
.teacher-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.class-card .image,
.teacher-card img {
  width: 100%;
  height: 160px;
  background: #ccc;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 1rem;
}
.meta {
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
}
.btn-outline,
.btn-pink {
  display: inline-block;
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.85rem;
}
.btn-outline {
  border: 1px solid #ccc;
  color: #666;
  transition: background-color 0.3s;
}
.btn-outline:hover {
  background-color: #ddd;
}
.btn-pink {
  background-color: #e91e63;
  color: #fff;
  transition: background-color 0.3s;
}
.btn-pink:hover {
  background-color: #c3124d;
}
.social-icons {
  margin-top: 0.5rem;
}
.social-icons i {
  margin: 0 0.3rem;
  color: #9b59b6;
  cursor: pointer;
}

.choose-plan {
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
  margin: 0 auto 1rem;
  color: #777;
}

.learn-center {
  font-weight: 500;
  margin-bottom: 2rem;
}

.learn-center a {
  color: #e24392;
  font-weight: bold;
  text-decoration: none;
}

.plans {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
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
  transition: background-color 0.3s;
}

.btn-disabled:hover {
  background-color: #ddd;
}

.plan-card.premium {
  background: #9024af;
  color: white;
}

.plan-card.premium .price,
.plan-card.premium ul li {
  color: white;
}

.plan-card.premium .btn-pink {
  background: white;
  color: #9024af;
  cursor: pointer;
  transition: background-color 0.3s;
}

.plan-card.premium .btn-pink:hover {
  background: #ccc;
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
