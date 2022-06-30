import { useRecoilState } from "recoil"
import { modalState } from "../atom/ModalAtom"
import Modal from "react-modal"

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && (
        <Modal 
        className="mx-w-lg w-[30%] h-[300px] absolute top-56 left-[50%] translate-x-[-50%] bg-white  border-2 rounded-md shadow-md" 
        isOpen={open}
        onRequestClose={()=>setOpen(false)}>
           <div className=" flex flex-col justify-center items-center h-[100%] ">
           <h1>Upload Modal</h1>
           </div>
        </Modal>
      )}
    </div>
  )
}
