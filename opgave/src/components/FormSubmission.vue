<template>
  <div>
    <p :class="{ 'green-text': formData.nieuwsbrief, 'red-text': !formData.nieuwsbrief }">
      {{ formData.nieuwsbrief ? 'Ingeschreven op de nieuwsbrief' : 'Niet ingeschreven op de nieuwsbrief' }}
    </p>
    <!-- Andere formulierelementen blijven hetzelfde -->
  </div>
</template>

<style scoped>
/* Andere stijlen blijven hetzelfde */

.green-text {
  color: green;
}

.red-text {
  color: red;
}
</style>