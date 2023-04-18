import css from './NotFound.module.css'

export const NotFound = () => {
  return (
    <div className={css.Box}>
      <h3 className={css.Heading}>404</h3>
      <p className={css.Paragraph}>Sorry, we couldn't find that page</p>
    </div>
  );
};
