<template>
  <router-link to="/">Home</router-link>
  <router-link to="/test">test</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },

}
</script>


<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    props:-->
<!--    return {-->
<!--      name: '',-->
<!--      hello: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    refreshHello() {-->
<!--      if (this.name) {-->
<!--        fetch("/api/helloword/" + this.name, { "method": "GET" })-->
<!--          .then(response => response.json())-->
<!--          .then(result => this.hello = result);-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <input type="text" v-model="name">-->
<!--  <button @click="refreshHello">Demander un bonjour !</button>-->
<!--  <h1 v-show="!!hello">{{ hello }}</h1>-->
<!--</template>-->