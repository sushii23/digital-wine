
const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const maker = document.querySelector('#project-maker').value.trim();
  const grape = document.querySelector('#project-grape').value.trim();
  const vintage_date = document.querySelector('#project-vintage').value.trim();
  const abv = document.querySelector('#project-abv').value.trim();
  const rating = document.querySelector('#project-rating').value.trim();

  if (name && maker && rating && grape && vintage_date && abv) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, maker, grape, vintage_date, abv, rating }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document.querySelector('.project-list').addEventListener('click', delButtonHandler);
