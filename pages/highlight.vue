<template>
    <Header />
    <div class="class-detail">
    <!-- Titolo -->
    <section class="class-hero">
      <Backbutton />
      <p class="subtitle">IMPROVE YOURSELF</p>
      <h1 class="title">Stretching Yoga</h1>

      <div class="instructor-meta">
        <img class="teacher-thumb" src="/YogaTeacher1.png" alt="Anna Laurent" />
        <div class="details">
          <p class="teacher-name">Anna Laurent</p>
          <p class="class-date">May 12–30, 2025</p>
        </div>
        <div class="social-icons">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>
      </div>
    </section>

    <!-- Breadcrumb -->
     <section class="classes-content">
    <nav class="breadcrumb">
      <NuxtLink to="/" class="breadcrumb-link">HOME</NuxtLink> 
      <span class="dash">–</span>
      <NuxtLink to="/classes" class="breadcrumb-link">OUR CLASSES</NuxtLink> 
      <span class="dash">–</span>
      <NuxtLink to="/classes" class="breadcrumb-link">HIGHLIGHTS</NuxtLink> 
      <span class="dash">–</span>
      <a href="#classes-top" class="current">STRETCHING YOGA</a>
    </nav>
    </section>

    <!-- Informazioni delle Classi -->
    <section class="class-info">
      <img class="banner" src="/stretching.png" alt="Stretching" />
      <div class="info-block">
        <p><strong>Teacher:</strong> Anna Laurent</p>
        <p><strong>Date:</strong> May 12–30, 2025</p>
        <p><strong>Time:</strong> 08:30 AM - 10:00 AM (Mon–Wed)</p>
        <button class="btn-pink">JOIN CLASS</button>
      </div>
    </section>

    <!-- Descrizione & Citazione -->
    <section class="class-description">
      <h2>Improve Your Flexibility</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>
      <blockquote>
        "This yoga session changed my posture and mindset completely!"
      </blockquote>

      <h2>Why Join This Class</h2>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div class="video">
        <video controls width="100%">
          <source src="/videos/stretching-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>

    <!-- Sezione Commenti -->
    <section class="comments">
      <h3>Comments</h3>

      <div class="comment" v-for="(comment, index) in comments" :key="index" :style="{ marginLeft: `${comment.level * 30}px` }">
        <div class="comment-meta">
          <strong>{{ comment.name }}</strong>
          <button class="reply">Reply</button>
        </div>
        <p>{{ comment.text }}</p>
        <span class="date">{{ comment.date }}</span>
      </div>

      <!-- Lascia un commento -->
      <div class="leave-comment">
        <h4>Leave a Comment <span>*</span></h4>
        <p>* Required fields are marked with an asterisk.</p>

        <div class="row">
          <input placeholder="First Name *" />
          <input placeholder="Last Name *" />
        </div>
        <input placeholder="Email *" />
        <textarea placeholder="Comment *"></textarea>
        <button class="btn-pink">Post Comment</button>
      </div>
    </section>
    
  <Footer />
  </div>
</template>

<script setup>
const comments = [
  { name: 'Laura Dover', text: 'Great class, loved the instructor!', date: '2025-05-10 08:45', level: 0 },
  { name: 'Anna Laurent', text: 'Thanks Laura! ❤️', date: '2025-05-10 09:00', level: 1 },
  { name: 'Mark Willie', text: 'Is this suitable for beginners?', date: '2025-05-11 11:15', level: 0 },
  { name: 'Laura Dover', text: 'Yes, very beginner friendly.', date: '2025-05-11 11:45', level: 1 },
  { name: 'Anna Laurent', text: 'Exactly! Come try it! 😊', date: '2025-05-11 12:10', level: 2 },
]
</script>

<style scoped>
.class-detail {
  font-family: Arial, sans-serif;
  color: #4b2e83;
  background: #fff8fc;
}
.subtitle {
  color: #9b59b6;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  letter-spacing: 2px;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #7e3f98;
}
.instructor-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin: 1rem auto;
  flex-wrap: wrap;
}
.teacher-thumb {
  width: 60px;
  border-radius: 50%;
}
.details p {
  margin: 0;
  font-size: 0.9rem;
}
.social-icons i {
  margin: 0 0.3rem;
  color: #7e3f98;
  cursor: pointer;
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
.class-info {
  text-align: center;
  padding: 2rem;
}
.banner {
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
}
.info-block {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;
}
.btn-pink {
  background: #e91e63;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-top: 1rem;
  cursor: pointer;
}
.class-description {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}
.class-description h2 {
  color: #9024af;
  margin-top: 2rem;
}
blockquote {
  font-style: italic;
  color: #777;
  margin: 1.5rem 0;
  border-left: 4px solid #e26aa5;
  padding-left: 1rem;
}
.video {
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
}
.comments {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}
.comment {
  margin-bottom: 1.5rem;
  background: #fafafa;
  padding: 1rem;
  border-radius: 8px;
}
.comment-meta {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #7e3f98;
  margin-bottom: 0.5rem;
}
.reply {
  background: none;
  border: none;
  color: #9024af;
  cursor: pointer;
  font-size: 0.8rem;
}
.date {
  font-size: 0.75rem;
  color: #999;
}
.leave-comment {
  margin-top: 3rem;
}
.leave-comment h4 {
  color: #9024af;
}
.leave-comment span {
  color: red;
}
.leave-comment .row {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.leave-comment input,
.leave-comment textarea {
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem;
}
</style>