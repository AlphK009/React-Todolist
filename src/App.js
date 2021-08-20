import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <div className="header">
          <button className="header-btn main-black-color">Add</button>
          <h1 className="header-title">To do Lists</h1>
          <button className="header-btn main-red-color">Clear</button>
        </div>
        <section className="add">
          <form className="add-form">
            <input type="text" className="add-search" />
            <button className="add-btn main-black-color">ADD</button>
          </form>
        </section>
        <section className="todos">
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
          <div className="todo">
            <span className="todo-text">Learning React</span>
          </div>
        </section>
      </div>
    </div>
  );
}
