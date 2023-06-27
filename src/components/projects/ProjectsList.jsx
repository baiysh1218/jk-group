import React from "react";
// import ProductCard from "./ProductCard";
import "./style/Projects.css";
import search from "../../assets/icons/search.png";
import logo1 from "../../assets/logo/JKLogo1.png";
import logo2 from "../../assets/logo/JKLogo2.png";
import logo3 from "../../assets/logo/JKlogo3.png";

const ProductsList = () => {
  // const products = [
  //   {
  //     name: "Building future-proof bridges with digitalisation",
  //     img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     id: 1,
  //   },
  //   {
  //     name: "Building future-proof bridges with digitalisation",
  //     img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   },
  //   {
  //     name: "Building future-proof bridges with digitalisation",
  //     img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     id: 2,
  //   },
  //   {
  //     name: "Building future-proof bridges with digitalisation",
  //     img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     id: 3,
  //   },
  //   {
  //     name: "Building future-proof bridges with digitalisation",
  //     img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     id: 4,
  //   },
  //   {
  //     name: "Building future-proof bridges with digitalisation",
  //     img: "https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     id: 5,
  //   },
  // ];
  return (
    <div style={{ paddingTop: "120px" }} className="projects_main_wrapper">
      <div className="search_wrapper">
        <form className="search_form">
          <div className="search_icon">
            <input type="text" placeholder="Поиск проекта" />
            <img src={search} alt="" />
          </div>
          <button className="search_button" type="submit">
            Поиск
          </button>
        </form>
      </div>
      <div className="products_wrapper">
        {/* {products?.map(item => (
          <ProductCard item={item} key={item.id} />
        ))} */}

        {/* ! PRODUCTS */}
        <div className="featured-projects-card card">
          <img
            src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
            alt=""
          />
          <div className="card_img_wrapper">
            <img src={logo1} alt="" />
          </div>
          <div className="featured-projects-title-btn">
            <a href="#">Building future-proof bridges with digitalisation</a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="featured-projects-card card">
          <img
            src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
            alt=""
          />
          <div className="card_img_wrapper">
            <img src={logo2} alt="" />
          </div>

          <div className="featured-projects-title-btn">
            <a href="#">Building future-proof bridges with digitalisation</a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="featured-projects-card card">
          <img
            src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
            alt=""
          />
          <div className="card_img_wrapper">
            <img src={logo3} alt="" />
          </div>

          <div className="featured-projects-title-btn">
            <a href="#">Building future-proof bridges with digitalisation</a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="featured-projects-card card">
          <img
            src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
            alt=""
          />
          <div className="card_img_wrapper">
            <img src={logo1} alt="" />
          </div>

          <div className="featured-projects-title-btn">
            <a href="#">Building future-proof bridges with digitalisation</a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* ! PRODUCTS */}
      </div>
      {/* <div className="pagination_list_wrapper"></div> */}
    </div>
  );
};

export default ProductsList;
