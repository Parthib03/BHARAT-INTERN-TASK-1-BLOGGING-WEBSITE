const blogSection = document.querySelector(".blogs-section");

db.collection("blogs")
  .get()
  .then((blogs) => {
    blogs.forEach((blog) => {
      if (blog.id != decodeURI(location.pathname.split("/").pop())) {
        createBlog(blog);
      }
    });
  });

const createBlog = (blog) => {
  let data = blog.data();
  blogSection.innerHTML += `
    <div class="blog-card" style="display: flex; flex-direction: column; border-radius: 10px; overflow: hidden; transition: all 0.4s;"> 
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + "..."}</p>
        <a href="/${
          blog.id
        }" class="publish-btn" style="font-size: 15px; margin-left: auto; border-radius: 5px; margin-bottom: 10px; margin-right: 10px; padding: 10px 20px 10px 20px;"><center>read</center></a>
    </div>
    `;
};
