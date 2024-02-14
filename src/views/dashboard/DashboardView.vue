<template>
    <div>
        <h1>這是後台</h1>
        <nav>
            <RouterLink to="/admin/products">產品列表</RouterLink> |
            <RouterLink to="/admin/order">訂單列表</RouterLink> |
            <RouterLink to="/">回到前台</RouterLink>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL } = import.meta.env
export default {
  methods: {
    checkAdmin () {
      const url = `${VITE_APP_API_URL}/v2/api/user/check`
      axios
        .post(url)
        .then((response) => {
          console.log(response.data.success)
        })
        .catch((error) => {
          alert(error.response.data.message)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token
    this.checkAdmin()
  }
}
</script>
