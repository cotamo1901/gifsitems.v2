import PropTypes from 'prop-types'
export const GifItem = ({ title, url }) => {
  console.log(title, url);

  return (
    <>
      <div>
        <img src={url} alt="title" />
        <p>{title}</p>
      </div>
    </>
  );
};


GifItem.propTypes={

  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired

}
/* Tarea
1. Añadir PropTypes
a. ti tle obligatorio
b. url obligatorio
2. Evaluar el snapshot

*/