import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";
import "./ModalPostagem.css";
import { FormPostagem } from "../formpostagem/FormPostagem";

export const ModalPostagem = () => {
  return (
    <>
      <Popup
        trigger={
          <button
            type="submit"
            className="rounded-full w-full p-4 text-white bg-indigo-400 
                                   hover:bg-indigo-600 py-2
                                   flex justify-center duration-700"
          >
            Nova Postagem
          </button>
        }
        modal
      >
        <FormPostagem />
      </Popup>
    </>
  );
};
