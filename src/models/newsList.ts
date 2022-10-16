class NewsList {
  id: string;
  title: string;
  desc: string;

  constructor(newsTitle: string, newsDesc: string) {
    this.title = newsTitle;
    this.desc = newsDesc;
    this.id = new Date().toISOString();
  }
}

export default NewsList;
