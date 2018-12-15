<div>
  <form className="pure-form pure-form-stacked">
    <label>Event Title</label>
    <input
      value={this.state.title}
      onChange={this.handleTitleChange}
      placeholder="Event Title"
    />
    <label>Event Description</label>
    <textarea
      className="pure-input-1-2"
      placeholder="Description"
      value={this.state.description}
      onChange={this.handleDescriptionChange}
    />
    <label>Event Image</label>
    <input
      id="file"
      type="file"
      accept="image/png, image/jpeg"
      onChange={this.handleImageChange}
    />
    <button
      type="submit"
      className="pure-button pure-button-primary"
      onClick={this.handleButtonClick}
    >
      Submit
    </button>
  </form>
</div>;
<form className="pure-form pure-form-aligned">
  <fieldset>
    <div className="pure-control-group">
      <label htmlFor="title">Event Title:</label>
      <input
        style={this.inputStyle}
        id="title"
        value={this.state.title}
        onChange={this.handleTitleChange}
        placeholder="Event Title"
      />
    </div>

    <div className="pure-control-group">
      <label htmlFor="description">Event Description</label>
      <textarea
        style={this.inputStyle}
        id="description"
        className="pure-input-1-2"
        placeholder="Description"
        value={this.state.description}
        onChange={this.handleDescriptionChange}
      />
    </div>

    <div className="pure-control-group">
      <label htmlFor="file">Event Image</label>
      <input
        id="file"
        type="file"
        accept="image/png, image/jpeg"
        onChange={this.handleImageChange}
      />
    </div>
    <div className="pure-controls">
      <button type="submit" className="pure-button pure-button-primary">
        Submit
      </button>
    </div>
  </fieldset>
</form>;
