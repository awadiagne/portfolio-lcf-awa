const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.level;
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.progress span')
  .forEach(bar => observer.observe(bar));