import React, { useState, useEffect } from 'react';
import Bookmark from '../../components/Bookmark';

import api from '../../services/api';

import { Title, Form, URLList } from './styles';

const Dashboard: React.FC = () => {
  const [urls, setUrls] = useState<IBookmark[]>([]);

  useEffect(() => {
    api
      .get<IBookmark[]>('urls')
      .then(response => {
        const fetchedUrls = response.data;
        setUrls(fetchedUrls);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <Title>URL Manager</Title>

      <Form>
        <input placeholder="Buscar URL" />
        <button type="button">Pesquisar</button>
      </Form>

      <URLList>
        {urls.map(url => (
          <Bookmark
            key={url.id}
            address={url.address}
            description={url.description}
          />
        ))}
      </URLList>
    </>
  );
};

export default Dashboard;
