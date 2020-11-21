<template lang="pug">
    div#app
        div.crypto-content
            div.crypto-bar__navbar
                router-link(to="/", active-class)
                    div.crypto-bar__route-block  
                        img(
                            src="./assets/graph.png"
                        )
                router-link(to="/converter", active-class)
                    div.crypto-bar__route-block 
                        img(
                            src="./assets/crypto-info.png"
                        )
            router-view


</template>

<script lang="ts">

import Vue from "vue"
import { Component,  Ref } from 'vue-property-decorator';




@Component({

})

export default class App extends Vue {
}
</script>

<style lang="sass">

* 
    box-sizing: border-box
    margin: 0
    padding: 0

#app 
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    width: 100%
    height: 100%

html, body
    width: 100%
    height: 100%

.crypto
    &-content
        display: flex
        height: 100%
        &__table
            width: 100%

    &-bar 
        &__navbar 
            height: 100%
            background-color: #F79D6C
            padding-top: 20px
            width: 100px
        &__route
            &-block
                display: flex
                align-items: center
                justify-content: center
                width: 100%
                padding: 10px 0px
                &:hover 
                    background-color: white
                    cursor: pointer

.router-link-exact-active .crypto-bar__route-block 
    background-color: white

</style>

