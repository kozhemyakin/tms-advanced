import './App.css';

function NavTag({ text, textColor }) {
  return <div className="nav-tag" style={{ color: textColor }}>{text}</div>
}

export default NavTag;
