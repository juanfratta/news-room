import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "..";

import { fetchArticles } from "../../redux/actions/articlesActions";
import CardArticle from "../cardArticle";
import { ArticlesContainer, Message, MessageContainer } from "./styles";

const ListArticles = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.articles);
  const { endpoint } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch, endpoint]);

  return (
    <>
      {loading && (
        <MessageContainer>
          <Loading />
        </MessageContainer>
      )}

      {articles.length > 0 && (
        <ArticlesContainer>
          {articles.map((article) => (
            <CardArticle
              key={article.news_id}
              title={article.title}
              image={article.img_url}
              media={article.source_name}
              url={article.url}
            />
          ))}{" "}
        </ArticlesContainer>
      )}

      {!loading && !articles.length && (
        <MessageContainer>
          <Message>No hay artículos que coincidan con su búsqueda...</Message>
        </MessageContainer>
      )}

      {error && (
        <MessageContainer>
          <Message>Error</Message>
        </MessageContainer>
      )}
    </>
  );
};

export default ListArticles;
