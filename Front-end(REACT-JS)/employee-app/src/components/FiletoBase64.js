// const FiletoBase64 = () => {
// const getBase64 = (event) => {
//   let document = "";
//   let reader = new FileReader();
//   reader.readAsDataURL(event.target.files[0]);
//   reader.onload = function () {
//     document = reader.result;
//   };
//   reader.onerror = function (error) {
//     console.log("Error: ", error);
//   };
//   console.log(document);
//   return document;
// };
// return (
//   <>
//     <div>
//       <label>Select a file</label>
//       <input type="file" onClick={(event) => getBase64(event)}></input>
//     </div>
//   </>
// );
// };
// export default FiletoBase64;

import { useState } from "react";

// method 2:  perfectly working:
// import React from "react";

// class FiletoBase64 extends React.Component {
//   state = {
//     file: null,
//     base64URL: "",
//   };

//   getBase64 = (file) => {
//     return new Promise((resolve) => {
//       let fileInfo;
//       let baseURL = "";
//       // Make new FileReader
//       let reader = new FileReader();

//       // Convert the file to base64 text
//       reader.readAsDataURL(file);

//       // on reader load somthing...
//       reader.onload = () => {
//         // Make a fileInfo Object
//         console.log("Called", reader);
//         baseURL = reader.result;
//         console.log(baseURL);
//         resolve(baseURL);
//       };
//       // console.log(fileInfo);
//       let stringFile = fileInfo;
//       console.log(fileInfo);
//     });
//   };

//   handleFileInputChange = (e) => {
//     // console.log(e.target.files[0]);
//     let { file } = this.state;

//     file = e.target.files[0];

//     this.getBase64(file)
//       .then((result) => {
//         file["base64"] = result;
//         // console.log("File Is", file);
//         this.setState({
//           base64URL: result,
//           file,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     this.setState({
//       file: e.target.files[0],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input type="file" name="file" onChange={this.handleFileInputChange} />
//       </div>
//     );
//   }
// }

// export default FiletoBase64;

// method 3: trying by creating a component:not working

// const FiletoBase64 = () => {
//   const [file, setFile] = useState(null);
//   const [baseUrl, setBaseUrl] = useState("");
//   const [files, setFiles] = useState([]);

//   const getBase64 = (file) => {
//     return new Promise((resolve) => {
//       let fileInfo;
//       let baseURL = "";
//       // Make new FileReader
//       let reader = new FileReader();

//       // Convert the file to base64 text
//       if (file) {
//         reader.readAsDataURL(file);
//       }

//       // on reader load somthing...
//       reader.onload = () => {
//         // Make a fileInfo Object
//         console.log("Called", reader);
//         baseURL = reader.result;
//         console.log(baseURL);
//         resolve(baseURL);
//       };
//       console.log(fileInfo);
//     });
//   };

//   const handleFileChange = (event) => {
//     // console.log(e.target.files[0]);
//     // let { file } = this.state;
//     let { file } = [...files];

//     file = event.target.files[0];

//     getBase64(file)
//       .then((result) => {
//         file["base64"] = result;
//         // console.log("File Is", file);
//         // this.setState({
//         //   base64URL: result,
//         //   file,
//         // });
//         setBaseUrl(result);
//         setFile(file);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // this.setState({
//     //   file: event.target.files[0],
//     // });
//     setFile({
//       file: event.target.files[0],
//     });
//   };
//   return (
//     <>
//       <div>
//         <label>Select a file</label>
//         <input type="file" onClick={(event) => handleFileChange(event)}></input>
//       </div>
//     </>
//   );
// };
// export default FiletoBase64;

// Method 4: not working

// import React from "react";

// export default class FiletoBase64 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       files: [],
//     };
//   }

//   handleChange(e) {
//     // get the files
//     let files = e.target.files;

//     // Process each file
//     var allFiles = [];
//     for (var i = 0; i < files.length; i++) {
//       let file = files[i];

//       // Make new FileReader
//       let reader = new FileReader();

//       // Convert the file to base64 text
//       reader.readAsDataURL(file);

//       // on reader load somthing...
//       reader.onload = () => {
//         // Make a fileInfo Object
//         let fileInfo = {
//           name: file.name,
//           type: file.type,
//           size: Math.round(file.size / 1000) + " kB",
//           base64: reader.result,
//           file: file,
//         };

//         // Push it to the state
//         allFiles.push(fileInfo);

//         // If all files have been proceed
//         if (allFiles.length == files.length) {
//           // Apply Callback function
//           if (this.props.multiple) this.props.onDone(allFiles);
//           else this.props.onDone(allFiles[0]);
//         }
//       }; // reader.onload
//     } // for
//   }

//   render() {
//     return (
//       <input
//         type="file"
//         onChange={this.handleChange.bind(this)}
//         multiple={this.props.multiple}
//       />
//     );
//   }
// }

// FiletoBase64.defaultProps = {
//   multiple: false,
// };

// method 5: trying by using installing some component:perfectly working code
import React from "react";

export default class FiletoBase64 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  handleChange(e) {
    // get the files
    let files = e.target.files;

    // Process each file
    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + " kB",
          base64: reader.result,
          file: file,
        };

        // Push it to the state
        allFiles.push(fileInfo);

        // If all files have been proceed
        if (allFiles.length == files.length) {
          // Apply Callback function
          if (this.props.multiple) this.props.onDone(allFiles);
          else this.props.onDone(allFiles[0]);
        }
      }; // reader.onload
    } // for
  }

  render() {
    return (
      <input
        type="file"
        onChange={this.handleChange.bind(this)}
        multiple={this.props.multiple}
      />
    );
  }
}

FiletoBase64.defaultProps = {
  multiple: false,
};
