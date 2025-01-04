import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import "../Section/Sextion.css";
import { request } from "../utils/Request";

function Element({ id, title, setelements }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleDelete = async () => {
    if (!confirm(`are you sure you want to delete ${title} Element`)) {
      return;
    }
    // try {
    //   const { data } = await request({
    //     url: `/api/dashboard/Element/${id}`,
    //     method: "DELETE",
    //   });
    //   setelements((prev) => prev.filter((item) => item.id != id));
    //   document.location.reload();
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <>
      <li
        className="section-element"
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
      >
        <div className="wrapper flex">
          <div className="left">
            <img src="delete.svg" alt="" onClick={handleDelete} />
          </div>
          <div className="right">
            <span>{title}</span>
            <img src="move.svg" alt="" />
          </div>
        </div>
      </li>
    </>
  );
}

export default Element;
