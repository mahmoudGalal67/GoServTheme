import { useEffect, useRef, useState } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import "../EditSection/EditSection.css";
import { request } from "../utils/Request";

function AddtSection({ setModalShow, modalShow, activeModal }) {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const onCloseModal = () => setModalShow(false);
  const [sectionData, setsectionData] = useState([
    {
      title: { en: "", ar: "" },
      description: { en: "", ar: "" },
      link: "#",
    },
  ]);

  const add = () => {
    setsectionData((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        link: "#",
      },
    ]);
  };

  const deleteSection = (e, i) => {
    setsectionData(sectionData.filter((item, index) => index !== i));
  };

  const handleInputChange = (e, i) => {
    setsectionData((prev) =>
      prev.map((el, index) => {
        if (index == i) {
          return {
            ...el,
            [e.target.name]: { en: e.target.value, ar: e.target.value },
          };
        } else {
          return el;
        }
      })
    );
  };
  const handleFileChange = (e, i) => {
    setsectionData((prev) =>
      prev.map((el, index) => {
        if (index == i) {
          return {
            ...el,
            photo: e.target.files[0],
          };
        } else {
          return el;
        }
      })
    );
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      setloading(true);

      const { data } = await request({
        url: "/api/dashboard/banners",
        method: "post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        // withCredentials: true,
        data: {
          items: [...sectionData],
          name: activeModal.title,
        },
        // Authorization: `Bearer ${cookies?.user}`,
      });
      // setloading(false);
      // setsectionData([
      //   {
      //     title: { en: "", ar: "" },
      //     description: { en: "", ar: "" },
      //     link: "#",
      //   },
      // ]);
      // onCloseModal();
      document.location.reload();
    } catch (err) {
      setloading(false);

      seterror(err.response.data.message);
    }
  };

  if (!sectionData) {
    return;
  }

  return (
    <div className="edit-section">
      <div>
        <Modal open={modalShow} onClose={onCloseModal} center>
          <form onSubmit={submit}>
            <div>
              {" "}
              <h2>{activeModal?.title}</h2>
            </div>
            {sectionData.map((section, i) => (
              <div className="wrapper" key={i}>
                <h4>
                  {sectionData.length == 1 ? null : (
                    <img
                      style={{ width: "25px", cursor: "pointer" }}
                      src="delete.svg"
                      alt=""
                      onClick={(e) => deleteSection(e, i)}
                    />
                  )}
                  {i + 1} صورة رقم{" "}
                </h4>
                <p>*صورة البنر</p>
                <span>* المقاس المناسب للصورة هو 1108×428 بكسل</span>
                <label htmlFor={`file ${i}`}>
                  {section.photo ? (
                    <img
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                      }}
                      src={URL.createObjectURL(section.photo)}
                    />
                  ) : (
                    <>
                      <img
                        style={{ width: "60px" }}
                        src="/landscape-placeholder-svgrepo-com.svg"
                        alt=""
                      />
                      <span>ارفع صورة (jpg, jpeg, gif, png)</span>
                    </>
                  )}
                </label>
                <input
                  type="file"
                  id={`file ${i}`}
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, i)}
                />
                <input
                  type="text"
                  name="title"
                  placeholder="name"
                  required
                  onChange={(e) => handleInputChange(e, i)}
                  value={section.title.en}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  required
                  onChange={(e) => handleInputChange(e, i)}
                  value={section.description.en}
                />
              </div>
            ))}
            <button className="add" onClick={add}>
              اضافة +
            </button>
            <button className="submit" type="submit" disabled={loading}>
              {loading ? "loading ..." : "حفظ التغيرات"}
            </button>
            {error && <span className="error">{error}</span>}
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default AddtSection;
