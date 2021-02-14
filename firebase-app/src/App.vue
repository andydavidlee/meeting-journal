<template>
  <div id="app">
    <Navigation :user="user" @logout="logout" />
    <router-view
      class="container"
      :user="user"
      :meetings="meetings"
      @logout="logout"
      @addMeeting="addMeeting"
      @deleteMeeting="deleteMeeting"
    />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Firebase from 'firebase'
import db from './db'

export default {
  name: 'app',
  components: {
    Navigation
  },
  data() {
    return {
      user: null,
      meetings: []
    }
  },
  methods: {
    logout() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('login')
        })
    },
    addMeeting(payload) {
      db.collection('users').doc(this.user.uid).collection('meetings').add({
        name: payload,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp()
      })
    },
    deleteMeeting(payload) {
      db.collection('users')
        .doc(this.user.uid)
        .collection('meetings')
        .doc(payload)
        .delete()
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        db.collection('users')
          .doc(this.user.uid)
          .collection('meetings')
          .onSnapshot((snapshot) => {
            const snapData = []
            snapshot.forEach((doc) => {
              snapData.push({
                id: doc.id,
                name: doc.data().name
              })
            })
            this.meetings = snapData.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
                /* eslint-disable-next-line */
              } else {
                return 1
              }
            })
          })
      }
    })
  }
}
</script>

<style lang="scss">
$primary: #05b2dd;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
