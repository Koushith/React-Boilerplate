import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring';

//
//

const Navigation = () => {
  // hook for toggle btn- by defaulut menu should be closed
  const [showMenu, setShowMenu] = useState(false);
  const transitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <nav>
      <span className='text-xl'>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              s
              tyle={props}
              className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              s
              tyle={props}
              className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow'
            >
              <span className='font-bold'>The Menu</span>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </animated.div>
          )
      )}
    </nav>
  );
};

export default Navigation;
