var posts=["2024/09/10/hello-world/","2024/09/10/xin/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };