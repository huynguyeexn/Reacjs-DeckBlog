import { CARD } from "components/Card/Card";
import Masonry from "react-masonry-css";
import { GUEST_LAYOUT } from "views/layouts/guest";

export const HOME_PAGE = () => {
  return (
    <GUEST_LAYOUT>
      <Masonry
        breakpointCols={{ 640: 1, 768: 2, 1024: 3, default: 3 }}
        className="flex w-auto -m-4"
        columnClassName=" p-4"
      >
        {[...Array(12)].map((x, i) => (
          <CARD id={i} key={i} />
        ))}
      </Masonry>
    </GUEST_LAYOUT>
  );
};
