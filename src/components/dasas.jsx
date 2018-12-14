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
