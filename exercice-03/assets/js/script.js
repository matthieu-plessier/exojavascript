let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
console.log(languages.length)



languages.forEach((item) => {
    alert(`<div>${item} (${index})</div>`);
})

languages.forEach(element => {
    document.write(`${element}`)
});