import { Link } from 'react-router-dom';
import Header from '../../features/Header/Header';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <Header />
      <div className="not-found__title">
        <h1>Ops...404</h1>
        <h3>Look like you're lost</h3>
      </div>
      <div className="not-found__back">
        <p>Sorry, the page you are looking for is not avaible right now.</p>
        <Link to={'/'}>Go to Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
