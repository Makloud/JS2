<template>
    <div class="breadcrumb">
        <div class="container breadcrumbs_box">
        <div class="breadcrumb_text">
            New Arrivals
        </div>
        <div class="breadcrumb_menu">
            <ul class="breadcrumb_ul">
                <li><a href="index2.html" class="breadcrumb__list">Home / </a></li>
                <li><a href="#" class="breadcrumb__list">Men / </a></li>
                <li><a href="#" class="breadcrumb__list">New arrivals</a></li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        name: 'BreadCrumb',
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; }

    body {
        font-family: "Lato", sans-serif; }

    .container {
        width: 1140px;
        margin: 0 auto; }

    .breadcrumb {
        height: 148px;
        background-color: #e8e8e8; }

    .breadcrumb_text {
        color: #f16d7f;
        font-size: 24px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }

    .breadcrumbs_box {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center; }

    .breadcrumb_ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        color: #636363;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }

    .breadcrumb__list {
        text-decoration: none;
        color: #636363;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-transform: uppercase; }
    .breadcrumb__list:hover {
        color: #f16d7f; }

</style>

