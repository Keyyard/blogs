import * as React from 'react';
import { useEffect } from 'react';

const CommonNinjaComments = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="commonninja_component pid-a50ed076-a886-4b3b-bc38-b29fa924333a"></div>
    </div>
  );
};

export default CommonNinjaComments;