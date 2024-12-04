import React, { useEffect } from 'react';
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";

export default (() => {
  const Comments: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
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
      <div className={displayClass}>
        <div className="commonninja_component pid-a50ed076-a886-4b3b-bc38-b29fa924333a"></div>
      </div>
    );
  };

  return Comments;
}) satisfies QuartzComponentConstructor;