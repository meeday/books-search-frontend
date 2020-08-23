import React from "react";

export default function Search({ query, handleInputChange, handleSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Search Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={query}
          placeholder="search for book"
          name="query"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button onClick={handleSubmit} type="submit" className="btn btn-lg btn-primary float-right">
          Search
        </button>
      </div>
    </form>
  );
}
