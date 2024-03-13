// import React, { useContext, useEffect, useState } from "react";
// import Button from "../Button";

// import sendToServer from "../../fetchScripts/uploadHandler"; // * VK Backend: Connecting an external script
// import { SignedInContext, SignedUpContext } from "../../App";
// import ModalWindow from "../modal/modal";
// import LogInForm from "../modal/LogInForm";
// import SignInForm from "../modal/SignUpForm";
// import Alert from "../Alert";

// // TODO LIST VK:
// // 2. Search "TODO 2" in file

// const FileUploader = ({
//   setIsOpen,
//   handleSignIn,
//   handleSignUp,
//   modalIsOpen,
// }: any) => {

//   const signedIn = useContext(SignedInContext);
//   const signedUp = useContext(SignedUpContext);
//   const [filesUploaded, setFilesUploaded] = useState(false);
//   const [fileUploadMessage, setFileUploadMessage] = useState("");

//   function openModal() {
//     setIsOpen(true);
//   }
//   function closeModal() {
//     setIsOpen(false);
//   }

//   const [files, setFiles] = useState<File[] | null>(null);


//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;

//     const fileList = Array.from(files || []);

//     // console.log(fileList);
//     setFiles(fileList);
//   };

//   useEffect(() => {
//     console.log(files);
//   }, [files]);


//   const calculateCost = async () => {
//     alert('calculateCost');
//   };


//   return (
//     <>
//       {!filesUploaded ? (
//         <>
//           <div className="col-12">
//             <div className="file-upload">
//               <label>
//                 <input
//                   type="file"
//                   name="fileToUpload"
//                   id="fileToUpload"
//                   accept=".doc, .docx, .rtf, .pdf, .odt"
//                   multiple // Add the 'multiple' attribute to enable multiple file selection
//                   onChange={handleFileChange}
//                 />
//                 <span>Choose files</span>
//               </label>
//             </div>
//           </div>

//           <div className="table-scroll">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th colSpan={2}>File details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Name</td>
//                   <td>Size</td>
//                 </tr>
//                 {files !== null ? (
//                   files.map((file, index) => (
//                     <tr key={index}>
//                       <td>
//                         {file.name.length > 40
//                           ? file.name.slice(0, 39) + "…"
//                           : file.name}
//                       </td>
//                       <td>{(file.size / 1024).toFixed(1)} Kbytes</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={2}>No files selected</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           <div>
//             {files !== null && files.length > 0 && (
//               <Button
//                 children="Calculate cost"
//                 color={""}
//                 onClick={calculateCost}
//               />
//             )}
//           </div>
//         </>
//       ) : (
//         <Alert
//           children={fileUploadMessage}
//           onClose={() => {
//             setFilesUploaded(!filesUploaded);
//             // setFiles([]);
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default FileUploader;
import React, { useState } from "react";
import Button from "../Button";
import Alert from "../Alert";

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void; // Функция обратного вызова для передачи списка файлов
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFilesSelected, // Принимаем функцию обратного вызова из вызывающего компонента
}: any) => {
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [fileUploadMessage, setFileUploadMessage] = useState("");
  const [files, setFiles] = useState<File[] | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const fileList = Array.from(files || []);
    setFiles(fileList);

    // Вызываем функцию обратного вызова и передаем ей список файлов
    onFilesSelected(fileList);
  };

  return (
    <>
      {!filesUploaded ? (
        <>
          <div className="col-12">
            <div className="file-upload">
              <label>
                <input
                  type="file"
                  name="fileToUpload"
                  id="fileToUpload"
                  accept=".doc, .docx, .rtf, .pdf, .odt"
                  multiple
                  onChange={handleFileChange}
                />
                <span>Choose files</span>
              </label>
            </div>
          </div>

          <div className="table-scroll">
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={2}>File details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Size</td>
                </tr>
                {files !== null ? (
                  files.map((file, index) => (
                    <tr key={index}>
                      <td>
                        {file.name.length > 40
                          ? file.name.slice(0, 39) + "…"
                          : file.name}
                      </td>
                      <td>{(file.size / 1024).toFixed(1)} Kbytes</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2}>No files selected</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Alert
          children={fileUploadMessage}
          onClose={() => {
            setFilesUploaded(!filesUploaded);
          }}
        />
      )}
    </>
  );
};

export default FileUploader;
