class blogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;

  constructor(postTitle: string, postContent: string) {
    this.title = postTitle;
    this.content = postContent;
    this.id = new Date().toISOString();
    this.createdAt = new Date().toLocaleString();
  }
}

export default blogPost;
