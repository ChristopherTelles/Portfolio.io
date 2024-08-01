const observer = new IntersectionObserver(entries => {
    console.log(entries)
})
observer.observe(document.querySelector(".init-hidden"))
