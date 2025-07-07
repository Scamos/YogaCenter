<template>
  <NuxtPage />
  <head>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-dS2n+zT1ZOnWEmTVWS6DGD3VdRNN7tv2NSz9BQ3sRXJxfq63N6tDjvDx+O8jV3ovS4x8R5tp6EFSs7ZzU3h3gQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  </head>
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
</template>

<script setup>
const client = useSupabaseClient()
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
</script>