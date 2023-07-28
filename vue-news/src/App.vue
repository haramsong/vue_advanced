<template>
  <div id="app">
    <ToolBar></ToolBar>
    <spinner :loading="loading"></spinner>
    <transition name="page">
      <router-view></router-view>
    </transition> 
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue';
import bus from './utils/bus';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    stopSpinner() {
      this.loading = false;
    }
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.stopSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.stopSpinner);
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
