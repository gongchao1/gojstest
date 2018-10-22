<template>
<div id="sample">
    <div>
        <diagram style="border: solid 1px black; width:60%;float:left; height:600px"></diagram>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Diagram from './components/Diagram.vue'

export default {
    name: 'app',
    components: {
        Diagram
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
