<script>
export default {
  data() {
    return {
      formData: {
        titel: '',
        regisseur: '',
        acteurs: '',
        genre: '',
        score: 0,
        inhoud: '',
        nieuwsbrief: false,
      },
      isFormInvalid: false,
      showErrorMsg: false,
    };
  },
  methods: {
    validateForm() {
      this.isFormInvalid = false;
      this.showErrorMsg = false;

      for (const key in this.formData) {
        if (this.formData.hasOwnProperty(key)) {
          const value = this.formData[key];

          if (key === 'score') {
            if (value < 0 || value > 100) {
              this.isFormInvalid = true;
            }
          } else if (key !== 'nieuwsbrief' && (!value.trim() || value === '')) {
            this.isFormInvalid = true;
          }
        }
      }

      this.showErrorMsg = this.isFormInvalid;
    },
    submitForm() {
      this.validateForm();

      if (!this.isFormInvalid) {
        // Create a submission object with form data and current date
        const submission = {
          ...this.formData,
          submissionDate: new Date(),
        };

        // Provide the submission to the parent component (MoviesToWatch)
        this.$emit('newSubmission', submission);

        // Clear the form data
        this.formData = {
          titel: '',
          regisseur: '',
          acteurs: '',
          genre: '',
          score: 0,
          nieuwsbrief: false,
        };
      }
    },
  },
};
</script>


<template>
  <form @submit.prevent="submitForm">
    <div v-if="showErrorMsg" class="error-message">
      <p>Het formulier is niet volledig</p>
    </div>
    <!-- Gebruik voor een goed visueel resultaat, voor elke formulierveld dat
    je toevoegt het onderstaande element als wrapper. -->
    <div  :class="{'form-control': true, 'invalid': isFormInvalid}">
      <label for="titel" id="titel">Titel</label>
      <input type="text" name="titel" v-model="formData.titel">

      <label for="regisseur" id="regisseur">Regisseur</label>
      <input type="text" name="regisseur" v-model="formData.regisseur">

      <label for="acteurs" id="acteurs">Acteurs</label>
      <input type="text" name="acteurs" v-model="formData.acteurs">

      <label for="genre" id="genre">Selecteer het genre</label>
      <select id="genre" name="genre"  v-model="formData.genre">
        <option >Selecteer een genre</option>
        <option >Komedie</option>
        <option>Actie</option>
        <option>Romantisch</option>
        <option>Ander genre</option>
      </select>

      <label for="score" id="score">Score</label>
      <input type="number" name="score" placeholder="0" v-model="formData.score">

      <label for="inhoud" id="inhoud">Korte Inhoud</label>
      <textarea name="inhoud" v-model="formData.inhoud"></textarea>

      <input type="checkbox" id="checkbox"  v-model="formData.nieuwsbrief">
      <label for="checkbox" >Ik wil mij inschrijven voor de nieuwsbrief</label>
      <!-- -->
    </div>

    <button type="submit">Verzenden</button>
  </form>
</template>

<style scoped>
form {
  margin: 2rem 2rem;
  max-width: 50%;
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 1rem 0;
}

label {
  font-weight: bold;
  font-size: 1rem;
}

p {
  padding: 1rem;
  color: white;
  background-color: #ff726f;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #beb7df;
  background-color: #d4f2d2;
}

select {
  width: 100%;
}

input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #aba9bf;
  background-color: #aba9bf;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
}

button:hover,
button:active {
  border-color: #34113f;
  background-color: #34113f;
}

.form-control.invalid input,
.form-control.invalid select,
.form-control.invalid textarea {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}
</style>
