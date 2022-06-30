import { useRecoilState } from "recoil"
import { modalState } from "../atom/ModalAtom"
import Modal from "react-modal"
import { CameraIcon } from "@heroicons/react/outline"
import { useRef , useState} from "react";

export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState);
    const [selectedFile, setSelectedFile] = useState(null);
    function addImageToPost(e) {
        const reader = new FileReader();
        if(e.target.files[0])
        {
            reader.readAsDataURL(e.target.files[0]);    
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }

    }

    const filePickerRef = useRef(null);
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && (
        <Modal 
        className="mx-w-lg w-[30%] p-6 h-[400px] absolute top-40 left-[50%] translate-x-[-50%] bg-white  border-2 rounded-md shadow-md" 
        isOpen={open}
        onRequestClose={()=>{setOpen(false); setSelectedFile(null)}}>
           <div className=" flex flex-col justify-center items-center h-[100%] ">
            {selectedFile ? (

                <img onClick={()=>setSelectedFile(null)} src={selectedFile} alt="selected file" className="w-auto max-h-[200px] object-cover cursor-pointer " />
            ):
            (
                <CameraIcon onClick={()=>filePickerRef.current.click()} className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500 " />
            )}
          
           <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
           <input type="text" maxLength="150" placeholder="Please enter your Caption" className="m-4 border-none text-center w-full focus:ring-1" />
           <button disabled className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disable:cursor-not-allowed disable:hover:brightness-100 " >Upload Post</button>
           </div>
        </Modal>
      )}
    </div>
  )
}
