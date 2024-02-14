<template>
    <div>
        <h1>這是前台</h1>
        <nav>
            <RouterLink to="/">首頁</RouterLink> |
            <RouterLink to="/about">關於我</RouterLink> |
            <RouterLink to="/products">產品列表</RouterLink> |
            <RouterLink to="/cart">購物車</RouterLink> |
            <RouterLink to="/login">登入後台</RouterLink>
        </nav>
        <router-view></router-view>
    </div>
</template>
