import ArticleTitleFormatter from "./ArticleTitleFormatter";
import {
  CardArticleContainer,
  CardArticleFooter,
  CardArticleImage,
  CardArticleMedia,
  CardLinkButton,
} from "./styles";

const CardArticle = ({ title, image, url, media }) => {
  return (
    <div style={{ padding: "20px 0", borderBottom: "1px solid #e1e4e6" }}>
      <CardArticleContainer>
        <CardArticleImage alt={title} src={image} />
        <ArticleTitleFormatter title={title} />
        <CardArticleFooter>
          <CardArticleMedia>{media}</CardArticleMedia>
          <CardLinkButton href={url} target="_blank" rel="noreferrer">
            Leer Más...
          </CardLinkButton>
        </CardArticleFooter>
      </CardArticleContainer>
    </div>
  );
};

export default CardArticle;
