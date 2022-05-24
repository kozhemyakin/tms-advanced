import React, {useState, useEffect} from 'react';
import axios from "axios";
import Posts from './Posts'
import Pagination from './Pagination';

const URL = 'https://jsonplaceholder.typicode.com/posts';
const LIMIT = 10;

function PageContainer() {
    const [posts, setPost] = useState([]);
    const [page, setPage] = useState(1);

    const loadPosts = async () => {
        const response = await axios.get(`${URL}?_page=${page}&_limit=${LIMIT}`);

        setPost(response.data);
    };

    useEffect(() => {
        loadPosts()
    }, [page])

    return (
        <div>
           <Posts p={posts}/>
           <Pagination setpage={setPage}/>
        </div>
    )
}

export default PageContainer;
