export default {
  formatDate(time) {
    if (!time) return ''
    let date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()} 
    ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
  }
}