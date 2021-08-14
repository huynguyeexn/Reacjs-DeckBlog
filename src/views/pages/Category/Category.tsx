import { GUEST_LAYOUT } from "views/layouts/guest";
import { useParams } from "react-router-dom";

export const CATEGORY_PAGE: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <GUEST_LAYOUT>
      <p>Category page {slug}</p>
    </GUEST_LAYOUT>
  );
};
