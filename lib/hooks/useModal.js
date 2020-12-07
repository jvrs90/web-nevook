import { useState } from 'react';

export const useModal = (initialMode = false) => {
  const [isOpened, setIsOpened] = useState(initialMode);
  const toggle = () => setIsOpened(!isOpened);

  if (process.browser) {

    // switch (isOpened) {
    //   case true:
    //     document.body.setAttribute('style', `position: fixed; top: 0px; left: 0; right: 0;`)
    //     break;
    //   case false:
    //     // document.body.setAttribute('style', '');
    //     document.body.removeAttribute('style')
    //     break;
    //   default:
    //     null
    // }

  }


  return [isOpened, setIsOpened, toggle];
}