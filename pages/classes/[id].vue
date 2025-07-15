<template>
    <Header />
    <div class="class-detail">
    <!-- Titolo -->
    <section class="class-hero">
      <Backbutton />
      <p class="subtitle">IMPROVE YOURSELF</p>
      <h1 class="title">{{ yogaClass?.title }}</h1>

      <div class="instructor-meta" v-for="teacher in teachers" :key="teacher.id">
        <img class="teacher-thumb" :src="teacher.image_url" :alt="teacher.name + ' ' + teacher.surname" />
        <div class="details">
          <p class="teacher-name">{{ teacher.name }} {{ teacher.surname }}</p>
          <p class="class-date">{{ yogaClass?.date }}</p>
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
      <a href="#classes-top" class="current">{{ yogaClass?.title?.toUpperCase() }}</a>
    </nav>
    </section>

    <!-- Immagini della Classe e Informazioni -->
    <section class="class-info">
      <img class="banner" :src="yogaClass?.image_url" :alt="yogaClass?.tag" />
      <div class="info-block">
        <p><strong>Teachers:</strong> 
          <span v-for="(teacher, index) in teachers" :key="teacher.id">
            {{ teacher.name }} {{ teacher.surname }}<span v-if="index < teachers.length - 1">, </span>
          </span>
        </p>
        <p><strong>Date:</strong> {{ yogaClass?.date }}</p>
        <p><strong>Time:</strong> {{ yogaClass?.time }}</p>
        <button class="btn-pink">{{ yogaClass?.cta }}</button>
      </div>
    </section>

    <!-- Descrizione e Citazione -->
    <section class="class-description">
      <h2>{{ yogaClass?.title }}</h2>
      <p>{{ yogaClass?.description }}</p>
      <blockquote>
        "Yoga changed many mindsets of people completely!"
      </blockquote>

      <h2>Why Join This Class</h2>
      <p>{{ yogaClass?.why_yoga }}</p>

      <div class="video" v-if="yogaClass?.video_url">
        <video controls width="100%">
          <source :src="yogaClass.video_url" type="video/mp4" />
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

      <!-- Lascia un Commento -->
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
const client = useSupabaseClient()
const route = useRoute()

const yogaClass = ref(null)
const teachers = ref([])

onMounted(async () => {
  const { id } = route.params

  // Recupera la classe da Supabase
  const { data, error } = await client
    .from('classes')
    .select('id, title, description, teacher, date, time, type, cta, tag, image_url, video_url, why_yoga, teacher_id')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Errore nel recupero della classe:', error)
  } else {
    yogaClass.value = data
    if (data.teacher_id?.length > 0) {
      const teacherId = data.teacher_id[0]
      const { data: teacherData, error: teacherError } = await client
        .from('teachers')
        .select('id, name, surname, image_url, uuid')
        .in('uuid', data.teacher_id)

      if (!teacherError) {
        teachers.value = teacherData
      } else {
        console.warn('Errore nel recupero insegnante:', teacherError)
      }
    }
  }
})

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