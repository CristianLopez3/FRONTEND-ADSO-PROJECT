import { PiTrashFill } from "react-icons/pi";
type DeleteModalProps = {
  handleDeleteModal: () => void;
  onDelete: () => void;
  name: string;
}


const DeleteModal: React.FC<DeleteModalProps> = ({
  handleDeleteModal,
  onDelete,
  name,
}) => {
  return (
    <div className="mx-auto my-4 w-48 text-center">
    <div className="flex justify-center items-center">
      <PiTrashFill size={52} color="red" />
    </div>
    <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
    <p className="text-sm text-gray-500">
      Are you sure want to delete {name}?
    </p>
    <div className="flex gap-4 mt-8">
      <button className="btn btn-danger w-full" onClick={onDelete}>Delete</button>
      <button
        className="btn btn-light w-full"
        onClick={handleDeleteModal}
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default DeleteModal