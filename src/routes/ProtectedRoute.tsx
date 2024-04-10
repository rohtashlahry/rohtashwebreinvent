import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const location = useLocation();
  const { userToken }  = useSelector((state: any) => state.api);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userToken) {
        navigate('/sign-in');
    }
  }, [userToken]);

  return userToken;
};

export default ProtectedRoute;
