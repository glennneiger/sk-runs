import React from 'react';
import { navigate } from 'gatsby';

const Runner = ({ name, description, url, fonzip, slug }) => {
  return (
    <div
      onClick={() => navigate(slug)}
      title={name + ' | ' + description}
      className="sk-runner-card"
    >
      <div
        className="sk-runner-card-photo"
        style={{
          backgroundImage: 'url(' + url + ')',
        }}
      />
      <div className="sk-runner-card-context">
        <p className="name">{name}</p>
        <p className="description">{description}</p>
        <p>
          <a href={fonzip} target="_blank">
            Bağış Yap
          </a>
        </p>
      </div>
    </div>
  );
};

export default Runner;
