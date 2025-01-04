import React, { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import client from "../../images/user.svg";

import { request } from "../utils/Request";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { toast } from "react-toastify";

const reviews = [1, 2, 3, 4, 5];

function ProductReviews() {
  const [cookies, setCookie] = useCookies(["user"]);
  const { user } = useContext(AuthContext);

  const [err, setErr] = useState(null);
  const [loading, setloading] = useState(false);

  const [reviewsNumber, setReviewsNumber] = useState(1);
  const [comment, setComment] = useState("");

  const [productReview, setproductReview] = useState([]);

  const { id } = useParams();

  const addReview = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.info("you have to login firist");
      return;
    }
    try {
      setloading(true);
      const { data } = await request({
        url: "api/website/product-review/create",
        method: "post",
        withCredentials: true,
        data: {
          user_id: user.id,
          product_id: Number(id),
          rating: reviewsNumber,
          comment,
        },
        headers: { Authorization: `Bearer ${cookies?.user}` },
      });
      setComment("");
      setReviewsNumber(1);
      setproductReview((prev) => [data.data, ...prev]);
      setloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getproductReview = async () => {
      try {
        const { data } = await request({
          url: `/api/website/product-review/product/${id}`,
        });
        setproductReview(data.data);
      } catch (error) {
        setErr(error.response?.data?.message);
      }
    };
    getproductReview();
  }, [id]);

  return (
    <section>
      <div className="row">
        <div className="comment col-md-4 col-sm-12" style={{ height: "430px" }}>
          <div
            className="text-center mx-4 mt-3 h-auto py-3"
            style={{ backgroundColor: "#F8F8F8" }}
          >
            {reviewsNumber} من 5
            {/* <span>
                <FaStar />
              </span> */}
            <div className="mt-2">
              {reviews.map((review, i) => (
                <span key={i}>
                  {i < reviewsNumber ? (
                    <span>
                      <FaStar
                        style={{ margin: "3px", cursor: "pointer" }}
                        onClick={() => setReviewsNumber(i + 1)}
                      />
                    </span>
                  ) : (
                    <FaRegStar
                      style={{ margin: "3px", cursor: "pointer" }}
                      onClick={() => setReviewsNumber(i + 1)}
                    />
                  )}
                </span>
              ))}
            </div>
            <p className="mt-2" style={{ color: "#546581" }}>
              {reviewsNumber} من 5{" "}
            </p>
          </div>
          <form onSubmit={addReview}>
            <h5 className="mx-4 mt-4">أضف تعليقك </h5>
            <textarea
              cols={56}
              className="add-review h-25 mx-4 p-2 mt-3 rounded rounded-2"
              placeholder=" برجاءأضف تعليقك .."
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              required
            ></textarea>
            <button
              className="btn btn-lg mx-4 mb-5 text-white mt-3"
              type="submit"
            >
              {" "}
              {loading ? "loading ... " : "انشر تعليقك"}
            </button>
          </form>
        </div>
        {/* col-4 */}

        <div className="col-md-8 col-sm-12">
          <div className="user-comment h-auto p-3 d-flex justify-content-between">
            <h6>تعليقات المستخدمين</h6>
            <p> ترتيب حسب: الأحدث</p>
          </div>

          {productReview.map((review) => (
            <>
              <div>
                <div className="d-flex justify-content-between">
                  <div className="mt-4 mx-2">
                    <img
                      src={review.img || client}
                      className="rounded rounded-circle"
                      width={50}
                      height={50}
                      alt=""
                    />
                    <div className="user-info  mt-0">
                      <p> {review.user} </p>
                      <p style={{ color: "#FFC62A" }}>
                        {new Array(review.rating).fill(0).map((rete) => (
                          <FaStar style={{ marginInline: "2px" }} />
                        ))}
                        {new Array(5 - Number(review.rating))
                          .fill(0)
                          .map((rete) => (
                            <FaRegStar
                              style={{ color: "#546581", marginInline: "2px" }}
                            />
                          ))}
                      </p>
                    </div>
                  </div>
                  <div className="date mt-4 fw-medium">
                    <p> 10 / 13 / 2020 </p>
                  </div>
                </div>

                <p className="mx-5 fw-medium" style={{ color: "#49505C" }}>
                  {review.comment}
                </p>
              </div>
              {/* user1 */}

              <hr />
            </>
          ))}

          <button className="btn-more btn btn-lg btn-outline-success mt-4">
            {" "}
            عرض المزيد{" "}
          </button>
        </div>
        {/* col-8 */}
      </div>
      {/* row */}
    </section>
  );
}

export default ProductReviews;
