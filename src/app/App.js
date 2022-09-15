import React from "react";
import axios from "axios";
import Header from "../components/header";
import { newsCategory } from "../news";
import NewsList from "../components/newsList";
import Pagination from "../components/pagination";
import Loading from "../components/loading";
import Lifecycle from "../lifecycle";

const fakeNews = [
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "published date and time",
    source: {
      name: "CNN",
    },
  },
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: "published date and time",
    source: {
      name: "CNN",
    },
  },
];

const URL = "https://jsonplaceholder.typicode.com/users";
axios.get(URL).then((res) => {
  console.log(res.data);
});

const user = {
  name: "Emad Uddin",
  email: "emaduddin@gmail.com",
  username: "Emad",
};
axios.post(URL, user).then((res) => {
  console.log(res);
});

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <div className="d-flex">
              <p className="text-black-50">About {0} results found</p>
              <p className="text-black-50 ms-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={fakeNews} />
            <Pagination />
            <Loading />

            {/*Todo remove this code */}
            <Lifecycle />
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
