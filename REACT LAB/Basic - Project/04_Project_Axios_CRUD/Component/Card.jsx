import { deleteData } from "../api/crudAPI";

const Card = ({ cardData, data, setData, setEditData }) => {

  // for Delete Data From API
  const handleDelete = async (id) => {
    try {
      const res = await deleteData(id);
      // console.log(res);

      if (res.status === 200) {
        const newUpdatedData = data.filter((curr) => {
          // console.log(curr);
          console.log("deleteData success", id);

          return curr.id != id;
        });
        setData(newUpdatedData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <>
      <div className="col-sm-6 col-md-4 d-flex align-items-stretch">
        <div className="card bg-black text-white shadow-lg border-start border-1">
          <div className="card-header border-0 d-flex justify-content-between align-items-center">
            <span className="fw-bold">{cardData.id}</span>
          </div>

          <div className="card-body">
            <span className=" fw-bold text-capitalize text-secondary text-decoration-underline">
              Title :{" "}
            </span>
            <p className="card-title text-white">{cardData.title}</p>
            <span className="fw-bold text-capitalize text-secondary text-decoration-underline">
              Body :{" "}
            </span>
            <p className="card-text text-wrap">{cardData.body}</p>
          </div>

          <div className="card-footer border-0 bg-transparent d-flex justify-content-start gap-2">
            <button
              className="btn btn-sm btn-success text-black"
              onClick={() => {
                setEditData(cardData);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-sm btn-danger text-black"
              onClick={() => {
                handleDelete(cardData.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
