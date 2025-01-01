function loadMoreBlogs() {
    // Get all hidden blog items
    const hiddenBlogs = document.querySelectorAll('.blog-item.hidden');

    // Show up to 4 hidden blogs
    for (let i = 0; i < 4 && i < hiddenBlogs.length; i++) {
      hiddenBlogs[i].classList.remove('hidden');
    }

    // If no more hidden blogs, hide the button
    if (document.querySelectorAll('.blog-item.hidden').length === 0) {
      document.querySelector('button').style.display = 'none';
    }
  }