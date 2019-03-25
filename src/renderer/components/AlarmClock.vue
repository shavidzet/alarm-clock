<template>
    <div>
        <h2>{{time}}</h2>
        <input
            v-model="alarmTime"
        />
        <audio
            src="static/rooster.wav"
            ref="alarm"
            loop
        ></audio>
    </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  data () {
    return {
      time: '',
      alarmTime: ''
    }
  },

  beforeMount () {
    this.updateTime()
    setInterval(this.updateTime, 1000)
  },

  methods: {
    updateTime () {
      this.time = format(new Date(), 'HH:mm:ss')
    }
  },

  watch: {
    time (now) {
      if (now === this.alarmTime) {
        this.$refs.alarm.play()
      }
    }
  }
}
</script>