import React from "react";

// export function Input(props) {
//     return (
//       <div className="form-group">
//         <input className="form-control" {...props} placeholder="Book Name" />
//       </div>
//     );
// }

// export function FormBtn(props) {
//     return (
//       <button {...props} className="btn btn-success">
//         Search
//       </button>
//     );
// }

function SearchForm(props) {
    return (
      <div className="input-group mt-2" style={{ fontSize: 100 }}>
        <input 
          value={props.search}
          onChange={props.handleInputChange} 
          type="text" 
          className="form-control" 
          placeholder="Book Name" 
        />
        <div className="input-group-append">
          <button onClick={props.handleFormSubmit} className="btn btn-success" type="button">Search</button>
        </div>
      </div>
    );
}

export default SearchForm;