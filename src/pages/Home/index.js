import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/index';
import NewsList from '../../components/NewsList/index';
import Pagination from '../../components/Pagination/index';

function Home() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [search, setSearch] = useState('');
  const [currentNews, setCurrentNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(9);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=br&apiKey=${process.env.REACT_APP_API_KEY}`
    ).then(async (responses) => {
      const fetchedNews = await responses.json();
      setNews(fetchedNews.articles);
      setFilteredNews(fetchedNews.articles);
    });
  }, []);

  // Calculates how many pages the Pagination will have
  useEffect(() => {
    let numbers = [];
    for (let i = 1; i <= Math.ceil(filteredNews.length / newsPerPage); i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, [filteredNews, newsPerPage]);

  // Picks which news are gonna be displayed based on the newsPerPage state
  useEffect(() => {
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const newsBeingDisplayed = filteredNews.slice(
      indexOfFirstNews,
      indexOfLastNews
    );
    setCurrentNews(newsBeingDisplayed);
  }, [filteredNews, currentPage, newsPerPage]);

  function handleSearch(e) {
    const searchedWord = e.currentTarget.value;
    setSearch(searchedWord);
    if (searchedWord === '') {
      setFilteredNews(news);
    } else {
      const searchedNews = news.filter((article) =>
        article.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredNews(searchedNews);
    }
    setCurrentPage(1);
  }

  if (!news) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      <NewsList newsList={currentNews} />
      <Pagination
        pageNumbers={pageNumbers}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;
