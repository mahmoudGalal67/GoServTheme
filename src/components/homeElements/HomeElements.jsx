import React, { useLayoutEffect, useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useCookies } from "react-cookie";

import "./HomeElements.css";
import Section from "../Section/Section";
import EditSection from "../EditSection/EditSection";
import AddtSection from "../AddtSection/AddtSection";
import { request } from "../utils/Request";
import { Button } from "react-bootstrap";

function HomeElements({ settoggleSidebar }) {
  const [cookies, setCookie] = useCookies(["user"]);

  const [EditmodalShow, setEditModalShow] = useState(false);
  const [AddmodalShow, setAddModalShow] = useState(false);
  const [sections, setSections] = useState([]);
  const [activeModal, setactiveModal] = useState(null);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, { activationConstraint: { distance: 10 } })
  );

  const getSectionsPos = (id) =>
    sections.findIndex((section) => section.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSections((sections) => {
      const originalPos = getSectionsPos(active.id);
      const newPos = getSectionsPos(over.id);

      return arrayMove(sections, originalPos, newPos);
    });
  };

  const handleMovingSections = async () => {
    try {
      const { data } = await request({
        url: "/api/dashboard/sections/order",
        withCredentials: true,
        Authorization: `Bearer ${cookies?.user}`,
        method: "post",
        data: [...sections],
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    const getSectionsOrder = async () => {
      try {
        const { data } = await request({
          url: "/api/website/sections?lang=en",
        });
        setSections(data);
      } catch (error) {
        console.error("Error fetching brands data:", error);
      }
    };

    getSectionsOrder();
  }, []);

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <ul className="menu-sub home-sections">
          <li className="menu-sub-title">
            <label className="submenu-label back" htmlFor="sub-two">
              عناصر الصفحه الرئيسية
            </label>
            <div className="arrow left">&#8250;</div>
          </li>
          <li className="add-sections section-element">
            <input
              type="checkbox"
              id="sub-sections"
              className="submenu-toggle"
            />
            <label className="submenu-label " htmlFor="sub-sections">
              Add New Section
            </label>
            <ul className="menu-sub home-sections">
              <li className="menu-sub-title">
                <label className="submenu-label back" htmlFor="sub-sections">
                  اضافة سكشن جديد
                </label>
                <div className="arrow left">&#8250;</div>
              </li>
              <li className="add-wrapper-list">
                <div className="add-wrapper-sections">
                  <button
                    onClick={() => {
                      setactiveModal({ title: "banners" });
                      setAddModalShow(true);
                    }}
                  >
                    ADD New Banners
                  </button>
                  <button onClick={() => setactiveModal({ title: "brands" })}>
                    ADD New Brands
                  </button>
                  <button onClick={() => setactiveModal({ title: "banners" })}>
                    ADD New Banners
                  </button>
                  <button onClick={() => setactiveModal({ title: "brands" })}>
                    ADD New Brands
                  </button>
                  <button onClick={() => setactiveModal({ title: "banners" })}>
                    ADD New Banners
                  </button>
                  <button onClick={() => setactiveModal({ title: "brands" })}>
                    ADD New Brands
                  </button>
                </div>
              </li>
            </ul>
          </li>

          <SortableContext
            items={sections}
            strategy={verticalListSortingStrategy}
          >
            {sections.map((el) => (
              <div key={el.id}>
                <Section
                  id={el.id}
                  title={el.name}
                  setModalShow={setEditModalShow}
                  setactiveModal={setactiveModal}
                  settoggleSidebar={settoggleSidebar}
                  setSections={setSections}
                />
              </div>
            ))}
          </SortableContext>
          <li style={{ padding: "12px 16px", height: "auto" }}>
            <Button
              type="submit"
              onClick={handleMovingSections}
              className="submit-button"
              variant="info"
            >
              حفظ التغييرات
            </Button>
          </li>
        </ul>
      </DndContext>
      <EditSection
        setModalShow={setEditModalShow}
        modalShow={EditmodalShow}
        activeModal={activeModal}
      />

      <AddtSection
        setModalShow={setAddModalShow}
        modalShow={AddmodalShow}
        activeModal={activeModal}
      />
    </>
  );
}

export default HomeElements;
