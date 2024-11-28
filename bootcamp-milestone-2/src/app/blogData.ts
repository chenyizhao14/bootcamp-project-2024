export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };
  
  const blogs: Blog[] = [
    {
      title: "Shanghai Visit",
      date: "July 29, 2024",
      description: "Visiting family in Shanghai.",
      image: "image/shanghai.jpg",
      imageAlt: "Image of Shanghai skyline",
      slug: "blogs/shanghai.html",
    },
    {
      title: "Math Minor",
      date: "August 10, 2024",
      description: "A look into the diverse cuisine.",
      image: "image/whisperothviolin.jpg",
      imageAlt: "Chinese cuisine",
      slug: "blogs/math.html",
    },
  ];
  
  // renders blogs dynamically
  export function renderBlogs(blogs: Blog[]) {
    // get blog container (+ error handling)
    const blogContainer = document.getElementById("blog-container");
    if (!blogContainer) {
      console.error("No blog container found");
      return;
    }
  
    // append each blog to the blog container
    blogs.forEach((blog) => {
      // make div and assign it blog-container class
      const blogEntry = document.createElement("div");
      blogEntry.classList.add("blog-entry");
  
      // title
      const blogTitle = document.createElement("h1");
      blogTitle.textContent = blog.title;
      blogEntry.appendChild(blogTitle);
  
      // date
      const blogDate = document.createElement("p");
      blogDate.textContent = blog.date;
      blogEntry.appendChild(blogDate);
  
      // description
      const blogDesc = document.createElement("p");
      blogDesc.textContent = blog.description;
      blogEntry.appendChild(blogDesc);
  
      // image
      const blogImg = document.createElement("img");
      blogImg.src = blog.image;
      blogImg.alt = blog.imageAlt;
      blogImg.style.width = "100%"; // Makes image responsive within its container
      blogImg.style.maxWidth = "600px"; // Set a maximum width
      blogImg.style.height = "auto"; // Maintains aspect ratio
      blogEntry.appendChild(blogImg);
  
      // slug
      const blogSlug = document.createElement("a");
      blogSlug.href = blog.slug;
      blogSlug.textContent = "Character page";
      blogSlug.target = "_blank";
      blogEntry.appendChild(blogSlug);
  
      blogContainer.appendChild(blogEntry);
    });
  }
  
  renderBlogs(blogs);
  