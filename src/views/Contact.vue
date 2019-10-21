<template>
  <div>
    <section class="py-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.52493029523!2d-0.1382034842295003!3d51.52193117963751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b293a54d98d%3A0xcc673d6af820b665!2s90%20Tottenham%20Court%20Rd%2C%20Bloomsbury%2C%20London%20W1T%204TJ!5e0!3m2!1sen!2suk!4v1571669445934!5m2!1sen!2suk"
        width="100%"
        height="600"
        frameborder="0"
        style="border:0"
        allowfullscreen
      />
    </section>

    <section>
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="([icon, info1, info2], i) in details"
            :key="i"
            cols="12"
            md="3"
          >
            <div class="text-center">
              <v-icon
                size="64"
                class="mb-3"
                v-text="icon"
              />
              <div
                class="mb-2 headline"
                v-text="info1"
              />
              <div v-text="info2" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="grey lighten-3">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Your Name*"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Your Email*"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                outlined
                label="Subject"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                outlined
                label="Your Message"
              />
            </v-col>
            <v-col text-center>
              <v-btn
                :block="$vuetify.breakpoint.smAndDown"
                class="px-5 text-capitalize"
                color="secondary"
                large
              >
                Send
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      details: [
        ['mdi-crosshairs-gps', '90 Tottenham Court Road', 'London, W1T 4TJ'],
        ['mdi-email', 'p.poinet@ucl.ac.uk', 'poinetp@gmail.com'],
        ['mdi-phone', '+44 (0) 7548 037780', '']
      ]
    })
  }
</script>
