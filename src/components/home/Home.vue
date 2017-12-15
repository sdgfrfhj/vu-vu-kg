<template>
<div>
    <div class="k-banner">
    <app-banner :listImg="listImg"></app-banner>
    </div>
    <div class="kg-song" ref="wrapper">
    <ul class="song-ul">
        <app-songList v-for="song in songList" :song="song" :key="song.id"></app-songList>
    </ul>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import Banner from './template/Banner.vue'
import Song from './template/Song.vue'
import {songList}  from '../../../static/data/data'
import a from '../../../static/img/home/banner1.png'
import b from '../../../static/img/home/banner2.jpg'
import c from '../../../static/img/home/banner3.jpg'
import d from '../../../static/img/home/banner4.jpg'
import e from '../../../static/img/home/banner5.jpg'

// import { a, b, c, d, e } from 'static/outImg' 
export default {
        data() {
            return {
                listImg: [
                    {url: a},{url: b},{url: c},{url: d},{url: e}
                ],
                songList:songList
            }
        },
        components: {
            'app-banner': Banner,
            'app-songList':Song
        },
        created () {
            this.$nextTick(() => {
                this._initScroll();
            });
        },
        methods: {
            _initScroll () {
                if(!this.songScroll){
                this.songScroll=new BScroll(this.$refs.wrapper,{
                    click:true
                });
            }else{
                this.songScroll.refresh();
            }
        }
    }
};
</script>

