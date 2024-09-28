import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';

export default function CardWithLink({children, urlLink, className}) {
  const navigate = useNavigate();

  const handleRedirect = (url) => {
    navigate(url); 
  };

  return (
    <Card className={className} onClick={() => handleRedirect(urlLink)}>
      {children}
    </Card>
  );
}
