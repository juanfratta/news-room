import { fetchArticles } from "../../redux/actions/articlesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const ListArticles = () => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state) => state.articles);
  const { endpoint } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch, endpoint]);

  return (
    <div>
      {loading && <span>LOAD...</span>}

      {articles && (
        <div>
          {articles.map((article) => (
            <h3 key={article.news_id}>{article.title}</h3>
          ))}
        </div>
      )}

      {error && <div> ERROR...</div>}
    </div>
  );
};

export default ListArticles;
