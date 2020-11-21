<template lang="pug">
    div.crypto-bar__navbar
        div.crypto-bar__route-block  
            img(
                src="../../assets/graph.png"
            )
        div.crypto-bar__route-block 
            img(
                src="../../assets/crypto-info.png"
            )

</template>

<script lang="ts">

import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({})

export default class CryptoNav extends Vue {
    
}

</script>

<style lang="sass">

.crypto
    &-bar 
        &__navbar 
            height: 100%
            background-color: #F79D6C
            padding-top: 20px
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
    
</style>