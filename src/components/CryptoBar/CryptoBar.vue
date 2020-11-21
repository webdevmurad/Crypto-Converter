<template lang="pug">
    div.crypto-bar__table

</template>

<script lang="ts">

import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})

export default class CryptoBar extends Vue {
    
}

</script>

<style lang="sass">

.crypto
    &-bar
        &__container
            height: 100%
            background-color: #98D6EA
        &__header 
            padding: 30px 10px
            display: flex
            align-items: center
            justify-content: center
            &-title
                font-size: 30px
                color: black
                font-family: 'Big Shoulders Stencil Text'
        &__table 
            -webkit-box-shadow: -6px 0px 4px -5px rgba(34, 60, 80, 0.6)
            -moz-box-shadow: -6px 0px 4px -5px rgba(34, 60, 80, 0.6)
            box-shadow: -6px 0px 4px -5px rgba(34, 60, 80, 0.6)
            height: 90%
            width: 100%
            background: white
        

</style>