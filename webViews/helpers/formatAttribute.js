module.exports = (category) => {
  const formatted = category.split(' ').join('-')
  console.log(formatted)
  return formatted
}
