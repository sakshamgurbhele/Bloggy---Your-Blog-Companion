import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState (null)
    const [IsPending, setIsPending] = useState(true);
    const [Error, setError] = useState(null);

    const HandleDelete = (id) => {
        const newblogs = blogs.filter((blogs) => blogs.id !== id);
        setBlogs(newblogs);
    } 
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/logs')
        .then(res => {
            if(!res.ok){
                throw ('Failed to Load the Data! Sorry :9')
            }
            return res.json();
        })
        .then(data => {
            setBlogs(data) 
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err);
            setError(err);
            setIsPending(false);
        })
        }, 1000)
    }, []);

    return ( 
        <div className="home">
             <h1> HomePage</h1>
             {IsPending && <div className="pending23"> Loading . . . :) </div>}
             {Error && <div className="error12"> { Error } </div>}
             {blogs && <BlogList blogs = {blogs} HandleDelete = {HandleDelete}/>}  
             {/* <BlogList blogs = {blogs.filter((blogs) => blogs.author === "mario")} title = "Mario's blogs" HandleDelete = {HandleDelete} /> */}
             {/* <BlogList blogs = {blogs.filter((blogs) => blogs.author === "yoshi")} title = "Yoshi's Blogs" HandleDelete = {HandleDelete} /> */}
        </div>
     );
}
 
export default Home;