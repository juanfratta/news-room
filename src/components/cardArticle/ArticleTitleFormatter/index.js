import { ArticleTitleH3, ArticleTitleH4, TitleContainer } from "./styles";

const ArticleTitleFormatter = ({ title }) => {
  const titleFormated =
    title.length < 120 ? title : `${title.substr(0, 116)} ...`;

  return (
    <TitleContainer>
      {title.length < 50 ? (
        <ArticleTitleH3>{titleFormated}</ArticleTitleH3>
      ) : (
        <ArticleTitleH4>{titleFormated}</ArticleTitleH4>
      )}
    </TitleContainer>
  );
};

export default ArticleTitleFormatter;
