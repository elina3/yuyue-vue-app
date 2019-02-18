<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links TEST TEST TEST</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>

   <!-- <week-select @onClickDate="onClickDate"></week-select> -->
   <week-range :init-dates="dateObjs" @onClickDate="onClickDate"></week-range>

  </div>
</template>

<script>
import weekRange from './WeekRange'
export default {
  name: 'HelloWorld',
  components: {
    weekRange
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dateObjs: [
        {date: new Date('2019-2-17')},
        {date: new Date('2019-2-18'), disabled: true},
        {date: new Date('2019-2-19')},
        {date: new Date('2019-2-20')},
        {date: new Date('2019-2-21')},
        {date: new Date('2019-2-22')},
        {date: new Date('2019-2-23')},
        {date: new Date('2019-2-24')},
        {date: new Date('2019-2-25')}
      ]
    }
  },
  methods: {
    onClickDate (date) {
      alert(date)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
