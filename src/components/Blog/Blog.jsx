import React from 'react';
import Spinner from '../Spinner/Spinner';
import useFetch from '../../hooks/useFetch';

import './Blog.scss';

const Blog = () => {
  const { data, loading, error } = useFetch('/blogs?populate=*');

  const formatDate = (timestamp) => {
    const createdDate = new Date(timestamp);
    return createdDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTime = (timestamp) => {
    const createdDate = new Date(timestamp);
    return createdDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="blog my-5">
      <div className="container text-dark pt-3 px-2">
        <header className="pt-4 pb-3">
          <h4 className="text-end px-md-5">Blog</h4>
        </header>

        <div className="mb-4">
          {loading && <Spinner />}
          {error && <p>Error: Something went wrong</p>}
          {data && (
            <div className="row">
              {data.map((item) => (
                <div className="blog-card col-6 col-md-4 col-lg-3" key={item.id}>
                  <div className="img-container">
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        item?.attributes?.image?.data?.attributes?.url
                      }
                      alt={item.attributes.Title}
                    />
                  </div>
                  <div className="text">
                    <h6 className="title">{item.attributes.Title}</h6>
                    <p className="creator"><span>Creator:</span> {item.attributes.Creator}</p>
                    <p className="date"><span>Date:</span> {formatDate(item.attributes.createdAt)}</p>
                    <p className="time"><span>Time:</span> {formatTime(item.attributes.createdAt)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
