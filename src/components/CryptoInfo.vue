<template lang="pug">
    div.crypto-content__info
        p КриптоИнфо
        div.crypto-content__table
            cryptoTable
        div.crypto-content__bar
            cryptoBar
</template>

<script lang="ts">

import Vue from "vue"
import CryptoBar from '@/components/CryptoBar/CryptoBar.vue';
import CryptoTable from '@/components/CryptoTable/CryptoTable.vue';
import { Component,  Ref } from 'vue-property-decorator';


@Component({
    components: { 
        cryptoTable: CryptoTable,
        cryptoBar: CryptoBar
    }
})

export default class CryptoInfo extends Vue {
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
        &__info 
            height: 100%
            display: flex
        &__bar 
            width: 400px
            background-color: #F79D6C
            display: flex
            justify-content: center
            align-items: center
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


</style>

