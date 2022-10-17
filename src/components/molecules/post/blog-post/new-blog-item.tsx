const NewBlogItem = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">blog text</label>
      <input type="text" id="text" />
      <button>글 작성</button>
    </form>
  );
};

export default NewBlogItem;
