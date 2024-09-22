import { string } from 'prop-types';

import './HelpBox.css';

// simple comment
// added the another comment
// added the third comment
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
