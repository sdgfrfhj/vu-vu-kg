<template>
	<header class="header">
		<div class="logo">
			<span></span>
		</div>
	</header>
</template>

<script>
	export default{
		name:'header'
	}
</script>

<style lang="stylus">
    .header 
        background: #1da0ef
        height: 3.75rem
        width: 100%
        position: fixed
        left: 0
        top: 0
        z-index: 99
       .logo 
        width: 7rem
        height: 100%
        margin: 0 auto
       .logo span 
        display: block
        width: 100%
        height: 100%
        background: url('./files/logo.png') 0 center no-repeat
        background-size: 100%
</style>