import { useState, useEffect } from "react";
import { FaAllergies, FaEdit, FaTrash } from "react-icons/fa";
import Alert from "./alert";

function App() {
  let [no, setno] = useState(undefined);
  let [name, setName] = useState("");
  let [list, setList] = useState([]);
  let [alert, setAlert] = useState({
    show: false,
    msg: "hello world",
    type: "success",
  });
  let [isEdit, setisEdit] = useState(false);
  let [btn, setBtn] = useState("submit");

  let add = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: true, msg: "please enter value", type: "danger" });
    } else if (isEdit && name) {
      let newList = list.map((item, i) => {
        if (i === no) {
          console.log(name);
          return name;
        } else {
          return item;
        }
      });
      console.log(newList);
      setList(newList);
      setAlert({ show: true, msg: "item edited succesfully", type: "danger" });
      setBtn("submit");
      setisEdit(false);
      setName("");
    } else {
      setList([...list, name]);
      setName("");
    }
  };

  function del(index) {
    let newList = list.filter((item, i) => {
      if (i != index) {
        return item;
      }
    });
    console.log(newList);
    setList(newList);
  }

  function edit(index) {
    setisEdit(true);
    setBtn("edit");
    const specificItem = list.find((item, i) => i == index);
    setName(specificItem);
    setisEdit(true);
    console.log(no);
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  return (
    <section className="section-center">
      <div className="grocery-form">
        {alert.show && <Alert {...alert} remove={showAlert} />}
        <h3>grocery bud</h3>
        <form className="form-control" onSubmit={add}>
          <input
            type="text"
            id=""
            className="grocery"
            placeholder="e.g egg"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {btn}
          </button>
        </form>
        <div className="grocery-container">
          {list.map((item, index) => {
            return (
              <div className="grocery-item">
                <p className="title">{item}</p>
                <div className="btn-container">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setno(index);
                      edit(index);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => del(index)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="clear-btn"
          onClick={() => {
            if (list.length != 0) {
              setList([]);
              setAlert({
                show: true,
                type: "success",
                msg: "list cleared succesfully",
              });
            } else {
              setAlert({
                show: true,
                type: "danger",
                msg: "list is already empty",
              });
            }
          }}
        >
          clear all
        </button>
      </div>
    </section>
  );
}

export default App;
