import * as React from "react";
import { Component } from "react";

export interface QRReaderClassProps {}

export interface QRReaderClassState {
  delay: number;
  result: string;
}

class QRReaderClass extends React.Component<
  QRReaderClassProps,
  QRReaderClassState
> {
  openqr = e => {
    var reader = new FileReader();
    let node = e.target;
    reader.onload = function() {
      node.value = "";
      (window as any).qrcode.callback = function(res) {
        if (res instanceof Error) {
          alert(
            "No QR code found. Please make sure the QR code is within the camera's frame and try again."
          );
        } else {
          node.parentNode.previousElementSibling.value = res;
        }
      };
      (window as any).qrcode.decode(reader.result);
    };
    reader.readAsDataURL(node.files[0]);
  };
  render() {
    const previewStyle = {
      height: 240,
      width: 320
    };
    return (
      <div>
        <input
          type="text"
          size={16}
          placeholder="Tracking Code"
          className="qrcode-text"
        />
        <label className="qrcode-text-btn">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={this.openqr}
            tabIndex={-1}
          />
        </label>
        <input type="button" value="Go" disabled />
      </div>
    );
  }
}

export default QRReaderClass;
