<template>
  <ul>
    <li v-for="submission in submissions" :key="submission.id">
      <h1>Te bekijken film: {{ submission.titel }} - {{submission.score}}</h1>
      <p>Regisseur: {{ submission.regisseur }}</p>
      <p>Acteurs: {{ submission.acteurs }}</p>
      <p>Genre: {{ submission.genre }}</p>
      <p>Korte inhoud: {{ submission.inhoud }}</p>
      <p>Toegevoegd op: {{ submission.submissionDate }}</p>

      <!-- Bind class based on nieuwsbrief value -->
      <p :class="{ 'green-text': submission.nieuwsbrief, 'red-text': !submission.nieuwsbrief }">
        {{ submission.nieuwsbrief ? 'Ingeschreven op de nieuwsbrief' : 'Niet ingeschreven op de nieuwsbrief' }}
      </p>

      <!-- Add more details as needed -->
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    submissions: Array, // Array of submissions
  },
};
</script>

<style scoped>
.green-text {
  color: green;
}

.red-text {
  color: red;
}
</style>