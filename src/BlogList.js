
const BlogList = (props) => {
    const blogs = props.blogs;
    const heading = props.title;
    const HandleDelete = props.HandleDelete;

    console.log(props)
    return ( 
        <div className="blog-list">
            <h2>{heading}</h2>
            {blogs.map((blogs) => (
            <div className="blog-preview" key={blogs.id}>
                <h2>{blogs.title}</h2>
                <p>Written by {blogs.author}</p>
                   <button onClick={() => HandleDelete(blogs.id)}>Delete me!</button>
            </div>
        ))}                             
        </div>
     );
}
//AIzaSyB5vtGYBjmhSGMlCVZx9aTVVO-63nQ_ctw
//388eac044faa40c79fa68f79abe534ef
 
export default BlogList;