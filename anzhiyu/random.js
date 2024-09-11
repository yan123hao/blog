var posts=["2024/09/10/xin/","2024/09/10/hello-world/","2024/09/11/wo-de-bo-ke/","2024/09/11/chebggong/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };