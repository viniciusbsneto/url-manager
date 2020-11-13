import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import { Container } from './styles';

interface BookmarkProps {
  address: string;
  description: string;
}

const Bookmark: React.FC<BookmarkProps> = ({ address, description }) => {
  return (
    <Container href={address} target="_blank" rel="noopener noreferrer">
      <img
        src="https://camo.githubusercontent.com/a49ca127dc3de0c1adbb60a2f8535f631b645c1c/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f616d686f503679516970444f624d6d6344537a44496d65694e68487155777339624f6a367a436c424a4c76506a4750364f306952726e616a326265643958416e6777"
        alt={description}
      />
      <div>
        <strong>{address}</strong>
        <p>{description}</p>
      </div>
      <FiExternalLink size={20} />
    </Container>
  );
};

export default Bookmark;
