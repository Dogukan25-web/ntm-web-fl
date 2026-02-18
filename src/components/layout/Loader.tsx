import React from 'react';
import { useRouter } from 'next/router';
import Wait from '@/common/utils/Wait.util';

function Loader(): React.ReactNode {
  const Router = useRouter();
  const [loader, setLoader] = React.useState({
    inHTML: true,
    isActive: true,
  });

  const HideLoader = async () => {
    await Wait(550);
    setLoader({
      inHTML: true,
      isActive: false,
    });
    await Wait(650);
    setLoader({
      inHTML: false,
      isActive: false,
    });
  };

  const ShowLoader = async () => {
    setLoader({
      inHTML: true,
      isActive: true,
    });
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => ShowLoader());
    Router.events.on('routeChangeComplete', () => HideLoader());
    Router.events.on('routeChangeError', () => HideLoader());

    return () => {
      Router.events.off('routeChangeStart', () => ShowLoader());
      Router.events.off('routeChangeComplete', () => HideLoader());
      Router.events.off('routeChangeError', () => HideLoader());
    };
  }, []);

  React.useEffect(() => {
    HideLoader();
  }, []);

  return (
    (loader.inHTML && (
      <div
        style={{
          transition: loader.isActive ? 'none' : 'all 0.6s',
        }}
        className={` ${loader.isActive ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 z-999999! flex h-full w-full items-center justify-center bg-black`}
      />
    )) ||
    null
  );
}

export default Loader;
