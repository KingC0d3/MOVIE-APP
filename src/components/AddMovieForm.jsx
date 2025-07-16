import { useState } from 'react';

function AddMovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.posterURL && formData.rating) {
      onAddMovie({
        ...formData,
        rating: parseFloat(formData.rating),
        id: Date.now() // Simple ID generation
      });
      setFormData({ title: '', description: '', posterURL: '', rating: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <h3>Add New Movie</h3>
      <input
        type="text"
        name="title"
        placeholder="Movie title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Movie description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="posterURL"
        placeholder="Poster URL"
        value={formData.posterURL}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-10)"
        min="1"
        max="10"
        step="0.1"
        value={formData.rating}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;