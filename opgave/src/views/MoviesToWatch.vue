<script>
import { defineComponent } from "vue";
import MoviesToWatchForm from "@/components/MoviesToWatchForm.vue";
import FormSubmission from "@/components/FormSubmission.vue"

export default defineComponent({
  components: { MoviesToWatchForm, FormSubmission },
  data() {
    return {
      submissions: [], // Array to store submissions
    };
  },
  methods: {
    addSubmission(submission) {
      // Assign a unique id to the submission based on the length of submissions list
      submission.id = this.submissions.length + 1;

      // Add the submission to the submissions list
      this.submissions.push(submission);
    },
  },

});
</script>

<template>
  <section>
    <h1>Watchlist</h1>
    <MoviesToWatchForm @newSubmission="addSubmission"></MoviesToWatchForm>
    <FormSubmission :submissions="submissions" v-if="submissions.length > 0"></FormSubmission></section>
</template>