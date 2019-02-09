<template>
  <div class="container">
    <div class="card-body">
    <h1 class="my-4 text-center">Request Haircut Appointment</h1>
      <hr style="border:2px solid black">
    <div class="card-body">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email Address:"
                    label-for="exampleInput1"
                    description="Enter Email Address where you will recieve confirmation of your appointment.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="name"
                      required
                      placeholder="Enter Your Name or Name you would like to be reffered to as">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Appointment Date/Time:"
                    label-for="exampleInput3">
        <datetime type="datetime" v-model="datetime12" use12-hour></datetime>
      </b-form-group>
      <button class="btn btn-block btn-primary">Submit</button>
    </b-form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style scoped>
.container {
  height:85vh;
}
.card-body {
  background-color: whitesmoke;
}
.btn-primary {
  background-color:000080;
}
</style>
