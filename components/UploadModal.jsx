import { useRecoilState } from "recoil"
import { modalState } from "../atom/ModalAtom"
export default function UploadModal() {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
      <h1>Upload Modal</h1>
      {open && <h1>The Modal is Open</h1>}
    </div>
  )
}
