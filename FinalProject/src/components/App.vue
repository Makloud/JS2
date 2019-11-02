<template>
    <div id="root">
<!--        <Header />-->
        <Navigation />
        <BreadCrumb />
        <router-view />
        <Footer />
    </div>
</template>

<script>
    import Header from './elements/Header.vue'
    import Footer from './elements/Footer.vue'
    import Navigation from './elements/Navigation.vue'
    import BreadCrumb from './elements/BreadCrumb.vue'

    export default{
        name: 'App',
        components: {
            Header,
            Footer,
            Navigation,
            BreadCrumb,
        }
    }
</script>

<style lang="scss">
    .app{
        background-color: aqua;
    }

</style>