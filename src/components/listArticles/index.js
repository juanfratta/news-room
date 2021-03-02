import { fetchArticles } from "../../redux/actions/articlesActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../card";

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

      {articles &&
        articles.map((article) => (
          <Card key={article.news_id} title={article.title} />
        ))}

      {error && <div> ERROR...</div>}
    </div>
  );
};

export default ListArticles;
