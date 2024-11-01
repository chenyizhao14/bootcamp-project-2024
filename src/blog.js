var blogs = [
  {
    title: "Shanghai Visit",
    date: "July 29, 2024",
    description: "Visiting family in Shanghai.",
    image: "image/food.jpg",
    imageAlt: "Image of me being a foodie",
    slug: "blogs/shanghai.html",
  },
  {
    title: "Math Minor",
    date: "March, 2024",
    description: "Some classes I'm currently taking, took, and how it's going",
    image: "image/whisperothviolin.png",
    imageAlt: "just working hard",
    slug: "blogs/math.html",
  },
];

// renders blogs dynamically
function renderBlogs(blogs) {
  // get blog container (+ error handling)
  var blogContainer = document.getElementById("blog-container");
  if (!blogContainer) {
    console.error("No blog container found");
    return;
  }

  // append each blog to the blog container
  blogs.forEach(function (blog) {
    // make div and assign it blog-container class
    var blogEntry = document.createElement("div");
    blogEntry.classList.add("blog-entry");

    // title
    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogEntry.appendChild(blogTitle);

    // date
    var blogDate = document.createElement("p");
    blogDate.textContent = blog.date;
    blogEntry.appendChild(blogDate);

    // description
    var blogDesc = document.createElement("p");
    blogDesc.textContent = blog.description;
    blogEntry.appendChild(blogDesc);

    // link wrapper for the image
    var linkWrapper = document.createElement("a");
    linkWrapper.href = blog.slug; // Link directly to the blog page
    linkWrapper.target = "_blank"; // Opens in a new tab (optional)

    // image inside the link
    var blogImg = document.createElement("img");
    blogImg.src = blog.image;
    blogImg.alt = blog.imageAlt;
    blogImg.style.width = "100%"; // Makes image responsive within its container
    blogImg.style.maxWidth = "600px"; // Set a maximum width
    blogImg.style.height = "auto"; // Maintains aspect ratio
    linkWrapper.appendChild(blogImg);

    blogEntry.appendChild(linkWrapper); // Add the linked image to the blog entry

    blogContainer.appendChild(blogEntry); // Append the entire blog entry to the container
  });
}

renderBlogs(blogs);
