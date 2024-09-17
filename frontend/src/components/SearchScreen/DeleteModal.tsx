import Modal from "react-bootstrap/esm/Modal";

interface Props {
  isOpen: boolean;
  bookTitle: string;
  deleteBook: () => void;
  toggleModal: () => void;
}

function DeleteModal(props: Props) {
  return (
    <>
      <Modal show={props.isOpen} onHide={props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-3 w-100 text-center">
            Delete "{props.bookTitle}"
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={``}>
          <div className="text-center fs-6">
            Are you sure you want to delete "{props.bookTitle}"". This is your
            last chance to abort deletion. Click delete if you are sure you want
            to delete the selected book.
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              props.deleteBook();
            }}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
