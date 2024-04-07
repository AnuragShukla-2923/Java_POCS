import React from "react";
import ReactDOM from "react-dom";

import FiletoBase64 from "./FiletoBase64";

class FiletoBase64Applicaion extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">React File to Base64 Converter</h1>

        <div className="text-center mt-25">
          <p className="text-center"> Try To Upload Some Image~</p>
          <FiletoBase64 multiple={true} onDone={this.getFiles.bind(this)} />
        </div>

        <div className="text-center">
          {this.state.files.map((file, i) => {
            console.log(file.base64);
            return (
              <img key={i} src={file.base64} height={"200px"} width={"200px"} />
            );
          })}
          {/* <img src="" /> */}
        </div>

        {this.state.files.length != 0 ? (
          <div>
            <h3 className="text-center mt-25">Callback Object</h3>
            <div className="pre-container">
              <pre>{JSON.stringify(this.state.files, null, 2)}</pre>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default FiletoBase64Applicaion;
