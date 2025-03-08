// Load more posts
/*
const blogGrid = document.querySelector('.blog-grid');
const loadMoreBtn = document.getElementById('load-more');
let visiblePosts = 2;

// Initial hidden posts
document.querySelectorAll('.blog-card').forEach((post, index) => {
  if(index >= visiblePosts) post.style.display = 'none';
});

loadMoreBtn.addEventListener('click', () => {
  const allPosts = document.querySelectorAll('.blog-card');
  const totalPosts = allPosts.length;
  
  visiblePosts += 2;
  
  allPosts.forEach((post, index) => {
    if(index < visiblePosts) post.style.display = 'grid';
  });

  if(visiblePosts >= totalPosts) {
    loadMoreBtn.style.display = 'none';
  }
}); */