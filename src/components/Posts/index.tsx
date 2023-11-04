import { useParams, useSearchParams, Outlet } from "react-router-dom";
import "./styles.css";

export const Posts = () => {
  const { id } = useParams();
  // Pegando as query strings
  // http://localhost:5173/posts/10?page=101
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Posts {`Params: ${id}`} {`QS: ${qs.get("page")}`}
      </h1>
      <Outlet />
    </div>
  );
};
