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
      <div class="input-group mt-2">
        <input {...props} type="text" class="form-control" placeholder="Book Name" />
        <div class="input-group-append">
          <button {...props} class="btn btn-success" type="button">Search</button>
        </div>
      </div>
    );
}

export default SearchForm;