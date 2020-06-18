import React from 'react';

function Footer({ author }) {
  return (
    <footer className='bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t'>
      &copy; Copyright 2020 || App by {author}
    </footer>
  );
}

export default Footer;
