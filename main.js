function submitPost() {
    // Need to get form values
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;

    // Create a new post element
    var postElement = document.createElement('div');
    postElement.innerHTML = `
    <article>
      <h2>${title}</h2>
      <p>${content}</p>
    </article>
  `;

    // Append the new post to the blog posts section
    var blogPosts = document.getElementById('blog-posts');
    blogPosts.appendChild(postElement);

    // Clear form inputs
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
}