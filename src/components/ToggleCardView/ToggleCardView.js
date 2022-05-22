import { FiGrid } from 'react-icons/fi';
import { BsList } from 'react-icons/bs';
import './ToggleCardView.css';
import { useAPI } from '../../Store';

const ToggleCardView = () => {
  const { isGrid, setIsGrid } = useAPI();

  const toggleBtn = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className="toggle__card">
      {isGrid ? <FiGrid onClick={toggleBtn} /> : <BsList onClick={toggleBtn} />}
    </div>
  );
};

export default ToggleCardView;
