import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container d-grid gap-4 mt-5 mb-5 w-50">
      <Button variant="primary" size="lg">
        Справочная информация
      </Button>
      <Button variant="primary" size="lg">
        Статистика
      </Button>
      <Button variant="primary" size="lg">
        Ресурсы
      </Button>
      <Button variant="primary" size="lg" onClick={() => navigate('/deliver')}>
        Планирование поставок
      </Button>
    </div>
  );
}

export default Home;
