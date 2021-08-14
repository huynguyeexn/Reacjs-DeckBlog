import LazyLoad from "react-lazyload";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export const CARD = (props: { id: number }) => {
  const height = Math.floor(Math.random() * 10 + 3) * 100;

  return (
    <div className="">
      <div className="relative ">
        <Link to={"/post/" + props.id}>
          <LazyLoad>
            <img
              src={`https://picsum.photos/id/${props.id}/1000/${height}`} // use normal <img> attributes as props
            />
          </LazyLoad>
        </Link>
        <Link
          to={"/post/" + props.id}
          className="absolute px-4 py-2 text-sm font-semibold text-white uppercase font-secondary -left-1 bg-primary bottom-5"
        >
          Technology
        </Link>
      </div>
      <div className="my-4">
        <Link to={"/post/" + props.id}>
          <h3 className="text-2xl font-semibold hover:opacity-70 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing {props.id}.
          </h3>
        </Link>
        <p
          className="text-gray-500 cursor-default line-clamp-2"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          perspiciatis culpa id qui accusantium dicta eaque dolorem accusamus
          autem ipsam ipsa magni molestiae illum, quaerat nisi aut voluptates
          doloribus? Natus."
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          perspiciatis culpa id qui accusantium dicta eaque dolorem accusamus
          autem ipsam ipsa magni molestiae illum, quaerat nisi aut voluptates
          doloribus? Natus.
        </p>
      </div>
    </div>
  );
};
