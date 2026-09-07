import { createPortal } from 'react-dom'
import './Error.css'
import Card from './Card.jsx'
import Button from './Button.jsx'

// Three components in one file: the dimmed background, the dialog itself,
// and the Error component that puts both into the page through portals.

// The grey layer over the whole page. Clicking it dismisses the error.
function Backdrop({ onConfirm }) {
  return <div className="backdrop" onClick={onConfirm} />
}

// The dialog box.
function ModalOverlay({ title, message, onConfirm }) {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{title}</h2>
      </header>
      <div className="content">
        <p>{message}</p>
      </div>
      <footer className="footer">
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
}

// createPortal renders the JSX into a DOM node OUTSIDE #root, so the modal
// is not trapped inside the app's markup and cannot be covered by it.
// The React tree is unchanged -- props and events still work normally.
function Error({ title, message, onConfirm }) {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root'),
      )}
    </>
  )
}

export default Error
