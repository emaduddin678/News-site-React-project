import React from "react";
import axios from "axios";
import Header from "../components/header";
import { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import Loading from "../components/loading";
// import Lifecycle from "../lifecycle";

class App extends React.Component {
  state = {
    news: [],
    category: newsCategory.technology,
  };

  changeCategory = (category) => {
    console.log(category)
    this.setState({ category });
  };

  componentDidMount() {
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`;
    axios
      .get(url)
      .then((response) => {
        this.setState({
          news: response.data.articles,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.category !== this.state.category){
    const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${process.env.REACT_APP_NEWS_API_KEY}&category=${this.state.category}&pageSize=5`;
    axios
      .get(url)
      .then((response) => {
        this.setState({
          news: response.data.articles,
        });
      })
      .catch((e) => {
        console.log(e);
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={this.state.category}
              changeCategory={this.changeCategory}
            />
            <div className="d-flex">
              <p className="text-black-50">About {0} results found</p>
              <p className="text-black-50 ms-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={this.state.news} />
            <Pagination />
            <Loading />

            {/*Todo remove this code */}
            {/* <Lifecycle /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// title
// content
// url
// urlToImage
// publishedAt
// source.name
