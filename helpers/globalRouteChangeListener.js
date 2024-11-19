import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetPageState } from '@/redux/slices/UserSlice';
import { useRouter } from 'next/router';

const GlobalRouteChangeListener = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      dispatch(resetPageState()); // Reset state for page-specific fields
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [dispatch, router]);

  return null;  // This component doesn't render anything, just the listener
};

export default GlobalRouteChangeListener;
