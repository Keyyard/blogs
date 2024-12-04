import React from 'react';
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";

const Comments: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div className={displayClass}>
      <script src="https://cdn.commoninja.com/sdk/latest/commonninja.js" defer></script>
      <div className="commonninja_component pid-a50ed076-a886-4b3b-bc38-b29fa924333a"></div>
    </div>
  );
};

export default (() => Comments) satisfies QuartzComponentConstructor;