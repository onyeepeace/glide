import React from "react";
import "./App.css";
import DataEditor, {
  DataEditorContainer,
  GridCell,
  GridCellKind,
  GridColumn,
} from "@glideapps/glide-data-grid";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const columns: GridColumn[] = [
    { title: "Number", width: 100 },
    { title: "Square", width: 100 },
  ];

  function getData([col, row]: readonly [number, number]): GridCell {
    let n: number;
    if (col === 0) {
      n = row;
    } else if (col === 1) {
      n = row * row;
    } else {
      throw new Error("This should not happen");
    }
    return {
      kind: GridCellKind.Number,
      data: n,
      displayData: n.toString(),
      allowOverlay: false,
    };
  }
  return (
    <div className="App">
      <DataEditorContainer width={500} height={300}>
        <DataEditor getCellContent={getData} columns={columns} rows={1000} />
      </DataEditorContainer>
      <div id="portal" />
    </div>
  );
}

export default App;

// git remote add origin https://github.com/onyeepeace/glide.git
