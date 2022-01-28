import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState ([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

    const HandleDelete = (id) => {
        const newblogs = blogs.filter((blogs) => blogs.id !== id);
        setBlogs(newblogs);
    } 
    useEffect(() => {
        console.log("use ran Effoect!")
    });

    return ( 
        <div className="home">
             <h1> HomePage</h1>
             <BlogList blogs = {blogs} title={"All Blogs!"} HandleDelete = {HandleDelete}/>  
             <BlogList blogs = {blogs.filter((blogs) => blogs.author === "mario")} title = "Mario's blogs" HandleDelete = {HandleDelete} />
             <BlogList blogs = {blogs.filter((blogs) => blogs.author === "yoshi")} title = "Yoshi's Blogs" HandleDelete = {HandleDelete} />
        </div>
     );
}
 
export default Home;